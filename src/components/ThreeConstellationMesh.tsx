'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeConstellationMeshProps {
  className?: string;
  nodeCount?: number;
}

export const ThreeConstellationMesh: React.FC<ThreeConstellationMeshProps> = ({
  className = '',
  nodeCount = 70,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const isVisibleRef = useRef<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Nodes
    const count = nodeCount;
    const nodeGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 32;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      velocities[i * 3] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.22,
      transparent: true,
      opacity: 0.8,
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // Dynamic Connections Lines
    const maxLines = (count * (count - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);
    const lineGeometry = new THREE.BufferGeometry();

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse Tracking
    let targetRotY = 0;
    let targetRotX = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.3;
      targetRotX = -y * 0.2;
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

    // Render loop
    const animate = () => {
      animationFrameId.current = requestAnimationFrame(animate);
      if (!isVisibleRef.current) return;

      scene.rotation.y += (targetRotY - scene.rotation.y) * 0.05 + 0.0008;
      scene.rotation.x += (targetRotX - scene.rotation.x) * 0.05;

      const posAttr = nodeGeometry.attributes.position as THREE.BufferAttribute;
      const pos = posAttr.array as Float32Array;

      // Update node positions
      for (let i = 0; i < count; i++) {
        pos[i * 3] += velocities[i * 3];
        pos[i * 3 + 1] += velocities[i * 3 + 1];
        pos[i * 3 + 2] += velocities[i * 3 + 2];

        // Bounds bounce
        if (Math.abs(pos[i * 3]) > 16) velocities[i * 3] *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 9) velocities[i * 3 + 1] *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 5) velocities[i * 3 + 2] *= -1;
      }
      posAttr.needsUpdate = true;

      // Update lines between nearby nodes
      let lineIndex = 0;
      let colorIndex = 0;
      const linePosAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
      const lineColAttr = lineGeometry.attributes.color as THREE.BufferAttribute;
      const lPos = linePosAttr.array as Float32Array;
      const lCol = lineColAttr.array as Float32Array;

      const connectDist = 5.5;

      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * 0.35;

            lPos[lineIndex++] = pos[i * 3];
            lPos[lineIndex++] = pos[i * 3 + 1];
            lPos[lineIndex++] = pos[i * 3 + 2];

            lPos[lineIndex++] = pos[j * 3];
            lPos[lineIndex++] = pos[j * 3 + 1];
            lPos[lineIndex++] = pos[j * 3 + 2];

            lCol[colorIndex++] = alpha;
            lCol[colorIndex++] = alpha;
            lCol[colorIndex++] = alpha;

            lCol[colorIndex++] = alpha;
            lCol[colorIndex++] = alpha;
            lCol[colorIndex++] = alpha;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex / 3);
      linePosAttr.needsUpdate = true;
      lineColAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [nodeCount]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none select-none ${className}`}
      style={{ overflow: 'hidden' }}
    />
  );
};
