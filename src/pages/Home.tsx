import { FadeColorDividerSection } from "@/components/fade-divider";
import { About } from "@/components/home/about";
import { Hero } from "@/components/home/hero";

const Home = () => {
  return (
    <div class="flex flex-col w-full h-screen">
      <section>
        <Hero />
        <FadeColorDividerSection />
      </section>
      <section>
        <About />
      </section>
    </div>
  );
};

export default Home;
