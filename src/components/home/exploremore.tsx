import Flicking from "@egjs/preact-flicking";
import "@egjs/preact-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/preact-flicking/dist/flicking-inline.css";

export default function ExploreMore() {
  return (
    <div className={"flex flex-col px-10 xl:px-72 py-10 gap-10"}>
      <div className={"flex flex-col md:flex-row gap-3"}>
        <div className={"md:w-3/5"}>
          <hr
            className={"border-green-main dark:border-white border-2 max-w-96"}
          />
          <h2
            className={
              "font-extrabold text-green-main dark:text-white text-2xl sm:text-4xl md:text-6xl md:mb-4"
            }>
            EXPLORE MORE <br /> EAST NUSA TENGGARA
          </h2>
          <h5 className={"font-semibold"}>
            <a href={"/destinations"}>Explore all destinations →</a>
          </h5>
        </div>
        <p className={"text-green-main dark:text-white md:w-2/5"}>
          Not sure what to do on your next trip to East Nusa Tenggara? No
          worries. We have gathered a selection of curated destinations from
          different parts of the provience.
        </p>
      </div>
      <div className={"text-white"}>
        <Flicking
          align={"prev"}
          onMoveEnd={(e) => {
            console.log(e);
          }}>
          <div
            className={
              "w-[300px] bg-cover bg-no-repeat h-[600px] flex items-end rounded-3xl mr-6"
            }
            style={{
              backgroundImage: "url('/images/Komodo Island/Dana Englich.jpg')",
              backgroundPositionX: "75%",
            }}
            role={"presentation"}>
            <h3 className={"text-5xl p-6 font-bold"}>PULAU KOMODO</h3>
          </div>
          <div
            className={
              "w-[300px] bg-cover bg-no-repeat h-[600px] flex items-end rounded-3xl mr-6"
            }
            style={{
              backgroundImage: "url('/images/Pink Beach/Jennifer Polanco.jpg')",
              backgroundPositionX: "center",
            }}
            role={"presentation"}>
            <h3 className={"text-5xl p-6 font-bold"}>PANTAI PINK</h3>
          </div>
          <div
            className={
              "w-[300px] bg-cover bg-no-repeat h-[600px] flex items-end rounded-3xl mr-6"
            }
            style={{
              backgroundImage:
                "url('/images/Lakes of Mount Kelimutu/wonderful indonesia.jpg')",
              backgroundPositionX: "center",
            }}
            role={"presentation"}>
            <h3 className={"text-5xl p-6 font-bold"}>DANAU KELIMUTU</h3>
          </div>
          <div
            className={
              "w-[300px] bg-cover bg-no-repeat h-[600px] flex items-end rounded-3xl mr-6"
            }
            style={{
              backgroundImage: "url('/images/Padar Island/Wendy Stevian.jpg')",
              backgroundPositionX: "center",
            }}
            role={"presentation"}>
            <h3 className={"text-5xl p-6 font-bold"}>PULAU PADAR</h3>
          </div>
        </Flicking>
      </div>
    </div>
  );
}
