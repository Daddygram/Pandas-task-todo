import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import styles from "./button.module.scss";
import { forwardRef } from "react";

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles["button--primary"],
      secondary: styles["button--secondary"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, type, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, className }))}
      ref={ref}
      type={type === "submit" ? "submit" : "button"}
      {...props}
    />
  )
);
Button.displayName = "button";

export { Button };