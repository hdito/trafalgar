import heroStyles from "@/styles/hero.module.css";
import descriptionStyles from "@/styles/description.module.css";
import { DotsGrid } from "./dotsGrid";
import Image from "next/image";
import { Button } from "./button";

export const Hero = (): JSX.Element => {
  return (
    <div className={heroStyles.description__container}>
      <div className={heroStyles["description__dots-grid"]}>
        <DotsGrid />
      </div>
      <div className={heroStyles.description}>
        <div className={heroStyles["description__text-block"]}>
          <h1 className={heroStyles.desciption__header}>
            Virtual healthcare for you
          </h1>
          <p
            className={`${heroStyles.description__text} ${descriptionStyles.description} ${descriptionStyles["description--bg"]}`}
          >
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <Button>Consult today</Button>
        </div>
        <Image
          src="trafalgar-header-illustration-1.svg"
          alt="Trafalgar healthcare"
          width="693"
          height="598"
        />
      </div>
    </div>
  );
};
