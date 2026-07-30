"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const TARGET_FRAME_TIME = 1000 / 30;

export function KineticHalo() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.style.pointerEvents = "none";
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.z = 4.2;

    const halo = new THREE.Group();
    halo.rotation.set(-0.15, -0.25, 0.12);
    scene.add(halo);

    const makeRing = (
      radius: number,
      tube: number,
      color: number,
      opacity: number,
      rotation: [number, number, number],
      segments: number,
    ) => {
      const geometry = new THREE.TorusGeometry(radius, tube, 8, segments);
      const material = new THREE.MeshBasicMaterial({
        color,
        opacity,
        transparent: true,
        toneMapped: false,
      });
      const ring = new THREE.Mesh(geometry, material);
      ring.rotation.set(...rotation);
      halo.add(ring);
      return { geometry, material };
    };

    const resources: Array<{ geometry: THREE.BufferGeometry; material: THREE.Material }> = [
      makeRing(1.46, 0.018, 0xd9d3c8, 0.92, [Math.PI / 2.7, 0.18, 0], 96),
      makeRing(1.1, 0.012, 0x9da3a6, 0.68, [0.42, Math.PI / 2.25, 0.55], 80),
      makeRing(0.76, 0.009, 0xb9a98f, 0.72, [1.18, 0.3, -0.42], 64),
    ];

    const makeMarker = (size: number, color: number, position: [number, number, number]) => {
      const geometry = new THREE.OctahedronGeometry(size, 0);
      const material = new THREE.MeshBasicMaterial({ color, toneMapped: false });
      const marker = new THREE.Mesh(geometry, material);
      marker.position.set(...position);
      halo.add(marker);
      resources.push({ geometry, material });
    };

    makeMarker(0.065, 0xf2eee6, [1.06, 0.9, 0.14]);
    makeMarker(0.04, 0xb9a98f, [-0.66, -0.66, 0.52]);

    const pointer = { x: 0, y: 0 };
    const updatePointer = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
    };

    const resize = () => {
      const width = Math.max(host.clientWidth, 1);
      const height = Math.max(host.clientHeight, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    host.addEventListener("pointermove", updatePointer, { passive: true });
    resize();

    const startedAt = performance.now();
    let lastFrame = 0;
    let animationFrame = 0;

    const animate = (now: number) => {
      animationFrame = requestAnimationFrame(animate);
      if (document.visibilityState !== "visible" || now - lastFrame < TARGET_FRAME_TIME) return;

      lastFrame = now;
      const time = (now - startedAt) / 1000;
      halo.rotation.x = -0.15 + Math.sin(time * 0.22) * 0.08 + pointer.y * 0.04;
      halo.rotation.y = time * 0.08 + pointer.x * 0.12;
      halo.rotation.z = Math.sin(time * 0.16) * 0.1;
      halo.position.y = Math.sin(time * 0.34) * 0.06;
      renderer.render(scene, camera);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      host.removeEventListener("pointermove", updatePointer);
      resources.forEach(({ geometry, material }) => {
        geometry.dispose();
        material.dispose();
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className="kinetic-halo" />;
}
