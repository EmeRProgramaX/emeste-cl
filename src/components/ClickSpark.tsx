"use client";

import { useEffect } from "react";

const SPARK_COLORS = ["#ec008c", "#ff1744", "#ffffff", "#00ff88", "#a855f7"];

export function ClickSpark() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const createSpark = (event: MouseEvent) => {
      const sparkCount = 9 + Math.floor(Math.random() * 7);

      for (let index = 0; index < sparkCount; index += 1) {
        const spark = document.createElement("span");
        const angle = Math.random() * Math.PI * 2;
        const distance = 26 + Math.random() * 58;
        const size = 4 + Math.random() * 6;

        spark.className = "click-spark";
        spark.style.left = `${event.clientX}px`;
        spark.style.top = `${event.clientY}px`;
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;
        spark.style.setProperty("--spark-x", `${Math.cos(angle) * distance}px`);
        spark.style.setProperty("--spark-y", `${Math.sin(angle) * distance}px`);
        spark.style.setProperty("--spark-color", SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)]);

        document.body.appendChild(spark);
        window.setTimeout(() => spark.remove(), 820);
      }
    };

    window.addEventListener("click", createSpark);

    return () => window.removeEventListener("click", createSpark);
  }, []);

  return null;
}
