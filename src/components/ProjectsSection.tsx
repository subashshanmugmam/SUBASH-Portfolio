
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Sparkles, Zap, Brain, Code } from 'lucide-react';
import { useState } from 'react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'AI Help Bot',
      description: 'Intelligent chatbot powered by natural language processing, providing 24/7 customer support with contextual understanding.',
      tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: Brain,
      gradient: 'from-sky-500/20 to-indigo-500/20',
      glowColor: 'shadow-sky-500/20'
    },
    {
      title: 'MSME Optimization Platform',
      description: 'Comprehensive platform for small businesses to optimize operations, track performance metrics, and improve efficiency.',
      tech: ['Next.js', 'PostgreSQL', 'Python', 'TensorFlow'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: Zap,
      gradient: 'from-teal-500/20 to-emerald-500/20',
      glowColor: 'shadow-teal-500/20'
    },
    {
      title: 'Budget Calculator Pro',
      description: 'Advanced personal finance management tool with AI-powered insights and predictive budgeting capabilities.',
      tech: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: Sparkles,
      gradient: 'from-indigo-500/20 to-purple-500/20',
      glowColor: 'shadow-indigo-500/20'
    },
    {
      title: 'Retail POS System',
      description: 'Modern point-of-sale system with inventory management, analytics, and multi-location support.',
      tech: ['Vue.js', 'Express.js', 'MySQL', 'Stripe'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: Code,
      gradient: 'from-emerald-500/20 to-teal-500/20',
      glowColor: 'shadow-emerald-500/20'
    },
    {
      title: 'React Movie Search',
      description: 'Dynamic movie discovery app with advanced filtering, personalized recommendations, and social features.',
      tech: ['React', 'Redux', 'TMDB API', 'Tailwind'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: Sparkles,
      gradient: 'from-purple-500/20 to-pink-500/20',
      glowColor: 'shadow-purple-500/20'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span className="text-sky-300 text-sm font-medium">Featured Work</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{
              backgroundSize: "200% 200%",
              backgroundImage: "linear-gradient(45deg, #F8FAFC, #3B82F6, #14B8A6, #F8FAFC)"
            }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            AI integration, and modern web technologies.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card 
                  className={`bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-sky-500/50 transition-all duration-500 h-full group overflow-hidden relative ${project.glowColor} hover:shadow-2xl`}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    animate={{
                      background: hoveredProject === index ? [
                        `linear-gradient(45deg, ${project.gradient.split(' ')[1]}, ${project.gradient.split(' ')[3]})`,
                        `linear-gradient(135deg, ${project.gradient.split(' ')[3]}, ${project.gradient.split(' ')[1]})`,
                        `linear-gradient(45deg, ${project.gradient.split(' ')[1]}, ${project.gradient.split(' ')[3]})`
                      ] : undefined
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Project icon/image area */}
                  <div className="relative overflow-hidden">
                    <motion.div 
                      className={`w-full h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={hoveredProject === index ? {
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <project.icon size={48} className="text-white/80" />
                      </motion.div>
                      
                      {/* Floating particles */}
                      {hoveredProject === index && [...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </motion.div>
                    
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <motion.h3 
                        className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                      >
                        {project.title}
                      </motion.h3>
                      {project.featured && (
                        <motion.span 
                          className="px-2 py-1 bg-gradient-to-r from-sky-500 to-teal-500 text-white text-xs rounded-full shadow-lg"
                          animate={{ 
                            boxShadow: [
                              "0 0 10px rgba(59, 130, 246, 0.5)",
                              "0 0 20px rgba(20, 184, 166, 0.7)",
                              "0 0 10px rgba(59, 130, 246, 0.5)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Featured
                        </motion.span>
                      )}
                    </div>
                    
                    <motion.p 
                      className="text-slate-300 text-sm mb-4 leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600/50 hover:border-sky-500/50 transition-colors duration-300"
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: "rgba(59, 130, 246, 0.1)" 
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white w-full shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-sky-500/50 transition-all duration-300"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github size={16} />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-sky-400 px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300"
              onClick={() => window.open('https://github.com/subash-s', '_blank')}
            >
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
