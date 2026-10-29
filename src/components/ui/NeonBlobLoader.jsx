import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * NeonBlobLoader
 * Premium 3D Organic Liquid Morphing Blob Loader
 * Engineered with Three.js + Custom GLSL Simplex Noise Vertex Displacement & Fresnel Rim Glow.
 * 
 * Tailored to Balaji's Oceanic Luxury Palette:
 * - Obsidian Dark Gloss Surface
 * - Iridescent Neon Fresnel Rim (Ice Blue #B3CFE5, Electric Cyan, Ocean Steel #4A7FA7, Royal Navy #1A3D63)
 * - Seamless Ambient Bloom & Soft Lens Streak Flare
 * - Supports Fullscreen splash and Inline variants
 */

const vertexShader = `
  uniform float uTime;
  uniform float uSpeed;
  uniform float uNoiseDensity;
  uniform float uNoiseStrength;

  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPosition;
  varying vec3 vViewPosition;
  varying float vDisplacement;

  // Simplex 3D noise (Stefan Gustavson)
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;

    // Organic harmonic wave deformation
    float t = uTime * uSpeed;
    float n1 = snoise(normal * uNoiseDensity + vec3(t * 0.75, t * 0.5, t * 0.3));
    float n2 = snoise(normal * (uNoiseDensity * 2.2) - vec3(t * 0.4, t * 0.9, t * 0.6)) * 0.45;
    float displacement = (n1 + n2) * uNoiseStrength;

    vDisplacement = displacement;

    vec3 displacedPosition = position + normal * displacement;
    vec4 mvPosition = modelViewMatrix * vec4(displacedPosition, 1.0);
    vViewPosition = -mvPosition.xyz;
    vWorldPosition = (modelMatrix * vec4(displacedPosition, 1.0)).xyz;

    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying vec3 vWorldPosition;
  varying vec3 vViewPosition;
  varying float vDisplacement;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);

    // Deep Obsidian / Dark Gloss Core (#050D1A - #0A1931)
    vec3 baseColor = vec3(0.02, 0.05, 0.10);

    // Dual-light Specular Gloss Highlights for wet liquid reflection
    vec3 lightDir1 = normalize(vec3(1.5, 2.0, 3.0));
    vec3 lightDir2 = normalize(vec3(-2.0, -1.0, 2.0));
    
    vec3 half1 = normalize(lightDir1 + viewDir);
    vec3 half2 = normalize(lightDir2 + viewDir);

    float spec1 = pow(max(dot(normal, half1), 0.0), 32.0);
    float spec2 = pow(max(dot(normal, half2), 0.0), 24.0);

    // Dynamic Iridescent Oceanic Fresnel Rim Glow
    // Fades smoothly between Ice Blue (#B3CFE5), Electric Cyan, Ocean Steel (#4A7FA7), and Snow White (#F6FAFD)
    float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 2.8);

    // Harmonic cycle for glowing rim
    float cycle = sin(uTime * 1.4) * 0.5 + 0.5;
    float cycle2 = cos(uTime * 0.9) * 0.5 + 0.5;

    vec3 colIce   = vec3(0.702, 0.812, 0.898); // #B3CFE5
    vec3 colSteel = vec3(0.290, 0.498, 0.655); // #4A7FA7
    vec3 colCyan  = vec3(0.35, 0.86, 0.98);   // Electric Cyan
    vec3 colWhite = vec3(0.965, 0.980, 0.992); // #F6FAFD

    vec3 neonRim = mix(colSteel, colIce, cycle);
    neonRim = mix(neonRim, colCyan, cycle2 * 0.65);
    neonRim = mix(neonRim, colWhite, pow(fresnel, 3.5) * 0.8);

    // Combine Core + Specular Gloss + Luminous Neon Rim
    vec3 finalColor = baseColor;
    finalColor += neonRim * fresnel * 2.4;
    finalColor += colWhite * (spec1 * 0.7 + spec2 * 0.35);

    // Subtle internal bioluminescence through displacement peaks
    float innerGlow = smoothstep(-0.2, 0.4, vDisplacement);
    finalColor += colSteel * innerGlow * 0.35;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export const NeonBlobLoader = ({
  isLoading = true,
  variant = 'fullscreen', // 'fullscreen' | 'inline'
  text = 'Loading...',
  subtitle = 'BALAJI SARABU • FULL STACK',
  onFinished,
  autoHideDuration = 0, // e.g. 1400ms for intro splash (0 = controlled by isLoading)
}) => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(isLoading);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const dismissTimeoutRef = useRef(null);

  // Handle autoHide duration if set
  useEffect(() => {
    if (autoHideDuration > 0 && isLoading) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [autoHideDuration, isLoading]);

  const handleDismiss = () => {
    setIsFadingOut(true);
    if (dismissTimeoutRef.current) clearTimeout(dismissTimeoutRef.current);
    dismissTimeoutRef.current = setTimeout(() => {
      setVisible(false);
      setIsFadingOut(false);
      if (onFinished) onFinished();
    }, 600); // 600ms exit fade
  };

  // Handle prop changes for isLoading
  useEffect(() => {
    if (isLoading) {
      if (dismissTimeoutRef.current) clearTimeout(dismissTimeoutRef.current);
      setVisible(true);
      setIsFadingOut(false);
    } else if (visible && !isFadingOut) {
      handleDismiss();
    }
  }, [isLoading]);

  useEffect(() => {
    if (!visible || prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    // WebGL Check
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch (e) {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = variant === 'fullscreen' ? 6.2 : 5.8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    // High vertex-density icosahedron for fluid organic ripples
    const geometry = new THREE.IcosahedronGeometry(1.6, 64);

    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: 0.9 },
      uNoiseDensity: { value: 1.35 },
      uNoiseStrength: { value: 0.42 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      wireframe: false,
    });

    const blobMesh = new THREE.Mesh(geometry, material);
    scene.add(blobMesh);

    // Ambient floating rotation
    let animationFrameId;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      const elapsed = clock.getElapsedTime();
      uniforms.uTime.value = elapsed;

      // Complex dual-axis organic rotation
      blobMesh.rotation.y = elapsed * 0.45;
      blobMesh.rotation.x = Math.sin(elapsed * 0.3) * 0.25;
      blobMesh.rotation.z = Math.cos(elapsed * 0.25) * 0.18;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      if (newW === 0 || newH === 0) return;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [visible, prefersReducedMotion, variant]);

  if (!visible) return null;

  // Reduced motion or Non-WebGL Graceful Fallback
  const isFallback = prefersReducedMotion || !hasWebGL;

  if (variant === 'inline') {
    return (
      <div
        className={`relative inline-flex flex-col items-center justify-center p-4 transition-opacity duration-500 ${
          isFadingOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Ambient Glow Disk */}
          <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl animate-pulse" />
          
          {isFallback ? (
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#1A3D63] via-[#4A7FA7] to-[#B3CFE5] animate-spin shadow-glow-ocean" />
          ) : (
            <div ref={containerRef} className="w-full h-full" />
          )}
        </div>
        {text && (
          <p className="mt-3 text-xs font-mono tracking-widest uppercase text-accent-deep dark:text-accent animate-pulse font-medium">
            {text}
          </p>
        )}
      </div>
    );
  }

  // Fullscreen Variant
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-700 ease-out select-none ${
        isFadingOut
          ? 'opacity-0 backdrop-blur-0 scale-[1.03] pointer-events-none'
          : 'opacity-100 backdrop-blur-2xl scale-100'
      }`}
      style={{
        background: 'radial-gradient(ellipse at center, #0F2544 0%, #0A1931 70%, #060F1E 100%)',
      }}
    >
      {/* ── AMBIENT BLOOM & SOFT LIGHT STREAK ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#4A7FA7]/18 dark:bg-[#B3CFE5]/14 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[1px] bg-gradient-to-r from-transparent via-[#B3CFE5]/35 to-transparent blur-[2px] pointer-events-none" />

      {/* ── 3D ORGANIC BLOB CANVAS / FALLBACK ── */}
      <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
        {isFallback ? (
          <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-[#1A3D63] via-[#4A7FA7] to-[#B3CFE5] animate-pulse shadow-[0_0_50px_rgba(74,127,167,0.4)] flex items-center justify-center">
            <div className="w-36 h-36 rounded-full bg-[#0A1931] border border-[#B3CFE5]/30" />
          </div>
        ) : (
          <div ref={containerRef} className="w-full h-full" />
        )}
      </div>

      {/* ── CINEMATIC LOADING LABELS ── */}
      <div className="mt-2 flex flex-col items-center space-y-2.5 z-10">
        <p className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-[#F6FAFD] font-semibold flex items-center gap-2">
          <span>{text}</span>
          <span className="inline-flex w-1.5 h-1.5 rounded-full bg-[#B3CFE5] animate-ping" />
        </p>

        {subtitle && (
          <p className="text-[10px] font-mono tracking-widest uppercase text-[#B3CFE5]/60 font-normal">
            {subtitle}
          </p>
        )}
      </div>

      {/* Micro progress shimmer line */}
      <div className="mt-6 w-32 h-[1.5px] rounded-full bg-white/10 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#B3CFE5] to-transparent animate-[shimmer_2s_infinite]" />
      </div>
    </div>
  );
};

