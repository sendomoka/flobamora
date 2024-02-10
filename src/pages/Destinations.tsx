import { destinations } from "../data/destinations";

export default function Destinations() {
  return (
    <div className="gap-4 py-24 text-black lg:py-28 dark:text-white">
      <div className={"container flex flex-col gap-10"}>
        <section className={""}>
          <hr className={"border-black border-2 mb-2 max-w-[14.5rem]"} />
          <h1 className={"font-extrabold text-4xl"}>
            EXPLORE ALL <br /> THE DESTINATIONS
          </h1>
        </section>
        <section className={"flex flex-col gap-8"}>
          {destinations.map((value, key) => (
            <CardDestination
              key={key}
              title={value.name}
              description={value.description}
              imgURL={value.imgURL}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

function CardDestination({
  title,
  description,
  imgURL,
}: {
  title: string;
  description: string;
  imgURL: string;
}) {
  return (
    <div
      className={
        "flex flex-col md:flex-row shadow-sm rounded-xl md:h-[250px] shadow-black"
      }>
      <div
        className={
          "md:w-1/3 md:max-w-[375px] h-[250px] bg-cover bg-center md:rounded-l-xl rounded-t-xl md:rounded-tr-none"
        }
        style={{
          backgroundImage: `url('${imgURL}')`,
        }}></div>
      <div className={"md:w-2/3 p-6 flex flex-col gap-4"}>
        <h2 className={"text-3xl font-bold"}>{title}</h2>
        <p>{description}</p>
        <a href="" className={"font-semibold"}>
          Explore More →
        </a>
      </div>
    </div>
  );
}
