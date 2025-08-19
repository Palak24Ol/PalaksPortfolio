import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Smartphone, Globe, Zap, Terminal, CheckCircle, ArrowRight, Users, Briefcase, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  
  const movingSkills = [
    "React Development",
    "Node.js Backend", 
    "UI/UX Design",
    "Database Management",
    "Problem Solving",
    "Team Collaboration"
  ];

  // Change skill every 3 seconds
  useEffect(() => {
    const skillInterval = setInterval(() => {
      setCurrentSkill(prev => (prev + 1) % movingSkills.length);
    }, 3000);

    return () => clearInterval(skillInterval);
  }, []);

  const skills = [
    {
      title: "Frontend Development",
      icon: Code,
      description: "Building responsive and interactive user interfaces with modern frameworks",
      techStack: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      level: 90
    },
    {
      title: "Backend Development", 
      icon: Database,
      description: "Creating robust server-side applications and APIs",
      techStack: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      level: 85
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      description: "Designing user-centered interfaces with focus on usability",
      techStack: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      level: 80
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      description: "Developing cross-platform mobile applications",
      techStack: ["React Native", "Flutter", "iOS", "Android"],
      level: 75
    }
  ];

  const achievements = [
    { value: "3+", label: "Years Learning", icon: Briefcase },
    { value: "15+", label: "Projects Built", icon: Code },
    { value: "5+", label: "Technologies", icon: Cpu },
    { value: "100%", label: "Dedication", icon: Zap }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-full px-6 py-3 border border-cyan-500/30 mb-6"
          >
            <Terminal className="text-cyan-400" size={20} />
            <span className="text-cyan-300 font-mono text-sm">ABOUT.INIT()</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Computer Science student at NIT Patna passionate about creating digital solutions that make a difference.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-20">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-8 flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <Terminal className="text-cyan-400" size={28} />
              <span>My Journey</span>
            </motion.h3>
            
            <motion.div className="space-y-6">
              {[
                {
                  title: "Education",
                  content: "Currently pursuing B.Tech in Computer Science at NIT Patna (2023-2027) with a focus on software development and problem-solving.",
                  icon: Users,
                  color: "text-cyan-400"
                },
                {
                  title: "Skills & Passion",
                  content: "Passionate about frontend development, UI/UX design, and creating user-friendly applications. Always eager to learn new technologies.",
                  icon: Code,
                  color: "text-purple-400"
                },
                {
                  title: "Goals",
                  content: "Aspiring to become a skilled full-stack developer and contribute to innovative projects that solve real-world problems.",
                  icon: Zap,
                  color: "text-pink-400"
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/60 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center ${section.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <section.icon size={24} />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{section.title}</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Moving Skills Display */}
            <motion.div
              className="bg-slate-900/80 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/30 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center space-x-3">
                  <Cpu className="text-cyan-400" size={24} />
                  <span>Currently Focusing On:</span>
                </h4>
                <div className="flex items-center h-12">
                  <motion.span
                    key={currentSkill}
                    initial={{ opacity: 0, x: 30, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -30, scale: 0.8 }}
                    transition={{ 
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-2xl"
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

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {achievements.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center bg-slate-900/60 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20"
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
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center text-cyan-400"
                    >
                      <stat.icon size={24} />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-cyan-400 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: 0.5 + index * 0.1, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div className="text-center mb-16">
            <motion.h3 
              className="text-4xl lg:text-5xl font-bold text-white mb-8"
              whileHover={{ scale: 1.02 }}
            >
              Technical{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills
              </span>
            </motion.h3>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group relative"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="relative bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30 overflow-hidden h-full"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)",
                    borderColor: "rgba(6, 182, 212, 0.6)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div 
                    className="text-5xl mb-6 relative z-10 flex justify-center"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <skill.icon className="text-cyan-400" size={48} />
                  </motion.div>

                  <motion.h4 
                    className="text-2xl font-semibold text-white text-center mb-4"
                    whileHover={{ 
                      scale: 1.05,
                      color: "#06b6d4"
                    }}
                  >
                    {skill.title}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-gray-300 text-center mb-6 leading-relaxed"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {skill.description}
                  </motion.p>

                  {/* Skill level */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-sm">Proficiency</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.5, duration: 2 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Tech stack */}
                  <motion.div 
                    className="flex flex-wrap gap-2 justify-center"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {skill.techStack.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.3)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
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