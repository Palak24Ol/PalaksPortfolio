import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
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
      href: 'mailto:palakj.ug23.cs@nitp.ac.in',
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
      href: 'https://www.google.com/maps/place/Gorakhpur,+Uttar+Pradesh',
      color: 'from-green-400 to-cyan-400'
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Palak24Ol', label: 'GitHub', color: 'hover:text-cyan-400' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/palakjaiswal2401/', label: 'LinkedIn', color: 'hover:text-blue-400' }
  ];

  return (
    <section id="contact" className="py-20 relative">
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

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Feel free to reach out if you have any questions, want to collaborate on a project, or just want to say hello!
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
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Social Links
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40 transition-all duration-300"
                    placeholder="your.email@domain.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/40 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Send size={18} />
                    <span>Send Message</span>
                  </span>
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