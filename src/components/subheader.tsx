import subheaderStyles from "@/styles/subheader.module.css";
import { PropsWithChildren } from "react";

export const Subheader = ({ children }: PropsWithChildren): JSX.Element => {
  return <h2 className={subheaderStyles.subheader}>{children}</h2>;
};
