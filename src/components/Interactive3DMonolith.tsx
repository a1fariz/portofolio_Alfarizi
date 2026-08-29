"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Interactive3DMonolith() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || window.matchMedia("(max-width: 767px), (prefers-reduced-motion: reduce)").matches) return;
    const container = containerRef.current;

    const width = container.clientWidth || 280;
    const height = container.clientHeight || 280;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create a precision faceted architectural icosahedron wireframe + inner core
    const outerGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 0);

    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x141414,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x141414,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });

    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);

    scene.add(outerMesh);
    scene.add(innerMesh);

    // Mouse Tracking on Hero Container
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.targetY = -(((e.clientY - rect.top) / height) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let animationId: number;
    const clock = new THREE.Clock();
    let active = !document.hidden;

    const onVisibilityChange = () => {
      const next = !document.hidden;
      if (next === active) return;
      active = next;
      if (active) animate();
    };

    const animate = () => {
      if (!active) return;
      const time = clock.getElapsedTime();

      // Lerp rotation to mouse target
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      outerMesh.rotation.x = time * 0.15 + mouse.y * 0.6;
      outerMesh.rotation.y = time * 0.2 + mouse.x * 0.6;

      innerMesh.rotation.x = -time * 0.25 - mouse.y * 0.4;
      innerMesh.rotation.y = -time * 0.3 - mouse.x * 0.4;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      outerGeo.dispose();
      innerGeo.dispose();
      outerMat.dispose();
      innerMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center pointer-events-none"
      aria-hidden="true"
    />
  );
}
