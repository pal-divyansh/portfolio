
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Smartphone, Server } from 'lucide-react';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const projects = [
    {
      title: "Study Buddy",
      description: "AI-powered academic assistant that helps students with their studies using advanced language models and LangChain.",
      technologies: ["Python", "LangChain", "Streamlit", "AI/ML"],
      features: ["500+ users in 3 weeks", "AI-powered Q&A", "Study material generation"],
      github: "#",
      demo: "https://studyapp-vrcsrefm7kkw5gfpmhquyu.streamlit.app/",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Forever E-Commerce App",
      description: "Full-stack e-commerce mobile application with modern UI and seamless shopping experience built with React Native.",
      technologies: ["React Native", "Node.js", "MongoDB", "Express.js"],
      features: ["Cross-platform mobile app", "MERN backend integration", "Payment gateway"],
      github: "#",
      demo: "#",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat application with instant messaging and real-time communication features using Socket.IO.",
      technologies: ["Socket.IO", "Node.js", "Express.js", "React.js"],
      features: ["Real-time messaging", "User authentication", "Room-based chats"],
      github: "https://github.com/pal-divyansh/Chat_Application",
      demo: "#",
      icon: <Server className="w-6 h-6" />
    }
  ];

  return (
    <motion.section 
      id="projects" 
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-lg border-cyan-500/20 hover:border-purple-500/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.icon}
                    </motion.div>
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</p>
                      <ul className="text-sm text-gray-300 space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 pt-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
