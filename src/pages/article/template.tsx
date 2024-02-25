import { useParams } from "react-router-dom";
import { articles } from "@/data/articles";
import ImageDescription from "./ImageDescription";
import ArticleCard from "@/components/articles/ArticleCard";

export default function ArticleTemplate() {
  const params = useParams();
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) {
    return <div>Page Not Found</div>;
  }

  return (
    <div className={"container pt-24"}>
      <div className={"flex flex-col md:flex-row md:justify-between gap-5"}>
        <div className="flex flex-col gap-3 text-justify md:w-2/3">
          {/* Main Section */}
          <h1 className={"font-extrabold text-4xl md:text-6xl text-left"}>
            {article.title.toUpperCase()}
          </h1>
          <span>
            {article.datePublished}{" "}
            {article.source ? (
              <span>
                | Source: <a href={article.sourceURL} className="hover:text-green-main" target="_blank">{article.source}</a>
              </span>
            ) : ""}
          </span>
          {/* Thumbnail */}
          <img src={article.imgURL} alt={article.title} />
          <figcaption className={"text-center"}>
            Credit: {article.thumbnailCredit}
          </figcaption>
          {article.articleMainDescription.map((value) => (
            <p>{value}</p>
          ))}
          {article.body &&
            article.body.map((value, key) => (
              <ImageDescription
                title={value.title}
                credit={value.credit}
                imgURL={value.imgURL}
                key={key}>
                {value.description &&
                  value.description.map((value) => <p>{value}</p>)}
              </ImageDescription>
            ))}
        </div>
        {/* Recommended Articles */}
        <div className={"md:w-1/3"}>
          <h4 className={"text-3xl font-bold mb-3"}>RECOMMENDED ARTICLES</h4>
          <div className={"flex flex-col gap-2"}>
            {articles.slice(0, 5).map((value) => (
              <RecommendedArticle title={value.title} slug={value.slug} />
            ))}
          </div>
        </div>
      </div>
      {/* Latest Articles */}
      <div className={"mt-10"}>
        <hr
          className={"border-black dark:border-white border-2 max-w-80 mb-5"}
        />
        <h2 className={"text-3xl md:text-5xl font-bold mb-10"}>
          LATEST <br /> ARTICLES
        </h2>
        <div
          className={
            "grid aclgrid:grid-cols-1 md:grid-cols-3 grid-flow-row gap-7"
          }>
          {articles
            .filter((object) => object.slug !== article.slug)
            .slice(0, 3)
            .map((value) => {
              return (
                <ArticleCard
                  title={value.title}
                  datePublished={value.datePublished}
                  imgURL={value.imgURL}
                  slug={value.slug}
                  key={value.slug}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

function RecommendedArticle({ title, slug }: { title: string; slug: string }) {
  return (
    <div>
      <div className={"flex gap-2 justify-start items-center"}>
        <img src="/svgs/circle-green.svg" alt="" />
        <a href={`/articles/${slug}`}>{title}</a>
      </div>
      <hr className={"border-[1px] mt-2"} />
    </div>
  );
}
