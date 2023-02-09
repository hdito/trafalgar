import secondaryButton from "@/styles/secondaryButton.module.css";
import { PropsWithChildren } from "react";

export const SecondaryButton = ({
  children,
}: PropsWithChildren): JSX.Element => {
  return <button className={secondaryButton.button}>{children}</button>;
};
