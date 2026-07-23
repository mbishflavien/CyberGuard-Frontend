'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import {
  MapPin,
  Users,
  Briefcase,
  TrendingUp,
  Heart,
  Activity,
  Compass,
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
  [0, 5], // Lagos - Accra
  [0, 4], // Lagos - Dakar
  [0, 2], // Lagos - Cape Town
  [0, 3], // Lagos - Cairo
  [0, 8], // Lagos - London
  [0, 9], // Lagos - New York
  [1, 6], // Nairobi - Addis
  [1, 7], // Nairobi - Kigali
  [1, 2], // Nairobi - Cape Town
  [1, 3], // Nairobi - Cairo
  [1, 12], // Nairobi - Singapore
  [2, 11], // Cape Town - São Paulo
  [3, 8], // Cairo - London
  [10, 12], // Tokyo - Singapore
  [9, 8], // New York - London
];

// Continent detection function
const isLand = (lat: number, lon: number) => {
  let l = lon;
  while (l > 180) l -= 360;
  while (l < -180) l += 360;

  // AFRICA
  if (lat >= -35 && lat <= 37 && l >= -18 && l <= 51) {
    if (lat < 5 && l < 10 && lat > -15) {
      if (l < -5) return false;
      if (lat < 0 && l < 5) return false;
    }
    if (lat > 12 && lat < 30 && l > 33 && l < 43) return false; // Red Sea
    if (lat > 32 && l < -5) return false;
    return true;
  }

  // EUROPE
  if (lat > 36 && lat <= 71 && l >= -10 && l <= 40) {
    if (lat < 42 && l > 15) return false;
    return true;
  }

  // ASIA
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

  // NORTH AMERICA
  if (lat >= 7 && lat <= 75 && l >= -170 && l <= -50) {
    if (lat < 25 && l > -100) {
      if (lat < 15 && l < -90) return false;
      return l < -75;
    }
    if (lat > 18 && lat < 30 && l > -97 && l < -81) return false;
    return true;
  }

  // SOUTH AMERICA
  if (lat >= -56 && lat <= 12 && l >= -82 && l <= -34) {
    if (lat < -20) {
      const width = 20 - (lat + 20) * 0.4;
      const center = -60 + (lat + 20) * 0.15;
      return l >= center - width && l <= center + width;
    }
    return true;
  }

  // AUSTRALIA
  if (lat >= -44 && lat <= -10 && l >= 112 && l <= 154) {
    if (lat < -40 && l > 143) return true;
    return lat >= -38;
  }

  // MADAGASCAR & GREENLAND
  if (lat >= -26 && lat <= -11 && l >= 43 && l <= 51) return true;
  if (lat >= 60 && lat <= 83 && l >= -73 && l <= -10) return true;

  return false;
};

// Generate pre-calculated 3D unit coordinates for land points
const generateLandPoints3D = () => {
  const points: { id: string; isAfrica: boolean; x3: number; y3: number; z3: number }[] = [];
  const latStep = 5.0;
  const lonStep = 5.0;

  for (let lat = -60; lat <= 75; lat += latStep) {
    for (let lon = -180; lon <= 180; lon += lonStep) {
      if (isLand(lat, lon)) {
        const isAfrica = lat >= -35 && lat <= 37 && lon >= -18 && lon <= 51;
        const latRad = (lat * Math.PI) / 180;
        const lonRad = (lon * Math.PI) / 180;
        
        points.push({
          id: `${lat.toFixed(1)}_${lon.toFixed(1)}`,
          isAfrica,
          x3: Math.cos(latRad) * Math.sin(lonRad),
          y3: -Math.sin(latRad),
          z3: Math.cos(latRad) * Math.cos(lonRad),
        });
      }
    }
  }
  return points;
};

// Precomputed land matrix
const LAND_POINTS_3D = generateLandPoints3D();

// Pre-calculate unit vectors for active nodes
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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Rotational & Camera States
  const [rotationX, setRotationX] = useState(20); // Longitude Yaw
  const [rotationY, setRotationY] = useState(12); // Latitude Pitch
  const [zoom, setZoom] = useState(1.0); // Dynamic Zoom Scale (0.75 - 2.0)

  // Kinetic Inertia Velocity
  const [vx, setVx] = useState(0);
  const [vy, setVy] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [lastInteractionTime, setLastInteractionTime] = useState(0);
  const [targetRotation, setTargetRotation] = useState<{ x: number; y: number } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ x: 0, y: 0 });

  // Smooth Interpolation towards clicked target coordinates
  useEffect(() => {
    if (!targetRotation || isDragging) return;

    let frameId: number;
    const animateTarget = () => {
      let isDone = true;

      setRotationX((curr) => {
        let diff = targetRotation.x - curr;
        while (diff > 180) diff -= 360;
        while (diff < -180) diff += 360;
        if (Math.abs(diff) < 0.1) return targetRotation.x;
        isDone = false;
        return (curr + diff * 0.12 + 360) % 360;
      });

      setRotationY((curr) => {
        const diff = targetRotation.y - curr;
        if (Math.abs(diff) < 0.1) return targetRotation.y;
        isDone = false;
        return curr + diff * 0.12;
      });

      if (!isDone) {
        frameId = requestAnimationFrame(animateTarget);
      } else {
        setTargetRotation(null);
      }
    };

    frameId = requestAnimationFrame(animateTarget);
    return () => cancelAnimationFrame(frameId);
  }, [targetRotation, isDragging]);

  // Inertia and Auto-Rotation Loop
  useEffect(() => {
    if (isDragging || targetRotation) return;

    const timeSinceLastActive = Date.now() - lastInteractionTime;
    if (timeSinceLastActive < 3000) {
      const timer = setTimeout(() => {
        setRotationX((r) => r);
      }, 800);
      return () => clearTimeout(timer);
    }

    let frameId: number;
    const updatePhysics = () => {
      if (Math.abs(vx) > 0.015 || Math.abs(vy) > 0.015) {
        setRotationX((r) => (r + vx + 360) % 360);
        setRotationY((r) => Math.max(-65, Math.min(65, r + vy)));
        setVx((v) => v * 0.93);
        setVy((v) => v * 0.93);
      } else {
        setRotationX((r) => (r + 0.09) % 360);
      }
      frameId = requestAnimationFrame(updatePhysics);
    };

    frameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(frameId);
  }, [isDragging, lastInteractionTime, vx, vy, targetRotation]);

  // Pointer & Drag Handlers for zero-latency Mouse & Touch Dragging
  const handleDragStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setTargetRotation(null);
    dragRef.current = { x: clientX, y: clientY };
    setVx(0);
    setVy(0);
    setLastInteractionTime(Date.now());
  };

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    const deltaX = clientX - dragRef.current.x;
    const deltaY = clientY - dragRef.current.y;

    const sensitivity = 0.40;
    const newVx = deltaX * sensitivity;
    const newVy = -deltaY * sensitivity;

    setRotationX((r) => (r + newVx + 360) % 360);
    setRotationY((r) => Math.max(-65, Math.min(65, r + newVy)));

    setVx(newVx);
    setVy(newVy);

    dragRef.current = { x: clientX, y: clientY };
    setLastInteractionTime(Date.now());
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Scroll Wheel Zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const zoomDelta = e.deltaY * -0.0015;
    setZoom((prev) => Math.min(1.85, Math.max(0.75, prev + zoomDelta)));
    setLastInteractionTime(Date.now());
  }, []);

  // Smooth camera centering on clicked hub
  const flyToNode = (lat: number, lon: number) => {
    setTargetRotation({
      x: (-lon + 360) % 360,
      y: lat,
    });
    setVx(0);
    setVy(0);
    setLastInteractionTime(Date.now());
  };

  const handleResetCamera = () => {
    setTargetRotation({ x: 20, y: 12 });
    setZoom(1.0);
    setVx(0);
    setVy(0);
  };

  // Zero-Latency Multi-Axis Matrix Math values
  const transformMath = useMemo(() => {
    const rx = (rotationX * Math.PI) / 180;
    const ry = (rotationY * Math.PI) / 180;
    return {
      cosY: Math.cos(rx),
      sinY: Math.sin(rx),
      cosX: Math.cos(ry),
      sinX: Math.sin(ry),
      R: 34 * zoom,
    };
  }, [rotationX, rotationY, zoom]);

  // Projected 3D Land Points
  const projectedLandDots = useMemo(() => {
    const { cosY, sinY, cosX, sinX, R } = transformMath;
    return LAND_POINTS_3D.map((pt) => {
      const xRotY = pt.x3 * cosY - pt.z3 * sinY;
      const zRotY = pt.x3 * sinY + pt.z3 * cosY;
      const yFinal = pt.y3 * cosX - zRotY * sinX;
      const zFinal = pt.y3 * sinX + zRotY * cosX;

      return {
        id: pt.id,
        x: 50 + R * xRotY,
        y: 52 + R * yFinal,
        z: zFinal,
        isAfrica: pt.isAfrica,
      };
    });
  }, [transformMath]);

  // Projected 3D Active Hub Nodes
  const projectedNodes = useMemo(() => {
    const { cosY, sinY, cosX, sinX, R } = transformMath;
    return NODES_3D.map((node) => {
      const xRotY = node.x3 * cosY - node.z3 * sinY;
      const zRotY = node.x3 * sinY + node.z3 * cosY;
      const yFinal = node.y3 * cosX - zRotY * sinX;
      const zFinal = node.y3 * sinX + zRotY * cosX;

      return {
        ...node,
        projX: 50 + R * xRotY,
        projY: 52 + R * yFinal,
        projZ: zFinal,
      };
    });
  }, [transformMath]);

  // Projected 3D Arcs
  const projectedConnections = useMemo(() => {
    const { cosY, sinY, cosX, sinX, R } = transformMath;
    const segmentsCount = 16;

    return connections.map(([a, b], idx) => {
      const nodeA = NODES_3D[a];
      const nodeB = NODES_3D[b];

      let pathStr = '';
      let avgZ = 0;

      for (let i = 0; i <= segmentsCount; i++) {
        const t = i / segmentsCount;

        // Spherical linear interpolation in 3D
        let px = nodeA.x3 * (1 - t) + nodeB.x3 * t;
        let py = nodeA.y3 * (1 - t) + nodeB.y3 * t;
        let pz = nodeA.z3 * (1 - t) + nodeB.z3 * t;

        const len = Math.sqrt(px * px + py * py + pz * pz) || 1;
        const nx = px / len;
        const ny = py / len;
        const nz = pz / len;

        // Elevated cyber arc
        const lift = 3.2 * Math.sin(Math.PI * t);
        const currentR = R + lift;

        const lx = nx * currentR;
        const ly = ny * currentR;
        const lz = nz * currentR;

        // Multi-axis rotation projection
        const xRotY = lx * cosY - lz * sinY;
        const zRotY = lx * sinY + lz * cosY;
        const yFinal = ly * cosX - zRotY * sinX;
        const zFinal = ly * sinX + zRotY * cosX;

        const sx = 50 + xRotY;
        const sy = 52 + yFinal;

        if (i === 0) {
          pathStr += `M ${sx.toFixed(2)} ${sy.toFixed(2)}`;
        } else {
          pathStr += ` L ${sx.toFixed(2)} ${sy.toFixed(2)}`;
        }
        avgZ += zFinal;
      }

      const isAHighlighted = hoveredIdx === a;
      const isBHighlighted = hoveredIdx === b;
      const isDirectlyConnected = isAHighlighted || isBHighlighted;

      return {
        d: pathStr,
        isFront: (avgZ / (segmentsCount + 1)) >= -3,
        isCore: nodeA.hub && nodeB.hub,
        isHighlighted: isDirectlyConnected,
      };
    });
  }, [transformMath, hoveredIdx]);

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
          {/* Holographic Interactive Globe Box */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative aspect-[1/1] sm:aspect-[4/5] lg:aspect-square bg-slate-950 rounded-3xl p-6 overflow-hidden border transition-all duration-300 shadow-2xl shadow-blue-950/20 touch-none ${
                isDragging 
                  ? 'border-blue-500/60 cursor-grabbing shadow-blue-500/10' 
                  : 'border-slate-800 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-blue-500/20 cursor-grab'
              }`}
              onWheel={handleWheel}
              onMouseDown={(e) => {
                e.preventDefault();
                handleDragStart(e.clientX, e.clientY);
              }}
              onMouseMove={(e) => {
                e.preventDefault();
                handleDragMove(e.clientX, e.clientY);
              }}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={(e) => {
                if (e.touches[0]) {
                  handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
                }
              }}
              onTouchMove={(e) => {
                if (e.touches[0]) {
                  handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
                }
              }}
              onTouchEnd={handleDragEnd}
            >
              {/* Dynamic Matrix Rain backdrop */}
              <div className="absolute inset-0 bg-dots opacity-20 dark:opacity-40 pointer-events-none" />
              <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-15 mask-fade-edges pointer-events-none" />

              {/* Conic Radar sweep signal overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-15"
                style={{
                  background: 'conic-gradient(from 180deg at 50% 52%, rgba(56,189,248,0.3) 0deg, transparent 140deg, transparent 360deg)',
                  animation: 'spin-slow 24s linear infinite',
                }}
              />

              {/* HUD Active Metrics Panel */}
              <div className="absolute top-4 left-4 z-20 space-y-1 bg-black/80 backdrop-blur-md rounded-xl p-3.5 border border-white/10 text-[10px] font-mono text-slate-400 pointer-events-none select-none">
                <div className="flex items-center gap-1.5 text-blue-400 font-semibold uppercase tracking-wider">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Cyber Guard Active
                </div>
                <div className="flex justify-between gap-4 text-slate-400">
                  <span>Secured Links:</span>
                  <span className="text-emerald-400 font-semibold">15 ENCRYPTED</span>
                </div>
                <div className="flex justify-between gap-4 text-slate-400">
                  <span>BGP Latency:</span>
                  <span className="text-cyan-400 font-semibold">0.1ms (ZERO)</span>
                </div>
                <div className="flex justify-between gap-4 text-slate-400">
                  <span>Active Nodes:</span>
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
                  onClick={() => setZoom((z) => Math.max(0.75, z - 0.15))}
                  title="Zoom Out"
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="px-1.5 text-[10px] text-cyan-400 font-bold">{Math.round(zoom * 100)}%</span>
                <button
                  onClick={() => setZoom((z) => Math.min(1.85, z + 0.15))}
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

              {/* Interactive Hover Card */}
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

              {/* Dynamic Vector SVG Canvas */}
              <svg className="relative w-full h-full select-none" viewBox="0 0 100 110">
                <defs>
                  <linearGradient id="conn-gradient-high" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.45" />
                  </linearGradient>

                  <linearGradient id="conn-gradient-dim" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#1e293b" stopOpacity="0.02" />
                  </linearGradient>
                  
                  <radialGradient id="sphere-gradient" cx="50%" cy="52%" r="35%">
                    <stop offset="0%" stopColor="#051427" stopOpacity="0.85" />
                    <stop offset="65%" stopColor="#01060f" stopOpacity="0.98" />
                    <stop offset="100%" stopColor="#000205" stopOpacity="1" />
                  </radialGradient>

                  <radialGradient id="glow-edge" cx="50%" cy="52%" r="33%">
                    <stop offset="82%" stopColor="#38bdf8" stopOpacity="0" />
                    <stop offset="96%" stopColor="#38bdf8" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
                  </radialGradient>
                </defs>

                {/* Sphere Body & Atmosphere Glow */}
                <circle
                  cx="50"
                  cy="52"
                  r={34 * zoom}
                  fill="url(#sphere-gradient)"
                  stroke="url(#glow-edge)"
                  strokeWidth="0.8"
                  className="filter drop-shadow-[0_0_15px_rgba(56,189,248,0.35)] transition-all duration-150"
                />

                {/* Behind Hemisphere Land Points */}
                <g opacity="0.12">
                  {projectedLandDots.filter(d => d.z < 0).map((dot) => (
                    <circle
                      key={dot.id}
                      cx={dot.x}
                      cy={dot.y}
                      r={0.22 * zoom}
                      fill="#38bdf8"
                    />
                  ))}
                </g>

                {/* Front Hemisphere Land Points Matrix */}
                <g>
                  {projectedLandDots.filter(d => d.z >= -8).map((dot) => {
                    const normalizedZ = (dot.z + 8) / 42;
                    const dotOpacity = Math.max(0.08, normalizedZ * (dot.isAfrica ? 0.85 : 0.5));
                    const dotRadius = Math.max(0.12, normalizedZ * (dot.isAfrica ? 0.38 : 0.28) * zoom);
                    
                    return (
                      <circle
                        key={dot.id}
                        cx={dot.x}
                        cy={dot.y}
                        r={dotRadius}
                        fill={dot.isAfrica ? '#22d3ee' : '#38bdf8'}
                        opacity={dotOpacity}
                      />
                    );
                  })}
                </g>

                {/* Front Hemisphere 3D Inter-Node Connection Arcs */}
                <g>
                  {projectedConnections.map((conn, idx) => {
                    if (!conn.isFront) return null;

                    const isAnyNodeHovered = hoveredIdx !== null;
                    const isLineActive = !isAnyNodeHovered || conn.isHighlighted;
                    
                    return (
                      <g key={`conn-${idx}`}>
                        <path
                          d={conn.d}
                          fill="none"
                          stroke={isLineActive ? 'url(#conn-gradient-high)' : 'url(#conn-gradient-dim)'}
                          strokeWidth={isLineActive ? (conn.isHighlighted ? '0.45' : '0.22') : '0.06'}
                          strokeDasharray={conn.isCore || conn.isHighlighted ? 'none' : '1.2 1.2'}
                          opacity={isLineActive ? (conn.isHighlighted ? 0.95 : 0.45) : 0.08}
                          className="pointer-events-none"
                        />

                        {isLineActive && (
                          <motion.path
                            d={conn.d}
                            fill="none"
                            stroke={conn.isHighlighted ? '#22d3ee' : '#38bdf8'}
                            strokeWidth={conn.isHighlighted ? '0.75' : '0.5'}
                            strokeDasharray="2.5 30"
                            initial={{ strokeDashoffset: 100 }}
                            animate={{ strokeDashoffset: 0 }}
                            transition={{
                              duration: conn.isHighlighted ? 1.4 : (conn.isCore ? 2.4 : 3.2),
                              repeat: Infinity,
                              ease: 'linear',
                              delay: idx * 0.1,
                            }}
                            className="pointer-events-none"
                          />
                        )}
                      </g>
                    );
                  })}
                </g>

                {/* Active Interactive Hub Nodes */}
                <g>
                  {projectedNodes.filter(n => n.projZ >= -10).map((node) => {
                    const isHovered = hoveredIdx === node.originalIdx;
                    const isAnyHovered = hoveredIdx !== null;
                    
                    const isDimmed = isAnyHovered && !isHovered && !connections.some(([a, b]) => {
                      const connMatches = (a === node.originalIdx || b === node.originalIdx);
                      return connMatches && (a === hoveredIdx || b === hoveredIdx);
                    });

                    const depthFactor = (node.projZ + 10) / 44;
                    if (depthFactor < 0.1) return null;

                    return (
                      <g
                        key={`front-node-${node.name}`}
                        className="cursor-pointer group/node"
                        onMouseEnter={() => setHoveredIdx(node.originalIdx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          flyToNode(node.lat, node.lon);
                        }}
                        opacity={isDimmed ? 0.2 : depthFactor}
                      >
                        {/* Pulse ripple rings for master hubs */}
                        {node.hub && !isDimmed && (
                          <>
                            <motion.circle
                              cx={node.projX}
                              cy={node.projY}
                              r={1.2 * zoom}
                              fill="none"
                              stroke={isHovered ? '#22d3ee' : 'rgba(56, 189, 248, 0.45)'}
                              strokeWidth="0.2"
                              initial={{ scale: 0.8, opacity: 1 }}
                              animate={{ scale: isHovered ? 4.8 : 3.2, opacity: 0 }}
                              transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                ease: 'easeOut',
                                delay: node.originalIdx * 0.2,
                              }}
                            />
                          </>
                        )}

                        {/* Interactive glow backing */}
                        <circle
                          cx={node.projX}
                          cy={node.projY}
                          r={(node.hub ? 2.6 : 1.8) * zoom}
                          fill="rgba(34, 211, 238, 0.15)"
                          stroke="rgba(34, 211, 238, 0.25)"
                          strokeWidth="0.18"
                          className={`transition-all duration-200 ${
                            isHovered ? 'scale-125 opacity-100' : 'opacity-0'
                          }`}
                        />

                        {/* Main center terminal marker */}
                        <circle
                          cx={node.projX}
                          cy={node.projY}
                          r={(node.hub ? 0.95 : 0.6) * zoom}
                          fill={isHovered ? '#22d3ee' : (node.hub ? '#38bdf8' : '#3b82f6')}
                          stroke="#ffffff"
                          strokeWidth="0.22"
                          className="transition-all duration-200"
                        />

                        {/* Text label */}
                        <text
                          x={node.projX + (node.projX > 50 ? -2.2 : 2.2)}
                          y={node.projY + 0.4}
                          fontSize={1.3 * Math.max(0.85, zoom * 0.9)}
                          fontFamily="monospace"
                          fontWeight={node.hub ? 'bold' : 'normal'}
                          textAnchor={node.projX > 50 ? 'end' : 'start'}
                          stroke="#010409"
                          strokeWidth="0.28"
                          paintOrder="stroke"
                          className={`transition-colors duration-200 fill-current select-none pointer-events-none ${
                            isHovered 
                              ? 'fill-cyan-400 font-bold' 
                              : node.hub 
                                ? 'fill-white font-bold' 
                                : 'fill-slate-400'
                          }`}
                        >
                          {node.name.replace(' Hub', '').replace(' Link', '').replace(' Node', '')}
                        </text>
                      </g>
                    );
                  })}
                </g>

                {/* Equator Ring */}
                <circle
                  cx="50"
                  cy="52"
                  r={34 * zoom}
                  fill="none"
                  stroke="rgba(56, 189, 248, 0.08)"
                  strokeWidth="0.2"
                  strokeDasharray="2 3"
                />
              </svg>
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
