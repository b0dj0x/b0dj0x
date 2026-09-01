'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SecurityCore() {
  const coreRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (coreRef.current) {
      const t = state.clock.elapsedTime;
      coreRef.current.rotation.y = t * 0.2;
      coreRef.current.rotation.x = Math.sin(t * 0.15) * 0.2;
    }
  });

  return (
    <group ref={coreRef}>
      <mesh>
        <dodecahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshStandardMaterial
          color="#050507"
          emissive="#dc2626"
          emissiveIntensity={0.3}
          wireframe
        />
      </mesh>
    </group>
  );
}

function OrbitingNode({
  radius,
  angle,
  speed,
  color,
  size,
}: {
  radius: number;
  angle: number;
  speed: number;
  color: string;
  size: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + angle;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 1.2) * 0.5;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[size, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

export default function SecurityScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[3, 3, 3]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-3, -2, 2]} intensity={0.6} color="#dc2626" />

      <SecurityCore />

      <OrbitingNode radius={2.2} angle={0} speed={0.4} color="#dc2626" size={0.1} />
      <OrbitingNode radius={2.2} angle={Math.PI * 0.5} speed={0.4} color="#00d4ff" size={0.08} />
      <OrbitingNode radius={2.2} angle={Math.PI} speed={0.4} color="#a1a1aa" size={0.09} />
      <OrbitingNode radius={2.2} angle={Math.PI * 1.5} speed={0.4} color="#facc15" size={0.07} />
      <OrbitingNode radius={3.0} angle={Math.PI * 0.25} speed={0.25} color="#a78bfa" size={0.06} />
      <OrbitingNode radius={3.0} angle={Math.PI * 0.75} speed={0.25} color="#34d399" size={0.06} />
      <OrbitingNode radius={3.0} angle={Math.PI * 1.25} speed={0.25} color="#f87171" size={0.06} />
      <OrbitingNode radius={3.0} angle={Math.PI * 1.75} speed={0.25} color="#71717a" size={0.06} />
    </Canvas>
  );
}