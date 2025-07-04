import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Github, Code2, Layers, Award, Terminal, Cpu, Database, Cloud, Brain, Zap } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      name: "Syntax Forge : Code Editor",
      description: "Machine learning platform for real-time data analysis with neural network visualization.",
      tags: [
        { name: "tensorflow", color: "blue-text-gradient" },
        { name: "python", color: "green-text-gradient" },
        { name: "kubernetes", color: "pink-text-gradient" },
      ],
      image: "/p1.png",
      source_code_link: "https://github.com/Palak24Ol/my-code-editor",
      live_demo_link: "https://my-code-editor-pink.vercel.app/",
      category: "Full Stack"
    },
    {
      name: "AI-Interview Bot",
      description: "Web-based quantum circuit simulator with real-time visualization of quantum states and gate operations.",
      tags: [
        { name: "qiskit", color: "blue-text-gradient" },
        { name: "react", color: "green-text-gradient" },
        { name: "webgl", color: "pink-text-gradient" },
      ],
      image: "/p2.png",
      source_code_link: "https://github.com/Palak24Ol/AI-INTERVIEW",
      live_demo_link: "https://ai-interview-24.vercel.app/",
      category: "AI"
    },
    {
      name: "Blockchain DeFi Platform",
      description: "Decentralized finance platform with smart contracts, yield farming, and automated market making protocols.",
      tags: [
        { name: "solidity", color: "blue-text-gradient" },
        { name: "web3", color: "green-text-gradient" },
        { name: "ethereum", color: "pink-text-gradient" },
      ],
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800",
      source_code_link: "https://github.com/",
      live_demo_link: "https://example.com/",
      category: "Blockchain"
    }
  ];

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'techstack', label: 'Tech Stack', icon: Layers },
    { id: 'certificates', label: 'Certifications', icon: Award }
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
        className="group relative cursor-grab w-full max-w-[360px] mx-auto"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, z: 50 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-full h-[500px] bg-slate-900/40 backdrop-blur-xl rounded-[20px] p-5 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 z-0">
            <div className="grid grid-cols-6 grid-rows-6 h-full w-full">
              {[...Array(36)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-cyan-400/20"
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
              ))}
            </div>
          </div>

          <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 text-white px-3 py-1 rounded-full text-xs font-mono">
            {project.category}
          </div>

          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full shadow-lg z-20" />
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-cyan-400/40 to-transparent rounded-full blur-sm z-10" />

          <div className="relative w-full h-[240px] rounded-[15px] overflow-hidden mb-4 mt-4 z-10">
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent h-1"
              animate={{ y: ['-10%', '110%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute top-4 right-4 flex space-x-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500/60 transition-all duration-300 border border-cyan-400/30">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Github size={16} />
                </motion.div>
              </a>
              <a href={project.live_demo_link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-500/60 transition-all duration-300 border border-purple-400/30">
                <motion.div whileHover={{ rotate: -360 }} transition={{ duration: 0.6 }}>
                  <ExternalLink size={16} />
                </motion.div>
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-white font-bold text-[22px] mb-2 font-mono group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              {project.name}
            </h3>
            <p className="text-gray-300 text-[14px] leading-[20px] mb-4 font-mono">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag: any, tagIndex: number) => (
                <motion.p
                  key={tag.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tagIndex * 0.1 + 0.5, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className={`text-[12px] font-medium cursor-pointer transition-all duration-300 px-2 py-1 rounded-full border font-mono ${
                    tag.color === 'blue-text-gradient'
                      ? 'text-cyan-400 hover:text-cyan-300 border-cyan-400/30 bg-cyan-400/10'
                      : tag.color === 'green-text-gradient'
                      ? 'text-green-400 hover:text-green-300 border-green-400/30 bg-green-400/10'
                      : 'text-purple-400 hover:text-purple-300 border-purple-400/30 bg-purple-400/10'
                  }`}
                >
                  #{tag.name}
                </motion.p>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-cyan-500/20">
              <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 font-mono">
                <Github size={18} />
                <span className="text-sm font-medium">Source</span>
              </a>
              <a href={project.live_demo_link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-all duration-300 font-mono">
                <span className="text-sm font-medium">Demo</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className="text-center mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-full px-6 py-3 border border-cyan-500/30 mb-6">
            <Terminal className="text-cyan-400" size={20} />
            <span className="text-cyan-300 font-mono text-sm">PORTFOLIO.LOAD()</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} viewport={{ once: true }} className="text-4xl lg:text-6xl font-bold text-white mb-6 font-mono">
            My <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span><span className="text-cyan-400">.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} viewport={{ once: true }} className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed font-mono">
            Cutting-edge projects showcasing expertise in AI/ML, blockchain, quantum computing, and cloud-native technologies.
          </motion.p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} viewport={{ once: true }} className="flex flex-wrap justify-center mb-16">
          {tabs.map((tab, index) => (
            <motion.button key={tab.id} onClick={() => setActiveTab(tab.id)} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 + 0.9, duration: 0.5 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`flex items-center space-x-2 px-8 py-4 rounded-full mx-2 mb-4 transition-all duration-500 relative overflow-hidden backdrop-blur-xl font-mono ${activeTab === tab.id ? 'bg-gradient-to-r from-cyan-500/80 to-purple-500/80 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/50' : 'bg-slate-900/40 text-gray-300 hover:bg-slate-800/60 border border-cyan-500/20 hover:border-cyan-500/40'}`}>
              <tab.icon size={20} />
              <span className="font-medium">{tab.label}</span>
              {activeTab === tab.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 -z-10" transition={{ type: 'spring', stiffness: 500, damping: 30 }} />}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'projects' && (
            <motion.div key="projects" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
                {projects.map((project, index) => (
                  <ProjectCard key={project.name} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
