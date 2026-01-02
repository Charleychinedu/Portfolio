import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Users, Award } from 'lucide-react';

export function AboutSection() {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1, 
  }); 

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Optimizing applications for maximum speed and efficiency',
    },
    {
      icon: Users,
      title: 'User-Focused',
      description: 'Creating intuitive interfaces that users love to interact with',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Delivering high-quality solutions that exceed expectations',
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/50" ref={ref}> 
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-foreground text-3xl mb-4">About Me</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate React.js developer with a focus on creating beautiful, 
            functional, and user-friendly web applications. With years of experience 
            in modern web technologies, I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

   
      </div>
    </section>
  );
}
