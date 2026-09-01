'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function StackedGeometries() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh>
          <torusKnotGeometry args={[0.8, 0.22, 128, 16]} />
          <meshStandardMaterial
            color="#050507"
            emissive="#dc2626"
            emissiveIntensity={0.4}
            metalness={0.85}
            roughness={0.15}
            wireframe
          />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <icosahedronGeometry args={[1.4, 0]} />
          <meshStandardMaterial
            color="#dc2626"
            emissive="#dc2626"
            emissiveIntensity={0.3}
            wireframe
            transparent
            opacity={0.5}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function AboutScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} intensity={1} color="#ffffff" />
      <pointLight position={[-3, -2, 2]} intensity={0.7} color="#dc2626" />
      <pointLight position={[3, -2, -2]} intensity={0.4} color="#00d4ff" />
      <StackedGeometries />
    </Canvas>
  );
}