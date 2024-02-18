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
          <button className={"bg-green-main p-[12px] rounded-md"}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
