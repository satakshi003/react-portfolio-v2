import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import ScrollSection from '../effects/ScrollSection';
import MagneticButton from '../effects/MagneticButton';
import { personalInfo } from '../../data/content';

/**
 * Premium Contact Section
 */
export default function Contact() {
  const currentYear = new Date().getFullYear();

  const contactCards = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'pink',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Let\'s Connect',
      href: personalInfo.linkedin,
      color: 'purple',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      color: 'rose',
    },
  ];

  return (
    <ScrollSection id="contact" className="pb-8">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', delay: 0.1 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-8"
        >
          <Sparkles size={32} className="text-pink-400" />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-pink-400 text-sm font-medium uppercase tracking-wider mb-4"
        >
          Get In Touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Let's Work{' '}
          <span className="gradient-text-pink">Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-lg mb-12 leading-relaxed"
        >
          I'm currently looking for new opportunities. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-3 gap-4 mb-12"
        >
          {contactCards.map((card, index) => {
            const CardWrapper = card.href ? 'a' : 'div';
            const cardProps = card.href
              ? { href: card.href, target: card.href.startsWith('mailto') ? undefined : '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <motion.div
                key={card.label}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <CardWrapper
                  {...cardProps}
                  className={`block p-6 rounded-2xl premium-card text-center group ${card.href ? 'cursor-pointer' : ''}`}
                >
                  <card.icon
                    className={`w-6 h-6 text-${card.color}-400 mx-auto mb-3 group-hover:scale-110 transition-transform`}
                  />
                  <p className="text-gray-600 text-xs uppercase tracking-wider mb-1">
                    {card.label}
                  </p>
                  <p className={`text-white text-sm group-hover:text-${card.color}-400 transition-colors truncate`}>
                    {card.value}
                  </p>
                </CardWrapper>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <MagneticButton
            variant="primary"
            href={`mailto:${personalInfo.email}`}
            size="lg"
          >
            Send Me an Email
            <ArrowUpRight size={20} />
          </MagneticButton>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-32 pt-8 border-t border-white/5"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <motion.div
            className="text-2xl font-bold gradient-text-pink"
            whileHover={{ scale: 1.05 }}
          >
            {personalInfo.name.split(' ')[0]}
          </motion.div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 text-gray-500 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/10 text-gray-500 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full border border-white/10 text-gray-500 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </ScrollSection>
  );
}
