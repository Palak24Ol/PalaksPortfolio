import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-purple-500/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="text-purple-400" size={24} />
            <span className="text-2xl font-bold text-white">Portfolio</span>
          </div>
          
          <p className="text-gray-400 mb-4">
            Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block text-red-400"
            >
              <Heart size={16} fill="currentColor" />
            </motion.span>
            {' '}and React
          </p>
          
          <p className="text-gray-500 text-sm">
            © 2025 Palak Jaiswal. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;