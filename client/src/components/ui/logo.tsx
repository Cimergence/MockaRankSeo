import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "small" | "medium" | "large";
}

export default function Logo({ size = "medium" }: LogoProps) {
  const sizeClasses = {
    small: "h-8 w-8",
    medium: "h-10 w-10",
    large: "h-12 w-12",
  };

  const textSizeClasses = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  };

  return (
    <div className="flex items-center">
      <div className={cn("rounded-md bg-primary flex items-center justify-center text-white", sizeClasses[size])}>
        <span className="font-bold">M</span>
      </div>
      <span className={cn("ml-2 font-bold text-primary", textSizeClasses[size])}>MockaRank</span>
    </div>
  );
}
