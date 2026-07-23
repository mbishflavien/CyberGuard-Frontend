'use client';

import { useEffect, useRef } from 'react';

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

export function BlobCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let blobs: Blob[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let time = 0;

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      initBlobs();
    }

    function initBlobs() {
      if (!canvas) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const count = 6;
      blobs = [];
      const hues = [199, 210, 217, 235, 250, 190];
      for (let i = 0; i < count; i++) {
        blobs.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.max(60, Math.min(w, h) * (0.18 + Math.random() * 0.15)),
          hue: hues[i],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.008 + Math.random() * 0.012,
        });
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      time += 0.005;

      ctx.clearRect(0, 0, w, h);

      blobs.forEach((blob) => {
        blob.x += blob.vx;
        blob.y += blob.vy;
        blob.pulse += blob.pulseSpeed;

        if (blob.x < blob.radius * 0.5) blob.vx = Math.abs(blob.vx);
        if (blob.x > w - blob.radius * 0.5) blob.vx = -Math.abs(blob.vx);
        if (blob.y < blob.radius * 0.5) blob.vy = Math.abs(blob.vy);
        if (blob.y > h - blob.radius * 0.5) blob.vy = -Math.abs(blob.vy);

        const dx = blob.x - mouseX;
        const dy = blob.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          blob.vx += (dx / dist) * force * 0.08;
          blob.vy += (dy / dist) * force * 0.08;
        }

        blob.vx *= 0.99;
        blob.vy *= 0.99;

        const r = blob.radius + Math.sin(blob.pulse) * 20;
        const safeR = Math.max(10, r);

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          safeR
        );
        gradient.addColorStop(0, `hsla(${blob.hue}, 90%, 55%, 0.35)`);
        gradient.addColorStop(0.5, `hsla(${blob.hue}, 85%, 50%, 0.12)`);
        gradient.addColorStop(1, `hsla(${blob.hue}, 80%, 45%, 0)`);

        ctx.beginPath();
        ctx.arc(blob.x, blob.y, safeR, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Metaball effect — blend blobs together
      ctx.globalCompositeOperation = 'screen';
      blobs.forEach((blob) => {
        const r = blob.radius + Math.sin(blob.pulse) * 20;
        const safeR = Math.max(10, r);
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          safeR * 1.5
        );
        gradient.addColorStop(0, `hsla(${blob.hue}, 90%, 60%, 0.15)`);
        gradient.addColorStop(0.6, `hsla(${blob.hue}, 85%, 50%, 0.05)`);
        gradient.addColorStop(1, `hsla(${blob.hue}, 80%, 45%, 0)`);

        ctx.beginPath();
        ctx.arc(blob.x, blob.y, safeR * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      ctx.globalCompositeOperation = 'source-over';

      animationId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouseX = -1000;
      mouseY = -1000;
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      if (canvas) {
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}
