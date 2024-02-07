import { FadeColorDividerSection } from "@/components/fade-divider";
import { About } from "@/components/home/about";
import GetToKnow from "@/components/home/gettoknow";
import { Hero } from "@/components/home/hero";

const Home = () => {
  return (
    <div class="flex flex-col w-full h-screen text-black dark:text-white">
      <section>
        <Hero />
        <FadeColorDividerSection />
      </section>
      <section>
        <About />
      </section>
      <section>
        <GetToKnow />
      </section>
    </div>
  );
};

export default Home;
