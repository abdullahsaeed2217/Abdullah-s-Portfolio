"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Interactive Neural Particles Mesh
function NeuralNetworkMesh({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const particleCount = 70;
  const maxDistance = 2.4;

  // Generate 3D nodes
  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const init = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = Math.cbrt(Math.random()) * radius;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = (r * Math.cos(phi)) * 0.7;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      init[i * 3] = x;
      init[i * 3 + 1] = y;
      init[i * 3 + 2] = z;
    }
    return [pos, init];
  }, [particleCount]);

  // Buffer geometry for dynamic connections
  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 6);
    geo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    return geo;
  }, [particleCount]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.4;
    const currentPos = pointsRef.current?.geometry?.attributes?.position?.array as Float32Array;

    if (!currentPos) return;

    // Subtle breathing displacement
    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      const ix = initialPositions[idx];
      const iy = initialPositions[idx + 1];
      const iz = initialPositions[idx + 2];

      currentPos[idx] = ix + Math.sin(time + iy * 2) * 0.15;
      currentPos[idx + 1] = iy + Math.cos(time + ix * 2) * 0.15;
      currentPos[idx + 2] = iz + Math.sin(time * 0.8 + iz) * 0.1;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Calculate dynamic connections between proximate nodes
    let lineIdx = 0;
    const lineArray = lineGeometry.attributes.position.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = currentPos[i * 3] - currentPos[j * 3];
        const dy = currentPos[i * 3 + 1] - currentPos[j * 3 + 1];
        const dz = currentPos[i * 3 + 2] - currentPos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          lineArray[lineIdx++] = currentPos[i * 3];
          lineArray[lineIdx++] = currentPos[i * 3 + 1];
          lineArray[lineIdx++] = currentPos[i * 3 + 2];

          lineArray[lineIdx++] = currentPos[j * 3];
          lineArray[lineIdx++] = currentPos[j * 3 + 1];
          lineArray[lineIdx++] = currentPos[j * 3 + 2];
        }
      }
    }

    lineGeometry.setDrawRange(0, lineIdx / 3);
    lineGeometry.attributes.position.needsUpdate = true;

    // Gentle rotation influenced by mouse
    const targetRotX = mouse.current[1] * 0.35 + Math.sin(time * 0.5) * 0.08;
    const targetRotY = mouse.current[0] * 0.45 + time * 0.2;

    pointsRef.current.rotation.x += (targetRotX - pointsRef.current.rotation.x) * 0.05;
    pointsRef.current.rotation.y += (targetRotY - pointsRef.current.rotation.y) * 0.05;

    linesRef.current.rotation.x = pointsRef.current.rotation.x;
    linesRef.current.rotation.y = pointsRef.current.rotation.y;
  });

  return (
    <group>
      {/* Network Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.09}
          color="#22D3EE"
          transparent
          opacity={0.85}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Synaptic Line Connections */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color="#6366F1"
          transparent
          opacity={0.28}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function HeroScene() {
  const [mounted, setMounted] = useState(false);
  const mouse = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current = [x, y];
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) {
    // Static CSS Fallback for SSR & Initial Mount
    return (
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-indigo-500/10 via-cyan-500/10 to-transparent blur-3xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <NeuralNetworkMesh mouse={mouse} />
      </Canvas>
    </div>
  );
}
