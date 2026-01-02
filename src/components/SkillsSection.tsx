import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 95 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'REST APIs', level: 90 },
        { name: 'MongoDB', level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-foreground text-4xl font-bold mb-3">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border/50 rounded-xl p-8 hover:border-border/80 transition-colors duration-300"
            >
              <h3 className="text-foreground text-xl font-semibold mb-8">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                  >
                    <span className="text-sm font-medium text-foreground block mb-3">{skill.name}</span>
                    <div className="h-3 bg-muted/40 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          index % 4 === 0
                            ? 'bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400'
                            : index % 4 === 1
                            ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400'
                            : index % 4 === 2
                            ? 'bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400'
                            : 'bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400'
                        }`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: 0.4 + index * 0.08,
                          ease: 'easeOut',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
