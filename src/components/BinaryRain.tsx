import { useEffect, useRef } from 'react';

export default function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // AI/ML Synaptic Mesh Mathematical Matrix Connections Parameters Connected Base Core Elements
    const nodesCount = 45;
    const nodes: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];
    
    for (let i = 0; i < nodesCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 1 + Math.random() * 1.5,
      });
    }

    let animationFrameId: number;

    const draw = () => {
      // Clear wipe old browser buffers data frames to refresh completely interface layouts context
      ctx.fillStyle = '#05050a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 1. RENDER CORE AI/ML NEURAL GRADIENT CONNECTIONS PATHS MESH NODES GRAPHICS MATRIX LOOPS
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodesCount; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;

        // Bounce layout boundaries logic checking systems parameters load fields
        if (n1.x < 0 || n1.x > canvas.width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > canvas.height) n1.vy *= -1;

        // Connections mapping link checks matrix flow loop logic tags paths
        for (let j = i + 1; j < nodesCount; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
          
          if (dist < 120) {
            ctx.strokeStyle = `rgba(255, 34, 68, ${0.12 * (1 - dist / 120)})`;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }

        // Draw individual synaptic computational points cluster points overlay patterns setup
        ctx.fillStyle = 'rgba(255, 34, 68, 0.35)';
        ctx.beginPath();
        ctx.arc(n1.x, n1.y, n1.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. SKY BLUE COLOR CYBERPUNK PROGRAMMER WORKSPACE ILLUSTRATION (BOTTOM CENTER-RIGHT REGION)
      const deskX = canvas.width * 0.72;
      const deskY = canvas.height * 0.78;
      
      // Hide drawing graphics vector scales inside mobile resolution grids parameters checks
      if (canvas.width > 1024) {
        ctx.save();
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 6;

        // Sky blue dual futuristic widescreen setups console configurations
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 1.5;
        ctx.fillStyle = '#0a101d';
        
        // Monitor Left Main
        ctx.beginPath();
        ctx.roundRect(deskX - 35, deskY - 45, 36, 22, 2);
        ctx.fill(); ctx.stroke();
        
        // Monitor Right Code IDE terminal view window layout
        ctx.beginPath();
        ctx.roundRect(deskX + 6, deskY - 50, 42, 24, 2);
        ctx.fill(); ctx.stroke();

        // Monitor stands path structures layout matrix
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(deskX - 17, deskY - 23); ctx.lineTo(deskX - 17, deskY - 14);
        ctx.moveTo(deskX + 27, deskY - 26); ctx.lineTo(deskX + 27, deskY - 16);
        ctx.stroke();

        // Code simulation lines drawing inside programmer screen displays matrices layout text paths
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(deskX - 30, deskY - 38); ctx.lineTo(deskX - 10, deskY - 38);
        ctx.moveTo(deskX - 30, deskY - 32); ctx.lineTo(deskX - 18, deskY - 32);
        ctx.moveTo(deskX + 12, deskY - 42); ctx.lineTo(deskX + 38, deskY - 42);
        ctx.moveTo(deskX + 12, deskY - 36); ctx.lineTo(deskX + 28, deskY - 36);
        ctx.stroke();

        // Programmer Sitting Silhouette Graphic Structure Setup (Sky Blue Outer Glow Layers Balance)
        ctx.strokeStyle = '#00f0ff';
        ctx.fillStyle = '#050c16';
        ctx.lineWidth = 1.2;
        
        // Developer head outline profile tracking loop structure nodes
        ctx.beginPath();
        ctx.arc(deskX + 2, deskY - 24, 5.5, 0, Math.PI * 2);
        ctx.fill(); ctx.stroke();
        
        // Developer shoulder body outline layout matrix curves links setup path context values
        ctx.beginPath();
        ctx.moveTo(deskX - 14, deskY);
        ctx.bezierCurveTo(deskX - 12, deskY - 14, deskX - 6, deskY - 16, deskX + 2, deskY - 16);
        ctx.bezierCurveTo(deskX + 10, deskY - 16, deskX + 16, deskY - 14, deskX + 18, deskY);
        ctx.closePath();
        ctx.fill(); ctx.stroke();

        // Keyboard setup console border path configurations line updates
        ctx.beginPath();
        ctx.roundRect(deskX - 18, deskY - 4, 32, 4, 1);
        ctx.stroke();

        // Desk Baseline interface console parameter border elements tag logic path
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(deskX - 60, deskY + 2);
        ctx.lineTo(deskX + 70, deskY + 2);
        ctx.stroke();
        
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 block w-full h-full bg-[#05050a]" 
      style={{ opacity: 0.42 }} 
    />
  );
}