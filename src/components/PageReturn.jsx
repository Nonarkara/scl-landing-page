import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './PageReturn.css';

export default function PageReturn() {
  const { t } = useTranslation();

  return (
    <div className="page-return">
      <Link to="/" className="page-return-link">
        <ArrowLeft size={18} />
        {t('common.backToHome', 'Back to Home')}
      </Link>
    </div>
  );
}
