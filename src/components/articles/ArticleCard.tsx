export default function ArticleCard({
  imgURL,
  datePublished,
  title,
  slug,
}: {
  imgURL: string;
  datePublished: string;
  title: string;
  slug: string;
}) {
  return (
    <div className={"flex flex-col gap-5"}>
      <div className={"flex flex-col gap-1"}>
        <img src={imgURL} alt="" className={"rounded-xl h-[250px]"} />
        <span>{datePublished}</span>
        <h4 className={"font-bold text-3xl"}>{title}</h4>
      </div>
      <a href={`/articles/${slug}`} className={"text-green-main"}>
        Explore More →
      </a>
    </div>
  );
}
