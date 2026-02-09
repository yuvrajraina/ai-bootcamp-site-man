"use client";

import { motionSettings } from "@/lib/content";
import type { CSSProperties, HTMLAttributes } from "react";
import { useEffect, useRef } from "react";

export type RevealGroupProps = HTMLAttributes<HTMLDivElement> & {
  staggerMs?: number;
  once?: boolean;
  threshold?: number;
};

export type RevealItemProps = HTMLAttributes<HTMLDivElement> & {
  index?: number;
};

const joinClasses = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

export function RevealGroup({
  children,
  className,
  staggerMs = motionSettings.staggerMs,
  once = true,
  threshold = 0.16,
  ...rest
}: RevealGroupProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const revealItems = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal-item]")
    );

    if (revealItems.length === 0) {
      return;
    }

    revealItems.forEach((item, index) => {
      if (!item.style.getPropertyValue("--fx-duration")) {
        item.style.setProperty(
          "--fx-duration",
          `${motionSettings.revealDurationMs}ms`
        );
      }

      if (!item.style.getPropertyValue("--fx-stagger")) {
        item.style.setProperty("--fx-stagger", `${index * staggerMs}ms`);
      }
    });

    if (typeof IntersectionObserver === "undefined") {
      revealItems.forEach((item) => item.classList.add("fx-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("fx-visible");

          if (once) {
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [once, staggerMs, threshold]);

  return (
    <div ref={rootRef} className={className} {...rest}>
      {children}
    </div>
  );
}

export function RevealItem({
  children,
  className,
  style,
  index,
  ...rest
}: RevealItemProps) {
  const styleWithVars = {
    ...(style ?? {}),
    "--fx-duration": `${motionSettings.revealDurationMs}ms`,
    ...(typeof index === "number"
      ? { "--fx-stagger": `${index * motionSettings.staggerMs}ms` }
      : {})
  } as CSSProperties;

  return (
    <div
      data-reveal-item
      className={joinClasses("fx-reveal", className)}
      style={styleWithVars}
      {...rest}
    >
      {children}
    </div>
  );
}