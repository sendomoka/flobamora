import Flicking from "@egjs/preact-flicking";
import "@egjs/preact-flicking/dist/flicking.css";
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
        <Flicking align={"prev"}>
          <div
            className={
              "w-[300px] bg-cover bg-no-repeat h-[600px] flex items-end rounded-3xl mr-6"
            }
            style={{
              backgroundImage: "url('https://cdn.discordapp.com/attachments/1204994105298526220/1210435560251068446/Dana_Englich.jpg?ex=65ea8cf6&is=65d817f6&hm=347a4b337b7f443fe89e9e7dce6efb98a92a04a4ebd98b618dda2452c509dc80&')",
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
              backgroundImage: "url('https://cdn.discordapp.com/attachments/1204994105298526220/1210436773734391869/Jennifer_Polanco.jpg?ex=65ea8e17&is=65d81917&hm=648f269b03894940bbe97da047c4138240f4da8ab0a0ce2c526be50d20794695&')",
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
                "url('https://cdn.discordapp.com/attachments/1204994105298526220/1210437459779788881/wonderful_indonesia.jpg?ex=65ea8ebb&is=65d819bb&hm=65ac2027e4876f5e1c3bcf5e706a75f7acec8b2b223ba778e5a0a9c6bce1d18c&')",
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
              backgroundImage: "url('https://cdn.discordapp.com/attachments/1204994105298526220/1210433947452842075/Wendy_Stevian.jpg?ex=65ea8b75&is=65d81675&hm=b186c410b24db5af3b523d583078d2dc114c8bd01cb1d744bf58d80067f09e71&')",
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
