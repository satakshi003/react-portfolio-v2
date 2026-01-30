import { motion } from 'framer-motion';
import { skills } from '../../data/content';


export default function SkillsPanel() {
  const allSkills = [
    ...skills.languages.map(s => ({ name: s, category: 'language' })),
    ...skills.frontend.map(s => ({ name: s, category: 'frontend' })),
    ...skills.backend.map(s => ({ name: s, category: 'backend' })),
    ...skills.databases.map(s => ({ name: s, category: 'database' })),
    ...skills.tools.map(s => ({ name: s, category: 'tool' })),
  ];

  const getVersion = (skill) => {
    const versions = {
      'JavaScript': '3+ years',
      'React': '2+ years',
      'Node.js': '2+ years',
      'MongoDB': '1+ year',
      'Git': '3+ years',
    };
    return versions[skill] || 'proficient';
  };

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center">
              <span className="text-xl">📦</span>
            </div>
            <h1 className="text-2xl font-bold text-white">package.json</h1>
          </div>


          <div className="bg-[#252526] rounded-lg border border-[#3c3c3c] overflow-hidden">
            <div className="p-4 font-mono text-sm">
              <div className="flex">
                <span className="line-number">1</span>
                <span className="text-[#cccccc]">{'{'}</span>
              </div>

              <div className="flex">
                <span className="line-number">2</span>
                <span className="ml-4">
                  <span className="syntax-variable">"name"</span>
                  <span className="text-[#cccccc]">: </span>
                  <span className="syntax-string">"satakshi-skills"</span>
                  <span className="text-[#cccccc]">,</span>
                </span>
              </div>

              <div className="flex">
                <span className="line-number">3</span>
                <span className="ml-4">
                  <span className="syntax-variable">"version"</span>
                  <span className="text-[#cccccc]">: </span>
                  <span className="syntax-string">"2025.1.0"</span>
                  <span className="text-[#cccccc]">,</span>
                </span>
              </div>

              <div className="flex">
                <span className="line-number">4</span>
                <span className="ml-4">
                  <span className="syntax-variable">"dependencies"</span>
                  <span className="text-[#cccccc]">: {'{'}</span>
                </span>
              </div>


              {allSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${skill.category}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.03 }}
                  className="flex group"
                >
                  <span className="line-number">{5 + index}</span>
                  <span className="ml-8">
                    <span className="syntax-variable group-hover:text-[#3b82f6] transition-colors">
                      "{skill.name}"
                    </span>
                    <span className="text-[#cccccc]">: </span>
                    <span className="syntax-string">"{getVersion(skill.name)}"</span>
                    {index < allSkills.length - 1 && <span className="text-[#cccccc]">,</span>}
                  </span>
                </motion.div>
              ))}

              <div className="flex">
                <span className="line-number">{5 + allSkills.length}</span>
                <span className="ml-4 text-[#cccccc]">{'}'}</span>
              </div>

              <div className="flex">
                <span className="line-number">{6 + allSkills.length}</span>
                <span className="text-[#cccccc]">{'}'}</span>
              </div>
            </div>
          </div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 grid grid-cols-2 gap-4"
          >
            {Object.entries({
              'Languages': skills.languages,
              'Frontend': skills.frontend,
              'Backend': skills.backend,
              'Tools': skills.tools
            }).map(([category, items], catIndex) => (
              <div
                key={category}
                className="p-4 rounded-lg bg-[#252526] border border-[#3c3c3c]"
              >
                <h3 className="text-[#3b82f6] text-sm font-semibold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs text-[#cccccc] bg-[#37373d] rounded border border-[#4e4e4e] hover:border-[#3b82f6] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
