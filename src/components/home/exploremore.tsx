import Flicking from "@egjs/preact-flicking";
import "@egjs/preact-flicking/dist/flicking.css";
import "@egjs/preact-flicking/dist/flicking-inline.css";
import { destinations } from "@/data/destinations";

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
        </div>
        <p className={"text-green-main dark:text-white md:w-2/5"}>
          Not sure what to do on your next trip to East Nusa Tenggara? No
          worries. We have gathered a selection of curated destinations from
          different parts of the provience.
        </p>
      </div>
      <div className={"text-white"}>
        <Flicking align={"prev"}>
          {destinations.map((value, key) => {
            return (
              <div className={"flex flex-col gap-8"}>
                <CardDestination
                  imgURL={value.imgURL}
                  mapLink={""}
                  name={value.name}
                  key={key}
                />
              </div>
            );
          })}
        </Flicking>
      </div>
    </div>
  );
}

function CardDestination({
  name,
  mapLink,
  imgURL,
}: {
  name: string;
  mapLink: string;
  imgURL: string;
}) {
  return (
    <a href={mapLink}>
      <div
        className={
          "w-[300px] bg-cover bg-no-repeat h-[600px] flex items-end rounded-3xl mr-6"
        }
        style={{
          backgroundImage: `url('${imgURL}')`,
          backgroundPositionX: "center",
        }}
        role={"presentation"}>
        <h3 className={"text-5xl p-6 font-bold"}>{name}</h3>
      </div>
    </a>
  );
}
