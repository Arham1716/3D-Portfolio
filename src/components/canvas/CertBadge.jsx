import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Medal = ({ imgUrl, color }) => {
  const [decal] = useTexture([imgUrl]);
  const groupRef = useRef();
  const ringRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.35;
    if (ringRef.current)  ringRef.current.rotation.x  += delta * 0.9;
  });

  return (
    // Reduced floatIntensity so ring stays in frame
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.5}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 3, 2]} intensity={1.5} />
      <pointLight position={[0, -2, 1]} intensity={1.2} color={color || "#915EFF"} />
      <pointLight position={[2, 2, -1]} intensity={0.6} color='#ffffff' />

      {/* Whole medal shifted down so ring fits in frame */}
      <group ref={groupRef} position={[0, -0.3, 0]}>
        {/* Logo ball — same icosahedron as Tech/Skills section */}
        <mesh castShadow receiveShadow scale={1.05} position={[0, -0.3, 0]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color='#fff8eb'
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>

        {/* Ribbon strip */}
        <mesh position={[0, 0.85, 0]}>
          <boxGeometry args={[0.16, 0.6, 0.06]} />
          <meshStandardMaterial color={color || "#915EFF"} metalness={0.4} roughness={0.5} />
        </mesh>

        {/* Hanging ring */}
        <mesh ref={ringRef} position={[0, 1.25, 0]}>
          <torusGeometry args={[0.28, 0.08, 16, 40]} />
          <meshStandardMaterial color={color || "#915EFF"} metalness={0.85} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
};

const CertBadgeCanvas = ({ icon, color }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      // Wider FOV + pulled back so entire medal (disc + ring) is visible
      camera={{ position: [0, 0, 6], fov: 38 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <Medal imgUrl={icon} color={color} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CertBadgeCanvas;
