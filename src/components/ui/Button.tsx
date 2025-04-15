import type { FC } from "react";
import type { ButtonProps } from "@/types";

const Button: FC<ButtonProps> = ({ children, variant = "primary", size = "md", className = "", onClick, href, type = "button", disabled = false }) => {
    const baseClasses =
        "inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500";

    const variantClasses = {
        primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500",
        secondary: "bg-gray-800 text-white hover:bg-gray-700",
        outline: "border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white",
    };

    const sizeClasses = {
        sm: "text-xs px-3 py-1.5",
        md: "text-sm px-4 py-2",
        lg: "text-base px-6 py-3",
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} disabled={disabled} onClick={onClick} className={`${classes}`}>
            {children}
        </button>
    );
};

export default Button;
