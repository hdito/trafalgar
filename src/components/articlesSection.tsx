import { ArticleCard, ArticleCardProps } from "./articleCard";
import articlesSection from "@/styles/articlesSection.module.css";
import { SecondaryButton } from "./secondaryButton";
import indexStyles from "@/styles/index.module.css";
import { Subheader } from "./subheader";
import Image from "next/image";

export const ArticlesSection = (): JSX.Element => {
  const articles: ArticleCardProps[] = [
    {
      image: { url: "/article cover 1.png", alt: "Blood test" },
      title: "Disease detection, check up in the laboratory",
      description:
        "In this case, the role of the health laboratory is very important to do a disease detection...",
      url: "#",
    },
    {
      image: { url: "/article cover 2.png", alt: "Doctor with a microscope" },
      title: "Herbal medicines that are safe for consumption",
      description:
        "Herbal medicine is very widely used at this time because of its very good for your health...",
      url: "#",
    },
    {
      image: { url: "/article cover 3.png", alt: "Blood test" },
      title: "Natural care for healthy facial skin",
      description:
        "A healthy lifestyle should start from now and also for your skin health. There are some...",
      url: "#",
    },
  ];

  return (
    <div className={articlesSection["articles-section__container"]}>
      <Image
        className={articlesSection["articles-section__grid"]}
        src="/articles bg.svg"
        width={547}
        height={792}
        alt=""
      />
      <div className={articlesSection["articles-section"]}>
        <div className={articlesSection["articles-section__header-container"]}>
          <Subheader>Check out our latest article</Subheader>
          <div className={indexStyles["black-delimiter"]}></div>
        </div>
        <div className={articlesSection["article-section__cards-container"]}>
          {articles.map((article) => (
            <ArticleCard {...article} />
          ))}
        </div>
        <div className={articlesSection["article-section__button-container"]}>
          <SecondaryButton>View all</SecondaryButton>
        </div>
      </div>
    </div>
  );
};
