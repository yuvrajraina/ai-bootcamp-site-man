"use client";

import { motionSettings } from "@/lib/content";
import type { ElementType, HTMLAttributes, PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useRef, useState } from "react";

export type DepthCardProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
};

const joinClasses = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function DepthCard({
  as,
  className,
  children,
  onPointerMove,
  onPointerLeave,
  ...rest
}: DepthCardProps) {
  const Component = (as ?? "div") as ElementType;
  const cardRef = useRef<HTMLElement>(null);
  const [tiltEnabled, setTiltEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    const applyTiltSupport = () => {
      const shouldEnable =
        motionSettings.enableSectionTilt &&
        !reducedMotion.matches &&
        !coarsePointer.matches &&
        window.innerWidth >= 768;

      setTiltEnabled(shouldEnable);

      if (!shouldEnable && cardRef.current) {
        cardRef.current.style.setProperty("--fx-tilt-x", "0px");
        cardRef.current.style.setProperty("--fx-tilt-y", "0px");
        cardRef.current.style.setProperty("--fx-tilt-rotate-x", "0deg");
        cardRef.current.style.setProperty("--fx-tilt-rotate-y", "0deg");
      }
    };

    applyTiltSupport();

    window.addEventListener("resize", applyTiltSupport);
    reducedMotion.addEventListener("change", applyTiltSupport);
    coarsePointer.addEventListener("change", applyTiltSupport);

    return () => {
      window.removeEventListener("resize", applyTiltSupport);
      reducedMotion.removeEventListener("change", applyTiltSupport);
      coarsePointer.removeEventListener("change", applyTiltSupport);
    };
  }, []);

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    onPointerMove?.(event);

    if (!tiltEnabled || event.pointerType === "touch" || !cardRef.current) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const nx = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
    const ny = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);

    cardRef.current.style.setProperty(
      "--fx-tilt-x",
      `${(nx * motionSettings.tiltTranslatePx).toFixed(2)}px`
    );
    cardRef.current.style.setProperty(
      "--fx-tilt-y",
      `${(ny * motionSettings.tiltTranslatePx).toFixed(2)}px`
    );
    cardRef.current.style.setProperty(
      "--fx-tilt-rotate-x",
      `${(-ny * motionSettings.tiltMaxDeg).toFixed(2)}deg`
    );
    cardRef.current.style.setProperty(
      "--fx-tilt-rotate-y",
      `${(nx * motionSettings.tiltMaxDeg).toFixed(2)}deg`
    );
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLElement>) => {
    onPointerLeave?.(event);

    if (!cardRef.current) {
      return;
    }

    cardRef.current.style.setProperty("--fx-tilt-x", "0px");
    cardRef.current.style.setProperty("--fx-tilt-y", "0px");
    cardRef.current.style.setProperty("--fx-tilt-rotate-x", "0deg");
    cardRef.current.style.setProperty("--fx-tilt-rotate-y", "0deg");
  };

  return (
    <Component
      ref={cardRef}
      className={joinClasses(tiltEnabled ? "fx-tilt" : undefined, className)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...rest}
    >
      {children}
    </Component>
  );
}
