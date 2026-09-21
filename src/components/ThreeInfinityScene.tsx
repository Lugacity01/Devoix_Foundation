'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeInfinitySceneProps {
  className?: string;
  particleCount?: number;
  interactive?: boolean;
}

export const ThreeInfinityScene: React.FC<ThreeInfinitySceneProps> = ({
  className = '',
  particleCount = 1800,
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 3. Create 3D Infinity Particle Ribbon (Parametric Lemniscate of Gerono / Bernoulli in 3D)
    const count = particleCount;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const initialPositions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    // Color palette: Monochromatic White, Ash, Charcoal
    const colorWhite = new THREE.Color('#ffffff');
    const colorAsh = new THREE.Color('#999998');
    const colorCharcoal = new THREE.Color('#555555');

    for (let i = 0; i < count; i++) {
      // Parametric angle along the figure-8 curve
      const u = (i / count) * Math.PI * 2;
      const v = ((i % 100) / 100) * Math.PI * 2;
      
      // Lemniscate 3D coordinates with width and depth twists
      const a = 6.2; // Curve radius
      const scaleFactor = Math.sqrt(2) / (Math.sin(u) * Math.sin(u) + 1);
      
      const baseX = a * Math.cos(u) * scaleFactor;
      const baseY = a * Math.sin(u) * Math.cos(u) * scaleFactor;
      const baseZ = Math.sin(u * 2) * 2.2;

      // Add ribbon dispersion / tube volume
      const tubeRadius = (Math.sin(u * 4) * 0.4 + 0.9) * (Math.random() * 0.8 + 0.2);
      const offsetX = Math.cos(v) * tubeRadius;
      const offsetY = Math.sin(v) * tubeRadius;
      const offsetZ = Math.sin(u * 3 + v) * 0.8;

      const x = baseX + offsetX;
      const y = baseY + offsetY;
      const z = baseZ + offsetZ;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;

      // Particle individual size
      scales[i] = Math.random() * 0.8 + 0.4;

      // Gradient color allocation along the ribbon
      const t = Math.sin(u * 2) * 0.5 + 0.5;
      const pointColor = new THREE.Color().lerpColors(
        Math.random() > 0.3 ? colorWhite : colorAsh,
        colorCharcoal,
        t * 0.6
      );

      colors[i * 3] = pointColor.r;
      colors[i * 3 + 1] = pointColor.g;
      colors[i * 3 + 2] = pointColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle texture (crisp circular glow)
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.25, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.6, 'rgba(153, 153, 152, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 4. Background Ambient Floating Star Dust
    const bgCount = 400;
    const bgGeometry = new THREE.BufferGeometry();
    const bgPositions = new Float32Array(bgCount * 3);
    const bgColors = new Float32Array(bgCount * 3);

    for (let i = 0; i < bgCount; i++) {
      bgPositions[i * 3] = (Math.random() - 0.5) * 36;
      bgPositions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      bgPositions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;

      const alpha = Math.random() * 0.5 + 0.3;
      bgColors[i * 3] = alpha;
      bgColors[i * 3 + 1] = alpha;
      bgColors[i * 3 + 2] = alpha;
    }

    bgGeometry.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3));
    bgGeometry.setAttribute('color', new THREE.BufferAttribute(bgColors, 3));

    const bgMaterial = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const bgParticles = new THREE.Points(bgGeometry, bgMaterial);
    scene.add(bgParticles);

    // 5. Mouse Interaction Physics
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      mouseX = x;
      mouseY = y;

      targetRotationY = x * 0.65;
      targetRotationX = -y * 0.55;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!interactive || event.touches.length === 0) return;
      const touch = event.touches[0];
      const rect = container.getBoundingClientRect();
      const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // 7. Pause rendering when offscreen for battery/GPU performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 8. 60FPS Render Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);

      if (!isVisibleRef.current) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia rotation towards cursor target
      particles.rotation.y += (targetRotationY - particles.rotation.y) * 0.05 + 0.003;
      particles.rotation.x += (targetRotationX - particles.rotation.x) * 0.05;
      particles.rotation.z = Math.sin(elapsedTime * 0.3) * 0.12;

      bgParticles.rotation.y = elapsedTime * 0.001;
      bgParticles.rotation.x = Math.sin(elapsedTime * 0.2) * 0.05;

      // Particle subtle wave ripple
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const ix = initialPositions[i3];
        const iy = initialPositions[i3 + 1];
        const iz = initialPositions[i3 + 2];

        // Organic harmonic ripple
        const wave = Math.sin(elapsedTime * 1.5 + ix * 0.4 + iy * 0.3) * 0.18;
        posArray[i3] = ix + wave * 0.5;
        posArray[i3 + 1] = iy + wave * 0.8;
        posArray[i3 + 2] = iz + Math.cos(elapsedTime * 1.2 + iz * 0.5) * 0.25;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);

      geometry.dispose();
      material.dispose();
      bgGeometry.dispose();
      bgMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [particleCount, interactive]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none select-none ${className}`}
      style={{ overflow: 'hidden' }}
    />
  );
};
