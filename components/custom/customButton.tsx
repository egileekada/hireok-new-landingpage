"use client";
import { Button, ButtonProps } from "@heroui/button";
import clsx from "clsx";

type HeroVariants = "solid" | "flat" | "bordered" | "ghost";

type CustomVariants =
    | HeroVariants
    | "customGradient"
    | "customDanger"
    | "primary"
    | "auth"
    | "outline"
    | "outlinebrand";

interface IProps {
    children: React.ReactNode;
    type?: "submit" | "button";
    variant?: CustomVariants;
    color?: ButtonProps["color"];
    size?: "sm" | "md" | "lg";
    fontSize?: string;
    fontWeight?: string;
    fullWidth?: boolean;
    rounded?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    height?: string;
    className?: string;
}

export default function CustomButton({
    children,
    variant = "primary",
    color = "primary",
    rounded = "16px",
    size = "md",
    fontSize = "14px",
    fontWeight = "800",
    fullWidth = false,
    isDisabled = false,
    isLoading = false,
    className,
    type,
    onClick,
    startIcon,
    endIcon,
    height = "50px",
}: IProps) {
    // Tailwind-based custom variants
    const customClasses = clsx({
        "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90":
            variant === "customGradient",
        "bg-red-600 text-white hover:bg-red-700": variant === "customDanger",
        "bg-gradient-to-r from-[#8C43FE] to-[#37137F] text-white hover:opacity-95":
            variant === "primary",
        "bg-violet-500 text-white hover:bg-violet-500": variant === "auth",
        "bg-white text-[#161925] border border-[#E8E7ED] hover:bg-white":
            variant === "outline",
        "bg-white text-[#9747FF] border border-[#9747FF] hover:bg-white":
            variant === "outlinebrand",
    });

    // Ensure HeroUI only gets its valid variants
    const heroVariant: HeroVariants = (
        ["solid", "flat", "bordered", "ghost"].includes(variant)
            ? variant
            : "primary"
    ) as HeroVariants;

    return (
        <Button
            variant={heroVariant}
            color={color}
            size={size}
            type={type}
            style={{
                height: height ?? "50px",
                fontSize: fontSize,
                fontWeight: fontWeight,
                borderRadius: rounded,
                width: fullWidth ? "100%" : "fit-content",
                paddingInline: "16px"
            }} 
            fullWidth={fullWidth}
            isDisabled={isDisabled || isLoading}
            isLoading={isLoading}
            onPress={onClick}
            startContent={
                <div>
                    {startIcon && <div className=" w-fit ">{startIcon}</div>}
                </div>
            }
            endContent={
                <div>{endIcon && <div className=" w-fit ">{endIcon}</div>}</div>
            }
            className={`${className} ${customClasses}`}
        >
            {children}
        </Button>
    );
}
