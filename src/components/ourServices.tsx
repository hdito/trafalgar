import ourServices from "@/styles/ourServices.module.css";
import { Bar } from "./bar";
import { OurServicesCard } from "./ourServicesCard";
import { SearchIcon } from "./icons/searchIcon";
import { Subheader } from "./subheader";
import { PharmacyIcon } from "./icons/pharmacyIcon";
import { ConsultationIcon } from "./icons/consultationIcon";
import { DetailsIcon } from "./icons/detailsIcon";
import { EmergencyCareIcon } from "./icons/emergencyCareIcon";
import { TrackingIcon } from "./icons/trackingIcon";
import { SecondaryButton } from "./secondaryButton";
import { OurServicesBackground } from "./icons/ourServicesBackground";
import { DotsGrid } from "./dotsGrid";

export const OurServices = (): JSX.Element => {
  const cardsInfo = [
    {
      title: "Search doctor",
      description:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      icon: SearchIcon,
    },
    {
      title: "Online pharmacy",
      description:
        "Buy  your medicines with our mobile application with a simple delivery system",
      icon: PharmacyIcon,
    },
    {
      title: "Consultation",
      description:
        "Free consultation with our trusted doctors and get the best recomendations",
      icon: ConsultationIcon,
    },
    {
      title: "Details info",
      description:
        "Free consultation with our trusted doctors and get the best recomendations",
      icon: DetailsIcon,
    },
    {
      title: "Emergency care",
      description:
        "You can get 24/7 urgent care for yourself or your children and your lovely family",
      icon: EmergencyCareIcon,
    },
    {
      title: "Tracking",
      description: "Track and save your medical history and health data ",
      icon: TrackingIcon,
    },
  ];

  return (
    <div className={ourServices["our-services"]}>
      <div>
        <OurServicesBackground />
      </div>
      <div className={ourServices["our-services__description"]}>
        <Subheader>Our services</Subheader>
        <Bar />
        <p className={ourServices["our-services__description__text"]}>
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <div className={ourServices["our-services__cards-container"]}>
        <div className={ourServices["our-services__dots-grid"]}>
          <DotsGrid />
        </div>
        {cardsInfo.map((cardInfo) => (
          <OurServicesCard
            icon={<cardInfo.icon />}
            title={cardInfo.title}
            description={cardInfo.description}
          />
        ))}
      </div>
      <div>
        <div className={ourServices["our-services__button-container"]}>
          <SecondaryButton>Learn more</SecondaryButton>
        </div>
      </div>
    </div>
  );
};
