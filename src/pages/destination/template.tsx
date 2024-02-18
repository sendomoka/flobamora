export default function DestinationTemplate() {
  return (
    <div className={"flex flex-col"}>
      <div
        className={
          "h-screen w-full bg-cover bg-[60%_center] flex flex-col gap-3 justify-center items-center text-white-main px-4 text-center"
        }
        style={{
          backgroundImage: `url('/images/Komodo Island/Abimanyu Photowork.jpg')`,
        }}>
        <h1
          className={
            "text-5xl sm:text-6xl font-extrabold md:text-8xl md:w-2/3"
          }>
          <span>Welcome to</span>
          <br />
          <span className={"text-green-main"}>Komodo Island</span>
        </h1>
        <p className={"max-w-3xl"}>
          Komodo Island is one of the islands located in NTT. Komodo Island is
          known as the natural habitat of the Komodo dragon. This island is one
          of the Komodo National Park areas which is managed by the Central
          Government.
        </p>
        <button
          className="relative px-4 py-2 mx-auto mt-4 text-center text-white border rounded-full backdrop-blur-sm bg-emerald-300/10 border-emerald-500/20 hover:bg-emerald-500/40 hover:border-emerald-500/40l"
          style={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>
          <span>Location &nbsp; 𖡡</span>
          <div className="absolute inset-x-0 w-3/4 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        </button>
      </div>
      <div className={"container py-10"}>
        <div
          className={
            "text-black-main dark:text-white-main text-center flex flex-col md:flex-row gap-5"
          }>
          <div>
            <hr className={"max-w-96 border-black border-[1px]"} />
            <h2
              className={
                "text-3xl sm:text-4xl font-extrabold md:text-5xl py-5 text-left"
              }>
              ABOUT <br className={"hidden md:block"} /> KOMODO ISLAND
            </h2>
            <img
              src="/images/Komodo Island/helloflores.com.jpg"
              alt=""
              className={" md:hidden mx-auto"}
            />
            <div className={"text-justify mt-5"}>
              <p>
                Komodo Island named from the famous lizard living on it is the
                biggest island of the Komodo National Park with 390 km2. Located
                at the western part of the park, Komodo is less visited
                than Rinca Island due to its location making it a bit wilder.
                With an estimated population of 1000 dragons living on the
                island, it is slightly less than Rinca. Wild pigs, water
                buffalos, Sumba deers, monkeys, wild horses and many snake
                species are present on the island.
              </p>
              <br />
              <p>
                Komodo is composed of three different type of vegetation with
                savanna all around the coastline covering 70 % of the island,
                monsoon forest with a dry tropical forest located between sea
                level and an altitude of 500 meters and the quasi-cloud forest
                above 500 meters.
              </p>
              <br />
              <p>
                Mount Satalibo is the highest point of Komodo reaching 730
                meters high. Two of the most famous spot of Komodo National Park
                are situated on Komodo, Pink beach and Gili Lawa Darat. A ranger
                station in the small fishermen village of Komodo will welcome
                you to discover the habitat of the Komodo dragons in total
                safety.
              </p>
            </div>
          </div>
          <img
            src="/images/Komodo Island/helloflores.com.jpg"
            alt=""
            className={"max-w-[448px] max-h-[400px] hidden md:block"}
          />
        </div>
        <hr className={"max-w-96 border-black border-[1px] mt-14"} />
        <h2
          className={
            "text-3xl sm:text-4xl font-extrabold md:text-5xl py-5 text-left"
          }>
          RELATED <br className={"hidden md:block"} /> ARTICLES
        </h2>
      </div>
      <div
        className={"h-[80vh] w-fuil bg-cover bg-center"}
        style={{
          backgroundImage: `url('/images/Komodo Island/Swandi Changra.jpg')`,
        }}>
        <div className={"container h-full flex justify-start items-end py-20"}>
          <h4
            className={
              "text-2xl sm:text-3xl font-extrabold md:text-5xl md:w-2/3"
            }>
            10 REASONS TO VISIT THE MAGNIFICENT KOMODO ISLAND
          </h4>
        </div>
      </div>
    </div>
  );
}
