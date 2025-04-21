import type { FC } from "react";
import type { CardProps } from "@/types";

const Card: FC<CardProps> = ({ children, className = "", hoverEffect = true, variant = "primary" }) => {
    const variantClasses = {
        primary: "bg-gray-900/50 border-gray-800",
        outline: "bg-gray-800 border-gray-700",
    };

    return (
        <div
            className={`block max-w-sm backdrop-blur-sm border rounded-lg overflow-hidden relative ${
                hoverEffect ? "transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10" : ""
            } ${className} ${variantClasses[variant]}`}
        >
            {children}
        </div>
    );
};

export default Card;
