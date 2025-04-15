import type { ReactNode } from "react";
import type { Variant } from "@/types";

export interface BadgeProps {
    children: ReactNode;
    variant?: Variant;
    href?: string;
    className?: string;
}
