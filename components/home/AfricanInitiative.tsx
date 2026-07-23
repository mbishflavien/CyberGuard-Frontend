'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import {
  MapPin,
  Users,
  Briefcase,
  TrendingUp,
  Heart,
  Shield,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

const initiatives = [
  {
    icon: MapPin,
    title: 'Built in Africa',
    description: 'Designed and engineered by African security experts who understand the local threat landscape.',
  },
  {
    icon: Users,
    title: 'Supporting SMEs',
    description: 'Pricing and features designed for small and medium businesses — not just enterprises with unlimited budgets.',
  },
  {
    icon: Briefcase,
    title: 'Creating Cybersecurity Jobs',
    description: 'Training the next generation of African SOC analysts, threat hunters, and security engineers.',
  },
  {
    icon: TrendingUp,
    title: 'Strengthening Digital Economies',
    description: 'Every business we protect makes the African digital economy safer and more attractive to investment.',
  },
  {
    icon: Heart,
    title: 'Protecting African Innovation',
    description: 'Startups, fintechs, and innovators deserve enterprise-grade security — without the enterprise price tag.',
  },
];

const countries = [
  { name: 'Lagos Hub', lat: 6.5244, lon: 3.3792, code: 'LOS', hub: true, nodes: 1450, ping: '8ms', threat: '0.01% (SECURE)', info: 'West Africa Primary Sovereign SOC Hub' },
  { name: 'Nairobi Hub', lat: -1.2921, lon: 36.8219, code: 'NBO', hub: true, nodes: 1120, ping: '12ms', threat: '0.01% (SECURE)', info: 'East Africa Primary Sovereign SOC Hub' },
  { name: 'Cape Town Hub', lat: -33.9249, lon: 18.4241, code: 'CPT', hub: true, nodes: 1890, ping: '15ms', threat: '0.01% (SECURE)', info: 'Southern Africa Primary Sovereign SOC Hub' },
  { name: 'Cairo Hub', lat: 30.0444, lon: 31.2357, code: 'CAI', hub: true, nodes: 980, ping: '18ms', threat: '0.02% (SECURE)', info: 'North Africa Sovereign Operations Hub' },
  { name: 'Dakar Node', lat: 14.7167, lon: -17.4677, code: 'DKR', hub: false, nodes: 420, ping: '14ms', threat: '0.01% (SECURE)', info: 'Atlantic Region Gateway' },
  { name: 'Accra Node', lat: 5.6037, lon: -0.1870, code: 'ACC', hub: false, nodes: 380, ping: '11ms', threat: '0.01% (SECURE)', info: 'Lagos Hub Backup & Relay' },
  { name: 'Addis Node', lat: 9.0300, lon: 38.7400, code: 'ADD', hub: false, nodes: 310, ping: '22ms', threat: '0.03% (SECURE)', info: 'Horn of Africa Satellite Core' },
  { name: 'Kigali Node', lat: -1.9403, lon: 30.0588, code: 'KGL', hub: false, nodes: 450, ping: '9ms', threat: '0.01% (SECURE)', info: 'East Africa High-Speed Relay' },
  { name: 'London Link', lat: 51.5074, lon: -0.1278, code: 'LDN', hub: false, nodes: 1200, ping: '42ms', threat: '0.01% (SECURE)', info: 'Europe Strategic Defense Uplink' },
  { name: 'New York Link', lat: 40.7128, lon: -74.0060, code: 'NYC', hub: false, nodes: 1550, ping: '68ms', threat: '0.01% (SECURE)', info: 'Americas Operations Uplink' },
  { name: 'Tokyo Link', lat: 35.6762, lon: 139.6503, code: 'NRT', hub: false, nodes: 890, ping: '115ms', threat: '0.02% (SECURE)', info: 'Asia-Pacific Strategic Link' },
  { name: 'São Paulo Link', lat: -23.5505, lon: -46.6333, code: 'GRU', hub: false, nodes: 610, ping: '92ms', threat: '0.02% (SECURE)', info: 'South American Relay Point' },
  { name: 'Singapore Link', lat: 1.3521, lon: 103.8198, code: 'SIN', hub: false, nodes: 750, ping: '84ms', threat: '0.01% (SECURE)', info: 'ASEAN Region Security Relay' },
];

const connections = [
  [0, 5], [0, 4], [0, 2], [0, 3], [0, 8], [0, 9],
  [1, 6], [1, 7], [1, 2], [1, 3], [1, 12],
  [2, 11], [3, 8], [10, 12], [9, 8],
];

// Continent detection function
const isLand = (lat: number, lon: number) => {
  let l = lon;
  while (l > 180) l -= 360;
  while (l < -180) l += 360;

  if (lat >= -35 && lat <= 37 && l >= -18 && l <= 51) {
    if (lat < 5 && l < 10 && lat > -15) {
      if (l < -5) return false;
      if (lat < 0 && l < 5) return false;
    }
    if (lat > 12 && lat < 30 && l > 33 && l < 43) return false;
    if (lat > 32 && l < -5) return false;
    return true;
  }
  if (lat > 36 && lat <= 71 && l >= -10 && l <= 40) {
    if (lat < 42 && l > 15) return false;
    return true;
  }
  if (lat >= 1 && lat <= 75 && l > 40 && l <= 180) {
    if (lat < 22 && l > 68 && l < 88) return lat > 7;
    if (lat < 22 && l >= 95 && l < 110) return lat > 8;
    if (lat >= -10 && lat < 8 && l >= 95 && l <= 145) {
      if (lat < 0 && l < 115) return true;
      if (lat > -5 && l > 105 && l < 120) return true;
      return l > 115;
    }
    if (lat > 12 && lat < 32 && l > 34 && l < 60) {
      if (l < 40 && lat < 20) return false;
      return !(l > 48 && lat > 25);
    }
    return true;
  }
  if (lat >= 7 && lat <= 75 && l >= -170 && l <= -50) {
    if (lat < 25 && l > -100) {
      if (lat < 15 && l < -90) return false;
      return l < -75;
    }
    if (lat > 18 && lat < 30 && l > -97 && l < -81) return false;
    return true;
  }
  if (lat >= -56 && lat <= 12 && l >= -82 && l <= -34) {
    if (lat < -20) {
      const width = 20 - (lat + 20) * 0.4;
      const center = -60 + (lat + 20) * 0.15;
      return l >= center - width && l <= center + width;
    }
    return true;
  }
  if (lat >= -44 && lat <= -10 && l >= 112 && l <= 154) {
    if (lat < -40 && l > 143) return true;
    return lat >= -38;
  }
  if (lat >= -26 && lat <= -11 && l >= 43 && l <= 51) return true;
  if (lat >= 60 && lat <= 83 && l >= -73 && l <= -10) return true;
  return false;
};

// Generate pre-calculated 3D unit coordinates for land points
const LAND_POINTS_3D = (() => {
  const points: { isAfrica: boolean; x3: number; y3: number; z3: number }[] = [];
  for (let lat = -60; lat <= 75; lat += 4.5) {
    for (let lon = -180; lon <= 180; lon += 4.5) {
      if (isLand(lat, lon)) {
        const isAfrica = lat >= -35 && lat <= 37 && lon >= -18 && lon <= 51;
        const latRad = (lat * Math.PI) / 180;
        const lonRad = (lon * Math.PI) / 180;
        points.push({
          isAfrica,
          x3: Math.cos(latRad) * Math.sin(lonRad),
          y3: -Math.sin(latRad),
          z3: Math.cos(latRad) * Math.cos(lonRad),
        });
      }
    }
  }
  return points;
})();

const NODES_3D = countries.map((country, idx) => {
  const latRad = (country.lat * Math.PI) / 180;
  const lonRad = (country.lon * Math.PI) / 180;
  return {
    ...country,
    originalIdx: idx,
    x3: Math.cos(latRad) * Math.sin(lonRad),
    y3: -Math.sin(latRad),
    z3: Math.cos(latRad) * Math.cos(lonRad),
  };
});

export function AfricanInitiative() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [zoomDisplay, setZoomDisplay] = useState(100);

  // Mutable state ref to allow 60fps canvas updates with zero React re-render overhead
  const stateRef = useRef({
    rx: 20,
    ry: 12,
    vx: 0,
    vy: 0,
    zoom: 1.0,
    targetRx: null as number | null,
    targetRy: null as number | null,
    isDragging: false,
    dragLastX: 0,
    dragLastY: 0,
    hoveredIdx: null as number | null,
    pulseTime: 0,
  });

  // Sync stateRef with React hovered state
  useEffect(() => {
    stateRef.current.hoveredIdx = hoveredIdx;
  }, [hoveredIdx]);

  // High performance Canvas 2D Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;

    const render = () => {
      animId = requestAnimationFrame(render);

      const state = stateRef.current;
      state.pulseTime += 0.025;

      // Smooth target interpolation
      if (state.targetRx !== null && state.targetRy !== null && !state.isDragging) {
        let diffX = state.targetRx - state.rx;
        while (diffX > 180) diffX -= 360;
        while (diffX < -180) diffX += 360;
        const diffY = state.targetRy - state.ry;

        if (Math.abs(diffX) < 0.1 && Math.abs(diffY) < 0.1) {
          state.rx = state.targetRx;
          state.ry = state.targetRy;
          state.targetRx = null;
          state.targetRy = null;
        } else {
          state.rx = (state.rx + diffX * 0.12 + 360) % 360;
          state.ry += diffY * 0.12;
        }
      } else if (!state.isDragging) {
        // Kinetic momentum or smooth auto-rotation
        if (Math.abs(state.vx) > 0.015 || Math.abs(state.vy) > 0.015) {
          state.rx = (state.rx + state.vx + 360) % 360;
          state.ry = Math.max(-65, Math.min(65, state.ry + state.vy));
          state.vx *= 0.92;
          state.vy *= 0.92;
        } else {
          state.rx = (state.rx + 0.12) % 360;
        }
      }

      // Handle HiDPI Canvas Scaling
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.52;
      const baseR = Math.min(width, height) * 0.36;
      const R = baseR * state.zoom;

      // Rotation matrix values
      const radX = (state.rx * Math.PI) / 180;
      const radY = (state.ry * Math.PI) / 180;
      const cosY = Math.cos(radX);
      const sinY = Math.sin(radX);
      const cosX = Math.cos(radY);
      const sinX = Math.sin(radY);

      // 1. Atmosphere Glow & Outer Ring
      const atmoGrad = ctx.createRadialGradient(centerX, centerY, R * 0.82, centerX, centerY, R * 1.15);
      atmoGrad.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
      atmoGrad.addColorStop(0.7, 'rgba(14, 165, 233, 0.05)');
      atmoGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = atmoGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, R * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // 2. Globe Dark Sphere Backdrop
      const sphereGrad = ctx.createRadialGradient(centerX - R * 0.2, centerY - R * 0.2, R * 0.1, centerX, centerY, R);
      sphereGrad.addColorStop(0, '#0a1d37');
      sphereGrad.addColorStop(0.65, '#020914');
      sphereGrad.addColorStop(1, '#01040a');
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, R, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, R, 0, Math.PI * 2);
      ctx.stroke();

      // 3. Render Land Points
      for (let i = 0; i < LAND_POINTS_3D.length; i++) {
        const pt = LAND_POINTS_3D[i];
        const xRotY = pt.x3 * cosY - pt.z3 * sinY;
        const zRotY = pt.x3 * sinY + pt.z3 * cosY;
        const yFinal = pt.y3 * cosX - zRotY * sinX;
        const zFinal = pt.y3 * sinX + zRotY * cosX;

        const px = centerX + R * xRotY;
        const py = centerY + R * yFinal;

        if (zFinal < 0) {
          // Back hemisphere dots
          ctx.fillStyle = 'rgba(56, 189, 248, 0.1)';
          ctx.beginPath();
          ctx.arc(px, py, 0.8 * state.zoom, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Front hemisphere dots
          const normZ = (zFinal + 1) / 2;
          const alpha = Math.max(0.12, normZ * (pt.isAfrica ? 0.95 : 0.55));
          const dotR = Math.max(0.9, normZ * (pt.isAfrica ? 1.8 : 1.3) * state.zoom);

          ctx.fillStyle = pt.isAfrica ? `rgba(34, 211, 238, ${alpha})` : `rgba(56, 189, 248, ${alpha * 0.7})`;
          ctx.beginPath();
          ctx.arc(px, py, dotR, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Project Nodes
      const projNodes = NODES_3D.map((node) => {
        const xRotY = node.x3 * cosY - node.z3 * sinY;
        const zRotY = node.x3 * sinY + node.z3 * cosY;
        const yFinal = node.y3 * cosX - zRotY * sinX;
        const zFinal = node.y3 * sinX + zRotY * cosX;
        return {
          ...node,
          px: centerX + R * xRotY,
          py: centerY + R * yFinal,
          pz: zFinal,
        };
      });

      // 4. Render Connection Arcs
      for (let c = 0; c < connections.length; c++) {
        const [aIdx, bIdx] = connections[c];
        const nodeA = projNodes[aIdx];
        const nodeB = projNodes[bIdx];

        if (nodeA.pz < -0.2 && nodeB.pz < -0.2) continue;

        const isAActive = state.hoveredIdx === aIdx;
        const isBActive = state.hoveredIdx === bIdx;
        const isHighlighted = isAActive || isBActive;
        const isAnyHovered = state.hoveredIdx !== null;

        const segs = 16;
        ctx.beginPath();

        for (let s = 0; s <= segs; s++) {
          const t = s / segs;
          let px = nodeA.x3 * (1 - t) + nodeB.x3 * t;
          let py = nodeA.y3 * (1 - t) + nodeB.y3 * t;
          let pz = nodeA.z3 * (1 - t) + nodeB.z3 * t;

          const len = Math.sqrt(px * px + py * py + pz * pz) || 1;
          const nx = px / len;
          const ny = py / len;
          const nz = pz / len;

          const arcLift = 0.08 * Math.sin(Math.PI * t);
          const currentR = R * (1 + arcLift);

          const lx = nx * currentR;
          const ly = ny * currentR;
          const lz = nz * currentR;

          const xRotY = lx * cosY - lz * sinY;
          const zRotY = lx * sinY + lz * cosY;
          const yFinal = ly * cosX - zRotY * sinX;

          const sx = centerX + xRotY;
          const sy = centerY + yFinal;

          if (s === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }

        ctx.strokeStyle = isHighlighted
          ? 'rgba(34, 211, 238, 0.95)'
          : isAnyHovered
          ? 'rgba(56, 189, 248, 0.08)'
          : 'rgba(56, 189, 248, 0.4)';
        ctx.lineWidth = isHighlighted ? 2.2 : 1.1;
        ctx.stroke();

        // Traveling energy particle along the arc
        const pT = (state.pulseTime * 0.4 + c * 0.15) % 1;
        let px = nodeA.x3 * (1 - pT) + nodeB.x3 * pT;
        let py = nodeA.y3 * (1 - pT) + nodeB.y3 * pT;
        let pz = nodeA.z3 * (1 - pT) + nodeB.z3 * pT;
        const len = Math.sqrt(px * px + py * py + pz * pz) || 1;
        const liftR = R * (1 + 0.08 * Math.sin(Math.PI * pT));

        const lx = (px / len) * liftR;
        const ly = (py / len) * liftR;
        const lz = (pz / len) * liftR;

        const xRotY = lx * cosY - lz * sinY;
        const zRotY = lx * sinY + lz * cosY;
        const yFinal = ly * cosX - zRotY * sinX;
        const zFinal = ly * sinX + zRotY * cosX;

        if (zFinal > 0) {
          ctx.fillStyle = isHighlighted ? '#ffffff' : '#38bdf8';
          ctx.beginPath();
          ctx.arc(centerX + xRotY, centerY + yFinal, isHighlighted ? 3 : 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 5. Render Nodes and Labels
      for (let n = 0; n < projNodes.length; n++) {
        const node = projNodes[n];
        if (node.pz < -0.15) continue;

        const isHovered = state.hoveredIdx === node.originalIdx;
        const isAnyHovered = state.hoveredIdx !== null;
        const isDimmed = isAnyHovered && !isHovered && !connections.some(([a, b]) => (a === node.originalIdx || b === node.originalIdx) && (a === state.hoveredIdx || b === state.hoveredIdx));

        const alpha = isDimmed ? 0.25 : Math.min(1, (node.pz + 0.15) * 2);

        ctx.save();
        ctx.globalAlpha = alpha;

        // Pulsing halo for master hubs
        if (node.hub && !isDimmed) {
          const pulseR = (4 + Math.sin(state.pulseTime * 3 + n) * 3) * state.zoom;
          ctx.strokeStyle = isHovered ? 'rgba(34, 211, 238, 0.8)' : 'rgba(56, 189, 248, 0.4)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.px, node.py, pulseR + (node.hub ? 6 : 3), 0, Math.PI * 2);
          ctx.stroke();
        }

        // Outer node circle
        ctx.fillStyle = isHovered ? '#22d3ee' : node.hub ? '#38bdf8' : '#3b82f6';
        ctx.beginPath();
        ctx.arc(node.px, node.py, (node.hub ? 5.5 : 3.5) * state.zoom, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(node.px, node.py, (node.hub ? 5.5 : 3.5) * state.zoom, 0, Math.PI * 2);
        ctx.stroke();

        // Node Name Label
        const labelText = node.name.replace(' Hub', '').replace(' Link', '').replace(' Node', '');
        ctx.font = `${isHovered || node.hub ? 'bold 12px' : '10px'} monospace`;
        ctx.textAlign = node.px > centerX ? 'left' : 'right';
        ctx.textBaseline = 'middle';

        const labelX = node.px + (node.px > centerX ? 10 : -10);
        const labelY = node.py;

        ctx.strokeStyle = 'rgba(1, 4, 9, 0.9)';
        ctx.lineWidth = 3.5;
        ctx.strokeText(labelText, labelX, labelY);

        ctx.fillStyle = isHovered ? '#22d3ee' : node.hub ? '#ffffff' : '#94a3b8';
        ctx.fillText(labelText, labelX, labelY);

        ctx.restore();
      }

      ctx.restore();
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Pointer Interaction Handlers for zero-latency Mouse & Touch Dragging
  const handlePointerDown = (e: React.PointerEvent) => {
    stateRef.current.isDragging = true;
    stateRef.current.dragLastX = e.clientX;
    stateRef.current.dragLastY = e.clientY;
    stateRef.current.vx = 0;
    stateRef.current.vy = 0;
    stateRef.current.targetRx = null;
    stateRef.current.targetRy = null;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const state = stateRef.current;
    if (state.isDragging) {
      const deltaX = e.clientX - state.dragLastX;
      const deltaY = e.clientY - state.dragLastY;

      state.vx = deltaX * 0.35;
      state.vy = -deltaY * 0.35;

      state.rx = (state.rx + state.vx + 360) % 360;
      state.ry = Math.max(-65, Math.min(65, state.ry + state.vy));

      state.dragLastX = e.clientX;
      state.dragLastY = e.clientY;
      return;
    }

    // Hover detection over projected nodes
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    const width = rect.width;
    const height = rect.height;
    const centerX = width * 0.5;
    const centerY = height * 0.52;
    const baseR = Math.min(width, height) * 0.36;
    const R = baseR * state.zoom;

    const radX = (state.rx * Math.PI) / 180;
    const radY = (state.ry * Math.PI) / 180;
    const cosY = Math.cos(radX);
    const sinY = Math.sin(radX);
    const cosX = Math.cos(radY);
    const sinX = Math.sin(radY);

    let foundIdx: number | null = null;
    let minDist = 18;

    for (let i = 0; i < NODES_3D.length; i++) {
      const node = NODES_3D[i];
      const xRotY = node.x3 * cosY - node.z3 * sinY;
      const zRotY = node.x3 * sinY + node.z3 * cosY;
      const yFinal = node.y3 * cosX - zRotY * sinX;
      const zFinal = node.y3 * sinX + zRotY * cosX;

      if (zFinal < -0.1) continue;

      const px = centerX + R * xRotY;
      const py = centerY + R * yFinal;

      const dist = Math.hypot(mx - px, my - py);
      if (dist < minDist) {
        minDist = dist;
        foundIdx = i;
      }
    }

    if (foundIdx !== state.hoveredIdx) {
      setHoveredIdx(foundIdx);
    }
  };

  const handlePointerUp = () => {
    stateRef.current.isDragging = false;
  };

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const zoomDelta = e.deltaY * -0.0012;
    const newZoom = Math.min(1.85, Math.max(0.75, stateRef.current.zoom + zoomDelta));
    stateRef.current.zoom = newZoom;
    setZoomDisplay(Math.round(newZoom * 100));
  }, []);

  const flyToNode = (lat: number, lon: number) => {
    stateRef.current.targetRx = (-lon + 360) % 360;
    stateRef.current.targetRy = lat;
    stateRef.current.vx = 0;
    stateRef.current.vy = 0;
  };

  const handleResetCamera = () => {
    stateRef.current.targetRx = 20;
    stateRef.current.targetRy = 12;
    stateRef.current.zoom = 1.0;
    setZoomDisplay(100);
  };

  return (
    <section className="relative py-24 overflow-hidden select-none">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Global Sovereign Infrastructure"
          title={
            <>
              Interactive Cyber Defense. <br />
              <span className="text-gradient-blue">Active Global Threat Mesh.</span>
            </>
          }
          description="Drag to rotate in 3D, scroll to zoom, and click any security terminal to fly the camera directly to pan-African sovereign SOC operations."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-12 items-center">
          {/* Holographic Interactive Canvas Globe Container */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[1/1] sm:aspect-[4/5] lg:aspect-square bg-slate-950 rounded-3xl p-6 overflow-hidden border border-slate-800 dark:border-white/10 hover:border-blue-500/30 transition-all shadow-2xl shadow-blue-950/20 touch-none cursor-grab active:cursor-grabbing"
              onWheel={handleWheel}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={() => {
                handlePointerUp();
                setHoveredIdx(null);
              }}
            >
              {/* Background ambient mesh */}
              <div className="absolute inset-0 bg-dots opacity-20 dark:opacity-40 pointer-events-none" />
              <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-15 mask-fade-edges pointer-events-none" />

              {/* HUD Metrics Header */}
              <div className="absolute top-4 left-4 z-20 space-y-1 bg-black/80 backdrop-blur-md rounded-xl p-3.5 border border-white/10 text-[10px] font-mono text-slate-400 pointer-events-none select-none">
                <div className="flex items-center gap-1.5 text-blue-400 font-semibold uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  CyberGuard Active
                </div>
                <div className="flex justify-between gap-4 text-slate-400">
                  <span>Secured Links:</span>
                  <span className="text-emerald-400 font-semibold">15 ENCRYPTED</span>
                </div>
                <div className="flex justify-between gap-4 text-slate-400">
                  <span>Latency:</span>
                  <span className="text-cyan-400 font-semibold">0.1ms (ZERO)</span>
                </div>
                <div className="flex justify-between gap-4 text-slate-400">
                  <span>Active Endpoints:</span>
                  <span className="text-white font-semibold">10,870</span>
                </div>
              </div>

              {/* Interactive Zoom & Camera Control Bar */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/80 backdrop-blur-md rounded-xl p-1.5 border border-white/10 text-[10px] font-mono text-slate-400 select-none">
                <button
                  onClick={handleResetCamera}
                  title="Reset Camera View"
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <div className="h-3 w-px bg-white/10" />
                <button
                  onClick={() => {
                    const nz = Math.max(0.75, stateRef.current.zoom - 0.15);
                    stateRef.current.zoom = nz;
                    setZoomDisplay(Math.round(nz * 100));
                  }}
                  title="Zoom Out"
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="px-1.5 text-[10px] text-cyan-400 font-bold">{zoomDisplay}%</span>
                <button
                  onClick={() => {
                    const nz = Math.min(1.85, stateRef.current.zoom + 0.15);
                    stateRef.current.zoom = nz;
                    setZoomDisplay(Math.round(nz * 100));
                  }}
                  title="Zoom In"
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Drag Prompt */}
              <div className="absolute bottom-[90px] right-4 z-20 flex items-center gap-1.5 bg-black/65 backdrop-blur-sm rounded-lg px-2.5 py-1.5 text-[9px] font-mono text-slate-400 pointer-events-none select-none border border-white/5">
                <Maximize2 className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span>DRAG & SCROLL TO ZOOM</span>
              </div>

              {/* Interactive Telemetry Hover Card */}
              <div className="absolute bottom-4 left-4 right-4 z-20 h-[70px]">
                <AnimatePresence mode="wait">
                  {hoveredIdx !== null ? (
                    <motion.div
                      key="telemetry-hover"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="bg-black/95 backdrop-blur-md border border-cyan-500/40 rounded-xl p-3.5 flex justify-between items-center shadow-lg shadow-cyan-950/20"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">{countries[hoveredIdx].name}</span>
                          <span className="text-[9px] font-mono bg-blue-500/25 text-blue-400 px-1.5 py-0.2 rounded font-semibold">{countries[hoveredIdx].code}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium">{countries[hoveredIdx].info}</div>
                      </div>
                      <div className="flex gap-4 text-right">
                        <div className="space-y-0.5">
                          <div className="text-[9px] font-mono text-slate-500 uppercase">Nodes</div>
                          <div className="text-xs font-mono font-semibold text-emerald-400">{countries[hoveredIdx].nodes}</div>
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-[9px] font-mono text-slate-500 uppercase">Latency</div>
                          <div className="text-xs font-mono font-semibold text-cyan-400">{countries[hoveredIdx].ping}</div>
                        </div>
                        <div className="space-y-0.5">
                          <div className="text-[9px] font-mono text-slate-500 uppercase">Status</div>
                          <div className="text-xs font-mono font-semibold text-white">{countries[hoveredIdx].threat}</div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="telemetry-idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-white/5 border border-white/5 backdrop-blur-sm rounded-xl p-3.5 flex items-center justify-between pointer-events-none select-none h-full"
                    >
                      <div className="flex items-center gap-2.5 text-xs text-slate-400 font-medium">
                        <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                        <span>Hover any defense hub or click to center sovereign SOC terminals</span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 hidden sm:block">
                        Zero Latency 3D Mesh
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* High Performance HTML5 2D Canvas */}
              <canvas ref={canvasRef} className="w-full h-full block" />
            </motion.div>

            {/* Hub Selector Fly-To Terminal Bar */}
            <div className="bg-slate-900/40 border border-slate-800 dark:border-white/5 rounded-2xl p-4">
              <div className="text-xs font-mono text-slate-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Primary Sovereign SOC Hub Terminals</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {countries.filter(c => c.hub).map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      flyToNode(country.lat, country.lon);
                      setHoveredIdx(countries.findIndex(c => c.code === country.code));
                    }}
                    className="flex flex-col items-start p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-blue-500/40 text-left transition-all group duration-300 focus:outline-none focus:ring-1 focus:ring-blue-500/30"
                  >
                    <span className="text-[9px] font-mono font-bold text-slate-500 group-hover:text-blue-400 transition-colors uppercase tracking-widest">{country.code}</span>
                    <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors truncate w-full">{country.name.replace(' Hub', '')}</span>
                    <span className="text-[9px] font-mono text-emerald-400/90 mt-1 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                      {country.ping}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Initiatives column */}
          <div className="lg:col-span-5 space-y-4">
            {initiatives.map((init, i) => (
              <motion.div
                key={init.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-950/40 border border-slate-200/80 dark:border-white/5 shadow-sm hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all group duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-500/20 transition-all duration-300">
                  <init.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm mb-1 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {init.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {init.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
