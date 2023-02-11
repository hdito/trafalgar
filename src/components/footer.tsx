import footerStyles from "@/styles/footer.module.css";
import Image from "next/image";

type FooterLinksBlock = {
  title: string;
  links: { title: string; url: string }[];
};

export const Footer = (): JSX.Element => {
  const footerLinks: FooterLinksBlock[] = [
    {
      title: "Company",
      links: [
        { title: "About", url: "#" },
        { title: "Testimonials", url: "#" },

        { title: "Find a doctor", url: "#" },
        { title: "Apps", url: "#" },
      ],
    },
    {
      title: "Region",
      links: [
        { title: "Indonesi", url: "#" },
        { title: "Singapore", url: "#" },

        { title: "Hongkong", url: "#" },
        { title: "Canada", url: "#" },
      ],
    },
    {
      title: "Help",
      links: [
        { title: "Help center", url: "#" },
        { title: "Contact support", url: "#" },

        { title: "Instructions", url: "#" },
        { title: "How it works", url: "#" },
      ],
    },
  ];
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles["footer__info-container"]}>
        <div>
          <div className={footerStyles["footer__logo-container"]}>
            <div className={footerStyles.footer__logo}>T</div>
            <span>Trafalgar</span>
          </div>
          <div>
            <p className={footerStyles["footer__project-description"]}>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <p className={footerStyles["footer__project-description"]}>
              ©Trafalgar PTY LTD 2020. All rights reserved
            </p>
          </div>
        </div>
        {footerLinks.map((linkBlock) => (
          <div key={linkBlock.title}>
            <h3 className={footerStyles["footer__links-block-title"]}>
              {linkBlock.title}
            </h3>
            {linkBlock.links.map((link) => (
              <a
                key={link.title}
                className={footerStyles.footer__link}
                href={link.url}
              >
                {link.title}
              </a>
            ))}
          </div>
        ))}
      </div>
      <Image
        className={footerStyles.footer__grid}
        src="/inner dots grid.svg"
        width={130}
        height={115}
        alt=""
      />
    </footer>
  );
};
