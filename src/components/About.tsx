import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-slate-900/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <p className="text-xl text-cyan-400 mb-6 font-medium">
              I'm a passionate developer currently pursuing B.Tech in Computer
              Science from IIIT Nagpur.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Results-driven MERN stack developer with hands-on experience in
              building scalable, full-stack web applications. Skilled in
              crafting responsive interfaces, building RESTful APIs, and
              implementing AI-enhanced features that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Proven contributor to open-source projects with a passion for
              clean code, modern development practices, and creating innovative
              technology solutions.
            </p>
          </motion.div>
          <motion.div className="text-center" variants={itemVariants}>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <img
                src="/your-image.jpg" // If your image is in the public folder
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover z-10 border-4 border-cyan-400 shadow-lg"
              />
              <Code className="w-32 h-32 text-cyan-400 z-10 absolute bottom-4 right-4 opacity-80" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Computer Science Student
            </h3>
            <p className="text-gray-300">IIIT Nagpur</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
