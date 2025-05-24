
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Award } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      title: "Goldman Sachs Software Engineering Experience",
      organization: "Goldman Sachs (Forage)",
      description: "Comprehensive software engineering simulation covering real-world scenarios"
    },
    {
      title: "Google Cloud Skills Boost - Attention Mechanism",
      organization: "Google Cloud",
      description: "Advanced AI/ML certification focusing on attention mechanisms in neural networks"
    }
  ];

  return (
    <motion.section 
      id="certifications" 
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
          Certifications
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-slate-800/50 backdrop-blur-lg border-cyan-500/20 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-8 h-8 text-yellow-400" />
                    <div>
                      <CardTitle className="text-white text-xl">{cert.title}</CardTitle>
                      <p className="text-cyan-400 font-medium">{cert.organization}</p>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300 text-base">
                    {cert.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
