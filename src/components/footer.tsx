import { useTheme } from "./theme-provider";
import logodark from "/svgs/logo-dark.svg";
import logolight from "/svgs/logo-light.svg";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <div className={"container"}>
      <div className={"grid md:grid-cols-4 md:grid-rows-none mb-10"}>
        <div className={"flex flex-col items-start gap-5"}>
          <a href="/" class="flex items-center mx-auto">
            <img
              src={theme === "dark" ? logodark : logolight}
              alt="logo"
              width={75}
            />
            <h3 class="uppercase text-2xl font-bold">flobamora</h3>
          </a>
          <div
            className={
              "flex flex-col w-full items-center justify-center text-4xl font-extrabold"
            }>
            <div>15:03</div>
            <div>WITA</div>
          </div>
        </div>
        <div className={"p-4 flex flex-col gap-3"}>
          <h4 className={"font-bold text-lg"}>Flobamora</h4>
          <div>
            <div>Home</div>
            <div>About</div>
            <div>Destinations</div>
            <div>Articles</div>
          </div>
        </div>
        <div className={"p-4 flex flex-col gap-3"}>
          <h4 className={"font-bold text-lg"}>Sumber Data</h4>
          <div>
            <div>Detik.com</div>
            <div>Wikipedia</div>
            <div>Indonesia Travel</div>
            <div>Kompas.com</div>
            <div>tripadvisor.co.id</div>
            <div>gotravelaindonesia.com</div>
          </div>
        </div>
        <div className={"p-4 flex flex-col gap-3"}>
          <h4 className={"font-bold text-lg"}>Tentang Kita</h4>
          <div>
            <div>Jehian Athaya Tsani Az Zuhry</div>
            <div>Dzakwan Irfan Ramdhani</div>
            <div>Panky Bintang Pradana Yosua</div>
          </div>
        </div>
      </div>
      <hr className={"w-full border-black"} />
      <div className={"mx-auto text-center py-10"}>
        Copyright 2024 Flobamora | All rights reserved
      </div>
    </div>
  );
}
