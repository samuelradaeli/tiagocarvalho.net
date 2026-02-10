"use client";

import { cn } from "@/lib/cn";
import { Send } from "lucide-react";

type ButtonVariant = "primary" | "outline" | "whatsapp";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-gold-dark via-gold to-gold-light text-black font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-gold/30 hover:scale-[1.02] animate-pulse-gold",
  outline:
    "border-2 border-gold text-gold font-semibold uppercase tracking-wider hover:bg-gold hover:text-black",
  whatsapp:
    "bg-[#25D366] text-white font-bold uppercase tracking-wider hover:bg-[#20BD5A] hover:shadow-lg hover:shadow-[#25D366]/30 hover:scale-[1.02]",
};

const sizeStyles = {
  default: "px-8 py-4 text-sm",
  lg: "px-10 py-5 text-base md:text-lg",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  size = "default",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 cursor-pointer text-center leading-tight";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      >
        {variant === "whatsapp" && <Send className="h-5 w-5" />}
        {children}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {variant === "whatsapp" && <Send className="h-5 w-5" />}
      {children}
    </button>
  );
}
