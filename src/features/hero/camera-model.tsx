"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, Center, PresentationControls, useGLTF } from "@react-three/drei";
import { Mesh, type Group } from "three";

const MODEL_PATH = "/models/canon-at1-retro-camera.glb";

function CanonCamera() {
  const { scene } = useGLTF(MODEL_PATH);

  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof Mesh)) return;
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((material) => {
        material.transparent = false;
        material.opacity = 1;
        material.depthWrite = true;
        material.needsUpdate = true;
      });
    });
  }, [scene]);

  return <primitive object={scene} />;
}

useGLTF.preload(MODEL_PATH);

function AutoRotate({ children, speed = 0.18 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<Group>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed;
    }
  });

  return <group ref={ref}>{children}</group>;
}

export function CameraModel() {
  return (
    <Canvas
      className="camera-model__canvas"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 34 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 4, 3]} intensity={1.8} />
        <directionalLight position={[-4, 1.5, -2.5]} intensity={0.7} />
        <directionalLight position={[0, -2, 3]} intensity={0.35} />
        <Bounds fit clip observe margin={1.2}>
          <PresentationControls
            global
            rotation={[0.12, -0.45, 0]}
            polar={[-0.4, 0.4]}
            azimuth={[-Infinity, Infinity]}
            damping={0.2}
          >
            <AutoRotate>
              <Center>
                <CanonCamera />
              </Center>
            </AutoRotate>
          </PresentationControls>
        </Bounds>
      </Suspense>
    </Canvas>
  );
}
