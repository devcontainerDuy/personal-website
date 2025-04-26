import type { ReactNode } from "react";
export type CardVariant = "primary" | "outline";

export type CardProps = {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
    variant?: CardVariant;
};
