import ourServicesStyles from "@/styles/ourServices.module.css";
import descriptionStyles from "@/styles/description.module.css";

type OurServicesCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export const OurServicesCard = ({
  icon,
  title,
  description,
}: OurServicesCardProps): JSX.Element => {
  return (
    <div className={ourServicesStyles["our-services__card"]}>
      <>
        <div className={ourServicesStyles["our-services__card__image"]}>
          {icon}
        </div>
        <h3 className={ourServicesStyles["our-services__card__header"]}>
          {title}
        </h3>
        <p
          className={`${descriptionStyles.description} ${descriptionStyles["description--sm"]}`}
        >
          {description}
        </p>
      </>
    </div>
  );
};
