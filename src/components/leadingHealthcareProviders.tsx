import { Bar } from "./bar";
import { HealthcareProvidersIcon } from "./icons/healthcareProvidersIcon";
import { SecondaryButton } from "./secondaryButton";
import { Subheader } from "./subheader";
import leadingHealthcareProviders from "@/styles/leadingHealthcareProviders.module.css";
import { DotsGrid } from "./dotsGrid";

export const LeadingHealthcareProviders = () => {
  return (
    <div
      className={
        leadingHealthcareProviders["leading-healthcare-providers__container"]
      }
    >
      <div
        className={leadingHealthcareProviders["leading-healthcare-providers"]}
      >
        <div
          className={
            leadingHealthcareProviders["leading-healthcare-providers__block"]
          }
        >
          <HealthcareProvidersIcon />
        </div>
        <div
          className={`${leadingHealthcareProviders["leading-healthcare-providers__block"]} ${leadingHealthcareProviders["leading-healthcare-providers__text"]}`}
        >
          <div
            className={
              leadingHealthcareProviders["leading-healthcare-providers__header"]
            }
          >
            <Subheader>Leading healthcare providers</Subheader>
          </div>
          <Bar />
          <p
            className={
              leadingHealthcareProviders[
                "leading-healthcare-providers__description"
              ]
            }
          >
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <SecondaryButton>Learn more</SecondaryButton>
        </div>
        <div
          className={
            leadingHealthcareProviders[
              "leading-healthcare-providers__dots-grid"
            ]
          }
        >
          <DotsGrid />
        </div>
      </div>
    </div>
  );
};
