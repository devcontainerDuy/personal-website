import { getVariantClass } from "@/lib/getVariantClass";
import type { BadgeProps } from "@/types";
import type { FC } from "react";

const Badge: FC<BadgeProps> = ({ children, variant = "dark", href, className = "" }) => {
    const baseClass = "inline-block rounded-full px-3 py-1 text-sm border";

    if (href) {
        return (
            <a href={href} className={`${baseClass} ${getVariantClass(variant)} ${className}`}>
                {children}
            </a>
        );
    }
    return <span className={`${baseClass} ${getVariantClass(variant)} ${className}`}>{children}</span>;
};

export default Badge;
