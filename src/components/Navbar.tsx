import { useEffect, useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/80 backdrop-blur-xl border-b border-neon-red/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => handleClick('#hero')} className="flex items-center gap-2 group">
            <div className="relative">
              <Bot className="w-7 h-7 text-neon-red transition-transform group-hover:scale-110" style={{ filter: 'drop-shadow(0 0 8px rgba(255,34,68,0.6))' }} />
              <div className="absolute inset-0 animate-ping rounded-full" style={{ animationDuration: '3s' }} />
            </div>
            <span className="font-display font-bold text-lg tracking-wider text-white">
              S<span className="neon-text-red">B</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="relative px-4 py-2 font-body text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-neon-red transition-all duration-300 group-hover:w-full group-hover:left-0" style={{ boxShadow: '0 0 8px rgba(255,34,68,0.8)' }} />
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6 text-neon-red" /> : <Menu className="w-6 h-6 text-neon-red" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div className="relative flex flex-col items-center justify-center h-full gap-6">
          {navItems.map((item, i) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.href)}
              className="font-display text-2xl font-bold tracking-widest text-white/80 hover:neon-text-red transition-colors"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
