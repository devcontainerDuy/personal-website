import type { ReactNode } from "react";
import type { Variant } from "@/types";

export type ButtonSize = "sm" | "md" | "lg";
export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
    children: ReactNode;
    variant?: Variant;
    size?: ButtonSize;
    className?: string;
    onClick?: () => void;
    href?: string;
    type?: ButtonType;
    disabled?: boolean;
}