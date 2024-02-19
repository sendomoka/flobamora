export default function ImageDescription({
  title,
  imgURL,
  credit,
  children,
}: {
  title: string;
  imgURL: string;
  credit: string;
  children: React.ReactNode;
}) {
  return (
    <div className={"flex flex-col gap-3"}>
      <h2 className={"text-3xl md:text-5xl font-bold text-left mb-3"}>
        {title}
      </h2>
      <img src={imgURL} alt={title} />
      <figcaption className={"text-center"}>Credit: {credit}</figcaption>
      <div className={"space-y-3"}>{children}</div>
    </div>
  );
}
