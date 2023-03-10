import articlesStyles from "@/styles/articles.module.css";
import barStyles from "@/styles/bar.module.css";
import subheaderStyles from "@/styles/subheader.module.css";
import Image from "next/image";
import { ArticleCard, ArticleCardProps } from "./articleCard";
import { Button } from "./button";

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
    <div className={articlesStyles["articles__container"]}>
      <Image
        className={articlesStyles["articles__grid"]}
        src="/articles bg.svg"
        width={547}
        height={792}
        alt=""
      />
      <div className={articlesStyles["articles"]}>
        <div className={articlesStyles["articles__header-container"]}>
          <h2 className={subheaderStyles.subheader}>
            Check out our latest article
          </h2>
          <div className={barStyles.bar}></div>
        </div>
        <div className={articlesStyles["articles__cards-container"]}>
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
        <div className={articlesStyles["articles__button-container"]}>
          <Button type="secondary">View all</Button>
        </div>
      </div>
    </div>
  );
};
