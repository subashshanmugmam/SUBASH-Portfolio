
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const timeline = [
    {
      year: 'July-2025',
      title: 'Junior Software Developer',
      company: 'Mr.Innovator',
      description: 'Leading full-stack development projects with focus on AI integration and scalable architectures.',
      icon: Briefcase,
    },
    {
      year: 'May-2024',
      title: 'Data Analyst Intern',
      company: 'Prodigy InfoTech',
      description: 'Developed machine learning models for predictive analytics and natural language processing.',
      icon: GraduationCap,
    },
    {
      year: 'Dec-2024',
      title: 'Web Developer Intern',
      company: 'CodeSoft',
      description: 'Built responsive web applications using React, Node.js, and modern development practices.',
      icon: Briefcase,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer with a deep interest in artificial intelligence and data science. 
            My journey in technology has been driven by curiosity and a desire to solve complex problems 
            through innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Based in the vibrant city of Karur, Tamil Nadu, I've been crafting digital experiences 
                    that make a difference. My expertise spans across full-stack development, with a particular 
                    passion for AI and machine learning applications.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring the latest developments in artificial intelligence, 
                    contributing to open-source projects, or mentoring aspiring developers in my community.
                  </p>
                  <div className="flex items-center gap-2 pt-4">
                    <MapPin size={16} className="text-blue-500" />
                    <span className="text-sm">Karur, Tamil Nadu, India</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Professional Journey</h3>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                        <item.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-semibold text-blue-400">{item.year}</span>
                          <Calendar size={14} className="text-gray-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                        <p className="text-gray-400 text-sm mb-3">{item.company}</p>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
