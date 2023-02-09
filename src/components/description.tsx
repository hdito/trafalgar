import { DescriptionImage } from "./icons/descriptionIllustration";
import description from "@/styles/description.module.css";
import { DotsGrid } from "./dotsGrid";

export const Description = (): JSX.Element => {
  return (
    <div className={description.description}>
      <div className={description["description__dots-grid"]}>
        <DotsGrid />
      </div>
      <div className={description["description__text-block"]}>
        <h1 className={description.desciption__header}>
          Virtual healthcare for you
        </h1>
        <p className={description.description__text}>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button className={description.description__button}>
          Consult today
        </button>
      </div>
      <DescriptionImage />
    </div>
  );
};
