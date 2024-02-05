import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div class="flex flex-col w-full h-screen">
      <div class=" text-white bg-cover pt-60 brightness-90 pb-96 md:ml-0 bg-hero-1 bg-bottom flex flex-col justify-center items-center gap-2">
        <h1 class="text-left max-w-[851px] text-4xl ml-10 md:ml-0 md:text-center md:text-6xl lg:text-8xl text-balance font-extrabold capitalize sm:leading-tight md:leading-snug lg:leading-tight tracking-wide">
          {t("Explore the enchanting islands of NTT")}
        </h1>
        <div
          className={
            "text-xl max-w-[534px] ml-10 md:ml-0 text-left md:text-center"
          }>
          Pelajari keindahan alam dan kaya budaya Pulau-Pulau Nusa Tenggara
          Timur (NTT) yang memikat. Jelajahi keunikan dan pesona tak terlupakan
          Pulau-Pulau NTT, tempat di mana keajaiban alam dan kearifan budaya
          bersatu harmonis.
        </div>
        <div className="flex justify-center mt-2">
          <Button size={"lg"} variant={"secondary"}>
            <span className={"text-xl"}>{t("Explore")}</span>{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
