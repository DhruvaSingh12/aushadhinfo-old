import { motion } from 'framer-motion';

const AnimatedInfoCard = ({ title, content }: { title: string; content: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="bg-white p-4 rounded-lg shadow-lg text-gray-700"
  >
    <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
    <p>{content}</p>
  </motion.div>
);

export default AnimatedInfoCard;