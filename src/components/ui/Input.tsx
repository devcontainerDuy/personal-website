import { forwardRef, useEffect, useImperativeHandle, useRef, type ForwardedRef } from "react";
import type { InputHandle, InputProps } from "@/types";

const Input = forwardRef<InputHandle, InputProps>(
    (
        { id = undefined, type = "text", variant = "primary", className = "", placeholder = "", size = "md", disabled = false, focused = false, value = "", onClick, onChange },
        ref: ForwardedRef<InputHandle | null>
    ) => {
        const localRef = useRef<HTMLInputElement>(null);

        // useEffect(() => {
        // 	if (typeof ref === "function") {
        // 		ref(localRef.current);
        // 	} else if (ref) {
        // 		ref.current = localRef.current;
        // 	}
        // }, [ref]);

        useImperativeHandle(ref, () => ({
            focus: () => localRef.current?.focus(),
            select: () => localRef.current?.select(),
            blur: () => localRef.current?.blur(),
            clear: () => {
                if (localRef.current) localRef.current.value = "";
            },
            setFocus: (focused: boolean) => {
                if (focused && localRef.current) {
                    localRef.current.focus();
                } else if (localRef.current) {
                    localRef.current.blur();
                }
            },
            getValue: () => localRef.current?.value || undefined || "",
            setValue: (value: string) => {
                if (localRef.current) localRef.current.value = value;
            },
        }));

        useEffect(() => {
            if (focused && localRef.current) {
                localRef.current.focus();
            }
        }, [focused]);

        const sizeClasses = {
            sm: "text-sm px-2 py-1",
            md: "text-base px-3 py-2",
            lg: "text-lg px-4 py-3",
        };

        const variantClasses = {
            primary: "bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400",
            secondary: "bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400",
            danger: "bg-red-50 border-red-500 text-red-500 focus:border-red-500 focus:ring-red-500 placeholder-red-400",
            success: "bg-green-50 border-green-500 text-green-900 focus:ring-green-500 focus:border-green-500 placeholder-green-700",
        };

        return (
            <input
                id={id}
                ref={localRef}
                type={type}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onClick={onClick}
                onChange={onChange}
            />
        );
    }
);

export default Input;
