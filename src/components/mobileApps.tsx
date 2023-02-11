import barStyles from "@/styles/bar.module.css";
import descriptionStyles from "@/styles/description.module.css";
import mobileAppsStyles from "@/styles/mobileApps.module.css";
import subheaderStyles from "@/styles/subheader.module.css";
import Image from "next/image";
import { Button } from "./button";

export const MobileApps = (): JSX.Element => {
  return (
    <div className={mobileAppsStyles["mobile-apps"]}>
      <div className={mobileAppsStyles["mobile-apps__text-block"]}>
        <h2 className={subheaderStyles.subheader}>
          Download our mobile&nbsp;apps
        </h2>
        <div className={barStyles.bar}></div>
        <p
          className={`${descriptionStyles.description} ${mobileAppsStyles["mobile-apps__description"]}`}
        >
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <Button
          type="secondary"
          icon={
            <Image src="/Arrow.svg" width="10" height={16} alt="Download" />
          }
        >
          Download
        </Button>
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
