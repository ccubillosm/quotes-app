import { motion } from 'framer-motion';

interface GenerateButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

export default function GenerateButton({ onClick, isLoading }: GenerateButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={isLoading}
      className={`
        fixed bottom-8 right-8 
        bg-white dark:bg-gray-800 
        text-black dark:text-white 
        px-6 py-3 
        rounded-full 
        shadow-lg dark:shadow-gray-900/50
        hover:bg-gray-100 dark:hover:bg-gray-700 
        transition-colors
        disabled:opacity-50 
        disabled:cursor-not-allowed
        border border-gray-200 dark:border-gray-600
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isLoading ? 'Loading...' : 'Generate'}
    </motion.button>
  );
}
