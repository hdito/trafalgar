import barStyles from "@/styles/bar.module.css";
import descriptionStyles from "@/styles/description.module.css";
import ourServices from "@/styles/ourServices.module.css";
import subheaderStyles from "@/styles/subheader.module.css";
import Image from "next/image";
import { Button } from "./button";
import { OurServicesCard } from "./ourServicesCard";

export const OurServices = (): JSX.Element => {
  const cardsInfo = [
    {
      title: "Search doctor",
      description:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      icon: () => (
        <Image src="/search.svg" width={92} height={90} alt=""></Image>
      ),
    },
    {
      title: "Online pharmacy",
      description:
        "Buy  your medicines with our mobile application with a simple delivery system",
      icon: () => (
        <Image src="/bottle.svg" width={62} height={85} alt=""></Image>
      ),
    },
    {
      title: "Consultation",
      description:
        "Free consultation with our trusted doctors and get the best recomendations",
      icon: () => (
        <Image src="/tablet.svg" width={67} height={95} alt=""></Image>
      ),
    },
    {
      title: "Details info",
      description:
        "Free consultation with our trusted doctors and get the best recomendations",
      icon: () => (
        <Image src="/diagnosis.svg" width={67} height={95} alt=""></Image>
      ),
    },
    {
      title: "Emergency care",
      description:
        "You can get 24/7 urgent care for yourself or your children and your lovely family",
      icon: () => <Image src="/kit.svg" width={80} height={72} alt=""></Image>,
    },
    {
      title: "Tracking",
      description: "Track and save your medical history and health data ",
      icon: () => (
        <Image src="/tracking.svg" width={70} height={95} alt=""></Image>
      ),
    },
  ];

  return (
    <div className={ourServices["our-services__container"]}>
      <div>
        <Image
          className={ourServices["our-services__background"]}
          src="/bg cloud.svg"
          alt=""
          width="1120"
          height="970"
        />
      </div>
      <div className={ourServices["our-services"]}>
        <div className={ourServices["our-services__description"]}>
          <h2 className={subheaderStyles.subheader}>Our services</h2>
          <div className={barStyles.bar}></div>
          <p
            className={`${descriptionStyles.description} ${ourServices["our-services__description__text"]}`}
          >
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className={ourServices["our-services__cards-container"]}>
          <Image
            className={ourServices["our-services__dots-grid"]}
            src="/dots grid.svg"
            width="130"
            height="115"
            alt=""
          />
          {cardsInfo.map((cardInfo) => (
            <OurServicesCard
              key={cardInfo.title}
              icon={<cardInfo.icon />}
              title={cardInfo.title}
              description={cardInfo.description}
            />
          ))}
        </div>
        <div>
          <div className={ourServices["our-services__button-container"]}>
            <Button type="secondary">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
