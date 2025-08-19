import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, Terminal, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const movingTexts = [
    "Full Stack Developer",
    "Frontend Specialist", 
    "React Developer",
    "UI/UX Designer",
    "Problem Solver"
  ];

  // Toggle cursor every 500ms
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Change text every 3 seconds
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % movingTexts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Hi, I'm{' '}
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Palak
              </motion.span>
            </motion.h1>
            
            {/* Moving Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-gray-300 mb-8 h-20 flex items-center justify-center lg:justify-start"
            >
              <motion.div className="relative flex items-center space-x-3">
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold"
                >
                  {movingTexts[currentText]}
                </motion.span>
                
                <motion.span
                  animate={{ opacity: showCursor ? 1 : 0 }}
                  transition={{ duration: 0.1 }}
                  className="text-cyan-400 font-bold text-3xl"
                >
                  |
                </motion.span>
              </motion.div>
            </motion.div>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed"
            >
              Computer Science student at NIT Patna with expertise in{' '}
              <span className="text-cyan-400 font-semibold">React</span>,{' '}
              <span className="text-purple-400 font-semibold">Node.js</span>, and{' '}
              <span className="text-pink-400 font-semibold">Modern Web Technologies</span>.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </motion.a>
              
              <motion.a
                href="#portfolio"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(6, 182, 212, 0.8)",
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-200 backdrop-blur-sm flex items-center justify-center space-x-2"
              >
                <Code2 size={18} />
                <span>View Projects</span>
              </motion.a>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex space-x-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/Palak24Ol", color: "hover:text-cyan-400 hover:border-cyan-400/60" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/palakjaiswal2401/", color: "hover:text-blue-400 hover:border-blue-400/60" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    boxShadow: "0 10px 20px rgba(6, 182, 212, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-cyan-400/30 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Main Image Container */}
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl bg-gradient-to-br from-slate-900/50 to-purple-900/50 backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(6, 182, 212, 0.4)",
                    "0 0 50px rgba(168, 85, 247, 0.5)",
                    "0 0 30px rgba(6, 182, 212, 0.4)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5 }
                }}
              >
                <motion.img
                  src="/pj.jpeg"
                  alt="Palak Jaiswal"
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-3"
          >
            <div className="text-gray-400 text-sm font-mono flex items-center space-x-2">
              <Terminal size={14} />
              <span>scroll to explore</span>
            </div>
            <motion.div
              className="w-6 h-12 border-2 border-cyan-400/50 rounded-full flex justify-center relative overflow-hidden"
              whileHover={{ borderColor: "rgba(6, 182, 212, 0.8)" }}
            >
              <motion.div
                className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;