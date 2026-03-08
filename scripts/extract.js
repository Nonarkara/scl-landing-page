const fs = require('fs');
const pdf = require('pdf-parse');
const fetch = require('node-fetch');

const batches = [
    {
        batch: 1,
        url: 'https://www.depa.or.th/storage/app/media/file/Announce-SCL-21042565.pdf'
    },
    {
        batch: 2,
        url: 'https://www.depa.or.th/storage/app/media/file-announce/Announcement%20of%20the%20list%20of%20people%20who%20are%20eligible%20to%20attend%20the%20training%20Smart%20City%20Leadership%20Program%20_2_20220816.pdf'
    },
    {
        batch: 3,
        url: 'https://www.depa.or.th/storage/app/media/file-announce/Announcement%20of%20the%20list%20of%20people%20who%20are%20eligible%20to%20attend%20the%20training%20Smart%20City%20Leadership%20Program%20_3_20230426.pdf'
    },
    {
        batch: 4,
        url: 'https://www.depa.or.th/storage/app/media/file/announcement-smart20city20leadership-program4.pdf'
    },
    {
        batch: 5,
        url: 'https://www.depa.or.th/storage/app/media/file/AN_ANNOUUNCE_SCL5_31-7-2.pdf'
    }
];

async function run() {
    const results = [];

    for (const b of batches) {
        console.log(`Fetching batch ${b.batch}...`);
        try {
            const res = await fetch(b.url);
            const buffer = await res.buffer();
            const data = await pdf(buffer);
            results.push({
                batch: b.batch,
                text: data.text
            });
            console.log(`Batch ${b.batch} text length: ${data.text.length}`);
        } catch (e) {
            console.error(`Error with batch ${b.batch}:`, e);
        }
    }

    // Save raw text to see how to parse it
    fs.writeFileSync('raw_alumni.json', JSON.stringify(results, null, 2));
    console.log('Saved to raw_alumni.json');
}

run();
