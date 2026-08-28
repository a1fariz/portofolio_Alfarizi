"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function WebGLParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 180;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Geometry: Reduced on mobile for locked 60fps
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 220 : 750;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 60 + Math.random() * 140;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      const x = radius * Math.cos(theta) * Math.cos(phi);
      const y = radius * Math.sin(phi);
      const z = (Math.random() - 0.5) * 160;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      initialPositions[i3] = x;
      initialPositions[i3 + 1] = y;
      initialPositions[i3 + 2] = z;

      scales[i] = Math.random() * 1.5 + 0.5;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

    // Custom Shader Material for Smooth Orbital Particles & Chromatic Drift
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uScrollVelocity: { value: 0 },
        uColor: { value: new THREE.Color(0x141414) },
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uScrollVelocity;
        attribute float aScale;
        varying vec3 vPosition;
        varying float vAlpha;

        void main() {
          vec3 pos = position;

          // Subtle orbital rotation
          float angle = uTime * 0.05 + (pos.z * 0.002);
          float cosA = cos(angle);
          float sinA = sin(angle);
          mat2 rot = mat2(cosA, -sinA, sinA, cosA);
          pos.xy = rot * pos.xy;

          // Mouse fluid displacement
          vec2 mouseDist = pos.xy - (uMouse * 100.0);
          float dist = length(mouseDist);
          if (dist < 60.0) {
            float force = (1.0 - dist / 60.0) * 15.0;
            pos.xy += normalize(mouseDist) * force;
          }

          // Scroll velocity drift acceleration
          pos.y += sin(uTime * 2.0 + pos.x * 0.05) * (uScrollVelocity * 0.8);

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          
          gl_PointSize = (aScale * 2.0) * (180.0 / -mvPosition.z);
          vPosition = pos;
          vAlpha = smoothstep(250.0, 40.0, -mvPosition.z) * 0.25;
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        varying float vAlpha;

        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          
          float intensity = smoothstep(0.5, 0.0, dist);
          gl_FragColor = vec4(0.08, 0.08, 0.08, intensity * vAlpha);
        }
      `,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Tracking with Smooth Lerp
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Scroll Velocity Tracking
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let targetScrollVelocity = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      targetScrollVelocity = Math.min(Math.abs(delta) * 0.15, 8.0);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const render = () => {
      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      material.uniforms.uMouse.value.set(mouse.x, mouse.y);

      // Lerp scroll velocity
      scrollVelocity += (targetScrollVelocity - scrollVelocity) * 0.08;
      targetScrollVelocity *= 0.92;
      material.uniforms.uScrollVelocity.value = scrollVelocity;

      material.uniforms.uTime.value = elapsedTime;
      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75"
      aria-hidden="true"
    />
  );
}
