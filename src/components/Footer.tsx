import { Linkedin, Github, Dribbble, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/chinedu-charles-eze/', label: 'LinkedIn' },
    { icon: Github, url: 'https://github.com/Charleychinedu', label: 'GitHub' },
    { icon: Dribbble, url: 'https://dribbble.com/eze-charles', label: 'Dribbble' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-primary"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Charles Eze. Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
