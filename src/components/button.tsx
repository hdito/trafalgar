import buttonStyles from "@/styles/button.module.css";
import { PropsWithChildren } from "react";

export const Button = ({
  icon,
  children,
  type = "primary",
}: PropsWithChildren<{
  icon?: JSX.Element;
  type?: "primary" | "secondary";
}>): JSX.Element => {
  return (
    <button
      className={`${buttonStyles.button} ${
        type === "primary"
          ? buttonStyles["button--primary"]
          : buttonStyles["button--secondary"]
      }`}
    >
      {children}
      {icon}
    </button>
  );
};
