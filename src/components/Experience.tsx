import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Terminal, Code2, GraduationCap, Award } from 'lucide-react';

interface ExperienceItem {
  title: string;
  organization: string;
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
      title: "B.Tech Computer Science",
      organization: "NIT Patna",
      icon: "🎓",
      iconBg: "linear-gradient(45deg, #06b6d4, #8b5cf6)",
      date: "2023 - 2027",
      category: "Education",
      techStack: ["Data Structures", "Algorithms", "Web Development", "Database Systems"],
      points: [
        "Currently pursuing Bachelor of Technology in Computer Science and Engineering",
        "Focusing on software development, data structures, and algorithms",
        "Active participant in coding competitions and technical events",
        "Maintaining strong academic performance while building practical projects",
      ],
    },
    {
      title: "Frontend Developer",
      organization: "Personal Projects",
      icon: "💻",
      iconBg: "linear-gradient(45deg, #10b981, #06b6d4)",
      date: "2023 - Present",
      category: "Development",
      techStack: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      points: [
        "Built multiple responsive web applications using React and modern JavaScript",
        "Implemented user-friendly interfaces with focus on accessibility and performance",
        "Created interactive components and integrated APIs for dynamic content",
        "Collaborated on open-source projects and contributed to the developer community",
      ],
    },
    {
      title: "UI/UX Design",
      organization: "Freelance Projects",
      icon: "🎨",
      iconBg: "linear-gradient(45deg, #8b5cf6, #ec4899)",
      date: "2023 - Present",
      category: "Design",
      techStack: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      points: [
        "Designed user interfaces for web and mobile applications",
        "Conducted user research and created user personas for better UX",
        "Developed wireframes, prototypes, and high-fidelity designs",
        "Collaborated with developers to ensure design implementation accuracy",
      ],
    }
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education': return GraduationCap;
      case 'Development': return Code2;
      case 'Design': return Award;
      default: return Terminal;
    }
  };

  return (
    <section id="experience" className="py-20 relative">
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
            className="text-gray-400 text-lg mb-4 tracking-wider uppercase"
          >
            My Journey So Far
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Education &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
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
                  {/* Timeline dot */}
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
                    </motion.div>
                  </motion.div>

                  {/* Experience card */}
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
                                className="text-2xl font-bold text-white mb-1"
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
                                {experience.organization}
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
                              <span className="text-sm font-medium">{experience.date}</span>
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.3 + 0.6, duration: 0.6 }}
                              viewport={{ once: true }}
                              className="flex items-center space-x-2 text-gray-400 bg-slate-800/50 px-4 py-2 rounded-full"
                            >
                              <CategoryIcon size={16} />
                              <span className="text-sm font-medium">{experience.category}</span>
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
                              className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30"
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
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: pointIndex * 0.1, duration: 0.5 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-4 text-gray-300 group/item"
                            >
                              <motion.div
                                whileHover={{ scale: 1.5, rotate: 180 }}
                                transition={{ duration: 0.3 }}
                                className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0 shadow-lg"
                              />
                              <motion.span
                                className="leading-relaxed text-base group-hover/item:text-white transition-colors duration-300"
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

        {/* Call to action */}
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
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Let's Connect</span>
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