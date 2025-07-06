
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI Help Bot',
      description: 'Intelligent chatbot powered by natural language processing, providing 24/7 customer support with contextual understanding.',
      tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'MSME Optimization Platform',
      description: 'Comprehensive platform for small businesses to optimize operations, track performance metrics, and improve efficiency.',
      tech: ['Next.js', 'PostgreSQL', 'Python', 'TensorFlow'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      title: 'Budget Calculator Pro',
      description: 'Advanced personal finance management tool with AI-powered insights and predictive budgeting capabilities.',
      tech: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Retail POS System',
      description: 'Modern point-of-sale system with inventory management, analytics, and multi-location support.',
      tech: ['Vue.js', 'Express.js', 'MySQL', 'Stripe'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'React Movie Search',
      description: 'Dynamic movie discovery app with advanced filtering, personalized recommendations, and social features.',
      tech: ['React', 'Redux', 'TMDB API', 'Tailwind'],
      image: '/api/placeholder/400/250',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, 
            AI integration, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <Card 
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-6xl text-white/20">🚀</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full"
            onClick={() => window.open('https://github.com/subash-s', '_blank')}
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
