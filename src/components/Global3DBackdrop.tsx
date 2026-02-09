"use client";

import { motionSettings } from "@/lib/content";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Global3DScene = dynamic(() => import("./Global3DScene"), {
  ssr: false,
  loading: () => null
});

const MIN_WIDTH = 1024;
const MIN_CORES = 6;

const isWebGLAvailable = () => {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

export default function Global3DBackdrop() {
  const [showWebGL, setShowWebGL] = useState(false);

  useEffect(() => {
    if (!motionSettings.enableGlobal3D || typeof window === "undefined") {
      setShowWebGL(false);
      return;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const evaluate3D = () => {
      const meetsViewport = window.innerWidth >= MIN_WIDTH;
      const meetsHardware =
        (navigator.hardwareConcurrency ?? MIN_CORES) >= MIN_CORES;
      const canRender =
        meetsViewport &&
        meetsHardware &&
        !reducedMotionQuery.matches &&
        isWebGLAvailable();

      setShowWebGL(canRender);
    };

    evaluate3D();

    window.addEventListener("resize", evaluate3D);
    reducedMotionQuery.addEventListener("change", evaluate3D);

    return () => {
      window.removeEventListener("resize", evaluate3D);
      reducedMotionQuery.removeEventListener("change", evaluate3D);
    };
  }, []);

  return (
    <div className="global-3d-layer fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(42,92,255,0.2),transparent_50%),radial-gradient(circle_at_90%_0%,rgba(168,199,255,0.24),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(42,92,255,0.12),transparent_55%)]" />
      {showWebGL ? (
        <div className="absolute inset-0 opacity-95">
          <Global3DScene />
        </div>
      ) : null}
    </div>
  );
}
