export default function GetToKnow() {
  return (
    <div
      className={"w-full h-screen left-0 bg-cover bg-center"}
      style={{
        backgroundImage:
          "url('/images/wendy-stevian-Sunset-at-Padar-island.webp')",
      }}>
      <div
        className={
          "absolute w-full min-h-screen left-0 bg-cover bg-center px-10 mx-auto flex flex-col justify-center items-start gap-4 md:gap-7 bg-black/50"
        }>
        <div
          className={
            "sm:px-0 md:w-full xl:w-3/4 flex flex-col md:flex-row md:mx-auto md:justify-between text-[#FAFAFA]"
          }>
          <div className={"flex flex-col justify-center "}>
            <hr className={"border-white border-2 max-w-[27rem]"} />
            <h2
              className={
                "font-extrabold text-2xl sm:text-4xl md:text-6xl md:mb-4"
              }>
              GET TO KNOW <br /> EAST NUSA TENGGARA
            </h2>
            <span className={"font-semibold"}>Explore all articles →</span>
          </div>
          <div className={"hidden md:block md:w-1/3"}>
            Here are a few things to help you get acquainted with this unique
            province in Indonesia, East Nusa Tenggara (NTT).
          </div>
        </div>
        <ArticleCard
          imgURL={"/images/humba-dreams.jpeg"}
          title="10 Movies Set in East Nusa Tenggara"
          description="Of course, this natural beauty has been used as a backdrop for several films. I don't know if the story is related, or the film helps promote the natural beauty of NTT. The latest are the films Aku Rindu and Nona Manis Sayange, here are 10 ..."
        />
        <ArticleCard
          imgURL={"/images/pantai ntt.jpg"}
          title="10 Best Beaches in East Nusa Tenggara"
          description="There is no need to doubt the beauty of the beaches in NTT. Below are recommendations for beautiful beaches in NTT that must be on your holiday list!"
        />
      </div>
    </div>
  );
}

function ArticleCard({
  imgURL,
  title,
  description,
}: {
  imgURL: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className={
        "w-full sm:px-0 md:w-full xl:w-3/4 flex flex-col md:flex-row gap-0 md:gap-1 mx-auto"
      }>
      <img
        src={imgURL}
        height={"200px"}
        className={"max-w-[320px] object-cover"}
        alt=""
      />
      <div
        className={
          " w-full text-white rounded-b-lg flex flex-col gap-1 md:ml-5"
        }>
        <h3 className={"text-xl md:text-4xl font-bold"}>{title}</h3>
        <p className={"hidden md:block w-3/5"}>{description}</p>
        <span className={"font-semibold mt-3 hidden md:block"}>
          Read More →
        </span>
      </div>
    </div>
  );
}
