import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, useVelocity } from 'framer-motion';
import { Code, Palette, Database, Smartphone, Globe, Zap, Star, Sparkles, Heart, Coffee, Rocket, Target, CheckCircle, ArrowRight, Settings, Users, Briefcase, Cpu, Terminal, Binary, Wifi, Shield, Cloud, Brain, Layers, Activity, Hexagon } from 'lucide-react';

const About: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scanlinePosition, setScanlinePosition] = useState(0);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  const [dataFlow, setDataFlow] = useState<Array<{id: number, x: number, y: number}>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXSpring = useSpring(mouseX, { stiffness: 150, damping: 50 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 150, damping: 50 });

  const mouseXVelocity = useVelocity(mouseX);
  const mouseYVelocity = useVelocity(mouseY);
  const velocityFactor = useTransform([mouseXVelocity, mouseYVelocity], ([x, y]) => Math.min(Math.sqrt(x * x + y * y) / 2000, 1.2));

  const movingSkills = [
    "Neural Network Architecture",
    "Quantum Computing Research", 
    "Distributed Systems Design",
    "Edge AI Development",
    "Blockchain Innovation",
    "Cloud-Native Solutions"
  ];

  // Enhanced tech-themed floating elements with slower animations
  const floatingElements = [
    { icon: Brain, delay: 0, duration: 25, color: "text-cyan-400/30", path: "M10,10 Q50,5 90,10 Q95,50 90,90 Q50,95 10,90 Q5,50 10,10" },
    { icon: Hexagon, delay: 2, duration: 30, color: "text-purple-400/30", path: "M20,20 Q80,15 80,80 Q20,85 20,20" },
    { icon: Activity, delay: 4, duration: 35, color: "text-pink-400/30", path: "M15,50 Q50,20 85,50 Q50,80 15,50" },
    { icon: Layers, delay: 6, duration: 28, color: "text-blue-400/30", path: "M30,30 Q70,25 70,70 Q30,75 30,30" },
    { icon: Shield, delay: 8, duration: 40, color: "text-green-400/30", path: "M25,25 Q75,20 75,75 Q25,80 25,25" },
    { icon: Cloud, delay: 10, duration: 22, color: "text-yellow-400/30", path: "M40,40 Q60,35 60,60 Q40,65 40,40" }
  ];

  // Enhanced skills data with advanced tech focus
  const skillCategories = [
    {
      title: "AI/ML Architect",
      icon: "🧠",
      description: "Designing and implementing large-scale machine learning systems with neural architecture search",
      bgColor: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      techStack: ["TensorFlow", "PyTorch", "MLflow", "Kubeflow"],
      level: 95
    },
    {
      title: "Cloud Solutions Engineer", 
      icon: "☁️",
      description: "Building resilient, auto-scaling cloud infrastructure with serverless and containerized architectures",
      bgColor: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      techStack: ["AWS", "Kubernetes", "Terraform", "Istio"],
      level: 92
    },
    {
      title: "Blockchain Innovator",
      icon: "⛓️", 
      description: "Developing next-generation DeFi protocols and smart contract security frameworks",
      bgColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      techStack: ["Solidity", "Rust", "Web3", "IPFS"],
      level: 88
    },
    {
      title: "DevOps Specialist",
      icon: "🚀",
      description: "Implementing GitOps workflows and infrastructure-as-code with advanced monitoring",
      bgColor: "from-green-500/20 to-cyan-500/20", 
      borderColor: "border-green-500/30",
      techStack: ["Docker", "ArgoCD", "Prometheus", "Grafana"],
      level: 90
    },
    {
      title: "Quantum Developer",
      icon: "⚛️",
      description: "Exploring quantum algorithms for optimization and quantum machine learning applications",
      bgColor: "from-pink-500/20 to-red-500/20",
      borderColor: "border-pink-500/30",
      techStack: ["Qiskit", "Cirq", "PennyLane", "Q#"],
      level: 75
    },
    {
      title: "Security Engineer",
      icon: "🛡️",
      description: "Implementing zero-trust architectures and advanced threat detection systems",
      bgColor: "from-red-500/20 to-orange-500/20",
      borderColor: "border-red-500/30",
      techStack: ["Vault", "Falco", "OPA", "Cilium"],
      level: 85
    }
  ];

  // Matrix effect with enhanced characters - slower animation
  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン∑∏∆∇∂∫∞≈≠≤≥±×÷√∛∜∝∴∵∀∃∈∉∪∩⊂⊃⊆⊇';
    const newChars = Array.from({ length: 80 }, () => chars[Math.floor(Math.random() * chars.length)]);
    setMatrixChars(newChars);
  }, []);

  // Data flow effect - slower
  useEffect(() => {
    const interval = setInterval(() => {
      setDataFlow(prev => {
        const newFlow = [...prev.slice(-10)];
        if (Math.random() > 0.8) {
          newFlow.push({
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100
          });
        }
        return newFlow;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Scanline animation - slower
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanlinePosition(prev => (prev + 0.5) % 100);
    }, 200);

    return () => clearInterval(scanInterval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setMousePosition({ x, y });
          mouseX.set(x);
          mouseY.set(y);
        }
      }, 16);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(timeoutId);
      };
    }
  }, [mouseX, mouseY]);

  // Change skill every 4 seconds
  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkill(prev => (prev + 1) % movingSkills.length);
    }, 4000);

    return () => clearInterval(skillInterval);
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Enhanced Matrix Background - slower */}
      <div className="absolute inset-0 pointer-events-none opacity-8">
        {matrixChars.map((char, index) => (
          <motion.div
            key={index}
            className="absolute text-cyan-400 font-mono text-xs"
            style={{
              left: `${(index * 2.5) % 100}%`,
              top: `${Math.floor(index / 40) * 12}%`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
          >
            {char}
          </motion.div>
        ))}
      </div>

      {/* Advanced Neural Network Background - slower */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          {/* Neural network with enhanced connections */}
          {[...Array(25)].map((_, i) => (
            <g key={i}>
              <motion.circle
                cx={100 + (i % 5) * 200}
                cy={100 + Math.floor(i / 5) * 200}
                r="4"
                fill="url(#neuralGradient)"
                animate={{
                  r: [4, 8, 4],
                  opacity: [0.3, 0.9, 0.3]
                }}
                transition={{
                  duration: 6 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
              {/* Enhanced neural connections */}
              {i < 20 && (
                <motion.path
                  d={`M${100 + (i % 5) * 200},${100 + Math.floor(i / 5) * 200} Q${150 + (i % 5) * 200},${50 + Math.floor(i / 5) * 200} ${100 + ((i + 1) % 5) * 200},${100 + Math.floor((i + 1) / 5) * 200}`}
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    strokeWidth: [1, 3, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 0.4
                  }}
                />
              )}
            </g>
          ))}
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Data Flow Visualization - slower */}
      <div className="absolute inset-0 pointer-events-none">
        {dataFlow.map((point) => (
          <motion.div
            key={point.id}
            className="absolute w-2 h-2 bg-cyan-400/60 rounded-full"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 6,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Enhanced Scanline Effect - slower */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent ${scanlinePosition}%, rgba(6, 182, 212, 0.1) ${scanlinePosition + 1}%, transparent ${scanlinePosition + 2}%)`
        }}
      />

      {/* Floating tech elements with paths - slower */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.color}`}
            animate={{
              offsetDistance: ["0%", "100%"]
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "linear",
              delay: element.delay
            }}
            style={{
              offsetPath: `path("${element.path}")`,
              offsetRotate: "auto"
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <element.icon size={28} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced mouse follower effect */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl pointer-events-none"
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
          scale: velocityFactor,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.6 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          style={{ y, opacity, scale }}
          className="text-center mb-16"
        >
          {/* Enhanced Tech Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-full px-8 py-4 border border-cyan-500/30 mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="text-cyan-400" size={24} />
            </motion.div>
            <span className="text-cyan-300 font-mono text-sm tracking-wider">SYSTEM.ABOUT.INITIALIZE()</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-bold text-white mb-8"
          >
            About{' '}
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Me
              {/* Holographic effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-sm"
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity
                }}
              />
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 text-xl max-w-3xl mx-auto font-mono leading-relaxed"
          >
            A passionate technologist architecting the future with{' '}
            <span className="text-cyan-400 font-semibold">AI/ML</span>,{' '}
            <span className="text-purple-400 font-semibold">Quantum Computing</span>, and{' '}
            <span className="text-pink-400 font-semibold">Distributed Systems</span>.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-24">
          {/* Enhanced Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.h3 
              className="text-4xl font-bold text-white mb-8 font-mono flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Terminal className="text-cyan-400" size={32} />
              <span>{'>'} Journey.execute()</span>
            </motion.h3>
            
            <motion.div className="space-y-8">
              {[
                {
                  title: "The Beginning",
                  content: "Started as a curious developer 6 years ago, now architecting AI-powered solutions that serve millions. I specialize in cutting-edge technologies that push the boundaries of what's computationally possible.",
                  icon: Rocket,
                  color: "text-cyan-400"
                },
                {
                  title: "Current Focus", 
                  content: "Leading research in quantum machine learning, building distributed AI systems, and mentoring the next generation of engineers in emerging technologies like neuromorphic computing.",
                  icon: Brain,
                  color: "text-purple-400"
                },
                {
                  title: "Innovation Philosophy",
                  content: "Believing that the intersection of quantum computing, AI, and distributed systems will define the next technological revolution. Every line of code is a step toward that future.",
                  icon: Zap,
                  color: "text-pink-400"
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/60 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center ${section.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1.2 }}
                    >
                      <section.icon size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 font-mono">{section.title}</h4>
                      <p className="text-gray-300 leading-relaxed font-mono text-sm">
                        <span className="text-cyan-400">$</span> {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Moving Skills Display */}
            <motion.div
              className="bg-slate-900/80 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/30 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Advanced circuit pattern background */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <pattern id="advancedCircuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 20,0 L 20,20 L 0,20" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <circle cx="20" cy="20" r="2" fill="currentColor"/>
                      <rect x="18" y="18" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#advancedCircuit)" className="text-cyan-400"/>
                </svg>
              </div>
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(6, 182, 212, 0.05), rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05))',
                    'linear-gradient(45deg, rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05))',
                    'linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05), rgba(168, 85, 247, 0.05))'
                  ]
                }}
                transition={{ duration: 16, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-white mb-6 relative z-10 font-mono flex items-center space-x-3">
                  <Activity className="text-cyan-400" size={24} />
                  <span>{'>'} Currently_Researching:</span>
                </h4>
                <div className="flex items-center h-12 relative z-10">
                  <motion.span
                    key={currentSkill}
                    initial={{ opacity: 0, x: 30, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0.8 }}
                    transition={{ 
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                    className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-2xl font-mono"
                  >
                    {movingSkills[currentSkill]}
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-3 text-cyan-400 font-bold text-2xl"
                  >
                    _
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Stats with Progress Bars */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { value: "150+", label: "AI Models Deployed", color: "text-cyan-400", icon: Brain, progress: 95 },
                { value: "6+", label: "Years Experience", color: "text-purple-400", icon: Cpu, progress: 85 },
                { value: "100+", label: "Cloud Solutions", color: "text-pink-400", icon: Cloud, progress: 92 },
                { value: "25+", label: "Research Papers", color: "text-green-400", icon: Target, progress: 78 }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center bg-slate-900/60 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    borderColor: "rgba(6, 182, 212, 0.4)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div className="flex items-center justify-center mb-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1.2 }}
                      className={`w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center ${stat.color}`}
                    >
                      <stat.icon size={24} />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className={`text-3xl font-bold ${stat.color} font-mono mb-2`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: 1 + index * 0.1, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 text-sm font-mono mb-3">{stat.label}</div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.progress}%` }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 2 }}
                      viewport={{ once: true }}
                      className={`h-2 bg-gradient-to-r ${
                        stat.color.includes('cyan') ? 'from-cyan-400 to-cyan-600' :
                        stat.color.includes('purple') ? 'from-purple-400 to-purple-600' :
                        stat.color.includes('pink') ? 'from-pink-400 to-pink-600' :
                        'from-green-400 to-green-600'
                      } rounded-full relative overflow-hidden`}
                    >
                      <motion.div
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-full px-8 py-4 border border-cyan-500/30 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Layers className="text-cyan-400" size={24} />
              </motion.div>
              <span className="text-cyan-300 font-mono text-sm tracking-wider">EXPERTISE.LOAD_ALL()</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
            </motion.div>
            
            <motion.h3 
              className="text-5xl lg:text-6xl font-bold text-white mb-8 font-mono"
              whileHover={{ scale: 1.02 }}
            >
              Technical{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </motion.h3>
          </motion.div>

          {/* Enhanced Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skillCategories.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group relative"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Enhanced skill card */}
                <motion.div
                  className={`relative bg-gradient-to-br ${skill.bgColor} backdrop-blur-xl rounded-3xl p-8 border-2 ${skill.borderColor} overflow-hidden h-full`}
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)",
                    borderColor: "rgba(6, 182, 212, 0.6)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Advanced circuit pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <defs>
                        <pattern id={`skillCircuit-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 10,0 L 10,10 L 0,10" stroke="currentColor" strokeWidth="1" fill="none"/>
                          <circle cx="10" cy="10" r="1" fill="currentColor"/>
                          <rect x="8" y="8" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#skillCircuit-${index})`} className="text-cyan-400"/>
                    </svg>
                  </div>
                  
                  {/* Icon and title */}
                  <motion.div 
                    className="text-6xl mb-6 relative z-10 flex justify-center"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ duration: 1.6 }}
                  >
                    {skill.icon}
                  </motion.div>

                  <motion.h4 
                    className="text-2xl font-semibold text-white text-center mb-4 font-mono"
                    whileHover={{ 
                      scale: 1.05,
                      color: "#06b6d4"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.title}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-gray-300 text-center mb-6 font-mono text-sm leading-relaxed"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {skill.description}
                  </motion.p>

                  {/* Skill level indicator */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 font-mono text-sm">Proficiency</span>
                      <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.7, duration: 3 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          animate={{
                            x: ['-100%', '100%']
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Tech stack tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2 justify-center"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.9, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {skill.techStack.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full font-mono border border-cyan-500/30"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.3)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Quantum particles for each skill - slower */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        x: [0, Math.sin(i) * 15, 0],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 8 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 6,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;