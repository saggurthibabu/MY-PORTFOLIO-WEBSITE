import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import { Linkedin, Github, Mail, Download, type LucideIcon } from 'lucide-react';

interface ContactLink {
  icon: LucideIcon;
  label: string;
  href: string;
  color: string;
}

const links: ContactLink[] = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/saggurthibabu', color: '#0077B5' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/saggurthibabu', color: '#ffffff' },
  { icon: Mail, label: 'Email', href: 'mailto:saggurthibabu62@gmail.com', color: '#EA4335' },
  { icon: Download, label: 'Resume Download', href: 'https://drive.google.com/file/d/1IpyqyAOVozLcAHzzNK2twbWX3D-ghFLS/view?usp=drivesdk', color: '#FF0000' },
];

function ContactButton({ link, index }: { link: ContactLink; index: number }) {
  const mag = useMagneticButton(0.25);

  return (
    <a
      ref={mag.ref as React.RefObject<HTMLAnchorElement>}
      onMouseMove={mag.handleMouseMove}
      onMouseLeave={mag.handleMouseLeave}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="magnetic-btn reveal group relative flex items-center gap-4 px-8 py-5 rounded-2xl overflow-hidden"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="absolute inset-0 glass-panel rounded-2xl border border-neon-red/20 group-hover:border-neon-red/50 transition-colors duration-300" />
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{ boxShadow: `0 0 30px ${link.color}30, inset 0 0 20px ${link.color}10` }}
      />
      <div className="light-sweep absolute inset-0 rounded-2xl overflow-hidden pointer-events-none" />
      <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-ink-800/50 border border-neon-red/20 group-hover:border-neon-red/50 transition-all duration-300">
        <link.icon className="w-6 h-6 transition-all duration-300 group-hover:scale-110" style={{ color: link.color, filter: `drop-shadow(0 0 8px ${link.color}80)` }} />
      </div>
      <span className="relative font-display font-bold text-base text-white/80 group-hover:text-white tracking-wide transition-colors">
        {link.label}
      </span>
      <span className="relative ml-auto font-mono text-[10px] text-neon-red/40 group-hover:text-neon-red/70 transition-colors">
        LINK_{(index + 1).toString().padStart(2, '0')}
      </span>
    </a>
  );
}

export default function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neon-red/40" />
          <span className="font-mono text-sm text-neon-red/60 tracking-widest">06 / CONTACT</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neon-red/40" />
        </div>
        <h2 className="reveal section-title text-3xl md:text-5xl text-white mb-4 text-center">
          Get In <span className="neon-text-red">Touch</span>
        </h2>
        <p className="reveal font-body text-lg text-white/50 text-center mb-12">
          Let's connect and build the future together.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((link, i) => (
            <ContactButton key={i} link={link} index={i} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative max-w-3xl mx-auto mt-20 text-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-red/30 to-transparent mb-8" />
        <p className="font-mono text-xs text-white/30 tracking-widest">
          SAGGURTHI BABU — AI & ML PORTFOLIO — 2026
        </p>
        <p className="font-mono text-[10px] text-neon-red/30 mt-2">
          SYSTEM_STATUS: ONLINE — NEURAL_LINK: STABLE
        </p>
      </div>
    </section>
  );
}
