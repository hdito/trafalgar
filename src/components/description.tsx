import descriptionStyles from "@/styles/description.module.css";
import { DotsGrid } from "./dotsGrid";
import Image from "next/image";
import { Button } from "./button";

export const Description = (): JSX.Element => {
  return (
    <div className={descriptionStyles.description__container}>
      <div className={descriptionStyles["description__dots-grid"]}>
        <DotsGrid />
      </div>
      <div className={descriptionStyles.description}>
        <div className={descriptionStyles["description__text-block"]}>
          <h1 className={descriptionStyles.desciption__header}>
            Virtual healthcare for you
          </h1>
          <p className={descriptionStyles.description__text}>
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
