import topNavBar from "@/styles/topNavBar.module.css";

export const TopNavBar = (): JSX.Element => {
  return (
    <nav className={topNavBar["top-nav-bar"]}>
      <a className={topNavBar["top-nav-bar__link--active"]} href="#">
        Home
      </a>
      <a className={topNavBar["top-nav-bar__link"]} href="#">
        Find a doctor
      </a>
      <a className={topNavBar["top-nav-bar__link"]} href="#">
        Apps
      </a>
      <a className={topNavBar["top-nav-bar__link"]} href="#">
        Testimonials
      </a>
      <a className={topNavBar["top-nav-bar__link"]} href="#">
        About us
      </a>
    </nav>
  );
};
