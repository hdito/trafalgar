import header from "@/styles/header.module.css";
import logoStyles from "@/styles/logo.module.css";
import { Nav } from "./nav";

export const Header = (): JSX.Element => {
  return (
    <header className={header.header}>
      <a
        href="#"
        className={`${logoStyles.logo} ${logoStyles["logo--primary"]}`}
      >
        <div
          className={`${logoStyles.logo__image} ${logoStyles["logo__image--primary"]}`}
        >
          T
        </div>
        <span>Trafalgar</span>
      </a>
      <Nav />
    </header>
  );
};
