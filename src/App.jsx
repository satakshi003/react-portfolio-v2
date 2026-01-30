import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';


import TitleBar from './components/ide/TitleBar';
import FileExplorer from './components/ide/FileExplorer';
import TabBar from './components/ide/TabBar';
import Terminal from './components/ide/Terminal';
import IDECursor from './components/ide/IDECursor';


import HeroPanel from './components/panels/HeroPanel';
import AboutPanel from './components/panels/AboutPanel';
import SkillsPanel from './components/panels/SkillsPanel';
import ProjectsPanel from './components/panels/ProjectsPanel';
import ExperiencePanel from './components/panels/ExperiencePanel';
import ContactPanel from './components/panels/ContactPanel';


const sections = [
  { id: 'hero', filename: 'Hero.jsx', component: HeroPanel },
  { id: 'about', filename: 'About.md', component: AboutPanel },
  { id: 'skills', filename: 'Skills.json', component: SkillsPanel },
  { id: 'projects', filename: 'Projects.jsx', component: ProjectsPanel },
  { id: 'experience', filename: 'Experience.md', component: ExperiencePanel },
  { id: 'contact', filename: 'Contact.js', component: ContactPanel },
];

function App() {
  const [activeSection, setActiveSection] = useState(0);


  useEffect(() => {
    const handleScroll = () => {

      const scrollPosition = window.scrollY + 300;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navigateToSection = (index) => {
    const section = sections[index];
    const element = document.getElementById(section.id);
    if (element) {

      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(index);
    }
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      <div className="hidden md:block">
        <IDECursor />
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e1e]">
        <TitleBar />
        <div className="md:pl-60 border-b border-[#3c3c3c]">
          <TabBar
            sections={sections}
            activeSection={activeSection}
            onSectionChange={navigateToSection}
          />
        </div>
      </div>

      <div className="fixed top-[32px] bottom-[36px] left-0 w-60 z-40 bg-[#252526] border-r border-[#3c3c3c] hidden md:block overflow-hidden">
        <FileExplorer
          activeSection={activeSection}
          onSectionChange={navigateToSection}
          sections={sections}
        />
      </div>

      <main className="md:ml-60 pt-[80px] pb-[40px]">
        {sections.map((section, index) => {
          const PanelComponent = section.component;

          return (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.4 }}
              className="min-h-[80vh] border-b border-[#3c3c3c] last:border-b-0"
            >
              <PanelComponent />
            </motion.section>
          );
        })}
      </main>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Terminal activeSection={activeSection} sections={sections} />
      </div>
    </div>
  );
}

export default App;
