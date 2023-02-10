import Image from "next/image";
import articlesStyles from "@/styles/articles.module.css";

export type ArticleCardProps = {
  image: {
    url: string;
    alt: string;
  };
  title: string;
  description: string;
  url: string;
};

export const ArticleCard = ({
  image,
  title,
  description,
  url,
}: ArticleCardProps): JSX.Element => {
  return (
    <div className={articlesStyles["articles__card"]}>
      <Image src={image.url} alt={image.alt} width={350} height={240} />
      <div className={articlesStyles["articles__card__text-section"]}>
        <h3 className={articlesStyles["articles__card__header"]}>{title}</h3>
        <p className={articlesStyles["articles__card__excerpt"]}>
          {description}
        </p>
        <a className={articlesStyles["articles__card__link"]} href={url}>
          Read more
        </a>
      </div>
    </div>
  );
};
