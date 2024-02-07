export function About() {
  return (
    <div
      className={
        "h-screen mx-auto flex flex-col justify-center items-center md:flex-row-reverse gap-10"
      }>
      <div className="px-6 sm:px-0 sm:w-5/6 md:w-1/2">
        <span className={"font-semibold text-2xl"}>Informasi Lebih Lanjut</span>
        <h2 className={"font-extrabold text-4xl md:text-6xl mb-3"}>
          Tentang Flobamora
        </h2>
        <p className={"text-justify"}>
          Selamat datang di Flobamora, perjalanan menakjubkan melintasi
          keindahan alam dan keberagaman budaya di Flores, Sumba, Timor, dan
          Alor! Pulau-pulau ini mempesona dengan panorama alam yang menakjubkan
          serta kekayaan warisan budaya yang unik.
        </p>
        <br />
        <p className={"text-justify"}>
          Flobamora, sebuah akronim yang mencerminkan keindahan luar biasa di
          selatan Indonesia, mengajakmu untuk merasakan pesona tak terlupakan.
          Flores, Sumba, Timor, dan Alor menghadirkan kombinasi sempurna antara
          keajaiban alam dan warisan budaya, menciptakan pengalaman wisata yang
          tiada duanya.
        </p>
        <div class={"mt-8"}>
          <button
            className={
              "bg-[#166534] hover:bg-[#19472b] text-white px-3 py-1 rounded-md"
            }>
            Jelajahi Lebih Lanjut Tentang Flobamora
          </button>
        </div>
      </div>
      <img
        src="/svgs/about-komodo.svg"
        className={"w-5/6 sm:max-w-[400px]"}
        alt=""
      />
    </div>
  );
}
