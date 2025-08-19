import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Terminal } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      name: "Syntax Forge : Code Editor",
      description: "A modern web-based code editor with syntax highlighting, multiple language support, and real-time collaboration features.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "javascript", color: "green-text-gradient" },
        { name: "monaco-editor", color: "pink-text-gradient" },
      ],
      image: "/p1.png",
      source_code_link: "https://github.com/Palak24Ol/my-code-editor",
      live_demo_link: "https://my-code-editor-pink.vercel.app/",
      category: "Web Development"
    },
    {
      name: "AI-Interview Bot",
      description: "An intelligent interview preparation platform with AI-powered mock interviews, real-time feedback, and performance analytics.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "ai", color: "green-text-gradient" },
        { name: "node.js", color: "pink-text-gradient" },
      ],
      image: "/p2.png",
      source_code_link: "https://github.com/Palak24Ol/AI-INTERVIEW",
      live_demo_link: "https://ai-interview-24.vercel.app/",
      category: "AI/ML"
    },
    {
      name: "Personal Portfolio",
      description: "A responsive portfolio website showcasing my projects, skills, and experience with modern design and smooth animations.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "typescript", color: "green-text-gradient" },
        { name: "framer-motion", color: "pink-text-gradient" },
      ],
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800",
      source_code_link: "https://github.com/Palak24Ol/PalaksPortfolio",
      live_demo_link: "https://palaks-portfolio.vercel.app/",
      category: "Web Development"
    }
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
        className="group relative cursor-pointer w-full max-w-[360px] mx-auto"
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-full bg-slate-900/60 backdrop-blur-xl rounded-[20px] p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute top-3 left-3 z-20 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 text-white px-3 py-1 rounded-full text-xs">
            {project.category}
          </div>

          <div className="relative w-full h-[200px] rounded-[15px] overflow-hidden mb-4 mt-4">
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 flex space-x-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a 
                href={project.source_code_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500/60 transition-all duration-300 border border-cyan-400/30"
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Github size={16} />
                </motion.div>
              </a>
              <a 
                href={project.live_demo_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-500/60 transition-all duration-300 border border-purple-400/30"
              >
                <motion.div whileHover={{ rotate: -360 }} transition={{ duration: 0.6 }}>
                  <ExternalLink size={16} />
                </motion.div>
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-white font-bold text-[20px] mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              {project.name}
            </h3>
            <p className="text-gray-300 text-[14px] leading-[20px] mb-4">
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
                  className={`text-[12px] font-medium cursor-pointer transition-all duration-300 px-2 py-1 rounded-full border ${
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
              <a 
                href={project.source_code_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300"
              >
                <Github size={18} />
                <span className="text-sm font-medium">Source</span>
              </a>
              <a 
                href={project.live_demo_link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-all duration-300"
              >
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
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          viewport={{ once: true }} 
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }} 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-full px-6 py-3 border border-cyan-500/30 mb-6"
          >
            <Terminal className="text-cyan-400" size={20} />
            <span className="text-cyan-300 font-mono text-sm">PORTFOLIO.LOAD()</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6, duration: 0.8 }} 
            viewport={{ once: true }} 
            className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            A collection of projects showcasing my skills in web development, AI/ML, and modern technologies.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.8, duration: 0.8 }} 
          viewport={{ once: true }} 
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;