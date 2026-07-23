'use client';

import { useEffect, useRef } from 'react';

interface Threat {
  id: number;
  x: number;
  y: number;
  speed: number;
  size: number;
  angle: number;
  color: string;
  type: 'ddos' | 'malware' | 'phishing' | 'intrusion';
  progress: number; // 0 to 1
  pulse: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

interface GridNode {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  angle: number;
  speed: number;
  radius: number;
  pulse: number;
}

export function CyberMatrixBackground({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let threats: Threat[] = [];
    let sparks: Spark[] = [];
    let gridNodes: GridNode[] = [];
    let threatCounter = 0;
    
    let mouseX = -1000;
    let mouseY = -1000;
    let time = 0;
    let shieldEfficiency = 100;
    let threatsDeflected = 142098;
    let radarAngle = 0;

    // Responsive sizing
    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      initGrid();
    }

    // Initialize decorative node grid in space
    function initGrid() {
      if (!canvas) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      gridNodes = [];
      
      const cols = 8;
      const rows = 4;
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const x = (w / cols) * (col + 0.5) + (Math.random() - 0.5) * 40;
          const y = (h / rows) * (row + 0.5) + (Math.random() - 0.5) * 30;
          gridNodes.push({
            x,
            y,
            baseX: x,
            baseY: y,
            angle: Math.random() * Math.PI * 2,
            speed: 0.01 + Math.random() * 0.01,
            radius: 1 + Math.random() * 2,
            pulse: Math.random() * Math.PI,
          });
        }
      }
    }

    // Spawns incoming threats that head to the defense shield
    function spawnThreat(w: number, h: number) {
      const centerX = w / 2;
      const centerY = h / 2;
      
      // Spawn on a large perimeter
      const spawnAngle = Math.random() * Math.PI * 2;
      const spawnRadius = Math.max(w, h) * 0.6;
      const startX = centerX + Math.cos(spawnAngle) * spawnRadius;
      const startY = centerY + Math.sin(spawnAngle) * spawnRadius;
      
      const speed = 0.005 + Math.random() * 0.006;
      const types: Array<'ddos' | 'malware' | 'phishing' | 'intrusion'> = ['ddos', 'malware', 'phishing', 'intrusion'];
      const type = types[Math.floor(Math.random() * types.length)];
      
      // Color schemes for threats (vibrant threat pink/crimson/orange)
      const colors = {
        ddos: '#f43f5e', // Rose
        malware: '#f97316', // Orange
        phishing: '#ec4899', // Pink
        intrusion: '#ef4444' // Red
      };

      threats.push({
        id: threatCounter++,
        x: startX,
        y: startY,
        speed,
        size: 2 + Math.random() * 2,
        angle: spawnAngle,
        color: colors[type],
        type,
        progress: 0,
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Spawn a burst of defense sparks when a threat is deflected
    function createSparkBurst(x: number, y: number, color: string, count: number) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.5 + Math.random() * 3.5;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1 + Math.random() * 2,
          color,
          alpha: 1,
          life: 0,
          maxLife: 30 + Math.random() * 40
        });
      }
    }

    // Animation Loop
    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const centerX = w / 2;
      const centerY = h / 2;
      
      time += 0.01;
      radarAngle += 0.006;

      ctx.clearRect(0, 0, w, h);

      // 1. DRAW DECORATIVE BACKGROUND GRID & NODES
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.02)';
      ctx.lineWidth = 1;
      const gridSpacing = 80;
      
      // Vertical grid
      for (let x = (centerX % gridSpacing); x < w; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      // Horizontal grid
      for (let y = (centerY % gridSpacing); y < h; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // 2. DRAW HUD CORNER METRICS
      ctx.font = '10px monospace';
      ctx.fillStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.fillText(`SHIELD CONFIG: SOVEREIGN_V2`, 25, 35);
      ctx.fillText(`SHIELD_EFFICIENCY: ${shieldEfficiency.toFixed(1)}%`, 25, 50);
      ctx.fillText(`DECEPT_SYS: ONLINE`, 25, 65);

      const statsText = `DEFLECTED_THREATS: ${threatsDeflected.toLocaleString()}`;
      ctx.fillText(statsText, w - ctx.measureText(statsText).width - 25, 35);
      ctx.fillText(`THREAT_SENSORS: AUTO_SCANNING`, w - ctx.measureText(`THREAT_SENSORS: AUTO_SCANNING`).width - 25, 50);
      ctx.fillText(`COORDS: ${centerX.toFixed(0)}X / ${centerY.toFixed(0)}Y`, w - ctx.measureText(`COORDS: X / Y`).width - 25, 65);

      // 3. ANIME BACKGROUND WEB NODES
      gridNodes.forEach((node) => {
        node.angle += node.speed;
        node.pulse += 0.02;
        node.x = node.baseX + Math.cos(node.angle) * 15;
        node.y = node.baseY + Math.sin(node.angle) * 10;
        
        const size = node.radius + Math.sin(node.pulse) * 0.5;
        ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(59, 130, 246, 0.25)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections to nearby grid nodes
        gridNodes.forEach((otherNode) => {
          if (node === otherNode) return;
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.05 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
      });

      // 4. THE SOVEREIGN DEFENSETIVE SHIELD (CENTER PIECE)
      // Base shield radius
      const shieldRadius = 145;
      
      // Shield Outer Glow Band
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.04)';
      ctx.lineWidth = 30;
      ctx.beginPath();
      ctx.arc(centerX, centerY, shieldRadius + 15, 0, Math.PI * 2);
      ctx.stroke();

      // Shield Core Circle (The Boundary)
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.22)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, shieldRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Dashed Secondary Radar Circle
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.14)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 16]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, shieldRadius - 25, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Rotating Scope Arc Segment 1
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.35)';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, shieldRadius + 5, radarAngle, radarAngle + Math.PI * 0.45);
      ctx.stroke();

      // Rotating Scope Arc Segment 2 (Inversed)
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, shieldRadius - 10, -radarAngle * 1.5, -radarAngle * 1.5 + Math.PI * 0.25);
      ctx.stroke();

      // 5. INTERACTIVE SENTINEL DEFENSE BEAM (TOWARDS CURSOR)
      if (mouseX > -500) {
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const cursorAngle = Math.atan2(dy, dx);

        // Draw a glowing focal target line to the user's cursor
        const gradient = ctx.createLinearGradient(centerX, centerY, mouseX, mouseY);
        gradient.addColorStop(0, 'rgba(14, 165, 233, 0.1)');
        gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.25)');
        gradient.addColorStop(1, 'rgba(14, 165, 233, 0.05)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX + Math.cos(cursorAngle) * shieldRadius, centerY + Math.sin(cursorAngle) * shieldRadius);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();

        // High frequency micro rings around shield intercept point
        const interceptX = centerX + Math.cos(cursorAngle) * shieldRadius;
        const interceptY = centerY + Math.sin(cursorAngle) * shieldRadius;

        ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(interceptX, interceptY, 12 + Math.sin(time * 10) * 3, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = 'rgba(56, 189, 248, 0.45)';
        ctx.beginPath();
        ctx.arc(interceptX, interceptY, 3, 0, Math.PI * 2);
        ctx.fill();

        // Tiny floating tech display next to pointer
        ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
        ctx.font = '8px monospace';
        ctx.fillText(`SENTINEL_TRACKING: ${(dist).toFixed(0)}px`, mouseX + 12, mouseY - 5);
      }

      // 6. THREAT INVASION & NEUTRALIZATION
      // Spawn new threats randomly
      if (Math.random() < 0.05 && threats.length < 15) {
        spawnThreat(w, h);
      }

      threats.forEach((threat, index) => {
        // Move threat closer along its vector towards the center shield
        threat.progress += threat.speed;
        threat.pulse += 0.05;

        const distanceVector = Math.max(w, h) * 0.6 * (1 - threat.progress);
        threat.x = centerX + Math.cos(threat.angle) * distanceVector;
        threat.y = centerY + Math.sin(threat.angle) * distanceVector;

        // Draw the Threat Core
        ctx.fillStyle = threat.color;
        ctx.beginPath();
        const visualSize = threat.size + Math.sin(threat.pulse) * 1;
        ctx.arc(threat.x, threat.y, visualSize, 0, Math.PI * 2);
        ctx.fill();

        // Glowing threat halo
        ctx.fillStyle = `${threat.color}18`;
        ctx.beginPath();
        ctx.arc(threat.x, threat.y, visualSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // Threat tracer line from spawn
        ctx.strokeStyle = `${threat.color}1A`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(centerX + Math.cos(threat.angle) * (Math.max(w, h) * 0.6), centerY + Math.sin(threat.angle) * (Math.max(w, h) * 0.6));
        ctx.lineTo(threat.x, threat.y);
        ctx.stroke();

        // Draw Threat Metadata Labels
        ctx.fillStyle = `${threat.color}A0`;
        ctx.font = '7px monospace';
        ctx.fillText(`[${threat.type.toUpperCase()}_ATTACK]`, threat.x + 8, threat.y - 3);

        // Check if threat has reached the shield perimeter
        if (distanceVector <= shieldRadius) {
          // INTERCEPTED & DEFLECTED!
          // Add deflection count
          threatsDeflected += 1;
          
          // Temporary increase shield efficiency fluctuation
          shieldEfficiency = Math.min(100, Math.max(98.5, shieldEfficiency - Math.random() * 0.1));
          
          // Spawn glorious burst of sparks
          // Sparks color transitions to positive cyan/emerald representing neutralized threat
          const burstColor = Math.random() > 0.5 ? '#06b6d4' : '#10b981'; // Cyan or Emerald
          createSparkBurst(threat.x, threat.y, burstColor, 12);
          
          // Draw defense ripple circle around shield
          ctx.strokeStyle = burstColor;
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(centerX, centerY, shieldRadius + 5, threat.angle - 0.25, threat.angle + 0.25);
          ctx.stroke();

          // Flash core green momentarily
          ctx.fillStyle = 'rgba(16, 185, 129, 0.05)';
          ctx.beginPath();
          ctx.arc(centerX, centerY, shieldRadius, 0, Math.PI * 2);
          ctx.fill();

          // Remove threat
          threats.splice(index, 1);
        }
      });

      // Slowly recover shield efficiency back to 100%
      if (shieldEfficiency < 100) {
        shieldEfficiency += 0.015;
      }

      // 7. DRAW DEFLECTION GLOW SPARKS
      sparks.forEach((spark, index) => {
        spark.x += spark.vx;
        spark.y += spark.vy;
        
        // Add gravity/drag towards center
        spark.vx *= 0.94;
        spark.vy *= 0.94;
        
        spark.life++;
        spark.alpha = 1 - (spark.life / spark.maxLife);

        ctx.fillStyle = spark.color;
        ctx.globalAlpha = spark.alpha;
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0; // Restore globalAlpha

        if (spark.life >= spark.maxLife) {
          sparks.splice(index, 1);
        }
      });

      // 8. SOVEREIGN SHIELD INTERNAL HUD GRAPHICS
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.05)';
      ctx.lineWidth = 1;
      
      // Core crosshair
      ctx.beginPath();
      ctx.moveTo(centerX - 10, centerY);
      ctx.lineTo(centerX + 10, centerY);
      ctx.moveTo(centerX, centerY - 10);
      ctx.lineTo(centerX, centerY + 10);
      ctx.stroke();

      // Rotating inner gear
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.09)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      animationId = requestAnimationFrame(draw);
    }

    // Capture mouse coordinate anywhere on the page, mapped to canvas bounds
    function onWindowMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Localize to the canvas area with a small padding of 150px
      if (x >= -150 && x <= rect.width + 150 && y >= -150 && y <= rect.height + 150) {
        mouseX = x;
        mouseY = y;
      } else {
        mouseX = -1000;
        mouseY = -1000;
      }
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onWindowMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onWindowMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
    />
  );
}
