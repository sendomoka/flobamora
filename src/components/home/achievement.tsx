import komodo from '/images/komodo_dragon_6_by_swordsdragon_dejec0t-fullview.png';
import { motion } from "framer-motion";
import animationData from "../../components/lotties/animation.json";
import Lottie from "react-lottie";
import { useState, useEffect } from 'react';

export function Achievement() {
  const achievements = [
    {
      title: "1st Best in Travel 2020 Competition",
      link: "https://www.youtube.com/watch?v=yG3RowE35sA",
    },
    {
      title: "Wae Rebo Village - UNECSO World Heritage Site 2012",
      link: "https://www.visitsoutheastasia.travel/activity/unesco-top-award-of-excellence-2012-for-wae-rebos-mbaru-niang-traditional-houses-on-flores/",
    },
    {
      title: "Komodo National Park - UNESCO World Heritage Site 1991",
      link: "https://en.unesco.org/biosphere/aspac/komodo",
    },
    {
      title: "Pink Beach - 50 Best Beaches in the World 2019",
      link: "https://en.tempo.co/read/1830832/indonesias-pink-beach-on-komodo-island-among-worlds-best-beaches",
    },
  ];

  interface Position {
    x: number;
    y: number;
  }

  const [initialPositions, setInitialPositions] = useState<Position[]>([]);

  useEffect(() => {
    const positions: { x: number; y: number; }[] = [];
    achievements.forEach(() => {
      positions.push({
        x: Math.random() * 100,
        y: Math.random() * 100 
      });
    });
    
    setInitialPositions(positions);
  }, []);

  const animateDirection = () => {
    const directions = ['left', 'right', 'up', 'down'];
    return directions[Math.floor(Math.random() * directions.length)];
  }

  const transitionDuration = () => {
    return Math.random() * 2 + 1;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
  }
  return (
    <div className="h-screen flex flex-col md:flex-row md:justify-between md:items-end">
      <img src={komodo} alt="komodo" className="sm:w-1/2 h-fit translate-y-[32rem] md:translate-y-0" />
      <div className="-mt-44 sm:-mt-20 md:mt-40 md:w-1/2 md:m-auto p-6">
        <div className="inline-flex justify-center items-center">
          <h1
            className="text-4xl sm:text-6xl"
            style={{
              fontFamily: "Dela Gothic One"
            }}
          >
            Achievement
          </h1>
          <Lottie
            options={defaultOptions}
            height={60}
            width={60}
            isStopped={false}
            isPaused={false}
            style={{ transform: "scale(2.5)", marginLeft: "1rem", paddingTop: "2px" }}
          />
        </div>
        <p className="my-4 opacity-60 text-justify sm:text-left">
          Nusa Tenggara Timur's magnificent beaches, lakes, wildlife, and surf
          breaks have brought it global attention as an eco-tourism hotspot.
          The province continues to earn accolades for its sustainability
          initiatives and wealth of natural attractions.
        </p>
        <div className="sm:ml-80 md:ml-40 mt-10 sm:mt-20">
          <motion.div>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={initialPositions[index]} 
                animate={{
                  x: animateDirection() === 'left' ? -50 : 50,
                  y: animateDirection() === 'up' ? -50 : 50
                }}
                transition={{
                  duration: transitionDuration(),
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
                // @ts-expect-error
                className="w-fit bg-green-800 dark:bg-green-950 text-white p-2 mb-2 rounded-md text-xs hover:bg-green-700 hover:dark:bg-green-700 transition-colors cursor-pointer"
              >
                <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                  {achievement.title}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
