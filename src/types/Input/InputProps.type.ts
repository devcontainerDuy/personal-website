export type InputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "datetime-local" | "month" | "week" | "time" | "color" | "file" | "hidden" | "checkbox" | "radio";
export type InputVariant = "primary" | "danger" | "success";
export type InputSize = "sm" | "md" | "lg";
export type InputValue = string | number | readonly string[] | undefined;

export type InputProps = {
    type?: InputType;
    variant?: InputVariant;
    className?: string;
    placeholder?: string;
    size?: InputSize;
    disabled?: boolean;
    focused?: boolean;
    value?: InputValue;
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};