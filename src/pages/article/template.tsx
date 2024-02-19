import { useParams } from "react-router-dom";
import { articles } from "@/data/articles";
import ImageDescription from "./ImageDescription";

export default function ArticleTemplate() {
  const params = useParams();
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) {
    return <div>Page Not Found</div>;
  }

  return (
    <div className={"container pt-24"}>
      <div className={"flex flex-col md:flex-row md:justify-between"}>
        <div className="flex flex-col gap-3 text-justify md:w-2/3">
          {/* Main Section */}
          <h1 className={"font-extrabold text-4xl md:text-6xl text-left"}>
            {article.title.toUpperCase()}
          </h1>
          <span>
            {article.datePublished} | Source: {article.source}
          </span>
          {/* Thumbnail */}
          <img src={article.imgURL} alt={article.title} />
          <figcaption className={"text-center"}>
            Credit: {article.thumbnailCredit}
          </figcaption>
          {article.articleMainDescription}
          {article.body.map((value, key) => (
            <ImageDescription
              title={value.title}
              credit={value.credit}
              imgURL={value.imgURL}
              key={key}>
              {value.description}
            </ImageDescription>
          ))}
        </div>
        {/* Recommended Articles */}
        <div>
          <h4 className={"text-3xl font-bold mb-3"}>RECOMMENDED ARTICLES</h4>
          <div className={"flex flex-col gap-2"}>
            {articles.slice(0, 5).map((value) => (
              <RecommendedArticle title={value.title} slug={value.slug} />
            ))}
          </div>
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
