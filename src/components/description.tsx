import description from "@/styles/description.module.css";
import { DotsGrid } from "./dotsGrid";
import Image from "next/image";

export const Description = (): JSX.Element => {
  return (
    <div className={description.description__container}>
      <div className={description["description__dots-grid"]}>
        <DotsGrid />
      </div>
      <div className={description.description}>
        <div className={description["description__text-block"]}>
          <h1 className={description.desciption__header}>
            Virtual healthcare for you
          </h1>
          <p className={description.description__text}>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className={description.description__button}>
            Consult today
          </button>
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
