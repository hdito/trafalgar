import secondaryButtonStyles from "@/styles/secondaryButton.module.css";
import { PropsWithChildren } from "react";

export const SecondaryButton = ({
  icon,
  children,
}: PropsWithChildren<{ icon?: JSX.Element }>): JSX.Element => {
  return (
    <button className={secondaryButtonStyles.button}>
      {children}
      {icon}
    </button>
  );
};
