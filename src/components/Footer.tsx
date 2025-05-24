
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0 text-lg">
            © 2025 Divyansh Pal. All rights reserved.
          </div>
          <div className="flex gap-6">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                <Github className="w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                <Linkedin className="w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                <Mail className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
