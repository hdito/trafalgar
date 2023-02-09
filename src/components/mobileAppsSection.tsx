import styles from "@/styles/index.module.css";
import mobileAppsSection from "@/styles/mobileAppsSection.module.css";
import Image from "next/image";
import { Bar } from "./bar";
import { ArrowIcon } from "./icons/arrowIcon";
import { SecondaryButton } from "./secondaryButton";
import { Subheader } from "./subheader";

export const MobileAppsSection = (): JSX.Element => {
  return (
    <div className={mobileAppsSection["mobile-apps-section"]}>
      <div className={mobileAppsSection["mobile-apps-section__text-block"]}>
        <Subheader>Download our mobile&nbsp;apps</Subheader>
        <Bar />
        <p
          className={`${styles.description} ${mobileAppsSection["mobile-apps-section__description"]}`}
        >
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <SecondaryButton icon={<ArrowIcon />}>Download</SecondaryButton>
      </div>
      <Image
        src="trafalgar-illustration sec03 1.svg"
        width="665"
        height="434"
        alt="Trafalgar mobile app"
      />
    </div>
  );
};
