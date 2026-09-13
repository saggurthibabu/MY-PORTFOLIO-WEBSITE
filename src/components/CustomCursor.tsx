import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    const handleHover = () => {
      ringRef.current?.style.setProperty('--ring-size', '40px');
      ringRef.current?.style.setProperty('--ring-color', 'rgba(255,34,68,0.8)');
    };
    const handleLeave = () => {
      ringRef.current?.style.setProperty('--ring-size', '24px');
      ringRef.current?.style.setProperty('--ring-color', 'rgba(255,34,68,0.4)');
    };

    window.addEventListener('mousemove', handleMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(raf);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor fixed w-2 h-2 rounded-full bg-neon-red pointer-events-none z-[200]"
        style={{ transform: 'translate(-50%, -50%)', boxShadow: '0 0 10px rgba(255,34,68,0.8)' }}
      />
      <div
        ref={ringRef}
        className="custom-cursor fixed rounded-full border pointer-events-none z-[200] transition-all duration-200"
        style={{
          width: 'var(--ring-size, 24px)',
          height: 'var(--ring-size, 24px)',
          borderColor: 'var(--ring-color, rgba(255,34,68,0.4))',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 15px rgba(255,34,68,0.2)',
        }}
      />
    </>
  );
}
