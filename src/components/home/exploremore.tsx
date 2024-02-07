import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e: any) => e.preventDefault();

const items = [
  <div
    className={
      "w-[352px] bg-cover bg-no-repeat h-[600px] flex items-end rounded-3xl mr-48"
    }
    style={{
      backgroundImage: "url('/images/dana-englich-.webp')",
      backgroundPositionX: "75%",
    }}
    onDragStart={handleDragStart}
    role={"presentation"}>
    <h3 className={"text-6xl p-6 font-bold"}>PULAU KOMODO</h3>
  </div>,
  <div
    className={
      "w-[352px] bg-cover bg-no-repeat h-[600px] flex items-end rounded-3xl"
    }
    style={{
      backgroundImage: "url('/images/pexels-jennifer-polanco-3925081.jpg')",
      backgroundPositionX: "center",
    }}
    onDragStart={handleDragStart}
    role={"presentation"}>
    <h3 className={"text-6xl p-6 font-bold"}>PANTAI PINK</h3>
  </div>,
  <div
    className={
      "w-[352px] bg-cover bg-no-repeat h-[600px] flex items-end rounded-3xl"
    }
    style={{
      backgroundImage: "url('/images/1672033802-dji-0222-jpg.jpg')",
      backgroundPositionX: "center",
    }}
    onDragStart={handleDragStart}
    role={"presentation"}>
    <h3 className={"text-6xl p-6 font-bold"}>DANAU KELIMUTU</h3>
  </div>,
  <div
    className={
      "w-[352px] bg-cover bg-no-repeat h-[600px] flex items-end rounded-3xl"
    }
    style={{
      backgroundImage:
        "url('/images/wendy-stevian-Sunset-at-Padar-island.webp')",
      backgroundPositionX: "center",
    }}
    onDragStart={handleDragStart}
    role={"presentation"}>
    <h3 className={"text-6xl p-6 font-bold"}>PULAU PADAR</h3>
  </div>,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

export default function ExploreMore() {
  return (
    <div className={"flex flex-col px-10 md:px-72 py-10 gap-10"}>
      <div className={"flex flex-col md:flex-row gap-3"}>
        <div className={"md:w-3/4"}>
          <hr className={"border-green-main border-2 w-[320px]"} />
          <h2
            className={
              "font-extrabold text-green-main text-2xl sm:text-4xl md:text-6xl md:mb-4"
            }>
            EXPLORE MORE <br /> EAST NUSA TENGGARA
          </h2>
        </div>
        <p className={"text-green-main md:w-3/4"}>
          Not sure what to do on your next trip to East Nusa Tenggara? No
          worries. We have gathered a selection of curated destinations from
          different parts of the provience.
        </p>
      </div>
      <div className={"text-white"}>
        <AliceCarousel
          paddingRight={10}
          mouseTracking={true}
          items={items}
          responsive={responsive}
        />
      </div>
    </div>
  );
}
