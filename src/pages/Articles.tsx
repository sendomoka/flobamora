import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/data/articles";

export default function Articles() {
  const firstArticle = articles[0];
  return (
    <div className={"flex flex-col gap-4"}>
      {/* Header */}
      <div
        className={
          "min-h-[500px] bg-cover bg-center bg-no-repeat w-full flex flex-col justify-center items-center text-center gap-10 px-3"
        }
        style={{
          backgroundImage: `url('https://cdn.discordapp.com/attachments/1204994105298526220/1210435561043525642/Deri_Nazaroni.jpg?ex=65ea8cf6&is=65d817f6&hm=3157b64b5cbc2862bd009e05b752fa241ee52236e33dfbae0f4d22d6f10b0af6&')`,
        }}>
        <h1
          className={
            "font-extrabold text-4xl md:text-6xl xl:text-7xl shadow-xl text-white"
          }>
          Read handpicked articles to get you inspired by East Nusa Tenggara
        </h1>
      </div>
      {/* Latest Articles */}
      <div className={"container py-3"}>
        <div className={"flex flex-col gap-7"}>
          <hr className={"border-black max-w-80 border-[2px] mt-5 mb-2"} />
          <h2 className={"text-5xl font-bold"}>
            LATEST <br />
            ARTICLE
          </h2>
          {/* Featured */}
          <div className={"grid md:grid-cols-2 grid-flow-row gap-7"}>
            <img
              src="https://cdn.discordapp.com/attachments/1204994105298526220/1210384816822812802/dok._Miles_Films___Humba_Dreams.jpeg?ex=65ea5db4&is=65d7e8b4&hm=e39a23a43833d51e4277063bbeeee78ec7ba321503eb0fbf1e0725ca3bebfddb&"
              alt=""
              className={"object-cover rounded-lg"}
            />
            <div className={"flex flex-col justify-between"}>
              <div className={"flex flex-col gap-3"}>
                <span className={"text-black-main"}>
                  {firstArticle.datePublished}
                </span>
                <h3 className={"font-bold text-4xl"}>
                  {firstArticle.title.toUpperCase()}
                </h3>
                {firstArticle.description?.map((value, key) => (
                  <p key={key} className={"text-justify"}>
                    {value}
                  </p>
                ))}
              </div>
              <a href={`/articles/${firstArticle.slug}`}>
                <button
                  className={
                    "text-green-main rounded-3xl py-2 px-4 w-fit bg-green-main/20 font-semibold hover:text-white-main hover:bg-green-main"
                  }>
                  Read More
                </button>
              </a>
            </div>
          </div>
          <div
            className={
              "grid aclgrid:grid-cols-2 md:grid-cols-3 grid-flow-row gap-7"
            }>
            {articles.map((value) => {
              if (value.slug !== "5-movies-set-in-beautiful-east-nusa-tenggara")
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
    </div>
  );
}
