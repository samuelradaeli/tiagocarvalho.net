import { cn } from "@/lib/cn";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <div className={cn("flex items-center justify-center py-8", className)}>
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
      <div className="mx-3 h-1.5 w-1.5 rotate-45 bg-gold" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  );
}
