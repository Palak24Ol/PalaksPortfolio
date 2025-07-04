import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles, Zap, Star, Heart, Coffee, Rocket } from 'lucide-react';

const SplashScreen: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const phases = [
    { text: "Initializing...", icon: Code2 },
    { text: "Loading Assets...", icon: Sparkles },
    { text: "Preparing Experience...", icon: Zap },
    { text: "Almost Ready...", icon: Star }
  ];

  const floatingIcons = [
    { icon: Heart, delay: 0, color: "text-red-400" },
    { icon: Coffee, delay: 0.5, color: "text-yellow-400" },
    { icon: Rocket, delay: 1, color: "text-blue-400" },
    { icon: Star, delay: 1.5, color: "text-purple-400" },
    { icon: Sparkles, delay: 2, color: "text-pink-400" },
    { icon: Zap, delay: 2.5, color: "text-cyan-400" }
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Phase changes
    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % phases.length);
    }, 750);

    return () => {
      clearInterval(progressInterval);
      clearInterval(phaseInterval);
    };
  }, [phases.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/80 to-slate-900 flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating icons around the main content */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color}`}
          style={{
            left: `${20 + (index * 12)}%`,
            top: `${30 + Math.sin(index) * 20}%`,
          }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
            rotate: [0, 360],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <item.icon size={24} />
        </motion.div>
      ))}

      <div className="text-center relative z-10">
        {/* Main logo with enhanced animations */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full flex items-center justify-center relative overflow-hidden"
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div
              animate={{ 
                rotate: [0, -360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="relative z-10"
            >
              <Code2 size={48} className="text-white drop-shadow-lg" />
            </motion.div>

            {/* Orbiting rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-white/20 rounded-full"
                style={{ scale: 1 + i * 0.2 }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </motion.div>

          {/* Pulsing glow effect */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl"
          />
        </motion.div>
        
        {/* Enhanced welcome text */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
          className="text-5xl font-bold text-white mb-4 relative"
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ backgroundSize: '200% 200%' }}
          >
            Welcome
          </motion.span>
        </motion.h1>
        
        {/* Dynamic loading text */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gray-300 text-xl mb-8 h-8 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhase}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                {React.createElement(phases[currentPhase].icon, { 
                  size: 24, 
                  className: "text-purple-400" 
                })}
              </motion.div>
              <span>{phases[currentPhase].text}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        {/* Enhanced progress bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="w-80 mx-auto mb-8"
        >
          <div className="relative">
            <div className="w-full h-3 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-purple-500/20">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(loadingProgress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 relative"
              >
                {/* Animated shine effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </motion.div>
            </div>
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-center text-purple-300 text-sm mt-2 font-medium"
            >
              {Math.round(loadingProgress)}%
            </motion.p>
          </div>
        </motion.div>
        
        {/* Animated sparkles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-center space-x-4"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="text-yellow-400"
            >
              <Sparkles size={16} />
            </motion.div>
          ))}
        </motion.div>

        {/* Subtle hint text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ 
            delay: 2,
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-gray-500 text-sm mt-8"
        >
          Crafting an amazing experience for you...
        </motion.p>
      </div>

      {/* Corner decorations */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-10 left-10"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-2 border-purple-400/30 rounded-full"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 right-10"
      >
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-2 border-pink-400/30 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;