"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  cursorText,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  cursorText?: string;
}) {
  const buttonRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.3, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.3, ease: "power3.out" });

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = el.getBoundingClientRect();
      const x = mouseEvent.clientX - (rect.left + rect.width / 2);
      const y = mouseEvent.clientY - (rect.top + rect.height / 2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const props = {
    ref: buttonRef as any,
    className: `relative inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-white ${className}`,
    onClick,
    "data-cursor": cursorText,
  };

  if (href) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return <button {...props}>{children}</button>;
}
