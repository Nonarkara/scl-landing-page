import { test, expect } from '@playwright/test';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const routes = ['/', '/curriculum', '/methodology', '/faculty', '/alumni', '/gallery', '/sources', '/faq'];

test.beforeEach(async ({ page }) => {
  // Layout checks exercise local markers; inspect the external basemap separately.
  await page.route('https://tile.openstreetmap.org/**', (route) => route.abort());
});

async function preferences(page, language, theme) {
  await page.addInitScript(({ language, theme }) => {
    localStorage.setItem('scl-language', language);
    localStorage.setItem('scl-theme', theme);
  }, { language, theme });
}

async function expectNoOverflow(page) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
}

async function expectAccessible(page) {
  await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
  const violations = await page.evaluate(async () => {
    const result = await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } });
    return result.violations.map(({ id, nodes }) => ({ id, nodes: nodes.map(({ target, failureSummary }) => ({ target, failureSummary })) }));
  });
  expect(violations).toEqual([]);
}

for (const language of ['en', 'th', 'cn']) {
  for (const route of routes) {
    test(`${language} ${route} layout and accessibility in both themes`, async ({ page }, testInfo) => {
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      for (const theme of ['light', 'dark']) {
        await preferences(page, language, theme);
        await page.goto(route);
        await expect(page.locator('main h1')).toHaveCount(1);
        await page.evaluate(() => document.fonts.ready);
        await expect(page.locator('html')).toHaveAttribute('lang', language === 'cn' ? 'zh-CN' : language);
        await expectNoOverflow(page);
        if (route === '/') expect(await page.evaluate(() => scrollY)).toBe(0);

        await expectAccessible(page);
        expect(errors).toEqual([]);
        if (process.env.SCL_SCREENSHOTS) {
          await page.screenshot({ path: testInfo.outputPath(`${language}-${theme}.png`), fullPage: true });
        }
      }
    });
  }
}

test('first visitor, route changes and tab keyboard navigation', async ({ page }) => {
  await preferences(page, 'en', 'light');
  await page.goto('/');
  const heading = page.locator('main h1');
  await expect(heading).toHaveText('Smart CityLeadership');
  expect(await page.evaluate(() => scrollY)).toBe(0);
  const cta = page.locator('.hero-stage .btn-primary');
  expect((await cta.boundingBox()).y).toBeLessThan(700);
  await cta.click();
  await expect(page).toHaveURL(/\/curriculum$/);
  expect(await page.evaluate(() => scrollY)).toBe(0);
  await page.locator('.page-return-link').click();
  const tab = page.getByRole('tab', { name: 'About & History' });
  await tab.focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('tab', { name: 'Curriculum', exact: true })).toBeFocused();
  await expect(page.getByRole('tabpanel')).toContainText('Curriculum');
  await page.goto('/curriculum');
  if (await page.locator('.mobile-toggle').isVisible()) {
    await page.getByRole('button', { name: 'Open menu' }).click();
  }
  await page.getByRole('navigation').getByRole('link', { name: 'Format & Timeline', exact: true }).click();
  await expect(page.getByRole('tab', { name: 'Format & Timeline', exact: true })).toHaveAttribute('aria-selected', 'true');
  expect((await page.locator('.tabs-navigation-wrapper').boundingBox()).y).toBeLessThan(150);
});

test('FAQ works with keyboard and announces search results', async ({ page }) => {
  await preferences(page, 'en', 'light');
  await page.goto('/faq');
  const question = page.locator('.faq-question').first();
  await question.focus();
  await page.keyboard.press('Enter');
  await expect(question).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('.faq-answer').first()).toBeVisible();
  await page.keyboard.press('Space');
  await expect(question).toHaveAttribute('aria-expanded', 'false');
  await page.getByRole('textbox', { name: 'Search questions...' }).fill('zzzzzz');
  await expect(page.locator('.faq-empty')).toBeVisible();
  await expect(page.locator('.faq-results-count')).toContainText('0');
});

test('gallery dialog keeps focus, changes image and restores focus', async ({ page }) => {
  await preferences(page, 'en', 'light');
  await page.goto('/gallery');
  const thumbnail = page.locator('.masonry-item').first();
  await thumbnail.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expectAccessible(page);
  await expect(page.locator('.lightbox-close')).toBeFocused();
  const before = await dialog.locator('img').getAttribute('src');
  await page.keyboard.press('ArrowRight');
  await expect(dialog.locator('img')).not.toHaveAttribute('src', before);
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Tab');
    expect(await page.evaluate(() => document.activeElement.closest('dialog') !== null)).toBe(true);
  }
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
  await expect(thumbnail).toBeFocused();
});

test('confirmed SCL6 directory filters and update dialog', async ({ page }) => {
  await preferences(page, 'en', 'light');
  await page.goto('/alumni');
  await page.locator('.filter-select').first().selectOption('6');
  await expect(page.locator('.alumni-list-item')).toHaveCount(50);
  await page.locator('.alumni-search-input').fill('ปุณณสิน');
  await expect(page.locator('.alumni-list-item')).toHaveCount(1);
  await expect(page.locator('.alumni-list-item')).toContainText('นายปุณณสิน มณีนันทน์');
  const update = page.locator('.alumni-update-btn').first();
  await update.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expectAccessible(page);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(update).toBeFocused();
  await page.locator('.province-data summary').click();
  await expect(page.locator('.province-data tbody tr')).toHaveCount(77);
  await expect(page.locator('.leaflet-control-zoom-in')).toBeVisible();
});

test('phone menu, language selection and Escape focus', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'phone');
  await preferences(page, 'en', 'light');
  await page.goto('/');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(page.locator('#mobile-navigation a').first()).toBeFocused();
  await expectAccessible(page);
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.locator('#mobile-navigation select').selectOption('th');
  await expect(page.locator('html')).toHaveAttribute('lang', 'th');
  await expect(page.locator('#mobile-navigation')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'เปิดเมนู' })).toBeFocused();
});

test('320px reflow and enlarged text on every route', async ({ page }) => {
  await preferences(page, 'en', 'light');
  await page.setViewportSize({ width: 320, height: 900 });
  for (const route of routes) {
    await page.goto(route);
    await expect(page.locator('main h1')).toHaveCount(1);
    await page.evaluate(() => document.fonts.ready);
    await page.addStyleTag({ content: 'html { font-size: 200%; }' });
    await expectNoOverflow(page);
  }
});

test('short viewport keeps update close and form controls reachable', async ({ page }) => {
  await preferences(page, 'en', 'light');
  await page.setViewportSize({ width: 390, height: 360 });
  await page.goto('/alumni');
  await page.locator('.filter-select').first().selectOption('6');
  await page.locator('.alumni-update-btn').first().click();
  const close = page.locator('.update-modal-close');
  await expect(close).toBeFocused();
  expect((await close.boundingBox()).y).toBeGreaterThanOrEqual(0);
  await page.locator('.update-modal-submit').focus();
  const submit = await page.locator('.update-modal-submit').boundingBox();
  expect(submit.y + submit.height).toBeLessThanOrEqual(360);
  await close.click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
});

test('same-page timeline navigation retains keyboard position', async ({ page }) => {
  await preferences(page, 'en', 'light');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  for (let attempt = 0; attempt < 2; attempt++) {
    await page.getByRole('button', { name: 'Open menu' }).click();
    const link = page.getByRole('navigation').getByRole('link', { name: 'Format & Timeline', exact: true });
    await link.focus();
    await page.keyboard.press('Enter');
    await expect(page.getByRole('tab', { name: 'Format & Timeline', exact: true })).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('tabpanel')).toBeFocused();
    expect(await page.evaluate(() => scrollY)).toBeGreaterThan(500);
  }
});

test('gallery focus outline contrasts with the dark overlay', async ({ page }) => {
  await preferences(page, 'en', 'light');
  await page.goto('/gallery');
  await page.locator('.masonry-item').first().click();
  await page.keyboard.press('Tab');
  expect(await page.evaluate(() => getComputedStyle(document.activeElement).outlineColor)).toBe('rgb(255, 255, 255)');
});
