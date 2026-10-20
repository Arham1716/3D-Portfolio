import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Environment } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/desktop_pc.glb");

  return (
    <mesh>
      {/* Flat ambient so nothing is ever fully black */}
      <Environment preset='night' frames={1} />
      <ambientLight intensity={0.8} />
      <hemisphereLight intensity={0.6} groundColor='#8888aa' />
      {/* Key light — tight beam centred on the setup */}
      <spotLight
        position={[0, 10, 5]}
        angle={0.2}
        penumbra={0.2}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Front fill */}
      <directionalLight position={[0, 5, 8]} intensity={0.8} />
      {/* Under-desk point */}
      <pointLight position={[0, -1, 3]} intensity={1.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.6}  // Reduced from 0.7 and 0.75
        position={isMobile ? [0, -2, -2.2] : [0, -2.25, -1.5]}  // Moved up by 1 unit
        rotation={[-0.0, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
