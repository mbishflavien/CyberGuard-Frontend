'use client';

import { useState, useEffect, useRef } from 'react';

interface CyberBackgroundVideoProps {
  className?: string;
  videoOpacity?: number; // range 0 to 1
  canvasOpacity?: number; // range 0 to 1
}

export function CyberBackgroundVideo({
  className = '',
  videoOpacity = 0.55,
  canvasOpacity = 0.12,
}: CyberBackgroundVideoProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Attempt auto-play on mount
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setVideoLoaded(true);
      }).catch((err) => {
        console.warn('HTML5 Auto-play prevented or loading:', err);
        // Fallback: video will still show on canvas matrix or user interaction
      });
    }

    // 60fps Throttled High-Performance Matrix Rain Canvas
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animFrameId: number;
    let lastTime = 0;
    const targetFps = 30; // 30fps is optimal for matrix rain effect & saves CPU/GPU
    const frameInterval = 1000 / targetFps;

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

    const chars = '01100110100101110010101010110011';
    const charArr = chars.split('');
    const fontSize = 14;
    const columns = Math.floor((canvas.parentElement?.clientWidth || window.innerWidth) / fontSize) || 40;
    const drops: number[] = Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));

    const draw = (currentTime: number) => {
      animFrameId = requestAnimationFrame(draw);

      const delta = currentTime - lastTime;
      if (delta < frameInterval) return;
      lastTime = currentTime - (delta % frameInterval);

      const width = canvas.parentElement?.clientWidth || window.innerWidth;
      const height = canvas.parentElement?.clientHeight || window.innerHeight;

      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? 'rgba(2, 6, 23, 0.15)' : 'rgba(248, 250, 252, 0.15)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.28)' : 'rgba(14, 165, 233, 0.18)';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArr[Math.floor(Math.random() * charArr.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        if (y > 0) {
          ctx.fillText(text, x, y);
        }

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* 1. Dynamic localized Matrix Rain backdrop canvas - zero latency fallback */}
      <canvas
        ref={canvasRef}
        style={{ opacity: canvasOpacity }}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />

      {/* 2. Direct HTML5 Background Video for seamless zero-stutter playback */}
      {!videoError && (
        <div
          style={{ opacity: videoLoaded ? videoOpacity : 0 }}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className="absolute inset-0 w-full h-full object-cover filter saturate-125 contrast-110"
          >
            {/* Reliable MP4 ambient cyber security video streams */}
            <source
              src="https://cdn.coverr.co/videos/coverr-digital-network-lines-5374/1080p.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-data-41539-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}

      {/* 3. YouTube Embed Backup if native video is hidden or loading */}
      {videoError && (
        <div
          style={{ opacity: videoOpacity * 0.75 }}
          className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
        >
          <iframe
            src="https://www.youtube.com/embed/wyxxPTFfdi8?autoplay=1&mute=1&loop=1&playlist=wyxxPTFfdi8&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&disablekb=1&enablejsapi=1"
            className="absolute top-1/2 left-1/2 w-[125%] h-[125%] md:w-[135%] md:h-[135%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
            allow="autoplay; encrypted-media; gyroscope; accelerometer; picture-in-picture"
            title="Sovereign Cybersecurity Background Video"
            frameBorder="0"
            style={{ minWidth: '100%', minHeight: '100%' }}
          />
        </div>
      )}

      {/* 4. Holographic Grid & Tactical Scanlines Overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.06] dark:opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />
      
      {/* Moving tactical scanline */}
      <div
        className="absolute inset-0 w-full h-full bg-[linear-gradient(to_bottom,rgba(56,189,248,0)_95%,rgba(56,189,248,0.06)_98%,rgba(56,189,248,0)_100%)] bg-[length:100%_400px] animate-pulse"
        style={{ animationDuration: '6s' }}
      />

      {/* Dynamic ambient halo circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-sky-500/[0.04] dark:border-sky-500/[0.07] animate-pulse" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-dashed border-blue-400/[0.03] dark:border-blue-400/[0.05] animate-spin"
        style={{ animationDuration: '100s' }}
      />

      {/* 5. Deep-glow modern overlay that blends video seamlessly into theme */}
      <div className="absolute inset-0 bg-slate-50/30 dark:bg-slate-950/40 transition-colors duration-500" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/15 via-transparent to-slate-50 dark:from-slate-950/20 dark:via-transparent dark:to-slate-950" />
    </div>
  );
}
