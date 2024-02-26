import Flicking from "@egjs/preact-flicking";
import "@egjs/preact-flicking/dist/flicking.css";
import "@egjs/preact-flicking/dist/flicking-inline.css";
import { destinations } from "@/data/destinations";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { useRef } from "react"

export default function ExploreMore() {
  const { t } = useTranslation();
  const flicking = useRef<Flicking | null>(null);
  function handlePrevClick() {
    (flicking.current as Flicking)?.prev();
  }
  function handleNextClick() {
    (flicking.current as Flicking)?.next();    
  }
  return (
    <div className={"flex flex-col px-10 xl:px-56 py-10 gap-10"}>
      <div className={"flex flex-col md:flex-row gap-3"}>
        <div className={"md:w-3/5"}>
          <hr
            className={"border-green-main dark:border-white border-2 max-w-96"}
          />
          <h2
            className={
              "uppercase font-extrabold text-green-main dark:text-white text-2xl sm:text-4xl md:text-6xl md:mb-4"
            }>
            {t("Explore More")} <br /> {t("East Nusa Tenggara")}
          </h2>
        </div>
        <p className={"text-green-main dark:text-white md:w-2/5"}>
          {t("Not sure what to do on your next trip to East Nusa Tenggara? No worries. We have gathered a selection of curated destinations from different parts of the provience.")}
        </p>
      </div>
      <div className={"text-white"}>
        <div class="flex justify-end gap-2 -translate-y-4">
          <Button variant="outline" size="icon" onClick={handlePrevClick}>
            <ChevronLeftIcon 
            // @ts-expect-error
            className="size-6" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleNextClick}>
            <ChevronRightIcon 
            // @ts-expect-error
            className="size-6" />
          </Button>
        </div>
        <Flicking align={"prev"} ref={flicking}>
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
  const { t } = useTranslation();
  return (
    <a href={mapLink}>
      <div
        className={
          "group w-[300px] bg-cover bg-no-repeat h-[600px] flex items-end rounded-3xl mr-6 hover:grayscale"
        }
        style={{
          backgroundImage: `url('${imgURL}')`,
          backgroundPositionX: "center",
        }}
        role={"presentation"}>
        <h3 className={"text-5xl p-6 font-bold transition-transform duration-300 group-hover:-translate-y-8"}>
          {t(name)}
        </h3>
      </div>
    </a>
  );
}
