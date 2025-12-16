import * as React from "react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary" | "accent"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-bold transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background shadow-sm hover:shadow-md",
          {
            "bg-primary text-primary-foreground hover:bg-primary-hover hover:-translate-y-0.5": variant === "default",
            "border-2 border-primary text-primary hover:bg-primary/10": variant === "outline",
            "hover:bg-muted hover:text-foreground": variant === "ghost",
            "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:-translate-y-0.5": variant === "secondary",
            "bg-accent text-accent-foreground hover:bg-accent/90 hover:-translate-y-0.5": variant === "accent",
            "h-10 py-2 px-6": size === "default",
            "h-9 px-4 text-sm": size === "sm",
            "h-14 px-10 text-lg": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
