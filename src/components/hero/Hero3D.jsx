import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { HeroFallback } from './HeroFallback';
import { particleAudio } from '../../utils/ambientSound';

export const Hero3D = ({ isDarkMode = false }) => {
  const containerRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setHasWebGL(false);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch (e) {
      setHasWebGL(false);
      return;
    }

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Oceanic Palette: #0A1931, #B3CFE5, #4A7FA7, #1A3D63, #F6FAFD
    const cMidnight = 0x0A1931;
    const cIce = 0xB3CFE5;
    const cSteel = 0x4A7FA7;
    const cNavy = 0x1A3D63;
    const cSnow = 0xF6FAFD;

    // Main group offset slightly to the right for natural balance behind hero text
    const heroGroup = new THREE.Group();
    // Responsive positioning: on desktop to the right, on mobile scaled & positioned comfortably
    if (width > 1024) {
      heroGroup.position.set(2.8, 0, 0);
      heroGroup.scale.set(1, 1, 1);
    } else if (width <= 768) {
      heroGroup.position.set(0.5, 1.0, -1);
      heroGroup.scale.set(0.75, 0.75, 0.75);
    } else {
      heroGroup.position.set(1.5, 0, 0);
      heroGroup.scale.set(0.9, 0.9, 0.9);
    }
    scene.add(heroGroup);

    // ── 1. ORGANIC SPHERICAL POINT CLOUD GLOBE (NO SOLID OPAQUE BALL) ──
    const globeRadius = 2.4;
    const globePointCount = 1800;
    const globePositions = new Float32Array(globePointCount * 3);
    const globeColors = new Float32Array(globePointCount * 3);
    const globePointsData = [];

    const phi = Math.PI * (3 - Math.sqrt(5)); // golden ratio angle
    for (let i = 0; i < globePointCount; i++) {
      const y = 1 - (i / (globePointCount - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY * globeRadius;
      const z = Math.sin(theta) * radiusAtY * globeRadius;
      const curY = y * globeRadius;

      globePositions[i * 3] = x;
      globePositions[i * 3 + 1] = curY;
      globePositions[i * 3 + 2] = z;

      // Color variation tuned for Light vs Dark theme
      const t = Math.random();
      if (isDarkMode) {
        // Dark Mode: Luminous Ice Blue, Steel Blue, and Snow White
        if (t > 0.6) {
          globeColors[i * 3] = 0.96; globeColors[i * 3 + 1] = 0.98; globeColors[i * 3 + 2] = 0.99; // Snow
        } else if (t > 0.25) {
          globeColors[i * 3] = 0.70; globeColors[i * 3 + 1] = 0.81; globeColors[i * 3 + 2] = 0.90; // Ice Blue
        } else {
          globeColors[i * 3] = 0.29; globeColors[i * 3 + 1] = 0.50; globeColors[i * 3 + 2] = 0.65; // Steel Blue
        }
      } else {
        // Light Mode: High-contrast Deep Royal Navy, Ocean Steel, and Slate Navy (crisp & clear on white)
        if (t > 0.5) {
          globeColors[i * 3] = 0.10; globeColors[i * 3 + 1] = 0.24; globeColors[i * 3 + 2] = 0.39; // Deep Navy #1A3D63
        } else if (t > 0.2) {
          globeColors[i * 3] = 0.29; globeColors[i * 3 + 1] = 0.50; globeColors[i * 3 + 2] = 0.65; // Ocean Steel #4A7FA7
        } else {
          globeColors[i * 3] = 0.04; globeColors[i * 3 + 1] = 0.10; globeColors[i * 3 + 2] = 0.19; // Midnight #0A1931
        }
      }

      globePointsData.push({
        baseX: x,
        baseY: curY,
        baseZ: z,
        wobbleSpeed: 1.5 + Math.random() * 2,
        wobblePhase: Math.random() * Math.PI * 2,
      });
    }

    const globeGeo = new THREE.BufferGeometry();
    globeGeo.setAttribute('position', new THREE.BufferAttribute(globePositions, 3));
    globeGeo.setAttribute('color', new THREE.BufferAttribute(globeColors, 3));
    const globePointsMesh = new THREE.Points(
      globeGeo,
      new THREE.PointsMaterial({
        size: isDarkMode ? 0.065 : 0.075,
        vertexColors: true,
        transparent: true,
        opacity: isDarkMode ? 0.92 : 0.88,
      })
    );
    heroGroup.add(globePointsMesh);

    // Ethereal Rotating Orbital Constellation Ring (Subtle tech line, NO solid blob)
    const orbitCurve = new THREE.EllipseCurve(0, 0, globeRadius * 1.15, globeRadius * 1.15, 0, 2 * Math.PI, false, 0);
    const orbitPoints = orbitCurve.getPoints(96);
    const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const orbitMat = new THREE.LineBasicMaterial({
      color: isDarkMode ? cIce : cNavy,
      transparent: true,
      opacity: isDarkMode ? 0.35 : 0.25,
    });
    const orbitRing1 = new THREE.Line(orbitGeo, orbitMat);
    orbitRing1.rotation.x = Math.PI / 3;
    orbitRing1.rotation.y = Math.PI / 6;
    heroGroup.add(orbitRing1);

    const orbitRing2 = new THREE.Line(orbitGeo, orbitMat);
    orbitRing2.rotation.x = -Math.PI / 4;
    orbitRing2.rotation.y = -Math.PI / 3;
    heroGroup.add(orbitRing2);

    // ── 2. FREE-FLOWING SPACE PARTICLES (COVERING ENTIRE HERO BACKGROUND) ──
    const freeCount = 2800;
    const freePositions = new Float32Array(freeCount * 3);
    const freeColors = new Float32Array(freeCount * 3);
    const freeParticles = [];

    for (let i = 0; i < freeCount; i++) {
      const x = (Math.random() - 0.4) * 24;
      const y = (Math.random() - 0.5) * 14;
      const z = (Math.random() - 0.5) * 12;

      freePositions[i * 3] = x;
      freePositions[i * 3 + 1] = y;
      freePositions[i * 3 + 2] = z;

      const rand = Math.random();
      if (isDarkMode) {
        if (rand > 0.7) {
          freeColors[i * 3] = 0.96; freeColors[i * 3 + 1] = 0.98; freeColors[i * 3 + 2] = 0.99;
        } else if (rand > 0.3) {
          freeColors[i * 3] = 0.70; freeColors[i * 3 + 1] = 0.81; freeColors[i * 3 + 2] = 0.90;
        } else {
          freeColors[i * 3] = 0.29; freeColors[i * 3 + 1] = 0.50; freeColors[i * 3 + 2] = 0.65;
        }
      } else {
        // Light Mode particles (Deep Navy, Steel Blue, Ocean Slate)
        if (rand > 0.6) {
          freeColors[i * 3] = 0.10; freeColors[i * 3 + 1] = 0.24; freeColors[i * 3 + 2] = 0.39;
        } else if (rand > 0.25) {
          freeColors[i * 3] = 0.29; freeColors[i * 3 + 1] = 0.50; freeColors[i * 3 + 2] = 0.65;
        } else {
          freeColors[i * 3] = 0.39; freeColors[i * 3 + 1] = 0.50; freeColors[i * 3 + 2] = 0.61;
        }
      }

      freeParticles.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.006,
        vy: (Math.random() - 0.5) * 0.006,
        vz: (Math.random() - 0.5) * 0.004,
        waveSpeed: 0.8 + Math.random() * 1.5,
        waveAmp: 0.15 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const freeGeo = new THREE.BufferGeometry();
    freeGeo.setAttribute('position', new THREE.BufferAttribute(freePositions, 3));
    freeGeo.setAttribute('color', new THREE.BufferAttribute(freeColors, 3));
    const freePointsMesh = new THREE.Points(
      freeGeo,
      new THREE.PointsMaterial({
        size: isDarkMode ? 0.05 : 0.058,
        vertexColors: true,
        transparent: true,
        opacity: isDarkMode ? 0.75 : 0.82,
      })
    );
    scene.add(freePointsMesh);

    // ── 3. DETACHING PARTICLE STREAM (Dispersing from globe into the background) ──
    const streamCount = 1500;
    const streamPositions = new Float32Array(streamCount * 3);
    const streamColors = new Float32Array(streamCount * 3);
    const streamData = [];

    for (let i = 0; i < streamCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phiAngle = Math.acos(2.0 * v - 1.0);
      const sinPhi = Math.sin(phiAngle);

      const dirX = sinPhi * Math.cos(theta);
      const dirY = Math.cos(phiAngle);
      const dirZ = sinPhi * Math.sin(theta);

      const dist = globeRadius + Math.random() * 5.0;

      streamPositions[i * 3] = dirX * dist;
      streamPositions[i * 3 + 1] = dirY * dist;
      streamPositions[i * 3 + 2] = dirZ * dist;

      if (isDarkMode) {
        streamColors[i * 3] = 0.70; streamColors[i * 3 + 1] = 0.81; streamColors[i * 3 + 2] = 0.90; // Ice Blue
      } else {
        streamColors[i * 3] = 0.29; streamColors[i * 3 + 1] = 0.50; streamColors[i * 3 + 2] = 0.65; // Steel Blue
      }

      streamData.push({
        dirX,
        dirY,
        dirZ,
        dist,
        speed: 0.01 + Math.random() * 0.02,
        maxDist: globeRadius + 6.0,
        theta,
        phiAngle,
        swirl: (Math.random() - 0.5) * 0.025,
      });
    }

    const streamGeo = new THREE.BufferGeometry();
    streamGeo.setAttribute('position', new THREE.BufferAttribute(streamPositions, 3));
    streamGeo.setAttribute('color', new THREE.BufferAttribute(streamColors, 3));
    const streamMesh = new THREE.Points(
      streamGeo,
      new THREE.PointsMaterial({
        size: isDarkMode ? 0.055 : 0.065,
        vertexColors: true,
        transparent: true,
        opacity: isDarkMode ? 0.85 : 0.85,
      })
    );
    heroGroup.add(streamMesh);

    // ── Lighting ──
    scene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const dirLight = new THREE.DirectionalLight(cIce, 2.0);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // ── Mouse Fluid Parallax Interaction ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let lastClientX = 0;
    let lastClientY = 0;

    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;

      const deltaX = e.clientX - lastClientX;
      const deltaY = e.clientY - lastClientY;
      const moveSpeed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      lastClientX = e.clientX;
      lastClientY = e.clientY;

      // Soft crystal shimmer sound on interactive mouse movement
      if (moveSpeed > 6) {
        particleAudio.triggerParticleShimmer(moveSpeed / 18);
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      // Adjust globe offset and scale dynamically
      if (width > 1024) {
        heroGroup.position.set(2.8, 0, 0);
        heroGroup.scale.set(1, 1, 1);
      } else if (width <= 768) {
        heroGroup.position.set(0.5, 1.0, -1);
        heroGroup.scale.set(0.75, 0.75, 0.75);
      } else {
        heroGroup.position.set(1.5, 0, 0);
        heroGroup.scale.set(0.9, 0.9, 0.9);
      }
    };
    window.addEventListener('resize', handleResize);

    let isVisible = true;
    let animationFrameId;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    const clock = new THREE.Clock();

    // ── FLUID ANIMATION LOOP: WHOLE BACKGROUND FLOW ──
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.035;
      mouse.y += (mouse.targetY - mouse.y) * 0.035;

      // Free steady rotation of the globe
      heroGroup.rotation.y = elapsed * 0.08 + mouse.x * 0.4;
      heroGroup.rotation.x = Math.sin(elapsed * 0.2) * 0.05 - mouse.y * 0.3;

      orbitRing1.rotation.z = elapsed * 0.12;
      orbitRing2.rotation.z = -elapsed * 0.09;

      // 1. Organic gentle breathing on globe surface points
      const gPos = globeGeo.attributes.position.array;
      for (let i = 0; i < globePointCount; i++) {
        const pd = globePointsData[i];
        const breath = Math.sin(elapsed * pd.wobbleSpeed + pd.wobblePhase) * 0.035;
        gPos[i * 3] = pd.baseX * (1 + breath);
        gPos[i * 3 + 1] = pd.baseY * (1 + breath);
        gPos[i * 3 + 2] = pd.baseZ * (1 + breath);
      }
      globeGeo.attributes.position.needsUpdate = true;

      // 2. Stream particles dispersing freely into wide space
      const sPos = streamGeo.attributes.position.array;
      for (let i = 0; i < streamCount; i++) {
        const sd = streamData[i];
        sd.dist += sd.speed;

        // Reset when reaching outer boundary
        if (sd.dist > sd.maxDist) {
          sd.dist = globeRadius + Math.random() * 0.3;
        }

        sd.theta += sd.swirl;
        const curSin = Math.sin(sd.phiAngle);
        sPos[i * 3] = curSin * Math.cos(sd.theta) * sd.dist;
        sPos[i * 3 + 1] = Math.cos(sd.phiAngle) * sd.dist;
        sPos[i * 3 + 2] = curSin * Math.sin(sd.theta) * sd.dist;
      }
      streamGeo.attributes.position.needsUpdate = true;

      // 3. Free floating particles moving across whole background
      const fPos = freeGeo.attributes.position.array;
      for (let i = 0; i < freeCount; i++) {
        const fp = freeParticles[i];

        // Move along velocity vector
        fp.x += fp.vx;
        fp.y += fp.vy + Math.sin(elapsed * fp.waveSpeed + fp.phase) * 0.003;
        fp.z += fp.vz;

        // Wrap around boundaries to stay across whole hero background
        if (fp.x > 14) fp.x = -14;
        if (fp.x < -14) fp.x = 14;
        if (fp.y > 8) fp.y = -8;
        if (fp.y < -8) fp.y = 8;
        if (fp.z > 7) fp.z = -7;
        if (fp.z < -7) fp.z = 7;

        fPos[i * 3] = fp.x;
        fPos[i * 3 + 1] = fp.y;
        fPos[i * 3 + 2] = fp.z;
      }
      freeGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [prefersReducedMotion, isDarkMode]);

  if (!hasWebGL || prefersReducedMotion) return <HeroFallback />;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
    />
  );
};
