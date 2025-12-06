import { motion } from 'framer-motion';

export default function News() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="heading-2 text-dark mb-4">News</h1>
        <p className="text-gray-500 text-lg">Coming Soon</p>
      </motion.div>
    </div>
  );
}
