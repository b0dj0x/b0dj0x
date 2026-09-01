'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Core() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const shardRef = useRef<THREE.Mesh>(null);
  const glitchRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.08;
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -t * 0.15;
      innerRef.current.rotation.z = t * 0.1;
    }
    if (shardRef.current) {
      shardRef.current.rotation.x = t * 0.3;
      shardRef.current.rotation.z = t * 0.2;
    }
    if (glitchRef.current) {
      const g = (Math.floor(t * 8) % 2) * 0.06 - 0.03;
      glitchRef.current.position.x = g;
      glitchRef.current.position.y = Math.sin(t * 13) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={glitchRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#0a0a0d"
          emissive="#dc2626"
          emissiveIntensity={0.15}
          metalness={0.9}
          roughness={0.2}
          wireframe
        />
      </mesh>
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.85, 0]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={0.4}
          metalness={0.7}
          roughness={0.3}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>
      <mesh ref={shardRef}>
        <tetrahedronGeometry args={[1.65, 0]} />
        <meshBasicMaterial color="#dc2626" transparent opacity={0.08} wireframe />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={1.4}
        />
      </mesh>
    </group>
  );
}

function OrbitRings() {
  const ref1 = useRef<THREE.Mesh>(null);
  const ref2 = useRef<THREE.Mesh>(null);
  const ref3 = useRef<THREE.Mesh>(null);
  const pulseRef = useRef<THREE.Mesh>(null);
  const pulse2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref1.current) ref1.current.rotation.z = t * 0.12;
    if (ref2.current) ref2.current.rotation.x = t * 0.18;
    if (ref3.current) ref3.current.rotation.y = t * 0.1;
    if (pulseRef.current) {
      const s = 1 + (Math.sin(t * 1.2) * 0.5 + 0.5) * 0.3;
      pulseRef.current.scale.set(s, s, s);
      (pulseRef.current.material as THREE.MeshBasicMaterial).opacity = 0.5 - s * 0.1;
    }
    if (pulse2Ref.current) {
      const s = 1 + (Math.sin(t * 1.2 + 1) * 0.5 + 0.5) * 0.3;
      pulse2Ref.current.scale.set(s, s, s);
      (pulse2Ref.current.material as THREE.MeshBasicMaterial).opacity = 0.4 - s * 0.08;
    }
  });

  return (
    <>
      <mesh ref={ref1}>
        <torusGeometry args={[2.4, 0.005, 16, 128]} />
        <meshBasicMaterial color="#dc2626" transparent opacity={0.6} />
      </mesh>
      <mesh ref={ref2}>
        <torusGeometry args={[3.0, 0.003, 16, 128]} />
        <meshBasicMaterial color="#52525a" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ref3}>
        <torusGeometry args={[3.7, 0.002, 16, 128]} />
        <meshBasicMaterial color="#1d1d26" transparent opacity={0.5} />
      </mesh>
      <mesh ref={pulseRef}>
        <torusGeometry args={[2.4, 0.04, 16, 128]} />
        <meshBasicMaterial color="#dc2626" transparent opacity={0.3} />
      </mesh>
      <mesh ref={pulse2Ref}>
        <torusGeometry args={[3.0, 0.025, 16, 128]} />
        <meshBasicMaterial color="#dc2626" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

function ScanningBeam() {
  const beamRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (beamRef.current) {
      beamRef.current.rotation.y = state.clock.elapsedTime * 0.6;
    }
  });

  return (
    <mesh ref={beamRef}>
      <cylinderGeometry args={[0.02, 0.02, 8, 8]} />
      <meshBasicMaterial color="#dc2626" transparent opacity={0.5} />
    </mesh>
  );
}

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const arr: { pos: [number, number, number]; size: number; delay: number }[] = [];
    const positions: [number, number, number][] = [
      [3.2, 1.2, 0],
      [-3.0, 0.8, 0.5],
      [1.5, -2.8, -1],
      [-1.8, -2.4, 1.2],
      [3.8, -1.0, -0.8],
      [-3.5, -1.5, -1],
      [0.5, 3.2, -0.5],
      [-0.8, 3.0, 1],
      [4.2, 0.3, -0.3],
      [-4.0, 0.4, 0.8],
    ];
    positions.forEach((pos, i) => {
      arr.push({ pos, size: 0.06 + Math.random() * 0.04, delay: i * 0.4 });
    });
    return arr;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {nodes.map((n, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh position={n.pos}>
            <sphereGeometry args={[n.size, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#dc2626' : '#71717a'}
              emissive={i % 2 === 0 ? '#dc2626' : '#1d1d26'}
              emissiveIntensity={i % 2 === 0 ? 0.8 : 0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function ConnectionLines() {
  const lines = useMemo(() => {
    const segments: { from: THREE.Vector3; to: THREE.Vector3; animated?: boolean }[] = [];
    const positions: [number, number, number][] = [
      [0, 0, 0],
      [3.2, 1.2, 0],
      [-3.0, 0.8, 0.5],
      [1.5, -2.8, -1],
      [-1.8, -2.4, 1.2],
      [3.8, -1.0, -0.8],
      [0.5, 3.2, -0.5],
      [-0.8, 3.0, 1],
      [4.2, 0.3, -0.3],
      [-4.0, 0.4, 0.8],
    ];
    for (let i = 1; i < positions.length; i++) {
      segments.push({
        from: new THREE.Vector3(...positions[0]),
        to: new THREE.Vector3(...positions[i]),
      });
    }
    segments.push({
      from: new THREE.Vector3(...positions[1]),
      to: new THREE.Vector3(...positions[3]),
      animated: true,
    });
    return segments;
  }, []);

  return (
    <>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={[line.from, line.to]}
          color="#dc2626"
          lineWidth={0.5}
          transparent
          opacity={line.animated ? 0.5 : 0.35}
        />
      ))}
    </>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(1200 * 3);
    for (let i = 0; i < 1200; i++) {
      const radius = 6 + Math.random() * 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#71717a"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

function DataShards() {
  const groupRef = useRef<THREE.Group>(null);

  const shards = useMemo(() => {
    const arr: { pos: [number, number, number]; rot: [number, number, number]; speed: number }[] = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      arr.push({
        pos: [Math.cos(angle) * 5.5, Math.sin(angle * 1.7) * 1.5, Math.sin(angle) * 5.5],
        rot: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        speed: 0.3 + Math.random() * 0.4,
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {shards.map((s, i) => (
        <Float
          key={i}
          speed={s.speed * 5}
          rotationIntensity={0.6}
          floatIntensity={0.8}
        >
          <mesh position={s.pos} rotation={s.rot}>
            <boxGeometry args={[0.08, 0.08, 0.08]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#dc2626' : '#52525a'}
              emissive={i % 2 === 0 ? '#dc2626' : '#1d1d26'}
              emissiveIntensity={i % 2 === 0 ? 0.6 : 0.2}
              wireframe
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function CursorLight({ enabled }: { enabled: boolean }) {
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (lightRef.current && enabled) {
      const t = state.clock.elapsedTime;
      lightRef.current.position.x = Math.sin(t * 0.4) * 4;
      lightRef.current.position.y = Math.cos(t * 0.3) * 3;
      lightRef.current.position.z = Math.sin(t * 0.5) * 4;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      position={[0, 0, 0]}
      intensity={enabled ? 1.2 : 0}
      distance={10}
      color="#dc2626"
    />
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#dc2626" />
      <pointLight position={[0, 5, -3]} intensity={0.3} color="#00d4ff" />
      <CursorLight enabled />

      <Core />
      <ScanningBeam />
      <OrbitRings />
      <ConnectionLines />
      <NetworkNodes />
      <DataShards />
      <ParticleField />
    </Canvas>
  );
}