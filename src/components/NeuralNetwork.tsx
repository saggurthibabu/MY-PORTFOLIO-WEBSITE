import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

interface Synapse {
  from: number;
  to: number;
  flow: number;
  flowSpeed: number;
  alpha: number;
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const nodeCount = isMobile ? 28 : 55;
    const maxConnDist = isMobile ? 160 : 220;
    const depthRange = 300;

    const nodes: Node[] = [];
    const synapses: Synapse[] = [];
    const colors = ['#ff6633', '#ff2244', '#00f0ff', '#33ddaa'];

    for (let i = 0; i < nodeCount; i++) {
      const z = Math.random() * depthRange - depthRange / 2;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        vz: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
      });
    }

    // Precompute synapses
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxConnDist && Math.random() > 0.35) {
          synapses.push({
            from: i,
            to: j,
            flow: Math.random(),
            flowSpeed: 0.003 + Math.random() * 0.008,
            alpha: (1 - dist / maxConnDist) * 0.25,
          });
        }
      }
    }

    let raf: number;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const project = (x: number, y: number, z: number) => {
      const perspective = 400 / (400 + z);
      return {
        px: (x - width / 2) * perspective + width / 2,
        py: (y - height / 2) * perspective + height / 2,
        scale: perspective,
      };
    };

    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Sort nodes by z for depth ordering
      const sorted = nodes.map((n, i) => ({ n, i })).sort((a, b) => a.n.z - b.n.z);

      // Draw synapses first
      for (const s of synapses) {
        const a = nodes[s.from];
        const b = nodes[s.to];
        const pa = project(a.x, a.y, a.z);
        const pb = project(b.x, b.y, b.z);

        s.flow += s.flowSpeed;
        if (s.flow > 1) s.flow -= 1;

        const avgScale = (pa.scale + pb.scale) / 2;
        const lineAlpha = s.alpha * avgScale;

        const grad = ctx.createLinearGradient(pa.px, pa.py, pb.px, pb.py);
        const cA = hexToRgb(a.color);
        const cB = hexToRgb(b.color);
        grad.addColorStop(0, `rgba(${cA.r},${cA.g},${cA.b},${lineAlpha * 0.5})`);
        grad.addColorStop(s.flow, `rgba(${cA.r},${cA.g},${cA.b},${lineAlpha})`);
        grad.addColorStop(Math.min(s.flow + 0.08, 1), `rgba(${cB.r},${cB.g},${cB.b},${lineAlpha})`);
        grad.addColorStop(1, `rgba(${cB.r},${cB.g},${cB.b},${lineAlpha * 0.5})`);

        ctx.beginPath();
        ctx.moveTo(pa.px, pa.py);
        ctx.lineTo(pb.px, pb.py);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.6 * avgScale;
      ctx.stroke();

        // Synaptic pulse particle
        const pulseX = pa.px + (pb.px - pa.px) * s.flow;
        const pulseY = pa.py + (pb.py - pa.py) * s.flow;
        const pulseColor = s.flow < 0.5 ? a.color : b.color;
        const pulseRgb = hexToRgb(pulseColor);
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 1.2 * avgScale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pulseRgb.r},${pulseRgb.g},${pulseRgb.b},${lineAlpha * 2.5})`;
        ctx.fill();
      }

      // Draw nodes
      for (const { n, i } of sorted) {
        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;
        n.pulse += n.pulseSpeed;

        // Wrap around
        if (n.x < -50) n.x = width + 50;
        if (n.x > width + 50) n.x = -50;
        if (n.y < -50) n.y = height + 50;
        if (n.y > height + 50) n.y = -50;
        if (n.z < -depthRange / 2) n.z = depthRange / 2;
        if (n.z > depthRange / 2) n.z = -depthRange / 2;

        // Mouse attraction (subtle)
        const mdx = mouseX - n.x;
        const mdy = mouseY - n.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 200 && mdist > 0) {
          const force = (1 - mdist / 200) * 0.03;
          n.vx += (mdx / mdist) * force;
          n.vy += (mdy / mdist) * force;
        }

        // Damping
        n.vx *= 0.99;
        n.vy *= 0.99;
        n.vz *= 0.995;

        const proj = project(n.x, n.y, n.z);
        const pulseFactor = 0.7 + Math.sin(n.pulse) * 0.3;
        const radius = n.size * proj.scale * pulseFactor;
        const rgb = hexToRgb(n.color);
        const glowRadius = radius * 4;

        // Glow
        const glowGrad = ctx.createRadialGradient(
          proj.px, proj.py, 0,
          proj.px, proj.py, glowRadius
        );
        glowGrad.addColorStop(0, `rgba(${rgb.r},${rgb.g},${rgb.b},${0.4 * proj.scale})`);
        glowGrad.addColorStop(0.5, `rgba(${rgb.r},${rgb.g},${rgb.b},${0.1 * proj.scale})`);
        glowGrad.addColorStop(1, `rgba(${rgb.r},${rgb.g},${rgb.b},0)`);
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${0.85 * proj.scale})`;
        ctx.fill();

        // Bright center
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.6 * proj.scale})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouse);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.7 }}
    />
  );
}
