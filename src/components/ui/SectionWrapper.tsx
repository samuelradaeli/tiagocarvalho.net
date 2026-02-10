"use client";

import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/cn";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  const observe = useCallback(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("section-hidden");
          element.classList.add("section-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return observe();
  }, [observe]);

  return (
    <section
      ref={ref}
      id={id}
      className={cn("section-hidden", className)}
    >
      {children}
    </section>
  );
}
