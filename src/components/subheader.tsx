import subheader from "@/styles/subheader.module.css";
import { PropsWithChildren } from "react";

export const Subheader = ({ children }: PropsWithChildren): JSX.Element => {
  return <h2 className={subheader.subheader}>{children}</h2>;
};
