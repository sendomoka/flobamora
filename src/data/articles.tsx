type article = {
  title: string;
  slug: string;
  imgURL: string;
  datePublished: string;
  description?: React.ReactNode;
};

const articles: article[] = [
  {
    title: "5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA",
    datePublished: "February 10, 2024",
    imgURL:
      "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Miles Films _ Humba Dreams.jpeg",
    slug: "5-movies-set-in-beautiful-east-nusa-tenggara",
    description: (
      <>
        <p>
          Of course, this natural beauty has been used as a backdrop for several
          films. I don't know if the story is related, or the film helps promote
          the natural beauty of NTT. The latest are the films Aku Rindu and Nona
          Manis Sayange. Here are 10 captivating movies set in East Nusa
          Tenggara.
        </p>
        <p>
          These films not only showcase the stunning landscapes but also capture
          the unique culture and stories of the region. From the picturesque
          shores of Riung 17 Island to the mystical Kelimutu, these movies ...
        </p>
      </>
    ),
  },
  {
    title: "Top 3 Best Beaches in East Nusa Tenggara",
    datePublished: "February 9, 2024",
    imgURL:
      "/images/Articles/TOP 3 BEST BEACHES IN EAST NUSA TENGGARA/@theouterislands.jpg",
    slug: "top-3-best-beaches-in-east-nusa-tenggara",
  },
  {
    title: "5 Reasons to Visit The Magnificent Komodo Island",
    datePublished: "February 8, 2024",
    imgURL:
      "images/Articles/5 REASONS TO VISIT THE MAGNIFICENT KOMODO ISLAND/Swandi Changra.jpg",
    slug: "5-reasons-to-visit-the-magnificent-komodo-island",
  },
  {
    title: "Dive into the Beauty of the Riung 17 Island ",
    datePublished: "February 7, 2024",
    imgURL:
      "/images/Articles/DIVE INTO THE BEAUTY OF THE RIUNG 17 ISLAND/danaanandrew.jpg",
    slug: "dive-into-the-beauty-of-the-riung-17-island",
  },
  {
    title: "Chasing Sunrise in the Sky of Three Colored Lakes",
    datePublished: "February 6, 2024",
    imgURL:
      "/images/Articles/CHASING SUNRISE IN THE SKY OF THE THREE COLORED LAKES/commons.wikimedia.org.jpg",
    slug: "chasing-sunrise-in-the-sky-of-three-colored-lakes",
  },
  {
    title: "Why is the sand of Pink Beach in NTT pink?",
    datePublished: "February 5, 2024",
    imgURL:
      "/images/Articles/WHY IS THE SAND OF PINK BEACH IN NTT PINK_/Agung Adit.jpg",
    slug: "why-is-the-sand-of-pink-beach-in-ntt-pink",
  },
  {
    title: "Wae Rebo Village: Beautiful Indonesian Village",
    datePublished: "February 4, 2024",
    imgURL:
      "/images/Articles/WAE REBO VILLAGE_ BEAUTIFUL TRADISIONAL INDONESIAN VILLAGE/Aniq Lubabul.jpg",
    slug: "wae-rebo-village-beautiful-indonesian-village",
  },
  {
    title: "Stunning: Hiking Activities on Padar Island",
    datePublished: "February 3, 2024",
    imgURL:
      "/images/Articles/STUNNING_ HIKING ACTIVITIES ON PADAR ISLAND/Anton Diaz.jpg",
    slug: "stunning-hiking-activities-on-padar-island",
  },
  {
    title: "The Enchantment of Koka Beach: Stunning Beauty",
    datePublished: "February 2, 2024",
    imgURL: "/images/Koka Beach/Christopher Moswitzer.jpg",
    slug: "the-enchantment-of-koka-beach-stunning-beauty",
  },
  {
    title: "Kanawa Island: The Charm of an Exotic Island",
    datePublished: "February 1, 2024",
    imgURL:
      "/images/Articles/KANAWA ISLAND_ THE CHARM OF AN EXOTIC ISLAND/Reza Adrianov.jpg",
    slug: "kanawa-island-the-charm-of-an-exotic-island",
  },
];

export { articles };
