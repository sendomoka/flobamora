import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/image-slider";
import { useTranslation } from "react-i18next";
import '@fontsource/dela-gothic-one'

export function Hero() {
    const images = [
        "/images/denissa-devy-Padar-islan.webp",
        "/images/fajruddin-mudzakkir-Padar-islan.webp",
        "/images/iqx-azmi-.webp",
    ]
    const { t } = useTranslation();
    const title = t("Explore the enchanting islands of NTT");
    const formattedTitle = title.replace("NTT", "<span class='text-emerald-500'>NTT</span>")
    const description = t("The islands of East Nusa Tenggara hold captivating natural charm and rich culture. Explore the unique and unforgettable attractions of the islands in NTT. There you will find spectacular natural wonders harmoniously combined with cultural heritage full of local wisdom.");
    const formattedDescription = description
        .replace("East Nusa Tenggara", "<span class='text-emerald-500 font-bold'>East Nusa Tenggara</span>")
        .replace("Nusa Tenggara Timur", "<span class='text-emerald-500 font-bold'>Nusa Tenggara Timur</span>")
        .replace("NTT", "<span class='text-emerald-500 font-bold'>NTT</span>")
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
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p
                    // @ts-expect-error
                    className="text-4xl capitalize sm:text-6xl md:text-8xl text-center text-white md:w-2/3 pt-10 pb-2"
                    style={{ fontFamily: "Dela Gothic One", textShadow: "5px 5px 0px rgba(0, 0, 0, 0.5)" }}
                >
                    <span dangerouslySetInnerHTML={{ __html: formattedTitle }} />
                </motion.p>
                <motion.p
                    // @ts-expect-error
                    className="hidden sm:flex text-center text-white w-11/12 md:w-1/2 pb-2"
                    style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 0.5)" }}
                >
                    <span dangerouslySetInnerHTML={{ __html: formattedDescription }} />
                </motion.p>
                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hover:bg-emerald-500/40 hover:border-emerald-500/40l" style={{ boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}>
                    <span>Explore now →</span>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
            </motion.div>
        </ImagesSlider>
    );
}