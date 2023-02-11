import barStyles from "@/styles/bar.module.css";
import descriptionStyles from "@/styles/description.module.css";
import providersStyles from "@/styles/providers.module.css";
import subheaderStyles from "@/styles/subheader.module.css";
import Image from "next/image";
import { Button } from "./button";
import { DotsGrid } from "./dotsGrid";

export const Providers = () => {
  return (
    <div className={providersStyles["providers__container"]}>
      <div className={providersStyles["providers"]}>
        <div className={providersStyles["providers__block"]}>
          <Image
            src="trafalgar-illustration sec02 1.svg"
            width="650"
            height="477"
            alt="Trafalgar providers"
          />
        </div>
        <div
          className={`${providersStyles["providers__block"]} ${providersStyles["providers__text"]}`}
        >
          <div className={providersStyles["providers__header"]}>
            <h2 className={subheaderStyles.subheader}>
              Leading healthcare providers
            </h2>
          </div>
          <div className={barStyles.bar}></div>
          <p
            className={`${providersStyles["providers__description"]} ${descriptionStyles.description}`}
          >
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <Button type="secondary">Learn more</Button>
        </div>
        <div className={providersStyles["providers__dots-grid"]}>
          <DotsGrid />
        </div>
      </div>
    </div>
  );
};
