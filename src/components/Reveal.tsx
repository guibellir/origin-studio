"use client";

import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "up" | "down" | "left" | "right" | "scale";
  once?: boolean;
};

/**
 * Pass-through: animações de reveal desativadas.
 * No iPhone, opacity/transform + IntersectionObserver
 * quebravam o scroll e deixavam a página em branco.
 */
export default function Reveal({ children, className = "" }: RevealProps) {
  if (className) {
    return <div className={className}>{children}</div>;
  }
  return <>{children}</>;
}
