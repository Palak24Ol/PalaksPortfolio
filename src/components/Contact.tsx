import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Terminal, Code2, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [currentAction, setCurrentAction] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const movingActions = [
    "Ready to Build the Future?",
    "Let's Create Something Amazing",
    "Have an AI Project? Let's Discuss",
    "Need Cloud Architecture? I'm Here",
    "Blockchain Innovation Awaits"
  ];

  const terminalCommands = [
    "$ git clone future-project.git",
    "$ npm install innovation",
    "$ docker run --name collaboration",
    "$ kubectl deploy amazing-ideas",
    "$ terraform apply success"
  ];

  // Toggle cursor every 500ms
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Change action text every 4 seconds
  useEffect(() => {
    const actionInterval = setInterval(() => {
      setCurrentAction(prev => (prev + 1) % movingActions.length);
    }, 4000);

    return () => clearInterval(actionInterval);
  }, []);

  // Terminal effect
  useEffect(() => {
    const command = terminalCommands[currentAction];
    setTerminalLines(prev => [...prev.slice(-3), command]);
  }, [currentAction]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'palakj.ug23.cs@nitp.ac.in', 
      href: 'mailto: palakj.ug23.cs@nitp.ac.in',
      color: 'from-cyan-400 to-blue-400'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+91 9450081431', 
      href: 'tel:+919450081431',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: MapPin, 
      label: 'Location', 
      value: 'Gorakhpur, India',
      href: 'https://www.google.com/maps/place/Gorakhpur,+Uttar+Pradesh/@26.7637151,83.4039116,12z/data=!3m1!4b1!4m6!3m5!1s0x3991446a0c332489:0x1ff3f97fdcc6bfa2!8m2!3d26.7605545!4d83.3731675!16zL20vMDRicXZ2?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D',
      color: 'from-green-400 to-cyan-400'
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github', label: 'GitHub', color: 'hover:text-cyan-400' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-purple-400' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-400' },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            <span className="text-cyan-300 font-mono text-sm">CONTACT.INIT()</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-mono">
            Get In{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          {/* Enhanced Moving Action Text */}
          <motion.div className="h-20 flex flex-col items-center justify-center mb-4">
            <motion.span
              key={currentAction}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold text-2xl lg:text-3xl font-mono"
            >
              {movingActions[currentAction]}
            </motion.span>
            <motion.span
              animate={{ opacity: showCursor ? 1 : 0 }}
              transition={{ duration: 0.1 }}
              className="ml-2 text-cyan-400 font-bold text-3xl"
            >
              _
            </motion.span>
          </motion.div>

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/80 backdrop-blur-xl rounded-lg border border-cyan-400/30 p-4 mb-6 font-mono text-sm max-w-md mx-auto"
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-400 ml-2">palak@contact:~</span>
            </div>
            <div className="space-y-1">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-cyan-400"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-mono">
            Ready to build the next generation of technology? Let's collaborate on something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                <span className="text-cyan-400">&gt;</span> Let's_Connect()
              </h3>
              <p className="text-gray-300 text-lg mb-8 font-mono">
                I'm always excited to discuss cutting-edge projects, innovative solutions, and potential collaborations in AI, blockchain, and cloud technologies.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center`}>
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-mono">{info.label}</p>
                    <p className="text-white font-semibold font-mono group-hover:text-cyan-400 transition-colors duration-300">{info.value}</p>
                  </div>
                  <motion.div
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <Code2 className="text-cyan-400" size={16} />
                  </motion.div>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4 font-mono">
                <span className="text-cyan-400">&gt;</span> Social_Networks[]
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, y: -5, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-slate-900/50 backdrop-blur-lg rounded-full flex items-center justify-center border border-cyan-500/20 hover:border-cyan-500/40 text-gray-400 ${social.color} transition-all duration-300`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 relative overflow-hidden"
          >
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

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                <span className="text-cyan-400">&gt;</span> Send_Message()
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    const name =
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40 transition-all duration-300 font-mono"
                    placeholder='"Your Name"'
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    const email =
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40 transition-all duration-300 font-mono"
                    placeholder='"your.email@domain.com"'
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                    const message =
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40 transition-all duration-300 resize-none font-mono"
                    placeholder='"Tell me about your innovative project..."'
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 font-mono relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">Execute_Send()</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <Send size={18} />
                  </motion.div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;