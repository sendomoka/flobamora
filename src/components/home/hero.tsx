import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/image-slider";
import { useTranslation } from "react-i18next";
import "@fontsource/dela-gothic-one";

export function Hero() {
  const images = [
    "https://cdn.discordapp.com/attachments/1204994105298526220/1210433942033932330/Denissa_Devy.jpg?ex=65ea8b74&is=65d81674&hm=2b5968fdc5155614ff8d712c5781849ff4d656fcff4675c7e16ead7895675de7&",
    "https://cdn.discordapp.com/attachments/1204994105298526220/1210433945221595166/Fajruddin_Mudzakkir.jpg?ex=65ea8b75&is=65d81675&hm=02bbb76c378264fd72fc27270f799c498093f8244d5752c1d730ebce5cbb3d36&",
    "https://cdn.discordapp.com/attachments/1204994105298526220/1210435562822180984/Iqx_Azmi.jpg?ex=65ea8cf6&is=65d817f6&hm=1dab0f8c6cd5ff7d46fc9527d029cd570c3cf95aa6c99980c29b420487cc8b32&",
  ];
  const { t } = useTranslation();
  const title = t("Explore the enchanting islands of NTT");
  const formattedTitle = title.replace(
    "NTT",
    "<span class='text-emerald-500'>NTT</span>"
  );
  const description = t(
    "The islands of East Nusa Tenggara hold captivating natural charm and rich culture. Explore the unique and unforgettable attractions of the islands in NTT. There you will find spectacular natural wonders harmoniously combined with cultural heritage full of local wisdom."
  );
  const formattedDescription = description
    .replace(
      "East Nusa Tenggara",
      "<span class='text-emerald-500 font-bold'>East Nusa Tenggara</span>"
    )
    .replace(
      "Nusa Tenggara Timur",
      "<span class='text-emerald-500 font-bold'>Nusa Tenggara Timur</span>"
    )
    .replace("NTT", "<span class='text-emerald-500 font-bold'>NTT</span>");
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        // @ts-expect-error
        className="z-50 flex flex-col items-center justify-center">
        <motion.p
          // @ts-expect-error
          className="pt-10 pb-2 text-4xl text-center text-white capitalize sm:text-6xl lg:text-7xl xl:text-8xl md:w-2/3"
          style={{
            fontFamily: "Dela Gothic One",
            textShadow: "5px 5px 0px rgba(0, 0, 0, 0.5)",
          }}>
          <span dangerouslySetInnerHTML={{ __html: formattedTitle }} />
        </motion.p>
        <motion.p
          // @ts-expect-error
          className="hidden w-11/12 pb-2 text-center text-white sm:flex lg:w-4/6 xl:w-1/2"
          style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 0.5)" }}>
          <span dangerouslySetInnerHTML={{ __html: formattedDescription }} />
        </motion.p>
        <button
          className="relative px-4 py-2 mx-auto mt-4 text-center text-white border rounded-full backdrop-blur-sm bg-emerald-300/10 border-emerald-500/20 hover:bg-emerald-500/40 hover:border-emerald-500/40l"
          style={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>
          <span>{t("Explore Now")} →</span>
          <div className="absolute inset-x-0 w-3/4 h-px mx-auto -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
