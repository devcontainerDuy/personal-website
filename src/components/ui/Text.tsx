import type { TextProps } from "@/types/Text";
import type { FC } from "react";

const Text: FC<TextProps> = ({ children, className = "" }) => {
    return <span className={`bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text ${className}`}>{children}</span>;
};

export default Text;
