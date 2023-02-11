import barStyles from "@/styles/bar.module.css";
import styles from "@/styles/index.module.css";
import mobileAppsStyles from "@/styles/mobileApps.module.css";
import Image from "next/image";
import { SecondaryButton } from "./secondaryButton";
import { Subheader } from "./subheader";

export const MobileApps = (): JSX.Element => {
  return (
    <div className={mobileAppsStyles["mobile-apps"]}>
      <div className={mobileAppsStyles["mobile-apps__text-block"]}>
        <Subheader>Download our mobile&nbsp;apps</Subheader>
        <div className={barStyles.bar}></div>
        <p
          className={`${styles.description} ${mobileAppsStyles["mobile-apps__description"]}`}
        >
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <SecondaryButton
          icon={
            <Image src="/Arrow.svg" width="10" height={16} alt="Download" />
          }
        >
          Download
        </SecondaryButton>
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
