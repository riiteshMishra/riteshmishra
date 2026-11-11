"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls, Text } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import { categoryColors, techNodes } from "@/data/content/tech-universe";

interface TechUniverseCanvasProps {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}

const Scene = ({
  selectedId,
  onSelect,
  hoveredId,
  onHover,
}: TechUniverseCanvasProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ pointer }) => {
    if (!groupRef.current) return;
    const targetY = pointer.x * 0.35;
    const targetX = pointer.y * 0.2;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
  });

  const lines = useMemo(
    () =>
      techNodes.map((node) => ({
        id: node.id,
        points: [new THREE.Vector3(0, 0, 0), new THREE.Vector3(...node.position)] as [THREE.Vector3, THREE.Vector3],
      })),
    []
  );

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={0.8} />
      <pointLight position={[-4, -2, -4]} intensity={0.4} color="#a5b4fc" />

      <Text
        position={[0, 0, 0]}
        fontSize={0.32}
        color="#34d399"
        anchorX="center"
        anchorY="middle"
        maxWidth={2.4}
        textAlign="center"
      >
        FULL STACK{"\n"}DEVELOPER
      </Text>

      {techNodes.map((node) => {
        const active = selectedId === node.id || hoveredId === node.id;
        return (
          <group key={node.id} position={node.position}>
            <mesh
              onClick={(e) => {
                e.stopPropagation();
                onSelect(node.id);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                onHover(node.id);
                document.body.style.cursor = "pointer";
              }}
              onPointerOut={() => {
                onHover(null);
                document.body.style.cursor = "auto";
              }}
            >
              <sphereGeometry args={[0.13, 16, 16]} />
              <meshStandardMaterial
                color={categoryColors[node.category]}
                emissive={active ? categoryColors[node.category] : "#000000"}
                emissiveIntensity={active ? 0.5 : 0}
                roughness={0.4}
                metalness={0.2}
              />
            </mesh>
            <Text
              position={[0, 0.22, 0]}
              fontSize={0.11}
              color={active ? "#ffffff" : "#cbd5e1"}
              anchorX="center"
              anchorY="middle"
              maxWidth={1.2}
            >
              {node.label}
            </Text>
          </group>
        );
      })}

      {lines.map((line) => {
        const active = selectedId === line.id || hoveredId === line.id;
        return (
          <Line
            key={line.id}
            points={line.points}
            color={active ? "#34d399" : "#334155"}
            lineWidth={active ? 1.6 : 0.8}
            transparent
            opacity={active ? 0.9 : 0.35}
          />
        );
      })}
    </group>
  );
};

const TechUniverseCanvas = ({
  selectedId,
  onSelect,
  hoveredId,
  onHover,
}: TechUniverseCanvasProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Scene
        selectedId={selectedId}
        onSelect={onSelect}
        hoveredId={hoveredId}
        onHover={onHover}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </Canvas>
  );
};

export default TechUniverseCanvas;
