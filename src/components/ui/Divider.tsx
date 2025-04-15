import type { DividerProps } from "@/types";

const Divider: React.FC<DividerProps> = ({ className = "", vertical = false, colors = "from-blue-600 to-purple-600" }) => {
    const defaultClasses = vertical ? "h-full w-[2px]" : "w-full h-[2px]";

    const gradientDirection = vertical ? "bg-gradient-to-b" : "bg-gradient-to-r"; // ['#4f46e5', '#8b5cf6', '#d946ef']

    return <hr className={`${defaultClasses} ${gradientDirection} ${colors} ${className}`} />;
};

export default Divider;
