"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Hero3DProps = {
  reducedMotion: boolean;
};

function NeuralForm({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const smallSpheres = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, index) => ({
        position: [
          Math.sin(index) * 1.6,
          Math.cos(index * 1.3) * 0.8,
          Math.cos(index) * 0.9
        ] as [number, number, number],
        scale: 0.12 + index * 0.02
      })),
    []
  );

  useFrame((state, delta) => {
    if (reducedMotion || !group.current) return;
    group.current.rotation.y += delta * 0.2;
    group.current.rotation.x += delta * 0.12;
  });

  const core = (
    <group ref={group}>
      <mesh>
        <torusKnotGeometry args={[0.9, 0.28, 160, 32]} />
        <meshStandardMaterial
          color="#2a5cff"
          metalness={0.55}
          roughness={0.2}
          emissive="#1b2a55"
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.35, 0.04, 16, 100]} />
        <meshStandardMaterial color="#a8c7ff" metalness={0.2} roughness={0.4} />
      </mesh>
      {smallSpheres.map((sphere, index) => (
        <mesh key={index} position={sphere.position} scale={sphere.scale}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#f5f5ff" roughness={0.3} />
        </mesh>
      ))}
    </group>
  );

  if (reducedMotion) {
    return core;
  }

  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
      {core}
    </Float>
  );
}

export default function Hero3D({ reducedMotion }: Hero3DProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      frameloop={reducedMotion ? "demand" : "always"}
      camera={{ position: [0, 0.2, 3.6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ height: "100%", width: "100%" }}
      aria-hidden
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 2]} intensity={0.9} />
      <pointLight position={[-2, -1, 2]} intensity={0.6} />
      <NeuralForm reducedMotion={reducedMotion} />
      <ContactShadows
        position={[0, -1.3, 0]}
        opacity={0.25}
        scale={6}
        blur={2.2}
        far={4}
      />
    </Canvas>
  );
}
