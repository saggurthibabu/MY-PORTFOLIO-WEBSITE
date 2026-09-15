import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Brain, Ticket, Globe, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    icon: Brain,
    title: 'Interactive AI Neural Network Visualizer',
    desc: 'A web-based tool that visualizes neural network architectures in real-time, showing layer connections, activation functions, and data flow through the network.',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    accent: '#ff2244',
    url: 'https://saggurthibabu.github.io/INTERACTIVE-AI-NEURAL-NETWORK-VISUALIZER/',
  },
  {
    icon: Ticket,
    title: 'Movie Booking System',
    desc: 'A full-featured movie ticket booking platform with seat selection, payment integration, showtime management, and an admin dashboard for theater operators.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    accent: '#00f0ff',
    url: 'https://saggurthibabu.github.io/AI-MOVIE-BOOKING-SYSTEM/',
  },
  {
    icon: Globe,
    title: 'Portfolio Website',
    desc: 'A cinematic, cyberpunk-inspired portfolio website built with React, featuring glassmorphism design, smooth animations, and a futuristic AI workstation aesthetic.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    accent: '#42e6a4',
    url: 'https://cyberpunk-ai-portfol-uorn.bolt.host/'
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0] & { url?: string }; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => {
        if (project.url) {
          window.open(project.url, '_blank', 'noopener,noreferrer');
        }
      }}
      className="reveal relative glass-panel-hover p-8 rounded-2xl overflow-hidden group cursor-pointer"
      style={{ transitionDelay: `${index * 120}ms` }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="absolute inset-0 rounded-2xl pointer-events-none animated-border" />
      <div className="light-sweep absolute inset-0 rounded-2xl overflow-hidden pointer-events-none" />
      <span className="hud-corner hud-corner-tl" />
      <span className="hud-corner hud-corner-tr" />
      <span className="hud-corner hud-corner-bl" />
      <span className="hud-corner hud-corner-br" />

      <div className="relative flex items-center justify-between mb-6">
        <span className="font-mono text-xs text-neon-red/40 tracking-widest">
          PROJECT_{(index + 1).toString().padStart(2, '0')}
        </span>
        <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-neon-red group-hover:rotate-45 transition-all duration-300" />
      </div>

      <div className="relative flex items-center justify-center mb-6">
        <div className="relative w-20 h-20 flex items-center justify-center rounded-xl bg-ink-800/50 border border-neon-red/20 group-hover:border-neon-red/50 transition-all duration-500">
          <project.icon className="w-10 h-10 transition-all duration-500 group-hover:scale-110" style={{ color: project.accent, filter: `drop-shadow(0 0 10px ${project.accent}80)` }} />
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `0 0 25px ${project.accent}40` }} />
        </div>
      </div>

      <h3 className="relative font-display font-bold text-lg md:text-xl text-white mb-3 group-hover:neon-text-red transition-all duration-300 text-center">
        {project.title}
      </h3>

      <div className="relative overflow-hidden transition-all duration-500" style={{ maxHeight: expanded ? '200px' : '60px' }}>
        <p className="font-body text-sm text-white/50 leading-relaxed text-center">{project.desc}</p>
      </div>

      <div className="relative mt-6 flex flex-wrap items-center justify-center gap-2">
        {project.tags.map((tag, j) => (
          <span key={j} className="px-3 py-1 rounded-full bg-ink-700/50 border border-neon-red/15 font-mono text-[10px] text-white/40 group-hover:text-neon-red/70 group-hover:border-neon-red/30 transition-all duration-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="relative mt-4 flex items-center justify-center">
        <div className="font-mono text-[10px] text-neon-red/40 transition-opacity duration-300" style={{ opacity: expanded ? 0 : 1 }}>
          [ HOVER TO EXPAND ]
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-red/40" />
          <span className="font-mono text-sm text-neon-red/60 tracking-widest">05 / PROJECTS</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-red/40" />
        </div>
        <h2 className="reveal section-title text-3xl md:text-5xl text-white mb-12 text-center">
          Featured <span className="neon-text-red">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
