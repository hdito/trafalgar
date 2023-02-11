import navStyles from "@/styles/nav.module.css";
import { Link } from "@/types/link";

export const Nav = (): JSX.Element => {
  const selectedLink = "Home";

  const links: Link[] = [
    { title: "Home", url: "#" },
    { title: "Find a doctor", url: "#" },
    { title: "Apps", url: "#" },
    { title: "Testimonials", url: "#" },
    { title: "About us", url: "#" },
  ];

  return (
    <nav className={navStyles["nav"]}>
      <ul className={navStyles.nav__menu}>
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.url}
              className={`${navStyles.nav__link} ${
                link.title === selectedLink
                  ? navStyles["nav__link--active"]
                  : ""
              }`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
