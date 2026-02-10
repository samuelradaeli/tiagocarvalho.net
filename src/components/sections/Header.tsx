"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-gold/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-center">
          <span className="font-heading text-lg font-semibold tracking-wide text-gold sm:text-xl">
            Tiago Carvalho
          </span>
          <span className="ml-2 hidden text-xs font-light tracking-widest text-muted uppercase sm:inline">
            Psicoterapeuta
          </span>
        </div>
      </div>
    </header>
  );
}
