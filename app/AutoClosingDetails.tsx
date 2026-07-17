"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type AutoClosingDetailsProps = {
  className: string;
  summary: ReactNode;
  children: ReactNode;
  name?: string;
};

export function AutoClosingDetails({ className, summary, children, name }: AutoClosingDetailsProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const close = () => detailsRef.current?.removeAttribute("open");

  useEffect(() => close(), [pathname]);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      const details = detailsRef.current;
      if (details?.open && event.target instanceof Node && !details.contains(event.target)) close();
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <details
      className={className}
      name={name}
      ref={detailsRef}
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a")) close();
      }}
    >
      <summary>{summary}</summary>
      {children}
    </details>
  );
}
