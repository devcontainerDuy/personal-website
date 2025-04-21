import type { LabelProps } from "@/types/Label";
import type { FC } from "react";

const Label: FC<LabelProps> = ({ children, htmlFor, className = "" }) => {
    return (
        <label htmlFor={htmlFor} className={`block mb-1 text-sm/6 font-medium text-gray-400 ${className}`}>
            {children}
        </label>
    );
};

export default Label;
