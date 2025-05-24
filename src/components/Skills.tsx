
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
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

  const skills = [
    { category: "Languages", items: ["Python", "C++", "JavaScript", "HTML", "CSS", "SQL"] },
    { category: "Frameworks", items: ["React.js", "Next.js", "Node.js", "Express.js"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "GitHub", "Postman", "Vercel", "Render", "Tailwind CSS"] }
  ];

  return (
    <motion.section 
      id="skills" 
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
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-lg border-cyan-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-center text-xl">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-cyan-500/10 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-gray-300">{skill}</span>
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                      </motion.div>
                    ))}
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

export default Skills;
