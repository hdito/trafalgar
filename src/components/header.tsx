import { PropsWithChildren } from "react";
import header from "@/styles/header.module.css";

export const Header = ({ children }: PropsWithChildren): JSX.Element => {
  return <header className={header.header}>{children}</header>;
};
