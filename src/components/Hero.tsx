import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Download, Terminal, Code2, Cpu, Zap, Brain, Database, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [terminalText, setTerminalText] = useState('');
  const [matrixChars, setMatrixChars] = useState<string[]>([]);

  const movingTexts = [
    "AI/ML Engineer",
    "Cloud Architect", 
    "Blockchain Developer",
    "DevOps Engineer",
    "Tech Innovator"
  ];

  const terminalCommands = [
    "$ tensorflow --version 2.15.0",
    "$ kubectl get pods --all-namespaces",
    "$ docker compose up -d",
    "$ terraform apply --auto-approve",
    "$ npm run deploy:production"
  ];

  // Matrix effect initialization
  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const newChars = Array.from({ length: 100 }, () => chars[Math.floor(Math.random() * chars.length)]);
    setMatrixChars(newChars);
  }, []);

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

  // Terminal typing effect
  useEffect(() => {
    const command = terminalCommands[currentText];
    let index = 0;
    setTerminalText('');
    
    const typeInterval = setInterval(() => {
      if (index < command.length) {
        setTerminalText(command.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-20 overflow-hidden">
      {/* Enhanced Matrix Background */}
      <div className="absolute inset-0 opacity-5">
        {matrixChars.map((char, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-400 font-mono text-xs"
            style={{
              left: `${(index * 1.5) % 100}%`,
              top: `${Math.floor(index / 67) * 8}%`,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            {char}
          </motion.div>
        ))}
      </div>

      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {/* Neural network nodes */}
          {[...Array(20)].map((_, i) => (
            <g key={i}>
              <motion.circle
                cx={50 + (i % 5) * 200}
                cy={100 + Math.floor(i / 5) * 200}
                r="3"
                fill="url(#neuralGradient)"
                animate={{
                  r: [3, 6, 3],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
              {/* Neural connections */}
              {i < 15 && (
                <motion.line
                  x1={50 + (i % 5) * 200}
                  y1={100 + Math.floor(i / 5) * 200}
                  x2={50 + ((i + 1) % 5) * 200}
                  y2={100 + Math.floor((i + 1) / 5) * 200}
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  animate={{
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              )}
            </g>
          ))}
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Tech Icons with Enhanced Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { icon: Brain, pos: { x: 15, y: 20 }, color: "text-cyan-400/30" },
          { icon: Database, pos: { x: 85, y: 25 }, color: "text-purple-400/30" },
          { icon: Cloud, pos: { x: 10, y: 70 }, color: "text-pink-400/30" },
          { icon: Terminal, pos: { x: 90, y: 75 }, color: "text-blue-400/30" },
          { icon: Cpu, pos: { x: 20, y: 45 }, color: "text-green-400/30" },
          { icon: Code2, pos: { x: 80, y: 50 }, color: "text-yellow-400/30" }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color}`}
            style={{
              left: `${item.pos.x}%`,
              top: `${item.pos.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(index) * 20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5
            }}
          >
            <item.icon size={32} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Enhanced Terminal Window */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="bg-slate-900/90 backdrop-blur-xl rounded-xl border border-cyan-400/30 p-5 mb-8 font-mono text-sm relative overflow-hidden"
            >
              {/* Terminal header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-xs">palak@portfolio:~</span>
              </div>
              
              {/* Terminal content */}
              <div className="space-y-2">
                <div className="text-green-400">
                  <span className="text-cyan-400">$</span> whoami
                </div>
                <div className="text-gray-300 ml-2">palak_jaiswal</div>
                <div className="text-cyan-400">
                  <span className="text-cyan-400">$</span> {terminalText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="ml-1"
                  >
                    █
                  </motion.span>
                </div>
              </div>

              {/* Terminal glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 pointer-events-none"
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
            </motion.div>

            {/* Enhanced Name with Holographic Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 relative"
            >
              Hi, I'm{' '}
              <motion.span 
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Palak 
                </motion.span>
                
                {/* Holographic overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-sm"
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              </motion.span>
            </motion.h1>
            
            {/* Enhanced Moving Text with Tech Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-gray-300 mb-8 h-20 flex items-center justify-center lg:justify-start"
            >
              <motion.div className="relative flex items-center space-x-3">
                {/* Tech icon indicator */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-cyan-400/30"
                >
                  <Cpu className="text-cyan-400" size={16} />
                </motion.div>

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
            
            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed"
            >
              Architecting the future with{' '}
              <span className="text-cyan-400 font-semibold">AI/ML</span>,{' '}
              <span className="text-purple-400 font-semibold">Cloud Technologies</span>, and{' '}
              <span className="text-pink-400 font-semibold">Innovative Solutions</span>.
            </motion.p>
            
            {/* Enhanced Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10 flex items-center space-x-2">
                  <Download size={18} />
                  <span>Download Resume</span>
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(6, 182, 212, 0.8)",
                  boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-200 backdrop-blur-sm"
              >
                <span className="flex items-center space-x-2">
                  <Code2 size={18} />
                  <span>View Projects</span>
                </span>
              </motion.button>
            </motion.div>
            
            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex space-x-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/Palak24Ol", color: "hover:text-cyan-400 hover:border-cyan-400/60" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/palakjaiswal2401/", color: "hover:text-blue-400 hover:border-blue-400/60" },
                { icon: Twitter, href: "https://www.linkedin.com/in/palakjaiswal2401/", color: "hover:text-purple-400 hover:border-purple-400/60" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
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
          
          {/* Enhanced Right Side - Futuristic Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center"
            style={{ perspective: "1000px" }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Quantum Field Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Enhanced Tech Rings with Data Flow */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2"
                  style={{
                    scale: 1 + i * 0.1,
                    borderColor: i % 2 === 0 ? 'rgba(6, 182, 212, 0.3)' : 'rgba(168, 85, 247, 0.3)'
                  }}
                  animate={{ 
                    rotate: i % 2 === 0 ? 360 : -360,
                    borderColor: [
                      'rgba(6, 182, 212, 0.3)',
                      'rgba(168, 85, 247, 0.3)',
                      'rgba(236, 72, 153, 0.3)',
                      'rgba(6, 182, 212, 0.3)'
                    ]
                  }}
                  transition={{
                    rotate: {
                      duration: 15 + i * 3,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    borderColor: {
                      duration: 4,
                      repeat: Infinity
                    }
                  }}
                />
              ))}
              
              {/* Main Image Container with Advanced Effects */}
              <motion.div 
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl bg-gradient-to-br from-slate-900/50 to-purple-900/50 backdrop-blur-sm"
                style={{ transformStyle: "preserve-3d" }}
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
                  rotateY: 15,
                  transition: { duration: 0.5 }
                }}
              >
                {/* Hexagonal Tech Grid */}
                <div className="absolute inset-0 opacity-15 z-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <pattern id="hexGrid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <polygon points="5,1 9,3 9,7 5,9 1,7 1,3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexGrid)" className="text-cyan-400"/>
                  </svg>
                </div>
                
                {/* Personal Image */}
                <motion.img
                  src="/pj.jpeg"
                  alt="Palak Jaiswal"
                  className="w-full h-full object-cover object-center relative z-20"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.6 }
                  }}
                />
                
                {/* Advanced Holographic Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10 z-30"
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(6, 182, 212, 0.1), transparent, rgba(168, 85, 247, 0.1))',
                      'linear-gradient(45deg, rgba(168, 85, 247, 0.1), transparent, rgba(236, 72, 153, 0.1))',
                      'linear-gradient(45deg, rgba(236, 72, 153, 0.1), transparent, rgba(6, 182, 212, 0.1))'
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                
                {/* Quantum Particles */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-80 z-40"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -100, 0],
                      x: [0, Math.sin(i) * 50, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 2, 0],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                {/* Advanced Scanning Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent h-2 z-50"
                  animate={{
                    y: ['-10%', '110%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              
              {/* Enhanced Floating Tech Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center backdrop-blur-sm border border-cyan-400/30 shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 180, 270, 360],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Brain className="text-white" size={24} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -left-8 w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center backdrop-blur-sm border border-purple-400/30 shadow-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 270, 180, 90, 0],
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Database className="text-white" size={20} />
              </motion.div>

              {/* Additional floating elements */}
              <motion.div
                className="absolute top-1/4 -left-6 w-10 h-10 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm border border-green-400/30"
                animate={{
                  x: [0, -15, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Cloud className="text-white" size={16} />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
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
              <span>scroll_to_explore</span>
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