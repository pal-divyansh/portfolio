
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, School } from 'lucide-react';

const Education = () => {
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

  const education = [
    {
      institution: "IIIT Nagpur",
      degree: "Bachelor of Technology in Computer Science",
      duration: "June 2023 – June 2027",
      score: "CGPA - 8.12",
      location: "Maharashtra, India",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      institution: "Heritage International School",
      degree: "Class 12th",
      duration: "June 2021 – June 2022",
      score: "92.4%",
      location: "Uttar Pradesh, India",
      icon: <School className="w-8 h-8" />
    },
    {
      institution: "Dr V.S.E.C",
      degree: "Class 10th",
      duration: "June 2019 – June 2020",
      score: "94%",
      location: "Uttar Pradesh, India",
      icon: <School className="w-8 h-8" />
    }
  ];

  return (
    <motion.section 
      id="education" 
      className="py-20"
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
          Education
        </motion.h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400"></div>
          
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="relative flex items-start gap-8"
              >
                <motion.div 
                  className="relative z-10 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border-2 border-cyan-400/50"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {edu.icon}
                </motion.div>
                
                <motion.div 
                  className="flex-1"
                  whileHover={{ y: -5 }}
                >
                  <Card className="bg-slate-800/50 backdrop-blur-lg border-cyan-500/20 hover:border-purple-500/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-white text-2xl mb-2">{edu.institution}</CardTitle>
                          <p className="text-cyan-400 font-semibold text-lg mb-2">{edu.degree}</p>
                          <p className="text-gray-300 text-base">{edu.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-purple-400 font-medium text-lg">{edu.duration}</p>
                          <motion.div 
                            className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-400/30"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-cyan-300 font-bold text-lg">{edu.score}</span>
                          </motion.div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
