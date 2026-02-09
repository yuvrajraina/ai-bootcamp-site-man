"use client";

import { motionSettings } from "@/lib/content";
import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import type { MutableRefObject } from "react";
import * as THREE from "three";

type PointerTarget = {
  x: number;
  y: number;
};

type SceneRigProps = {
  scrollTarget: MutableRefObject<number>;
  pointerTarget: MutableRefObject<PointerTarget>;
};

function AmbientParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 850;
    const values = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      values[i3] = (Math.random() - 0.5) * 16;
      values[i3 + 1] = (Math.random() - 0.5) * 10;
      values[i3 + 2] = (Math.random() - 0.5) * 14;
    }

    return values;
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y += delta * 0.012;
    pointsRef.current.rotation.x += delta * 0.004;
  });

  return (
    <points ref={pointsRef} position={[0, 0, -1]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#95b7ff"
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.5}
        depthWrite={false}
      />
    </points>
  );
}

function NeuralRibbonCluster() {
  return (
    <group>
      <Float speed={0.9} rotationIntensity={0.2} floatIntensity={0.45}>
        <mesh position={[0, 0.3, 0]}>
          <torusKnotGeometry args={[1.75, 0.08, 220, 32]} />
          <meshStandardMaterial
            color="#6f95ff"
            emissive="#2a5cff"
            emissiveIntensity={0.22}
            roughness={0.3}
            metalness={0.5}
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>

      <mesh rotation={[Math.PI / 2.35, 0, 0]} position={[0, -0.2, -0.5]}>
        <torusGeometry args={[2.2, 0.028, 18, 120]} />
        <meshStandardMaterial color="#a8c7ff" transparent opacity={0.35} />
      </mesh>

      <mesh rotation={[Math.PI / 2.1, 0.8, 0]} position={[0.4, 0.2, -0.9]}>
        <torusGeometry args={[1.55, 0.024, 18, 100]} />
        <meshStandardMaterial color="#9fd0ff" transparent opacity={0.28} />
      </mesh>
    </group>
  );
}

function GlowPlane() {
  return (
    <mesh position={[0, 0, -4.2]}>
      <planeGeometry args={[22, 14]} />
      <meshBasicMaterial color="#7ba9ff" transparent opacity={0.13} />
    </mesh>
  );
}

function SceneRig({ scrollTarget, pointerTarget }: SceneRigProps) {
  const rootRef = useRef<THREE.Group>(null);
  const smoothStateRef = useRef({
    scroll: 0,
    pointerX: 0,
    pointerY: 0
  });

  useFrame((_, delta) => {
    if (!rootRef.current) {
      return;
    }

    const dampFactor = 1 - Math.exp(-delta * 5);

    smoothStateRef.current.scroll = THREE.MathUtils.lerp(
      smoothStateRef.current.scroll,
      scrollTarget.current,
      dampFactor
    );
    smoothStateRef.current.pointerX = THREE.MathUtils.lerp(
      smoothStateRef.current.pointerX,
      pointerTarget.current.x,
      dampFactor
    );
    smoothStateRef.current.pointerY = THREE.MathUtils.lerp(
      smoothStateRef.current.pointerY,
      pointerTarget.current.y,
      dampFactor
    );

    const yParallaxUnits =
      (motionSettings.parallaxMaxPx / 24) * smoothStateRef.current.scroll;

    rootRef.current.position.y = -yParallaxUnits;
    rootRef.current.rotation.y = smoothStateRef.current.pointerX * 0.09;
    rootRef.current.rotation.x = -smoothStateRef.current.pointerY * 0.06;
  });

  return (
    <group ref={rootRef}>
      <GlowPlane />
      <AmbientParticles />
      <NeuralRibbonCluster />
    </group>
  );
}

export default function Global3DScene() {
  const scrollTargetRef = useRef(0);
  const pointerTargetRef = useRef<PointerTarget>({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollTargetRef.current =
        maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerTargetRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointerTargetRef.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    const onPointerLeave = () => {
      pointerTargetRef.current.x = 0;
      pointerTargetRef.current.y = 0;
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.15, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ height: "100%", width: "100%", pointerEvents: "none" }}
      aria-hidden
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 3, 3]} intensity={1.1} color="#92b5ff" />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#9fd0ff" />
      <SceneRig
        scrollTarget={scrollTargetRef}
        pointerTarget={pointerTargetRef}
      />
    </Canvas>
  );
}