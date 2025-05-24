
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users } from 'lucide-react';

const Extracurriculars = () => {
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

  return (
    <motion.section 
      id="extracurriculars" 
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
          Extracurriculars
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-slate-800/50 backdrop-blur-lg border-cyan-500/20">
            <CardHeader>
              <div className="flex items-center gap-4 mb-3">
                <Users className="w-10 h-10 text-purple-400" />
                <div>
                  <CardTitle className="text-white text-2xl">Marketing Lead</CardTitle>
                  <p className="text-cyan-400 font-medium text-lg">Crescendo - Music Club, IIIT Nagpur</p>
                </div>
              </div>
              <CardDescription className="text-gray-300 text-lg leading-relaxed">
                Led comprehensive content strategy and promotional campaigns to significantly increase student engagement 
                in music events and activities. Managed social media presence, organized promotional materials, 
                and coordinated with event teams to boost visibility and participation across campus.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Extracurriculars;
