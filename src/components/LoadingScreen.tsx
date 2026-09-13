import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950 transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,34,68,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,34,68,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Scan line */}
      <div
        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-red to-transparent"
        style={{ animation: 'scan-line 2s linear infinite', boxShadow: '0 0 20px rgba(255,34,68,0.8)' }}
      />

      {/* HUD Loader */}
      <div className="relative flex items-center justify-center mb-12">
        {/* Outer ring */}
        <div
          className="w-40 h-40 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: '#ff2244',
            borderRightColor: 'rgba(255,34,68,0.2)',
            animation: 'loading-ring 2s linear infinite',
            boxShadow: '0 0 30px rgba(255,34,68,0.3)',
          }}
        />
        {/* Middle ring */}
        <div
          className="absolute w-32 h-32 rounded-full border-2 border-transparent"
          style={{
            borderBottomColor: '#00f0ff',
            borderLeftColor: 'rgba(0,240,255,0.15)',
            animation: 'loading-ring 1.5s linear infinite reverse',
          }}
        />
        {/* Inner ring */}
        <div
          className="absolute w-24 h-24 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: '#ff4466',
            animation: 'loading-ring 1s linear infinite',
          }}
        />
        {/* Center pulse */}
        <div className="absolute w-16 h-16 rounded-full bg-neon-red/20 flex items-center justify-center animate-pulse-red">
          <div className="w-8 h-8 rounded-full bg-neon-red/40" style={{ boxShadow: '0 0 20px rgba(255,34,68,0.8)' }} />
        </div>
        {/* HUD ticks */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-3 bg-neon-red/40"
            style={{
              transformOrigin: 'center',
              transform: `rotate(${i * 30}deg) translateY(-84px)`,
            }}
          />
        ))}
      </div>

      {/* Loading text */}
      <div className="text-center">
        <h2 className="font-display text-2xl font-bold tracking-[0.3em] text-white mb-2">
          INITIALIZING <span className="neon-text-red">SYSTEM</span>
        </h2>
        <p className="font-mono text-sm text-neon-cyan/60 tracking-widest mb-6">
          AI_SCANNING_NEURAL_NETWORK...
        </p>

        {/* Progress bar */}
        <div className="w-80 max-w-[80vw] h-2 bg-ink-700 rounded-full overflow-hidden border border-neon-red/20">
          <div
            className="h-full bg-gradient-to-r from-neon-red-dark via-neon-red to-neon-red-light rounded-full transition-all duration-75"
            style={{ width: `${progress}%`, boxShadow: '0 0 10px rgba(255,34,68,0.8)' }}
          />
        </div>
        <p className="font-mono text-xs text-white/40 mt-3 tracking-widest">
          {progress.toString().padStart(3, '0')}% LOADED
        </p>
      </div>

      {/* Corner HUD elements */}
      <div className="absolute top-8 left-8 font-mono text-xs text-neon-red/40">
        <div>SYS://INIT</div>
        <div className="text-white/20">v2.0.26</div>
      </div>
      <div className="absolute top-8 right-8 font-mono text-xs text-neon-red/40 text-right">
        <div>NEURAL_LINK</div>
        <div className="text-white/20">ONLINE</div>
      </div>
      <div className="absolute bottom-8 left-8 font-mono text-xs text-neon-red/40">
        <div>SCAN: ACTIVE</div>
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-xs text-neon-red/40 text-right">
        <div>SECURE_CONN</div>
      </div>
    </div>
  );
}
