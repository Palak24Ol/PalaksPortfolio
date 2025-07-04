import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Terminal, Code2, Database, Cloud, Brain, Zap } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
  techStack: string[];
  category: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior AI/ML Engineer",
      company_name: "TechCorp AI",
      icon: "🧠",
      iconBg: "linear-gradient(45deg, #06b6d4, #8b5cf6)",
      date: "Jan 2023 - Present",
      category: "AI/ML",
      techStack: ["TensorFlow", "PyTorch", "Kubernetes", "AWS"],
      points: [
        "Architected and deployed large-scale machine learning models serving 10M+ users daily with 99.9% uptime.",
        "Led development of computer vision systems using deep learning, achieving 95% accuracy in real-time object detection.",
        "Implemented MLOps pipelines with automated model training, validation, and deployment using Kubernetes and Docker.",
        "Mentored junior engineers and established ML best practices across the organization.",
      ],
    },
    {
      title: "Cloud Solutions Architect",
      company_name: "CloudTech Solutions",
      icon: "☁️",
      iconBg: "linear-gradient(45deg, #10b981, #06b6d4)",
      date: "Mar 2021 - Dec 2022",
      category: "Cloud",
      techStack: ["AWS", "Terraform", "Docker", "Microservices"],
      points: [
        "Designed and implemented cloud-native microservices architecture serving 1M+ concurrent users.",
        "Reduced infrastructure costs by 40% through optimization of AWS resources and serverless computing.",
        "Built CI/CD pipelines with automated testing, security scanning, and blue-green deployments.",
        "Led migration of legacy monolithic applications to containerized microservices on Kubernetes.",
      ],
    },
    {
      title: "Blockchain Developer",
      company_name: "DeFi Innovations",
      icon: "⛓️",
      iconBg: "linear-gradient(45deg, #8b5cf6, #ec4899)",
      date: "Jun 2020 - Feb 2021",
      category: "Blockchain",
      techStack: ["Solidity", "Web3.js", "Ethereum", "React"],
      points: [
        "Developed smart contracts for DeFi protocols handling $50M+ in total value locked (TVL).",
        "Built decentralized applications (dApps) with React and Web3.js for seamless user experience.",
        "Implemented automated market maker (AMM) algorithms and yield farming mechanisms.",
        "Conducted security audits and gas optimization for smart contracts, reducing costs by 30%.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "StartupTech",
      icon: "💻",
      iconBg: "linear-gradient(45deg, #f59e0b, #ef4444)",
      date: "Jan 2019 - May 2020",
      category: "Full Stack",
      techStack: ["React", "Node.js", "PostgreSQL", "Redis"],
      points: [
        "Built scalable web applications using React, Node.js, and PostgreSQL serving 100K+ active users.",
        "Implemented real-time features using WebSockets and Redis for live chat and notifications.",
        "Optimized database queries and implemented caching strategies, improving response times by 60%.",
        "Collaborated with cross-functional teams using Agile methodologies and modern development practices.",
      ],
    },
  ];

  // Animation variants
  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: index * 0.3,
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    })
  };

  const dotVariants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: index * 0.3 + 0.2,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 200
      }
    })
  };

  const pointVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.9
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI/ML': return Brain;
      case 'Cloud': return Cloud;
      case 'Blockchain': return Zap;
      case 'Full Stack': return Code2;
      default: return Terminal;
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-16 grid-rows-16 h-full w-full">
          {[...Array(256)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-cyan-400/20"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                borderColor: [
                  'rgba(6, 182, 212, 0.1)',
                  'rgba(168, 85, 247, 0.2)',
                  'rgba(6, 182, 212, 0.1)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

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
            <span className="text-cyan-300 font-mono text-sm">EXPERIENCE.LOAD()</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg mb-4 tracking-wider uppercase font-mono"
          >
            What I have built so far
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6 font-mono"
          >
            Work{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
            <span className="text-cyan-400">.</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline line */}
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute left-8 top-0 bottom-0 w-1 hidden md:block origin-top"
              style={{
                background: 'linear-gradient(180deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
              }}
            />
            
            {experiences.map((experience, index) => {
              const CategoryIcon = getCategoryIcon(experience.category);
              
              return (
                <div key={`experience-${index}`} className="relative mb-16 md:ml-24">
                  {/* Enhanced Timeline dot */}
                  <motion.div
                    custom={index}
                    variants={dotVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="absolute -left-24 top-8 hidden md:flex"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                      className="relative"
                    >
                      <div 
                        className="w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-2xl border-4 border-cyan-400/30 backdrop-blur-sm relative z-10"
                        style={{ background: experience.iconBg }}
                      >
                        {experience.icon}
                      </div>
                      
                      {/* Category indicator */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-900 rounded-full border-2 border-cyan-400/50 flex items-center justify-center">
                        <CategoryIcon className="text-cyan-400" size={14} />
                      </div>
                      
                      {/* Pulsing ring effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-30 blur-md"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Experience card */}
                  <motion.div
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group"
                  >
                    <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 relative overflow-hidden">
                      {/* Tech grid overlay */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                          {[...Array(64)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="border border-cyan-400/20"
                              animate={{
                                opacity: [0.1, 0.3, 0.1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Animated background gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          background: [
                            'linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(236, 72, 153, 0.05) 100%)',
                            'linear-gradient(45deg, rgba(139, 92, 246, 0.05) 0%, rgba(236, 72, 153, 0.05) 50%, rgba(6, 182, 212, 0.05) 100%)',
                            'linear-gradient(45deg, rgba(236, 72, 153, 0.05) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(139, 92, 246, 0.05) 100%)'
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      <div className="relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                            <motion.div 
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="w-16 h-16 rounded-full flex items-center justify-center text-2xl lg:hidden shadow-lg border-2 border-cyan-400/30"
                              style={{ background: experience.iconBg }}
                            >
                              {experience.icon}
                            </motion.div>
                            <div>
                              <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.3 + 0.3, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-2xl font-bold text-white mb-1 font-mono"
                              >
                                {experience.title}
                              </motion.h3>
                              <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.3 + 0.4, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                              >
                                {experience.company_name}
                              </motion.p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col space-y-2">
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.3 + 0.5, duration: 0.6 }}
                              viewport={{ once: true }}
                              className="flex items-center space-x-2 text-gray-400 bg-slate-800/50 px-4 py-2 rounded-full"
                            >
                              <Calendar size={16} />
                              <span className="text-sm font-medium font-mono">{experience.date}</span>
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.3 + 0.6, duration: 0.6 }}
                              viewport={{ once: true }}
                              className="flex items-center space-x-2 text-gray-400 bg-slate-800/50 px-4 py-2 rounded-full"
                            >
                              <CategoryIcon size={16} />
                              <span className="text-sm font-medium font-mono">{experience.category}</span>
                            </motion.div>
                          </div>
                        </div>

                        {/* Tech stack */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.3 + 0.7, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex flex-wrap gap-2 mb-6"
                        >
                          {experience.techStack.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full font-mono border border-cyan-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </motion.div>

                        <motion.ul 
                          className="space-y-4"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {experience.points.map((point, pointIndex) => (
                            <motion.li
                              key={pointIndex}
                              custom={pointIndex}
                              variants={pointVariants}
                              className="flex items-start space-x-4 text-gray-300 group/item"
                            >
                              <motion.div
                                whileHover={{ scale: 1.5, rotate: 180 }}
                                transition={{ duration: 0.3 }}
                                className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0 shadow-lg"
                              />
                              <motion.span
                                className="leading-relaxed text-base group-hover/item:text-white transition-colors duration-300 font-mono"
                              >
                                {point}
                              </motion.span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group font-mono"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <span className="relative z-10">Let's Build the Future</span>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <ExternalLink size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;