import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Cta3DBackground = ({ variant = 'waves', isDarkMode = true }) => {
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
    let height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Oceanic Palette colors
    const cIce = 0xB3CFE5;
    const cSteel = 0x4A7FA7;
    const cNavy = 0x1A3D63;
    const cSnow = 0xF6FAFD;

    // Disposables tracking
    const disposables = [];

    // Mouse tracker
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX / rect.width - 0.5) * 2;
      mouse.targetY = -(clientY / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 450;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // ─────────────────────────────────────────────────────────────
    // VARIANT SETUP
    // ─────────────────────────────────────────────────────────────

    let updateAnimation = () => {};

    if (variant === 'waves') {
      // ── 1. KINETIC CYBERNETIC OCEAN WAVE TERRAIN (HOME PAGE) ──
      camera.position.set(0, 4.5, 9);
      camera.lookAt(0, 0, 0);

      const planeW = 26;
      const planeH = 16;
      const segW = 50;
      const segH = 32;

      const geometry = new THREE.PlaneGeometry(planeW, planeH, segW, segH);
      geometry.rotateX(-Math.PI / 2.3);
      geometry.translate(0, -1.2, 0);

      const pos = geometry.attributes.position;
      const count = pos.count;
      const initialY = new Float32Array(count);
      for (let i = 0; i < count; i++) initialY[i] = pos.getY(i);

      const wireMat = new THREE.MeshBasicMaterial({
        color: isDarkMode ? cSteel : cNavy,
        wireframe: true,
        transparent: true,
        opacity: isDarkMode ? 0.32 : 0.22,
      });
      const mesh = new THREE.Mesh(geometry, wireMat);
      scene.add(mesh);

      const pointGeo = geometry.clone();
      const pointColors = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const rand = Math.random();
        if (rand > 0.6) {
          pointColors[i * 3] = 0.70; pointColors[i * 3 + 1] = 0.81; pointColors[i * 3 + 2] = 0.90;
        } else if (rand > 0.2) {
          pointColors[i * 3] = 0.29; pointColors[i * 3 + 1] = 0.50; pointColors[i * 3 + 2] = 0.65;
        } else {
          pointColors[i * 3] = 0.96; pointColors[i * 3 + 1] = 0.98; pointColors[i * 3 + 2] = 0.99;
        }
      }
      pointGeo.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));
      const ptMat = new THREE.PointsMaterial({
        size: 0.075,
        vertexColors: true,
        transparent: true,
        opacity: isDarkMode ? 0.85 : 0.75,
      });
      const ptMesh = new THREE.Points(pointGeo, ptMat);
      scene.add(ptMesh);

      disposables.push(geometry, pointGeo, wireMat, ptMat);

      updateAnimation = (elapsed) => {
        camera.position.x = mouse.x * 1.5;
        camera.position.y = 4.5 + mouse.y * 0.8;
        camera.lookAt(0, -0.5, 0);

        const pArr = pos.array;
        const ptArr = pointGeo.attributes.position.array;
        for (let i = 0; i < count; i++) {
          const vx = pos.getX(i);
          const vz = pos.getZ(i);
          const wave1 = Math.sin(vx * 0.45 + elapsed * 1.4) * 0.55;
          const wave2 = Math.cos(vz * 0.40 + elapsed * 1.1) * 0.45;
          const distToMouse = Math.sqrt((vx - mouse.x * 5) ** 2 + (vz - (-mouse.y * 4)) ** 2);
          const mouseLift = Math.max(0, 1 - distToMouse / 5.5) * 0.85;
          const newY = initialY[i] + wave1 + wave2 + mouseLift;
          pArr[i * 3 + 1] = newY;
          ptArr[i * 3 + 1] = newY;
        }
        pos.needsUpdate = true;
        pointGeo.attributes.position.needsUpdate = true;
      };

    } else if (variant === 'torus') {
      // ── 2. 3D QUANTUM TORUS KNOT WIREFRAME & ENERGY AURA (ABOUT PAGE) ──
      camera.position.set(0, 0, 7.5);
      camera.lookAt(0, 0, 0);

      const torusGeo = new THREE.TorusKnotGeometry(2.3, 0.65, 120, 22, 2, 3);
      const torusWireMat = new THREE.MeshBasicMaterial({
        color: isDarkMode ? cIce : cNavy,
        wireframe: true,
        transparent: true,
        opacity: isDarkMode ? 0.28 : 0.22,
      });
      const torusMesh = new THREE.Mesh(torusGeo, torusWireMat);
      scene.add(torusMesh);

      // Point cloud covering Torus Knot
      const torusPointsMat = new THREE.PointsMaterial({
        size: 0.065,
        color: isDarkMode ? 0x93C5FD : cSteel,
        transparent: true,
        opacity: isDarkMode ? 0.85 : 0.75,
      });
      const torusPoints = new THREE.Points(torusGeo, torusPointsMat);
      scene.add(torusPoints);

      // Concentric orbital rings around torus
      const ringGeo = new THREE.RingGeometry(3.6, 3.65, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: isDarkMode ? cSteel : cNavy,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
      });
      const ring1 = new THREE.Mesh(ringGeo, ringMat);
      ring1.rotation.x = Math.PI / 3;
      scene.add(ring1);

      disposables.push(torusGeo, torusWireMat, torusPointsMat, ringGeo, ringMat);

      updateAnimation = (elapsed) => {
        torusMesh.rotation.x = elapsed * 0.25 + mouse.y * 0.4;
        torusMesh.rotation.y = elapsed * 0.35 + mouse.x * 0.4;
        torusPoints.rotation.x = torusMesh.rotation.x;
        torusPoints.rotation.y = torusMesh.rotation.y;
        ring1.rotation.z = elapsed * 0.15;
      };

    } else if (variant === 'cubes') {
      // ── 3. 3D FLOATING PROJECT CUBE MATRIX (PROJECTS PAGE) ──
      camera.position.set(0, 0, 8.5);
      camera.lookAt(0, 0, 0);

      const cubeGroup = new THREE.Group();
      scene.add(cubeGroup);

      const cubes = [];
      const cubeCount = 18;

      for (let i = 0; i < cubeCount; i++) {
        const size = 0.6 + Math.random() * 0.9;
        const boxGeo = new THREE.BoxGeometry(size, size, size);
        const edges = new THREE.EdgesGeometry(boxGeo);

        const edgeMat = new THREE.LineBasicMaterial({
          color: Math.random() > 0.5 ? cIce : cSteel,
          transparent: true,
          opacity: isDarkMode ? 0.65 : 0.5,
        });
        const wireBox = new THREE.LineSegments(edges, edgeMat);

        const faceMat = new THREE.MeshBasicMaterial({
          color: cNavy,
          transparent: true,
          opacity: isDarkMode ? 0.25 : 0.15,
        });
        const solidBox = new THREE.Mesh(boxGeo, faceMat);
        wireBox.add(solidBox);

        wireBox.position.set(
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6
        );

        cubeGroup.add(wireBox);
        cubes.push({
          mesh: wireBox,
          rotX: (Math.random() - 0.5) * 0.02,
          rotY: (Math.random() - 0.5) * 0.02,
          speedY: 0.005 + Math.random() * 0.008,
          initialY: wireBox.position.y,
        });

        disposables.push(boxGeo, edges, edgeMat, faceMat);
      }

      updateAnimation = (elapsed) => {
        cubeGroup.rotation.y = mouse.x * 0.35;
        cubeGroup.rotation.x = -mouse.y * 0.25;

        cubes.forEach((c) => {
          c.mesh.rotation.x += c.rotX;
          c.mesh.rotation.y += c.rotY;
          c.mesh.position.y = c.initialY + Math.sin(elapsed * 1.5 + c.mesh.position.x) * 0.4;
        });
      };

    } else if (variant === 'network') {
      // ── 4. 3D INTERACTIVE NEURAL CONSTELLATION NETWORK (SERVICES PAGE) ──
      camera.position.set(0, 0, 8);
      camera.lookAt(0, 0, 0);

      const nodeCount = 55;
      const nodes = [];
      const nodePositions = new Float32Array(nodeCount * 3);

      for (let i = 0; i < nodeCount; i++) {
        const x = (Math.random() - 0.5) * 18;
        const y = (Math.random() - 0.5) * 10;
        const z = (Math.random() - 0.5) * 6;

        nodePositions[i * 3] = x;
        nodePositions[i * 3 + 1] = y;
        nodePositions[i * 3 + 2] = z;

        nodes.push({
          x, y, z,
          vx: (Math.random() - 0.5) * 0.012,
          vy: (Math.random() - 0.5) * 0.012,
          vz: (Math.random() - 0.5) * 0.008,
        });
      }

      const nodeGeo = new THREE.BufferGeometry();
      nodeGeo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
      const nodeMat = new THREE.PointsMaterial({
        size: 0.12,
        color: isDarkMode ? cIce : cNavy,
        transparent: true,
        opacity: 0.9,
      });
      const nodePoints = new THREE.Points(nodeGeo, nodeMat);
      scene.add(nodePoints);

      // Dynamic Line Connections
      const maxLines = 160;
      const linePositions = new Float32Array(maxLines * 6);
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      const lineMat = new THREE.LineBasicMaterial({
        color: isDarkMode ? cSteel : cNavy,
        transparent: true,
        opacity: isDarkMode ? 0.35 : 0.25,
      });
      const lineMesh = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(lineMesh);

      disposables.push(nodeGeo, nodeMat, lineGeo, lineMat);

      updateAnimation = (elapsed) => {
        const nPos = nodeGeo.attributes.position.array;
        let lineIdx = 0;
        const lPos = lineGeo.attributes.position.array;

        for (let i = 0; i < nodeCount; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;
          n.z += n.vz;

          if (n.x > 9 || n.x < -9) n.vx *= -1;
          if (n.y > 5 || n.y < -5) n.vy *= -1;
          if (n.z > 3 || n.z < -3) n.vz *= -1;

          nPos[i * 3] = n.x + mouse.x * 0.8;
          nPos[i * 3 + 1] = n.y + mouse.y * 0.6;
          nPos[i * 3 + 2] = n.z;

          // Connect nearby nodes with lines
          for (let j = i + 1; j < nodeCount; j++) {
            const n2 = nodes[j];
            const dist = Math.sqrt((n.x - n2.x) ** 2 + (n.y - n2.y) ** 2 + (n.z - n2.z) ** 2);
            if (dist < 3.0 && lineIdx < maxLines) {
              lPos[lineIdx * 6] = nPos[i * 3];
              lPos[lineIdx * 6 + 1] = nPos[i * 3 + 1];
              lPos[lineIdx * 6 + 2] = nPos[i * 3 + 2];

              lPos[lineIdx * 6 + 3] = n2.x + mouse.x * 0.8;
              lPos[lineIdx * 6 + 4] = n2.y + mouse.y * 0.6;
              lPos[lineIdx * 6 + 5] = n2.z;
              lineIdx++;
            }
          }
        }
        nodeGeo.attributes.position.needsUpdate = true;
        lineGeo.setDrawRange(0, lineIdx * 2);
        lineGeo.attributes.position.needsUpdate = true;
      };

    } else if (variant === 'tunnel') {
      // ── 5. 3D HEXAGONAL HYPERSPACE WARP TUNNEL (SKILLS PAGE) ──
      camera.position.set(0, 0, 6.5);
      camera.lookAt(0, 0, 0);

      const tunnelGroup = new THREE.Group();
      scene.add(tunnelGroup);

      const ringCount = 14;
      const rings = [];

      for (let i = 0; i < ringCount; i++) {
        const radius = 2.0 + (i / ringCount) * 4.0;
        const hexGeo = new THREE.CircleGeometry(radius, 6);
        const hexEdges = new THREE.EdgesGeometry(hexGeo);
        const hexMat = new THREE.LineBasicMaterial({
          color: (i % 2 === 0) ? cIce : cSteel,
          transparent: true,
          opacity: 0.15 + (i / ringCount) * 0.45,
        });
        const hexLine = new THREE.LineSegments(hexEdges, hexMat);
        hexLine.position.z = -i * 1.5;

        tunnelGroup.add(hexLine);
        rings.push(hexLine);

        disposables.push(hexGeo, hexEdges, hexMat);
      }

      // Warp speed star streaks
      const starCount = 120;
      const starGeo = new THREE.BufferGeometry();
      const starPos = new Float32Array(starCount * 3);
      const starData = [];

      for (let i = 0; i < starCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = 0.5 + Math.random() * 5.5;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        const z = -Math.random() * 22;

        starPos[i * 3] = x;
        starPos[i * 3 + 1] = y;
        starPos[i * 3 + 2] = z;

        starData.push({ x, y, z, speed: 0.12 + Math.random() * 0.18 });
      }

      starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      const starMat = new THREE.PointsMaterial({
        size: 0.08,
        color: cSnow,
        transparent: true,
        opacity: isDarkMode ? 0.85 : 0.65,
      });
      const starPoints = new THREE.Points(starGeo, starMat);
      scene.add(starPoints);

      disposables.push(starGeo, starMat);

      updateAnimation = (elapsed) => {
        tunnelGroup.rotation.z = elapsed * 0.15;
        camera.position.x = mouse.x * 0.8;
        camera.position.y = mouse.y * 0.6;
        camera.lookAt(0, 0, -10);

        rings.forEach((r, idx) => {
          r.rotation.z = (idx % 2 === 0 ? 1 : -1) * elapsed * 0.12;
        });

        const sArr = starGeo.attributes.position.array;
        for (let i = 0; i < starCount; i++) {
          const sd = starData[i];
          sd.z += sd.speed;
          if (sd.z > 6) sd.z = -20;
          sArr[i * 3 + 2] = sd.z;
        }
        starGeo.attributes.position.needsUpdate = true;
      };

    } else if (variant === 'sphere') {
      // ── 6. 3D GYROSCOPE CELESTIAL ORBIT (PROJECT DETAIL PAGE) ──
      camera.position.set(0, 0, 7.5);
      camera.lookAt(0, 0, 0);

      const gyroGroup = new THREE.Group();
      scene.add(gyroGroup);

      // Core Icosahedron
      const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
      const coreEdges = new THREE.EdgesGeometry(coreGeo);
      const coreMat = new THREE.LineBasicMaterial({
        color: cIce,
        transparent: true,
        opacity: 0.75,
      });
      const coreMesh = new THREE.LineSegments(coreEdges, coreMat);
      gyroGroup.add(coreMesh);

      // 3 Multi-Axis Orbital Gyroscope Rings
      const ring1Geo = new THREE.RingGeometry(2.3, 2.34, 64);
      const ring2Geo = new THREE.RingGeometry(3.0, 3.04, 64);
      const ring3Geo = new THREE.RingGeometry(3.7, 3.74, 64);

      const ringMat = new THREE.MeshBasicMaterial({
        color: isDarkMode ? cSteel : cNavy,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.45,
      });

      const r1 = new THREE.Mesh(ring1Geo, ringMat);
      const r2 = new THREE.Mesh(ring2Geo, ringMat);
      const r3 = new THREE.Mesh(ring3Geo, ringMat);

      r1.rotation.x = Math.PI / 4;
      r2.rotation.y = Math.PI / 3;
      r3.rotation.x = -Math.PI / 6;

      gyroGroup.add(r1, r2, r3);

      disposables.push(coreGeo, coreEdges, coreMat, ring1Geo, ring2Geo, ring3Geo, ringMat);

      updateAnimation = (elapsed) => {
        gyroGroup.rotation.y = elapsed * 0.2 + mouse.x * 0.4;
        gyroGroup.rotation.x = Math.sin(elapsed * 0.15) * 0.1 - mouse.y * 0.3;

        coreMesh.rotation.x = elapsed * 0.3;
        coreMesh.rotation.y = elapsed * 0.4;

        r1.rotation.z = elapsed * 0.25;
        r2.rotation.z = -elapsed * 0.2;
        r3.rotation.z = elapsed * 0.18;
      };
    }

    // ─────────────────────────────────────────────────────────────
    // RENDER LOOP & VISIBILITY HANDLING
    // ─────────────────────────────────────────────────────────────
    let isVisible = true;
    let animationFrameId;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(container);

    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = clock.getElapsedTime();
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      updateAnimation(elapsed);
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
      disposables.forEach((d) => d && d.dispose && d.dispose());
    };
  }, [variant, isDarkMode, prefersReducedMotion]);

  if (!hasWebGL || prefersReducedMotion) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0"
      aria-hidden="true"
    />
  );
};
