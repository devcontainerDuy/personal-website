import { useEffect, useRef, type FC } from "react";
import type { InputProps } from "@/types";

const Input: FC<InputProps> = ({ type = "text", variant = "primary", className = "", placeholder = "", size = "md", disabled = false, focused = false, value = "", onClick, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (focused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [focused]);

    const sizeClasses = {
        sm: "text-sm px-2 py-1",
        md: "text-base px-3 py-2",
        lg: "text-lg px-4 py-3",
    };

    const variantClasses = {
        primary: "border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400",
        danger: "border-red-500 text-red-500 focus:border-red-500 focus:ring-red-500 placeholder-red-400",
        success: "border-green-500 text-green-900 focus:ring-green-500 focus:border-green-500 placeholder-green-700",
    };

    return (
        <input
            type={type}
            className={`w-full px-4 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            ref={inputRef}
            onClick={onClick}
            onChange={onChange}
        />
    );
};

export default Input;
