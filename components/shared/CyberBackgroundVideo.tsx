'use client';

import { useState, useEffect, useRef } from 'react';

interface CyberBackgroundVideoProps {
  className?: string;
  videoOpacity?: number; // range 0 to 1
  canvasOpacity?: number; // range 0 to 1
}

// Highly reliable, public CDN video streams for ambient cyber background
const VIDEO_SOURCES = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://cdn.coverr.co/videos/coverr-digital-network-lines-5374/1080p.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-data-41539-large.mp4',
];

export function CyberBackgroundVideo({
  className = '',
  videoOpacity = 0.5,
  canvasOpacity = 0.2,
}: CyberBackgroundVideoProps) {
  const [currentSourceIdx, setCurrentSourceIdx] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Video Autoplay & Fallback source switching logic
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isSubscribed = true;

    const attemptPlay = async () => {
      try {
        video.muted = true;
        video.playsInline = true;
        await video.play();
        if (isSubscribed) {
          setVideoLoaded(true);
        }
      } catch (err) {
        console.warn('Video playback autoplay attempt:', err);
        // Try next source if current fails
        if (isSubscribed && currentSourceIdx < VIDEO_SOURCES.length - 1) {
          setCurrentSourceIdx((prev) => prev + 1);
        }
      }
    };

    attemptPlay();

    // Re-trigger play on first user interaction if browser blocked strict autoplay
    const handleUserInteraction = () => {
      if (video.paused) {
        video.play().then(() => setVideoLoaded(true)).catch(() => {});
      }
    };

    window.addEventListener('touchstart', handleUserInteraction, { once: true });
    window.addEventListener('click', handleUserInteraction, { once: true });
    window.addEventListener('scroll', handleUserInteraction, { once: true });

    return () => {
      isSubscribed = false;
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
    };
  }, [currentSourceIdx]);

  // High-performance 60fps Sovereign Cybernetic Canvas Generator (Runs alongside or as video fallback)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.parentElement.clientWidth || window.innerWidth;
      const height = canvas.parentElement.clientHeight || window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle nodes for sovereign threat topology canvas
    const nodeCount = 35;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * (canvas.parentElement?.clientWidth || 1200),
      y: Math.random() * (canvas.parentElement?.clientHeight || 800),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: 1 + Math.random() * 2,
    }));

    const draw = () => {
      animFrameId = requestAnimationFrame(draw);
      time += 0.008;

      const width = canvas.parentElement?.clientWidth || window.innerWidth;
      const height = canvas.parentElement?.clientHeight || window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // Render subtle slate titanium tactical grid lines
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.04)';
      ctx.lineWidth = 1;
      const step = 90;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw moving sovereign data nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.fillStyle = 'rgba(59, 130, 246, 0.25)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = node.x - nodeB.x;
          const dy = node.y - nodeB.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.12;
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      // Wave pulse scanline
      const scanY = (Math.sin(time * 0.5) * 0.5 + 0.5) * height;
      const scanGrad = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
      scanGrad.addColorStop(0, 'rgba(59, 130, 246, 0)');
      scanGrad.addColorStop(0.5, 'rgba(59, 130, 246, 0.06)');
      scanGrad.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 30, width, 60);
    };

    animFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* 1. HTML5 Canvas Tactical Network Simulation (Zero-lag constant background stream) */}
      <canvas
        ref={canvasRef}
        style={{ opacity: canvasOpacity }}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* 2. Direct HTML5 Background Video with auto-fallback sources */}
      <div
        style={{ opacity: videoLoaded ? videoOpacity : 0.2 }}
        className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
      >
        <video
          ref={videoRef}
          key={VIDEO_SOURCES[currentSourceIdx]}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => {
            if (currentSourceIdx < VIDEO_SOURCES.length - 1) {
              setCurrentSourceIdx((prev) => prev + 1);
            }
          }}
          className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-90 brightness-90"
        >
          <source src={VIDEO_SOURCES[currentSourceIdx]} type="video/mp4" />
        </video>
      </div>

      {/* 3. Deep Sovereign Color Mask - Removes harsh neon blue, replacing with rich obsidian charcoal & slate */}
      <div className="absolute inset-0 bg-slate-950/60 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />
    </div>
  );
}
