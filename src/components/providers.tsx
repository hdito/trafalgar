import providersStyles from "@/styles/providers.module.css";
import Image from "next/image";
import { Bar } from "./bar";
import { DotsGrid } from "./dotsGrid";
import { SecondaryButton } from "./secondaryButton";
import { Subheader } from "./subheader";

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
            <Subheader>Leading healthcare providers</Subheader>
          </div>
          <Bar />
          <p className={providersStyles["providers__description"]}>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <SecondaryButton>Learn more</SecondaryButton>
        </div>
        <div className={providersStyles["providers__dots-grid"]}>
          <DotsGrid />
        </div>
      </div>
    </div>
  );
};