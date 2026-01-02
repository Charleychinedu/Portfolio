import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart, payment integration, and admin dashboard',
      tags: ['React', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&h=800&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team collaboration features',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations and responsive design',
      tags: ['React', 'Framer Motion', 'CSS'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location search and 7-day forecast',
      tags: ['React', 'API', 'Charts'],
      image: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?w=1200&h=800&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media App',
      description: 'Social networking platform with posts, comments, likes, and user profiles',
      tags: ['React', 'Firebase', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1520975698517-3c3c7b6f7c3f?w=1200&h=800&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization dashboard with interactive charts and real-time metrics',
      tags: ['Next.js', 'Recharts', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}} //
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-foreground text-3xl mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ title, description, tags, image, liveUrl, githubUrl }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={liveUrl}
                    className="p-2 bg-primary rounded-full hover:bg-primary/80 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href={githubUrl}
                    className="p-2 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-foreground text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
