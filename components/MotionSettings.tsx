"use client";

import { MotionConfig } from "framer-motion";

export default function MotionSettings({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}