import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Github, Linkedin } from 'lucide-react';
import AnimatedText from '../effects/AnimatedText';
import MagneticButton from '../effects/MagneticButton';
import { personalInfo } from '../../data/content';

/**
 * Premium Hero Section with profile picture and animations
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Small intro line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-pink-500" />
          <span className="text-sm text-gray-400 uppercase tracking-[0.3em]">
            Hello, I'm
          </span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-pink-500" />
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          className="mb-10"
        >
          <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto">
            {/* Animated ring */}
            <div className="absolute inset-0 rounded-full ring-pulse" />

            {/* Rotating gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 animate-spin-slow opacity-60 blur-sm" />

            {/* Profile image container */}
            <div className="absolute inset-1 rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
              {/* Replace this with your photo */}
              <img
                src="/profile.png"
                alt="Satakshi Subhasmita"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="hidden w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 items-center justify-center">
                <span className="text-4xl">👩‍💻</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <AnimatedText
            text={personalInfo.name}
            className="justify-center gradient-text-pink"
            delay={0.4}
          />
        </h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-light mb-6"
        >
          {personalInfo.role}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting beautiful, responsive web experiences with clean code
          and modern technologies. Passionate about creating impactful digital solutions.
        </motion.p>

        {/* CTA Buttons */}
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

        {/* Social links */}
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
            className="group p-3 rounded-full border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} className="text-gray-500 group-hover:text-pink-400 transition-colors" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-full border border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="text-gray-500 group-hover:text-pink-400 transition-colors" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-gray-600 hover:text-pink-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-[0.2em] mb-2">Scroll</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-2 h-2 rounded-full bg-pink-500 animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-10 w-2 h-2 rounded-full bg-purple-500 animate-pulse-glow delay-500" />
      <div className="absolute top-1/2 left-1/4 w-1 h-1 rounded-full bg-pink-400 animate-pulse-glow delay-300" />
    </section>
  );
}
