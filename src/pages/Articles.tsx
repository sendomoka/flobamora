import ArticleCard from "@/components/articles/ArticleCard";
import { articles } from "@/data/articles";

export default function Articles() {
  return (
    <div className={"flex flex-col gap-4"}>
      {/* Header */}
      <div
        className={
          "min-h-[500px] bg-cover bg-center bg-no-repeat w-full flex flex-col justify-center items-center text-center gap-10 px-3"
        }
        style={{
          backgroundImage: `url('/images/Komodo Island/Deri Nazaroni.jpg')`,
        }}>
        <h1
          className={
            "font-extrabold text-4xl md:text-6xl xl:text-7xl shadow-xl text-white"
          }>
          Find Articles Effortlessly and Swiftly
        </h1>
        <div className={"flex gap-3 w-full mx-3 justify-center md:w-3/5"}>
          <div
            className={
              "flex gap-1 bg-white px-[12px] py-[6px] rounded-md w-full"
            }>
            <img src="/svgs/search.svg" width={"16"} height={"16"} alt="" />
            <input
              type="text"
              name="search"
              id="search"
              className={"text-black px-3 w-full outline-none"}
              placeholder={
                "Search for articles based on title, destination, topic"
              }
            />
          </div>
          <button className={"bg-green-main p-[12px] rounded-md text-white"}>
            Search
          </button>
        </div>
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
              src="/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Miles Films _ Humba Dreams.jpeg"
              alt=""
              className={"object-cover rounded-lg"}
            />
            <div className={"flex flex-col justify-between"}>
              <div className={"flex flex-col gap-3"}>
                <span className={"text-black-main"}>February 10, 2024</span>
                <h3 className={"font-bold text-4xl"}>
                  5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA
                </h3>
                <p className={"text-justify"}>
                  Of course, this natural beauty has been used as a backdrop for
                  several films. I don't know if the story is related, or the
                  film helps promote the natural beauty of NTT. The latest are
                  the films Aku Rindu and Nona Manis Sayange. Here are 10
                  captivating movies set in East Nusa Tenggara.
                </p>
                <p className={"text-justify"}>
                  These films not only showcase the stunning landscapes but also
                  capture the unique culture and stories of the region. From the
                  picturesque shores of Riung 17 Island to the mystical
                  Kelimutu, these movies ...
                </p>
              </div>
              <button
                className={
                  "text-green-main rounded-3xl py-2 px-4 w-fit bg-green-main/20 font-semibold hover:text-white-main hover:bg-green-main"
                }>
                Read More
              </button>
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
