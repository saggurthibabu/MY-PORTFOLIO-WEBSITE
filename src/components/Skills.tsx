import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTilt } from '@/hooks/useTilt';
import {
  Brain, BarChart3, Sparkles, Database, Cpu,
  type LucideIcon,
} from 'lucide-react';

interface Skill {
  icon: LucideIcon;
  name: string;
  color: string;
}

const skills: Skill[] = [
  { icon: Brain, name: 'Python', color: '#3776ab' },
  { icon: Brain, name: 'Java', color: '#f89820' },
  { icon: Brain, name: 'Artificial Intelligence', color: '#ff2244' },
  { icon: BarChart3, name: 'Machine Learning', color: '#00f0ff' },
  { icon: BarChart3, name: 'Data Analytics', color: '#42e6a4' },
  { icon: Sparkles, name: 'Generative AI', color: '#ff6b9d' },
  { icon: Cpu, name: 'Deep Learning', color: '#ff3366' },
  { icon: Database, name: 'SQL & Databases', color: '#00f0ff' },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const tilt = useTilt(10);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.handleMouseMove}
      onMouseLeave={tilt.handleMouseLeave}
      className="reveal relative glass-panel-hover p-6 rounded-2xl overflow-hidden group cursor-pointer"
      style={{
        transform: tilt.transform,
        transition: 'transform 0.2s ease-out',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="absolute inset-0 rounded-2xl border border-neon-red/20 group-hover:border-neon-red/60 transition-colors duration-300" />
      <div className="light-sweep absolute inset-0 rounded-2xl overflow-hidden pointer-events-none" />
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${tilt.glarePos.x}% ${tilt.glarePos.y}%, rgba(255,34,68,0.15), transparent 50%)`,
        }}
      />
      <div className="relative flex items-center justify-center mb-4">
        <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-ink-800/50 border border-neon-red/20 group-hover:border-neon-red/50 transition-all duration-300">
          <skill.icon
            className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
            style={{ color: skill.color, filter: `drop-shadow(0 0 8px ${skill.color}80)` }}
          />
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `0 0 20px ${skill.color}40` }} />
        </div>
      </div>
      <h3 className="relative font-display font-bold text-sm md:text-base text-white text-center tracking-wide group-hover:neon-text-red transition-all duration-300">
        {skill.name}
      </h3>
      <div className="relative mt-3 flex items-center justify-center gap-1">
        <span className="font-mono text-[10px] text-neon-red/40 group-hover:text-neon-red/70 transition-colors">
          SKILL_{(index + 1).toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-red/40" />
          <span className="font-mono text-sm text-neon-red/60 tracking-widest">02 / SKILLS</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-red/40" />
        </div>
        <h2 className="reveal section-title text-3xl md:text-5xl text-white mb-12 text-center">
          Technical <span className="neon-text-red">Arsenal</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
