import topNavBar from "@/styles/nav.module.css";

export const Nav = (): JSX.Element => {
  return (
    <nav className={topNavBar["nav"]}>
      <ul className={topNavBar.nav__menu}>
        <li>
          <a className={topNavBar["nav__link--active"]} href="#">
            Home
          </a>
        </li>
        <li>
          <a className={topNavBar.nav__link} href="#">
            Find a doctor
          </a>
        </li>
        <li>
          <a className={topNavBar.nav__link} href="#">
            Apps
          </a>
        </li>
        <li>
          <a className={topNavBar.nav__link} href="#">
            Testimonials
          </a>
        </li>
        <li>
          <a className={topNavBar.nav__link} href="#">
            About us
          </a>
        </li>
      </ul>
    </nav>
  );
};
