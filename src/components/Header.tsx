import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Mail, Clock, Terminal } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home', icon: Home, id: 'home' },
    { name: 'About', href: '#about', icon: User, id: 'about' },
    { name: 'Experience', href: '#experience', icon: Clock, id: 'experience' },
    { name: 'Portfolio', href: '#portfolio', icon: Briefcase, id: 'portfolio' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center"
            >
              <Terminal className="text-white" size={20} />
            </motion.div>
            <span className="text-2xl font-bold">
              <span className="text-white">Palak</span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                .dev
              </span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-400/30"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden relative w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-400/30 flex items-center justify-center text-white"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: isMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 bg-slate-900/90 backdrop-blur-xl rounded-2xl p-4 border border-cyan-500/20"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className={`block py-3 px-4 rounded-xl transition-all duration-200 flex items-center space-x-3 ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
                {activeSection === item.id && (
                  <motion.div
                    className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;