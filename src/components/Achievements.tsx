import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Trophy, Medal, Star } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'State-Level Handball Champion',
    desc: 'Led the team to victory in the state-level handball tournament, demonstrating exceptional teamwork, strategy, and athletic excellence.',
    level: 'STATE',
    rank: 'CHAMPION',
    color: '#ffd700',
  },
  {
    icon: Medal,
    title: 'National-Level Handball Runner-up',
    desc: 'Competed at the national level and secured the runner-up position, showcasing dedication and competitive spirit on a grand stage.',
    level: 'NATIONAL',
    rank: 'RUNNER-UP',
    color: '#c0c0c0',
  },
];

export default function Achievements() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="achievements" ref={sectionRef} className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-red/40" />
          <span className="font-mono text-sm text-neon-red/60 tracking-widest">04 / ACHIEVEMENTS</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-red/40" />
        </div>
        <h2 className="reveal section-title text-3xl md:text-5xl text-white mb-12 text-center">
          Awards & <span className="neon-text-red">Trophies</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((ach, i) => (
            <div
              key={i}
              className="reveal relative glass-panel-hover p-10 rounded-2xl overflow-hidden group"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="hud-corner hud-corner-tl" />
              <span className="hud-corner hud-corner-tr" />
              <span className="hud-corner hud-corner-bl" />
              <span className="hud-corner hud-corner-br" />
              <div className="light-sweep absolute inset-0 rounded-2xl overflow-hidden pointer-events-none" />
              <div className="relative flex items-center justify-center mb-6">
                <div className="absolute w-28 h-28 rounded-full border border-neon-red/20" style={{ animation: 'holo-rotate 12s linear infinite' }} />
                <div className="absolute w-36 h-36 rounded-full border border-neon-red/10" style={{ animation: 'holo-rotate 18s linear infinite reverse' }} />
                <div className="absolute w-24 h-24 rounded-full bg-neon-red/10" style={{ animation: 'holo-pulse 4s ease-in-out infinite' }} />
                <div className="relative" style={{ animation: 'trophy-float 4s ease-in-out infinite' }}>
                  <ach.icon className="w-16 h-16 transition-all duration-500 group-hover:scale-110" style={{ color: ach.color, animation: 'trophy-glow 3s ease-in-out infinite' }} />
                </div>
                {[...Array(6)].map((_, j) => (
                  <div
                    key={j}
                    className="absolute w-1 h-1 rounded-full bg-neon-red"
                    style={{
                      top: `${30 + Math.cos(j * Math.PI / 3) * 50}%`,
                      left: `${50 + Math.sin(j * Math.PI / 3) * 50}%`,
                      animation: `pulse-red ${1.5 + j * 0.2}s ease-in-out infinite ${j * 0.3}s`,
                      boxShadow: '0 0 6px rgba(255,34,68,0.8)',
                    }}
                  />
                ))}
              </div>
              <div className="relative flex items-center justify-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-neon-red/10 border border-neon-red/30 font-mono text-[10px] text-neon-red tracking-widest">{ach.level}</span>
                <span className="px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 font-mono text-[10px] text-neon-cyan tracking-widest">{ach.rank}</span>
              </div>
              <h3 className="relative font-display font-bold text-xl text-white text-center mb-4 group-hover:neon-text-red transition-all duration-300">{ach.title}</h3>
              <p className="relative font-body text-sm text-white/50 leading-relaxed text-center">{ach.desc}</p>
              <div className="relative mt-6 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 text-neon-red/40" style={{ animation: `pulse-red ${2 + j * 0.3}s ease-in-out infinite ${j * 0.2}s` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
