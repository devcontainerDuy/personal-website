import type { FC } from "react";
import type { CardProps } from "@/types";

const Card: FC<CardProps> = ({ children, className = "", hoverEffect = true }) => {
    return (
        <div
            className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden relative ${
                hoverEffect ? "transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10" : ""
            }${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
