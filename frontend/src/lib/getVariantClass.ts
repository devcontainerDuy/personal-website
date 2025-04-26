import { variantClasses, type Variant } from "@/types";

export const getVariantClass = (variant: Variant): string => {
    return variantClasses[variant] || variantClasses.primary;
};
