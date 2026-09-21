'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeVortexCanvasProps {
  className?: string;
  particleCount?: number;
}

export const ThreeVortexCanvas: React.FC<ThreeVortexCanvasProps> = ({
  className = '',
  particleCount = 1200,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.04);

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 20;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. 3D Vortex / Torus Helix Geometry
    const count = particleCount;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const initialCoords = new Float32Array(count * 3);
    const speeds = new Float32Array(count);

    const colorWhite = new THREE.Color('#ffffff');
    const colorAsh = new THREE.Color('#999998');
    const colorCharcoal = new THREE.Color('#444444');

    for (let i = 0; i < count; i++) {
      const u = (i / count) * Math.PI * 8; // Multiple spirals
      const radius = 3 + (i / count) * 8;
      const height = ((i / count) - 0.5) * 12;

      const angle = u + (Math.random() - 0.5) * 0.5;
      const x = Math.cos(angle) * radius + (Math.random() - 0.5) * 1.5;
      const y = Math.sin(angle) * radius + (Math.random() - 0.5) * 1.5;
      const z = height + (Math.random() - 0.5) * 2;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialCoords[i * 3] = x;
      initialCoords[i * 3 + 1] = y;
      initialCoords[i * 3 + 2] = z;

      speeds[i] = 0.2 + Math.random() * 0.8;

      const mix = Math.random();
      const col = mix > 0.6 ? colorWhite : mix > 0.3 ? colorAsh : colorCharcoal;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(200, 200, 200, 0.7)');
      grad.addColorStop(0.7, 'rgba(100, 100, 100, 0.2)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTex = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.32,
      vertexColors: true,
      map: particleTex,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const vortex = new THREE.Points(geometry, material);
    scene.add(vortex);

    // 4. Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetX = y * 0.4;
      targetY = x * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 5. Render Loop
    const clock = new THREE.Clock();
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      if (!isVisibleRef.current) return;

      const elapsed = clock.getElapsedTime();

      vortex.rotation.z += 0.003;
      vortex.rotation.x += (targetX - vortex.rotation.x) * 0.05 + 0.001;
      vortex.rotation.y += (targetY - vortex.rotation.y) * 0.05 + 0.002;

      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const speed = speeds[i];
        const theta = elapsed * speed * 0.3;

        const ix = initialCoords[i3];
        const iy = initialCoords[i3 + 1];
        const iz = initialCoords[i3 + 2];

        // Harmonic spiral vortex rotation per particle
        const cosT = Math.cos(theta);
        const sinT = Math.sin(theta);
        posArray[i3] = ix * cosT - iy * sinT;
        posArray[i3 + 1] = ix * sinT + iy * cosT;
        posArray[i3 + 2] = iz + Math.sin(elapsed * 2 + i) * 0.3;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      material.dispose();
      particleTex.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [particleCount]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none select-none ${className}`}
      style={{ overflow: 'hidden' }}
    />
  );
};
