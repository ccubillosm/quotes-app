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
        bg-white text-black 
        px-6 py-3 
        rounded-full 
        shadow-lg 
        hover:bg-gray-100 
        transition-colors
        disabled:opacity-50 
        disabled:cursor-not-allowed
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isLoading ? 'Loading...' : 'Generate'}
    </motion.button>
  );
}
