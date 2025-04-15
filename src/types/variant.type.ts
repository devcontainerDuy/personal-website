export type Variant = "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "light" | "dark" | "outline" | "link";

export const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500 hover:from-blue-500 hover:to-purple-500",
    secondary: "bg-gray-500 text-white border-gray-500 hover:bg-gray-600",
    success: "bg-green-500 text-white border-green-500 hover:bg-green-600",
    warning: "bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600",
    danger: "bg-red-500 text-white border-red-500 hover:bg-red-600",
    info: "bg-cyan-500 text-white border-cyan-500 hover:bg-cyan-600",
    light: "bg-gray-100 text-gray-800 border-gray-100 hover:bg-gray-200",
    dark: "bg-gray-800 text-gray-300 border-gray-800 hover:bg-gray-700",
    outline: "bg-transparent text-current border border-gray-700 border-current hover:bg-gray-800 hover:text-white",
    link: "bg-transparent text-blue-500 underline hover:text-blue-700",
} as const;