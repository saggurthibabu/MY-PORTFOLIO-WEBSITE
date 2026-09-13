import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, Cloud, Database, Code } from 'lucide-react';

const certificates = [
  {
    icon: Cloud,
    title: 'AWS Machine Learning',
    org: 'Amazon Web Services',
    desc: 'Comprehensive certification covering ML model training, deployment, and optimization on AWS cloud infrastructure.',
    id: 'AWS-ML-2024',
    href: 'https://drive.google.com/file/d/1qnlaL20p4ZzENaYyRfJ02fBqHni7FoqQ/view?usp=drivesdk', // <--- Mee AWS Drive link
  },
  {
    icon: Database,
    title: 'Deloitte Data Analytics',
    org: 'Deloitte',
    desc: 'Professional certification in data analytics techniques, data visualization, and business intelligence methodologies.',
    id: 'DEL-DA-2024',
    href: 'https://drive.google.com/file/d/151DciO9SBWYOXi7J_hSHE6MFirxV-APM/view?usp=drivesdk', // <--- Mee Deloitte Drive link
  },
  {
    icon: Code,
    title: 'Cisco Python Essential 1&2',
    org: 'Cisco Networking Academy',
    desc: 'Foundational and advanced Python programming certification covering syntax, data structures, and application development.',
    id: 'CSC-PY-12',
    href: 'https://drive.google.com/file/d/1GrASZWcssmtCWmYKN7wQEaRkv_dudLiX/view?usp=drivesdk', // <--- Mee Cisco Drive link
  },
];

export default function Certificates() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="certificates" ref={sectionRef} className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-red/40" />
          <span className="font-mono text-sm text-neon-red/60 tracking-widest">03 / CERTIFICATES</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-red/40" />
        </div>
        <h2 className="reveal section-title text-3xl md:text-5xl text-white mb-12 text-center">
          Certified <span className="neon-text-red">Credentials</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <a
              key={i}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal relative glass-panel-hover p-8 rounded-2xl overflow-hidden group block cursor-pointer"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="hud-corner hud-corner-tl" />
              <span className="hud-corner hud-corner-tr" />
              <span className="hud-corner hud-corner-bl" />
              <span className="hud-corner hud-corner-br" />
              <div className="light-sweep absolute inset-0 rounded-2xl overflow-hidden pointer-events-none" />
              <div className="relative flex items-center justify-center mb-6">
                <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-ink-800/50 border border-neon-red/20 group-hover:border-neon-red/60 transition-all duration-500">
                  <cert.icon className="w-10 h-10 text-neon-red/60 group-hover:text-neon-red transition-all duration-500 group-hover:scale-110" style={{ filter: 'drop-shadow(0 0 10px rgba(255,34,68,0.4))' }} />
                  <div className="absolute inset-0 rounded-full border border-neon-red/20 group-hover:border-neon-red/40 transition-colors" style={{ animation: 'holo-rotate 10s linear infinite' }} />
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: '0 0 30px rgba(255,34,68,0.3)' }} />
                </div>
              </div>
              <div className="relative text-center">
                <div className="inline-flex items-center gap-1.5 mb-3">
                  <Award className="w-3.5 h-3.5 text-neon-red/50" />
                  <span className="font-mono text-[10px] text-neon-red/50 tracking-widest">{cert.id}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:neon-text-red transition-all duration-300">{cert.title}</h3>
                <p className="font-body text-sm text-neon-cyan/60 mb-4">{cert.org}</p>
                <p className="font-body text-sm text-white/50 leading-relaxed">{cert.desc}</p>
              </div>
              <div className="relative mt-6 h-0.5 bg-ink-700 rounded-full overflow-hidden">
                <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-neon-red to-neon-red-light transition-all duration-700" style={{ boxShadow: '0 0 6px rgba(255,34,68,0.8)' }} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}