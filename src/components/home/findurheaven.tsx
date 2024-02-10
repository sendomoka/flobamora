import { useState } from "preact/hooks";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function FindYourHeaven() {
  const [open, setOpen] = useState(false);
  return (
    <div className={"md:px-14 lg:px-24 xl:px-80 px-10 py-20"}>
      <div className={"flex flex-col"}>
        <h2
          className={
            "font-extrabold dark:text-white text-2xl sm:text-4xl md:text-6xl md:mb-4 text-center"
          }>
          <span>Find Your Heaven at</span>
          <br />
          <span className={"text-green-main"}>EAST NUSA TENGGARA</span>
        </h2>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: "/images/labuan bajo-bayu-samudro.webp" },
            { src: "/images/pulau alor.webp" },
            { src: "/images/pulau timor.jpg" },
          ]}></Lightbox>
        {/* <div
          className={
            "flex flex-col md:grid md:grid-cols-3 grid-rows-2 place-items-center gap-6"
          }>
          <div
            style={{
              backgroundImage: "url('/images/labuan bajo-bayu-samudro.webp')",
            }}
            className={
              "max-h-[600px] h-[600px] md:row-span-2 rounded-3xl max-w-[352px] w-[352px] bg-cover bg-center"
            }
          />
          <div
            style={{
              backgroundImage: "url('/images/pulau alor.webp')",
            }}
            className={
              "max-h-[294px] h-[294px] md:col-span-2 rounded-3xl max-w-[547px] w-full bg-cover bg-center"
            }
          />
          <div
            style={{
              backgroundImage: "url('/images/pulau timor.jpg')",
            }}
            className={
              "max-h-full h-full md:col-span-2 rounded-3xl bg-cover bg-center max-w-[557px] w-[557px]"
            }
          />
        </div> */}
      </div>
    </div>
  );
}
