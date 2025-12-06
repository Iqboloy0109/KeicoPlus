import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Technology() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="heading-2 text-dark mb-4">{t('nav.technology')}</h1>
        <p className="text-gray-500 text-lg">{t('pages.comingSoon')}</p>
      </motion.div>
    </div>
  );
}
