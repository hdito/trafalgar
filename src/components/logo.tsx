import LogoStyles from "@/styles/logo.module.css";

export const Logo = (): JSX.Element => {
  return (
    <a href="#" className={LogoStyles.logo}>
      <div className={LogoStyles.logo__image}>T</div>
      <span className={LogoStyles.logo__text}>Trafalgar</span>
    </a>
  );
};
