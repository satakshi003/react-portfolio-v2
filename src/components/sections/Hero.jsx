import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Github, Linkedin } from 'lucide-react';
import AnimatedText from '../effects/AnimatedText';
import MagneticButton from '../effects/MagneticButton';
import { personalInfo } from '../../data/content';
import profileImg from './my-profile.png';


export default function Hero() {
  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#3b82f6]" />
          <span className="text-sm text-gray-400 uppercase tracking-[0.3em]">
            Hello, I'm
          </span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#3b82f6]" />
        </motion.div>


        <div className="mb-10 relative z-20">
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto">

            <div className="absolute inset-0 rounded-full ring-pulse" />

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#3b82f6] animate-spin-slow opacity-60 blur-sm" />
            <div className="absolute inset-1 rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
              <img
                src={profileImg}
                alt="Satakshi Subhasmita"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full bg-gradient-to-br from-[#3b82f6]/20 to-[#06b6d4]/20 items-center justify-center">
                <span className="text-4xl">👩‍💻</span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <AnimatedText
            text={personalInfo.name}
            className="justify-center gradient-text-accent"
            delay={0.4}
          />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light mb-6"
        >
          {personalInfo.role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting beautiful, responsive web experiences with clean code
          and modern technologies. Passionate about creating impactful digital solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton variant="primary" href="#projects" size="lg">
            View My Work
            <ExternalLink size={18} />
          </MagneticButton>
          <MagneticButton variant="secondary" href="#contact" size="lg">
            Get In Touch
          </MagneticButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-white/10 hover:border-[#3b82f6]/50 hover:bg-[#3b82f6]/10 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} className="text-gray-500 group-hover:text-[#3b82f6] transition-colors" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-white/10 hover:border-[#3b82f6]/50 hover:bg-[#3b82f6]/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-gray-500 group-hover:text-[#3b82f6] transition-colors" />
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-gray-600 hover:text-[#3b82f6] transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-[0.2em] mb-2">Scroll</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
      <div className="absolute top-1/3 left-10 w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-10 w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse-glow delay-500" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 rounded-full bg-[#3b82f6] animate-pulse-glow delay-300" />
    </section>
  );
}
