import { useEffect, useRef } from 'react';
import { ArrowDown, Terminal, Activity, Zap, Code2, Monitor, Cpu } from 'lucide-react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { useMagneticButton } from '@/hooks/useMagneticButton';

export default function Hero() {
  const typewriterText = useTypewriter(
    ['AI & ML Student', 'Future Software Engineer', 'Python Developer', 'Java Learner'],
    90,
    40,
    1800
  );

  const heroRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const exploreBtn = useMagneticButton(0.25);

  useEffect(() => {
    const handleMove = (e: globalThis.MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255,34,68,0.08), transparent 70%)`;
      }
      if (heroRef.current) {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        const monitors = heroRef.current.querySelector('[data-parallax-monitors]') as HTMLElement;
        const window1 = heroRef.current.querySelector('[data-parallax-window]') as HTMLElement;
        const circles = heroRef.current.querySelector('[data-parallax-circles]') as HTMLElement;
        if (monitors) monitors.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
        if (window1) window1.style.transform = `translate(${x * -0.3}px, ${y * -0.3}px)`;
        if (circles) circles.style.transform = `translate(${x * 1.2}px, ${y * 1.2}px)`;
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const scrollToContent = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Mouse spotlight */}
      <div ref={spotlightRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* AI Background Glow - High Visibility */}
<div className="absolute inset-0 pointer-events-none opacity-60 z-0 overflow-hidden">
  <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/35 rounded-full blur-[100px] animate-pulse" />
  <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[100px] animate-pulse" />
</div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,34,68,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,34,68,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      {/* Neural network depth layers (replaces city skyline) */}
      <div data-parallax-window className="absolute inset-0 parallax-layer pointer-events-none">
        {/* Subtle depth fog */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(255,102,51,0.06), transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(0,240,255,0.05), transparent 60%)' }} />
      </div>

      {/* Parallax: Holographic circles */}
      <div data-parallax-circles className="absolute inset-0 parallax-layer pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-64 h-64 rounded-full border border-neon-red/20" style={{ animation: 'holo-rotate 20s linear infinite' }}>
          <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-neon-red" style={{ boxShadow: '0 0 10px rgba(255,34,68,0.8)' }} />
        </div>
        <div className="absolute top-[15%] right-[20%] w-48 h-48 rounded-full border border-neon-cyan/15" style={{ animation: 'holo-rotate 15s linear infinite reverse' }}>
          <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 -translate-x-1/2 rounded-full bg-neon-cyan" style={{ boxShadow: '0 0 10px rgba(0,240,255,0.8)' }} />
        </div>
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 rounded-full border border-neon-red/10" style={{ animation: 'holo-pulse 6s ease-in-out infinite' }} />
        <div className="absolute top-[40%] left-[8%] w-32 h-32 rounded-full border-2 border-dashed border-neon-red/15" style={{ animation: 'holo-rotate 25s linear infinite' }} />
      </div>

     {/* Parallax: Monitors / workstation */}
      <div data-parallax-monitors className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Left Monitor: neural_train.py */}
        <div 
          className="absolute bottom-[4%] left-[3%] w-[18%] min-w-[160px] h-[120px] rounded-lg border border-neon-red/30 bg-ink-900/80 overflow-hidden hidden md:block pointer-events-auto" 
          style={{ animation: 'monitor-flicker 5s ease-in-out infinite', boxShadow: '0 0 30px rgba(255,34,68,0.15)' }}
        >
          <div className="p-2 font-mono text-[8px] text-neon-red/60">
            <div className="flex items-center gap-1 mb-1"><Terminal className="w-2 h-2" /> neural_train.py</div>
            <div className="text-neon-cyan/40">epoch 42/100</div>
            <div className="text-white/30">loss: 0.0342</div>
            <div className="text-white/30">acc: 0.9821</div>
            <div className="text-neon-red/50">training...</div>
            <div className="mt-1 h-1 bg-ink-700 rounded">
              <div className="h-full w-[42%] bg-neon-red/60 rounded" style={{ boxShadow: '0 0 4px rgba(255,34,68,0.8)' }} />
            </div>
          </div>
        </div>

        {/* Right Monitor: data_stream */}
        <div 
          className="absolute bottom-[10%] right-[3%] w-[18%] min-w-[160px] h-[100px] rounded-lg border border-neon-cyan/20 bg-ink-900/80 overflow-hidden hidden md:block pointer-events-auto translate-y-2" 
          style={{ animation: 'monitor-flicker 6s ease-in-out infinite 1s', boxShadow: '0 0 25px rgba(0,240,255,0.1)' }}
        >
          <div className="p-2 font-mono text-[8px] text-neon-cyan/50">
            <div className="flex items-center gap-1 mb-1"><Activity className="w-2 h-2" /> data_stream</div>
            <div className="space-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex gap-0.5">
                  {[...Array(8)].map((_, j) => (
                    <div key={j} className="w-1 h-1 rounded-sm" style={{
                      background: Math.random() > 0.5 ? 'rgba(0,240,255,0.5)' : 'rgba(255,34,68,0.3)',
                      animation: `pulse-red ${1 + Math.random()}s ease-in-out infinite ${Math.random()}s`,
                    }} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Data streams */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute font-mono text-[10px] text-neon-red/20 whitespace-nowrap" style={{
            left: `${5 + i * 12}%`,
            animation: `data-stream ${8 + Math.random() * 6}s linear infinite ${Math.random() * 5}s`,
          }}>
            {Array.from({ length: 20 }, () => (Math.random() > 0.5 ? '1' : '0')).join(' ')}
          </div>
        ))}
      </div>

      {/* Main content — side-by-side layout */}
      <div className="relative z-20 px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* LEFT: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 glass-panel rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: '0 0 8px rgba(74,222,128,0.8)' }} />
              <span className="font-mono text-xs text-white/60 tracking-widest">SYSTEM_ONLINE</span>
            </div>

            {/* Heading */}
            <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mb-2 tracking-tight leading-tight">
              Hi, I'm
            </h1>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
              <span
                className="bg-gradient-to-r from-neon-red via-neon-red-light to-neon-red bg-clip-text text-transparent"
                style={{ filter: 'drop-shadow(0 0 20px rgba(255,34,68,0.5))' }}
              >
                Saggurthi Babu
              </span>
            </h2>

            {/* Typewriter */}
            <div className="h-10 mb-8 flex items-center justify-center lg:justify-start">
              <p className="font-body text-lg md:text-xl font-medium tracking-wide text-white/80">
                <span className="neon-text-cyan">{typewriterText}</span>
                <span className="typewriter-cursor" />
              </p>
            </div>

            {/* Explore button */}
            <button
              ref={exploreBtn.ref as React.RefObject<HTMLButtonElement>}
              onMouseMove={exploreBtn.handleMouseMove}
              onMouseLeave={exploreBtn.handleMouseLeave}
              onClick={scrollToContent}
              className="magnetic-btn group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neon-red-dark via-neon-red to-neon-red-light rounded-full" style={{ boxShadow: '0 0 30px rgba(255,34,68,0.5)' }} />
              <span className="absolute inset-0 bg-gradient-to-r from-neon-red to-neon-red-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative font-display font-bold text-sm tracking-widest text-white flex items-center gap-3">
                EXPLORE PORTFOLIO
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </span>
            </button>
          </div>

          {/* RIGHT: Profile avatar in cyberpunk circular frame */}
          <div className="flex-shrink-0 relative">
            {/* Outer rotating ring */}
            <div className="absolute -inset-8 rounded-full pointer-events-none">
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent"
                style={{
                  borderTopColor: 'rgba(255,34,68,0.6)',
                  borderRightColor: 'rgba(255,34,68,0.15)',
                  animation: 'loading-ring 8s linear infinite',
                }}
              />
              <div
                className="absolute inset-4 rounded-full border-2 border-transparent"
                style={{
                  borderBottomColor: 'rgba(0,240,255,0.4)',
                  borderLeftColor: 'rgba(0,240,255,0.1)',
                  animation: 'loading-ring 6s linear infinite reverse',
                }}
              />
            </div>

            {/* Holographic dashed ring */}
            <div
              className="absolute -inset-4 rounded-full border-2 border-dashed border-neon-red/20 pointer-events-none"
              style={{ animation: 'holo-rotate 25s linear infinite' }}
            />

            {/* HUD tick marks around frame */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-3 bg-neon-red/40 pointer-events-none"
                style={{
                  top: '50%',
                  left: '50%',
                  transformOrigin: '0 0',
                  transform: `rotate(${i * 30}deg) translateY(-140px)`,
                }}
              />
            ))}

            {/* Glow halo */}
            <div
              className="absolute -inset-2 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,34,68,0.15), transparent 70%)',
                animation: 'holo-pulse 4s ease-in-out infinite',
              }}
            />

            {/* Profile image circle */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden">
              {/* Neon border ring */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none z-30"
                style={{
                  border: '3px solid rgba(255,34,68,0.7)',
                  boxShadow: '0 0 25px rgba(255,34,68,0.5), inset 0 0 25px rgba(255,34,68,0.15)',
                }}
              />
              {/* Inner cyan ring */}
              <div
                className="absolute inset-1.5 rounded-full pointer-events-none z-30"
                style={{ border: '1px solid rgba(0,240,255,0.25)' }}
              />
              {/* Profile image */}
              <img
                src="https://github.com/saggurthibabu.png"
                alt="Saggurthi Babu"
                className="w-full h-full object-cover relative z-10"
                style={{ animation: 'monitor-flicker 6s ease-in-out infinite' }}
              />
              {/* Scan line overlay */}
              <div
                className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-20"
              >
                <div
                  className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-red/40 to-transparent"
                  style={{ animation: 'scan-line 3s linear infinite', boxShadow: '0 0 10px rgba(255,34,68,0.5)' }}
                />
              </div>
              {/* Corner HUD brackets */}
              <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-neon-red/60 z-30 pointer-events-none" />
              <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-neon-red/60 z-30 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-neon-red/60 z-30 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-neon-red/60 z-30 pointer-events-none" />
            </div>

            {/* Floating data labels */}
            <div className="absolute -top-2 -right-2 sm:-right-8 glass-panel px-3 py-1.5 rounded-lg z-40 hidden sm:block">
              <div className="font-mono text-[9px] text-neon-red/70 tracking-widest">ID: SB-001</div>
            </div>
            <div className="absolute -top-2 -left-2 sm:-left-8 glass-panel px-3 py-1.5 rounded-lg z-40 hidden sm:block">
              <div className="font-mono text-[9px] text-neon-cyan/70 tracking-widest">AI_ENGINEER</div>
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-left-8 glass-panel px-3 py-1.5 rounded-lg z-40 hidden sm:block">
              <div className="font-mono text-[9px] text-neon-red/70 tracking-widest">PYTHON_DEVELOPER</div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-neon-red/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-neon-red animate-bounce" style={{ boxShadow: '0 0 6px rgba(255,34,68,0.8)' }} />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-950 to-transparent z-10 pointer-events-none" />

      {/* HUD corners */}
      <div className="absolute top-20 left-4 z-20 hidden md:block">
        <div className="font-mono text-[10px] text-neon-red/40 space-y-0.5">
          <div>STATUS: ACTIVE</div>
          <div>NEURAL_NET: ONLINE</div>
          <div>GPU_LOAD: 87%</div>
        </div>
      </div>
      <div className="absolute top-20 right-4 z-20 hidden md:block text-right">
        <div className="font-mono text-[10px] text-neon-red/40 space-y-0.5">
          <div>TEMP: 42°C</div>
          <div>MEMORY: 16GB</div>
          <div className="flex items-center gap-1 justify-end">
            <Zap className="w-2 h-2" /> POWER: STABLE
          </div>
        </div>
      </div>
    </section>
  );
}