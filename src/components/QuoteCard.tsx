import { motion } from 'framer-motion';
import type { Quote } from '@/types';

interface QuoteCardProps {
  quote: Quote | null;
  isLoading: boolean;
  error?: Error | null;
}

export default function QuoteCard({ quote, isLoading, error }: QuoteCardProps) {
  return (
    <motion.div
      className="quote-container absolute inset-0 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {error ? (
        <motion.div
          className="bg-red-500/50 p-4 rounded-lg text-white text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error.message}
        </motion.div>
      ) : quote ? (
        <div className="text-center text-white max-w-2xl">
          <motion.blockquote
            className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            "{quote.content}"
          </motion.blockquote>
          <motion.cite
            className="text-lg md:text-xl block"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            - {quote.author}
          </motion.cite>
        </div>
      ) : (
        <div className="text-white text-xl">
          {isLoading ? 'Loading quote...' : 'No quote available'}
        </div>
      )}
    </motion.div>
  );
}