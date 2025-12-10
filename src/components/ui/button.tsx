import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground rounded-full hover:shadow-[0_0_25px_hsl(43_74%_49%/0.5)] hover:scale-[1.02] active:scale-[0.98] active:shadow-[0_0_15px_hsl(43_74%_49%/0.4)]",
        luxury:
          "relative bg-primary text-primary-foreground rounded-full overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary before:via-accent before:to-primary before:bg-[length:200%_100%] before:animate-gradient-shift before:opacity-0 hover:before:opacity-100 hover:shadow-[0_0_30px_hsl(43_74%_49%/0.6)] hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border border-primary/30 bg-transparent text-primary rounded-full hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(43_74%_49%/0.4)] active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 hover:shadow-[0_0_15px_hsl(215_55%_35%/0.3)]",
        ghost:
          "text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-full hover:shadow-[0_0_10px_hsl(43_74%_49%/0.15)]",
        link: 
          "text-primary underline-offset-4 hover:underline",
        glass:
          "glass-strong text-foreground rounded-full hover:bg-foreground/10 hover:shadow-[0_0_20px_hsl(43_74%_49%/0.25)]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
