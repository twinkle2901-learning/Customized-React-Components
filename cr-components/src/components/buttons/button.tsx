import React, { JSX } from "react";
import "./button.scss";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?:
    | "primary"
    | "secondary"
    | "info"
    | "warning"
    | "danger"
    | "success"
    | "dark"; //default primary
    radius?: number;
    size?: "sm" | "md" | "lg"; //default md
    variant?: "light" | "outline" | "solid"; //default solid
    label: string;
    disabled?: boolean;
    icon?: JSX.Element;
    iconPosition?: "left" | "right";
    classes?: string;

    // onClick?: React.MouseEventHandler<HTMLButtonElement>;
    // also useful for accessibility
    // "aria-haspopup"?: string;
    // "aria-expanded"?: boolean;

}

function CButton({
    // bgcolor,
    color,
    radius,
    size,
    variant,
    label,
    disabled,
    icon,
    iconPosition = "right",
    classes,
    onClick,
    // "aria-haspopup",
    // "aria-expanded"
    ...rest // ✅ includes aria-haspopup, aria-expanded, etc.
}: IProps) {
    // Convert radius to rem if it's a number
    const radiusValue = typeof radius === "number" ? `${radius}rem` : radius;

    // Map color names to real values
    const colorMap: Record<string, string> = {
        primary: "#007bff",
        secondary: "#6c757d",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        success: "#28a745",
        dark: "#343a40",
    };

    const cssVars = {
        "--btn-color": colorMap[color as keyof typeof colorMap] || colorMap.primary,
        "--btn-radius": radiusValue || "0.25rem",
    } as React.CSSProperties;

    return (
        <>
            <button
                className={[
                    "c-btn",
                    color && `c-btn-${color}`,
                    size && `c-btn-${size}`,
                    variant && `c-btn-${variant}`,
                    classes && `${classes}`,
                ]
                    .filter(Boolean)
                    .join(" ")}
                style={cssVars}
                btn-size={size}
                btn-variant={variant}
                disabled={disabled}
                onClick={onClick}
                {...rest}
            >
                {iconPosition === "left" && icon}
                {label}
                {iconPosition === "right" && icon}
            </button>
        </>
    );
}

export default CButton;
