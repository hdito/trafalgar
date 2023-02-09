import ourServices from "@/styles/ourServices.module.css";

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
    <div className={ourServices["our-services__card"]}>
      <>
        <div className={ourServices["our-services__card__image"]}>{icon}</div>
        <h3 className={ourServices["our-services__card__header"]}>{title}</h3>
        <p className={ourServices["our-services__card__description"]}>
          {description}
        </p>
      </>
    </div>
  );
};
