import providersStyles from "@/styles/providers.module.css";
import barStyles from "@/styles/bar.module.css";
import Image from "next/image";
import { DotsGrid } from "./dotsGrid";
import { Button } from "./button";
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
          <div className={barStyles.bar}></div>
          <p className={providersStyles["providers__description"]}>
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
