import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Brain, Code2, Sparkles, Target } from 'lucide-react';

const focusAreas = [
  { icon: Brain, label: 'Artificial Intelligence' },
  { icon: Code2, label: 'Python & Java' },
  { icon: Sparkles, label: 'Generative AI' },
  { icon: Target, label: 'Data Analytics' },
];

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-red/40" />
          <span className="font-mono text-sm text-neon-red/60 tracking-widest">01 / ABOUT</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-red/40" />
        </div>

        <div className="reveal relative glass-panel p-8 md:p-12 lg:p-16 overflow-hidden">
          <span className="hud-corner hud-corner-tl" />
          <span className="hud-corner hud-corner-tr" />
          <span className="hud-corner hud-corner-bl" />
          <span className="hud-corner hud-corner-br" />
          <div className="light-sweep absolute inset-0 rounded-2xl overflow-hidden pointer-events-none" />

          <h2 className="section-title text-3xl md:text-5xl text-white mb-8 text-center">
            About <span className="neon-text-red">Me</span>
          </h2>

          <div className="relative space-y-6">
            <p className="text-lg md:text-xl text-white/70 leading-relaxed text-center font-body">
              I am <span className="text-white font-semibold">Saggurthi Babu</span>, a B.Tech{' '}
              <span className="neon-text-red">Artificial Intelligence & Machine Learning</span> student
              who enjoys building innovative technology solutions. I am passionate about
              Artificial Intelligence, Machine Learning, Python, Java, Generative AI, Data Analytics,
              and solving real-world problems through software development.
            </p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed text-center font-body">
              I believe continuous learning and creativity are the keys to becoming an
              <span className="neon-text-cyan"> impactful software engineer</span>.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {focusAreas.map((area, i) => (
              <div
                key={i}
                className="reveal flex flex-col items-center gap-3 p-4 rounded-xl border border-neon-red/10 hover:border-neon-red/40 transition-all duration-300 hover:bg-neon-red/5 group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <area.icon
                  className="w-8 h-8 text-neon-red/60 group-hover:text-neon-red transition-colors"
                  style={{ filter: 'drop-shadow(0 0 6px rgba(255,34,68,0.4))' }}
                />
                <span className="font-body text-sm text-white/60 text-center group-hover:text-white/90 transition-colors">
                  {area.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
