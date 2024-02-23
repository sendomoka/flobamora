import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from "react";

export function Achievement() {
  const { t } = useTranslation();
  const achievements = [
    {
      title: t("1st Best in Travel 2020 Competition"),
      desc: t("The Ministry of Tourism and Creative Economy of the Republic of Indonesia has won the 1st Best in Travel 2020 competition in the category of Best Destination for Sustainable Tourism Development."),
      link: "https://www.youtube.com/watch?v=yG3RowE35sA",
    },
    {
      title: t("Wae Rebo Village - UNECSO World Heritage Site 2012"),
      desc: t("Wae Rebo Village is a traditional village located in the Manggarai Regency, East Nusa Tenggara. It is a UNESCO World Heritage Site 2012."),
      link: "https://www.visitsoutheastasia.travel/activity/unesco-top-award-of-excellence-2012-for-wae-rebos-mbaru-niang-traditional-houses-on-flores/",
    },
    {
      title: t("Komodo National Park - UNESCO World Heritage Site 1991"),
      desc: t("Komodo National Park is a national park in Indonesia located within the Lesser Sunda Islands in the border region between the provinces of East Nusa Tenggara and West Nusa Tenggara."),
      link: "https://en.unesco.org/biosphere/aspac/komodo",
    },
    {
      title: t("Pink Beach - 50 Best Beaches in the World 2019"),
      desc: t("Pink Beach is one of the best beaches in the world. It is located in Komodo National Park, East Nusa Tenggara."),
      link: "https://en.tempo.co/read/1830832/indonesias-pink-beach-on-komodo-island-among-worlds-best-beaches",
    },
  ];
  const [leafTlX, setleafTlX] = useState('-26rem');
  const [leafTlY, setleafTlY] = useState('9rem');
  const [earthTlX, setearthTlX] = useState('-13rem');
  const [earthTlY, setearthTlY] = useState('26rem');
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setleafTlX('-20rem');
        setleafTlY('6rem');
        setearthTlX('-8rem');
        setearthTlY('20rem');
      } else {
        setleafTlX('-26rem');
        setleafTlY('9rem');
        setearthTlX('-13rem');
        setearthTlY('26rem');
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const altEarth = t("earth-en");
  let srcEarth;
  if (altEarth === "earth-en") {
    srcEarth = "https://cdn.discordapp.com/attachments/1204994105298526220/1210381673896878160/earth-en.png?ex=65ea5ac6&is=65d7e5c6&hm=cfddd07f71a45177132781c6ffbc38f619896d1144b3aa16c3bfcc995e06b802&"
  } else if (altEarth === "earth-id") {
    srcEarth = "https://cdn.discordapp.com/attachments/1204994105298526220/1210381674508984371/earth-id.png?ex=65ea5ac7&is=65d7e5c7&hm=850b75be8d32adbebeb326d49e643a1867359d730265177ebeda30d7e891f081&"
  }
  const altWave = t("wave-en");
  let srcWave;
  if (altWave === "wave-en") {
    srcWave = "https://cdn.discordapp.com/attachments/1204994105298526220/1210381672466616330/wave-en.png?ex=65ea5ac6&is=65d7e5c6&hm=97c9858e9293814d4b3d1a658fe8329ac64453ea5edd0a7798d0bb6e6c042653&"
  } else if (altWave === "wave-id") {
    srcWave = "https://cdn.discordapp.com/attachments/1204994105298526220/1210381672990769202/wave-id.png?ex=65ea5ac6&is=65d7e5c6&hm=66afe3f26cc808d484bfb2e1b876add35aa5b513f7051dd3f13242330cc4ff5d&"
  }
  const altLeaf = t("leaf-en");
  let srcLeaf;
  if (altLeaf === "leaf-en") {
    srcLeaf = "https://cdn.discordapp.com/attachments/1204994105298526220/1210381671472304168/leaf-en.png?ex=65ea5ac6&is=65d7e5c6&hm=234e40f6f289e29f718a119ab8c6020a38300ab71a06d68f06be0da92e63873e&"
  } else if (altLeaf === "leaf-id") {
    srcLeaf = "https://cdn.discordapp.com/attachments/1204994105298526220/1210381672017821696/leaf-id.png?ex=65ea5ac6&is=65d7e5c6&hm=65319c297d3842a45566c3767683207c344c2890c9777da336fea26c15ecba7f&"
  }
  return (
    <div class="h-screen flex flex-col lg:flex-row justify-center items-center mt-96 md:mt-[30rem] lg:mt-10">
      <div class="lg:w-1/2 flex justify-end lg:-translate-x-10 xl:-translate-x-32 scale-75 md:scale-100 lg:scale-75 xl:scale-100">
        <img src="https://cdn.discordapp.com/attachments/1204994105298526220/1210381671032037376/komodo.png?ex=65ea5ac6&is=65d7e5c6&hm=7d18c9588c8f1cbbc95c42e8ea50191d9ba3f9c172f9a53c360b6936ad09b11b&" alt="komodo" class="w-[30rem] h-fit z-0" />
        <motion.div
          style={{
            position: "absolute",
            width: "7rem",
            zIndex: 10,
            translateX: earthTlX,
            translateY: earthTlY
          }}
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={srcEarth} alt={altEarth} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: "7rem",
            zIndex: 10,
            translateX: leafTlX,
            translateY: leafTlY
          }}
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={srcLeaf} alt={altLeaf} />
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: "7rem",
            zIndex: 10,
            translateX: "-5rem",
            translateY: "-2rem"
          }}
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={srcWave} alt={altWave} />
        </motion.div>
      </div>
      <div class="lg:w-1/2 pt-10 md:pt-32 lg:pt-0 pb-96 lg:pb-0 px-4 md:px-10 lg:px-0 lg:pr-20 xl:pr-0">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
          style={{
            fontFamily: "Dela Gothic One",
          }}>
          {t("Achievement")}
        </h1>
        <p className="my-4 text-justify opacity-60 sm:text-left xl:w-[40rem]">
          {t("East Nusa Tenggara's magnificent beaches, nature, wildlife, and surf breaks have brought it global attention as an eco-tourism hotspot. We continues to earn accolades for its sustainability initiatives and wealth of natural attractions.")}
        </p>
        <Accordion type="single" collapsible className="xl:w-[40rem] opacity-80">
          {achievements.map((achievement, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <b class="text-left">{achievement.title}</b>
              </AccordionTrigger>
              <AccordionContent>
                <p>{achievement.desc}</p>
                <a href={achievement.link} target="_blank" rel="noreferrer" class="text-emerald-500 hover:underline">
                  {t("More")}
                </a>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}