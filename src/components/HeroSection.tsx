
import { motion, useAnimation } from 'framer-motion';
import { ArrowDown, Download, Mail, MapPin, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const controls = useAnimation();

  const roles = [
    'AI Developer',
    'Web Engineer', 
    'Data Science Enthusiast',
    'Open Source Contributor',
    'Full Stack Developer'
  ];

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';

    const typeWriter = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        currentText = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        currentText = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      if (typedRef.current) {
        typedRef.current.textContent = currentText;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        setCurrentRoleIndex(roleIndex);
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      setTimeout(typeWriter, typeSpeed);
    };

    typeWriter();
  }, []);

  useEffect(() => {
    controls.start({
      background: [
        'linear-gradient(45deg, #3B82F6, #14B8A6)',
        'linear-gradient(45deg, #6366F1, #10B981)',
        'linear-gradient(45deg, #14B8A6, #3B82F6)',
      ],
      transition: { duration: 4, repeat: Infinity }
    });
  }, [controls]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* AI-themed floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i * 6)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + (i * 0.2),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {i % 3 === 0 ? (
              <Sparkles className="w-4 h-4 text-sky-400" />
            ) : i % 3 === 1 ? (
              <Zap className="w-3 h-3 text-teal-400" />
            ) : (
              <div className="w-2 h-2 bg-indigo-400 rounded-full" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced name with gradient animation */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-sky-200 to-teal-200 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          >
            <motion.span
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "linear" 
              }}
              style={{
                backgroundSize: "200% 200%",
                backgroundImage: "linear-gradient(45deg, #F8FAFC, #3B82F6, #14B8A6, #F8FAFC)"
              }}
              className="bg-clip-text text-transparent"
            >
              Hi, I'm Subash S
            </motion.span>
          </motion.h1>

          {/* Enhanced typing animation with glow effect */}
          <motion.div
            className="text-xl md:text-2xl mb-8 h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span 
              ref={typedRef} 
              className="text-slate-300 border-r-2 border-sky-400 pr-1"
              animate={{
                textShadow: [
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(20, 184, 166, 0.7)",
                  "0 0 10px rgba(59, 130, 246, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="ml-1 w-1 h-6 bg-sky-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>

          {/* Enhanced location with icon animation */}
          <motion.div
            className="flex items-center justify-center gap-2 text-slate-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin size={16} className="text-teal-400" />
            </motion.div>
            <span>Karur, Tamil Nadu, India</span>
          </motion.div>

          {/* Enhanced description with stagger animation */}
          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Passionate about creating innovative solutions that bridge technology and human needs.{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              I specialize in building scalable applications and exploring the frontiers of AI.
            </motion.span>
          </motion.p>

          {/* Enhanced CTA buttons with advanced hover effects */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 text-white px-8 py-3 rounded-full transition-all duration-300 shadow-lg shadow-sky-500/25"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <Mail className="mr-2 relative z-10" size={20} />
                <span className="relative z-10">Get In Touch</span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 hover:border-sky-400 px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                onClick={() => window.open('https://drive.google.com/file/d/1RIlaY3Y4dqcaqThZO1g6jlUivzvk0dvB/view?usp=drive_link', '_blank')}
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-slate-400 hover:text-sky-400 transition-colors group"
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.div
              className="p-2 rounded-full border border-slate-600 group-hover:border-sky-400 transition-colors"
              whileHover={{ 
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" 
              }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
