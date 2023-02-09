import secondaryButton from "@/styles/secondaryButton.module.css";
import { PropsWithChildren } from "react";

export const SecondaryButton = ({
  icon,
  children,
}: PropsWithChildren<{ icon?: JSX.Element }>): JSX.Element => {
  return (
    <button className={secondaryButton.button}>
      {children}
      {icon}
    </button>
  );
};
