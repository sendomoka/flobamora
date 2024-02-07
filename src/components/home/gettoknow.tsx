export default function GetToKnow() {
  return (
    <div
      className={"absolute w-full min-h-screen left-0 bg-cover bg-center"}
      style={{
        backgroundImage:
          "url('/images/wendy-stevian-Sunset-at-Padar-island.webp')",
      }}>
      <div
        className={
          "absolute w-full min-h-screen left-0 bg-cover bg-center px-10 mx-auto flex flex-col justify-center items-center gap-4 bg-[#166534]/80"
        }>
        <div className={"sm:px-0 md:w-3/4 flex flex-col md:flex-row"}>
          <div className={"flex flex-col justify-center gap-2 w-4/5"}>
            <hr className={"border-white border w-[320px]"} />
            <h2
              className={
                "font-extrabold text-4xl md:text-6xl mb-3 text-[#FAFAFA]"
              }>
              GET TO KNOW <br /> EAST NUSA TENGGARA
            </h2>
            <div
              className={
                "flex items-center gap-2  text-[#FAFAFA] font-semibold"
              }>
              <span>Explore all articles →</span>
            </div>
          </div>
          <div className={"text-[#FAFAFA]"}>
            Here are a few things to help you get acquainted with this unique
            province in Indonesia, East Nusa Tenggara (NTT).
          </div>
        </div>
        <div
          className={"w-full sm:px-0 md:w-3/4 flex flex-col md:flex-row gap-5"}>
          <div className={"md:w-3/5"}>
            <img
              src={"/images/humba-dreams.jpeg"}
              className={"rounded-t-lg"}></img>
            <div
              className={
                "bg-[#D9D9D9] dark:bg-black/50 w-full text-black dark:text-neutral-50 p-6 rounded-b-lg flex flex-col gap-2"
              }>
              <h3 className={"text-3xl md:text-4xl font-bold"}>
                10 Movies Set in East Nusa Tenggara
              </h3>
              <p>
                Of course, this natural beauty has been used as a backdrop for
                several films. I don't know if the story is related, or the film
                helps promote the natural beauty of NTT. The latest are the
                films Aku Rindu and Nona Manis Sayange, here are 10 ...
              </p>
              <div className={"flex gap-2 items-center"}>
                <span>Read Article →</span>
              </div>
            </div>
          </div>
          <div className={"md:w-2/5 flex flex-col gap-3 justify-between"}>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <button className="py-1 text-white border border-white rounded-md">
              Explore all articles →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard() {
  return (
    <div className={"flex"}>
      <img
        src="/images/pink-beach.jpeg"
        className={"w-1/3 rounded-l-lg"}
        alt=""
      />
      <div className={"w-2/3 bg-[#D9D9D9] dark:bg-black/80 p-3 rounded-r-lg"}>
        <h4 className={"text-2xl font-bold"}>Pink Beach</h4>
      </div>
    </div>
  );
}
