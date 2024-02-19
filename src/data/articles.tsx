type article = {
  title: string;
  slug: string;
  imgURL: string;
  datePublished: string;
  description?: React.ReactNode;
  articleMainDescription: React.ReactNode;
  source: string;
  thumbnailCredit: string;
  body: {
    title: string;
    credit: string;
    imgURL: string;
    description: React.ReactNode;
  }[];
};

const articles: article[] = [
  {
    title: "5 Movies set in Beautiful East Nusa Tenggara",
    datePublished: "February 10, 2024",
    imgURL:
      "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Miles Films _ Humba Dreams.jpeg",
    slug: "5-movies-set-in-beautiful-east-nusa-tenggara",
    source: "Kompas.com",
    thumbnailCredit: "dok. Miles Films / Humba Dreams",
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
    articleMainDescription: (
      <>
        <p>
          East Nusa Tenggara (NTT) is one of Indonesia's provinces that presents
          extraordinary natural beauty. Mention the Komodo Island, Sumba, Flores
          Island, and many more places that can indulge the eyes and mind.
        </p>
        <p>
          Certainly, this natural beauty has been used as the backdrop for
          several films. Whether the story is related or the film promotes the
          beauty of East Nusa Tenggara. The latest ones include the films "Aku
          Rindu" and "Nona Manis Sayange". Here are 10 recommended Indonesian
          films set against the backdrop of the beauty of East Nusa Tenggara.
          Let's take a look!
        </p>
      </>
    ),
    body: [
      {
        title: "1. Labuan Hati (2017)",
        imgURL:
          "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Lola Amaria Production  Labuan Hati.jpeg",
        credit: "dok. Lola Amaria Production Labuan Hati",
        description: (
          <p>
            "Labuan Hati," a film released in 2017, unfolds its captivating
            narrative against the breathtaking backdrop of East Nusa Tenggara
            (NTT). As the story unfolds, viewers are treated to the mesmerizing
            beauty of the region, showcasing iconic destinations like Pulau
            Komodo and Pulau Flores. The film seamlessly integrates the
            enchanting landscapes of NTT into its plot, enhancing the emotional
            resonance of the characters and their journey. Labuan Hati not only
            serves as a cinematic experience but also as a visual love letter to
            the stunning natural wonders of East Nusa Tenggara, leaving the
            audience enchanted by both the compelling storyline and the
            picturesque locales.
          </p>
        ),
      },
      {
        title: "2. Susah Sinyal (2017)",
        credit: "dok. Lola Amaria Production Labuan Hati",
        description: (
          <p>
            "Labuan Hati," a film released in 2017, unfolds its captivating
            narrative against the breathtaking backdrop of East Nusa Tenggara
            (NTT). As the story unfolds, viewers are treated to the mesmerizing
            beauty of the region, showcasing iconic destinations like Pulau
            Komodo and Pulau Flores. The film seamlessly integrates the
            enchanting landscapes of NTT into its plot, enhancing the emotional
            resonance of the characters and their journey. Labuan Hati not only
            serves as a cinematic experience but also as a visual love letter to
            the stunning natural wonders of East Nusa Tenggara, leaving the
            audience enchanted by both the compelling storyline and the
            picturesque locales.
          </p>
        ),
        imgURL:
          "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Starvision Plus  Susah Sinyal.jpeg",
      },
      {
        title: "3. Humba Dreams (2018)",
        credit: "dok. Miles Films / Humba Dreams",
        description: (
          <p>
            "Humba Dreams," released in 2018, is a cinematic ode to the cultural
            richness and natural splendor of East Nusa Tenggara. The film
            immerses viewers in the vibrant traditions and mesmerizing
            landscapes that define the region. From the intricate weaving of
            Sumba's traditional fabrics to the rhythmic beats of indigenous
            music, "Humba Dreams" provides a sensory feast for audiences.
            Against the backdrop of NTT's picturesque scenery, the movie invites
            viewers to explore the profound connection between the characters
            and their surroundings. Through its compelling narrative and
            breathtaking visuals, "Humba Dreams" succeeds in showcasing the
            allure of East Nusa Tenggara, leaving an indelible mark on the
            audience's hearts.
          </p>
        ),
        imgURL:
          "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Miles Films _ Humba Dreams.jpeg",
      },
      {
        title: "4. Kulari Ke Pantai (2018)",
        credit:
          "dok. Miles Films / Kulari ke Pantaidok. Miles Films / Kulari ke Pantaidok. Miles Films / Kulari ke Pantai",
        description: (
          <p>
            "Kulari Ke Pantai," a film released in 2018, unfolds a heartfelt
            story against the stunning coastal landscapes of East Nusa Tenggara.
            The narrative follows the protagonist's journey as they embark on an
            adventure, with the pristine beaches of NTT serving as both a
            metaphorical and literal backdrop. The film captures the essence of
            the coastal communities, portraying the harmonious relationship
            between the characters and the vast ocean. Viewers are treated to
            breathtaking scenes of white sandy beaches, crystal-clear waters,
            and the warm hospitality of the local people. "Kulari Ke Pantai" not
            only tells a compelling tale of self-discovery but also invites the
            audience to fall in love with the coastal wonders of East Nusa
            Tenggara.
          </p>
        ),
        imgURL:
          "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Miles Films  Kulari ke Pantai.jpeg",
      },
      {
        title: "5. Nona Manis Sayange (2023)",
        credit: "dok. Putaar Film / Nona Manis Sayange",
        description: (
          <>
            <p>
              "Nona Manis Sayange," a film released in 2023, continues the
              tradition of showcasing the unparalleled beauty of East Nusa
              Tenggara. The movie unfolds against a backdrop of stunning
              landscapes, featuring the iconic destinations of NTT in all their
              glory. Pulau Komodo, with its mythical dragons, and Pulau Flores,
              adorned with lush greenery, play pivotal roles in the film's
              visual narrative. As the characters navigate through the intricate
              plot, the audience is treated to a visual feast of NTT's diverse
              and captivating scenery. "Nona Manis Sayange" not only narrates a
              compelling story but also serves as a testament to the cinematic
              potential of East Nusa Tenggara, leaving the audience captivated
              by the region's natural wonders.
            </p>
            <p>
              These films collectively contribute to a growing cinematic
              repertoire that not only entertains but also celebrates the
              cultural and natural richness of East Nusa Tenggara. Through
              compelling narratives and breathtaking visuals, each movie invites
              viewers to immerse themselves in the enchanting landscapes and
              cultural tapestry that make NTT a truly remarkable destination.
            </p>
          </>
        ),
        imgURL:
          "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Putaar Film _ Nona Manis Sayange.png",
      },
    ],
  },
  // {
  //   title: "Top 3 Best Beaches in East Nusa Tenggara",
  //   datePublished: "February 9, 2024",
  //   imgURL:
  //     "/images/Articles/TOP 3 BEST BEACHES IN EAST NUSA TENGGARA/@theouterislands.jpg",
  //   slug: "top-3-best-beaches-in-east-nusa-tenggara",
  // },
  // {
  //   title: "5 Reasons to Visit The Magnificent Komodo Island",
  //   datePublished: "February 8, 2024",
  //   imgURL:
  //     "images/Articles/5 REASONS TO VISIT THE MAGNIFICENT KOMODO ISLAND/Swandi Changra.jpg",
  //   slug: "5-reasons-to-visit-the-magnificent-komodo-island",
  // },
  // {
  //   title: "Dive into the Beauty of the Riung 17 Island ",
  //   datePublished: "February 7, 2024",
  //   imgURL:
  //     "/images/Articles/DIVE INTO THE BEAUTY OF THE RIUNG 17 ISLAND/danaanandrew.jpg",
  //   slug: "dive-into-the-beauty-of-the-riung-17-island",
  // },
  // {
  //   title: "Chasing Sunrise in the Sky of Three Colored Lakes",
  //   datePublished: "February 6, 2024",
  //   imgURL:
  //     "/images/Articles/CHASING SUNRISE IN THE SKY OF THE THREE COLORED LAKES/commons.wikimedia.org.jpg",
  //   slug: "chasing-sunrise-in-the-sky-of-three-colored-lakes",
  // },
  // {
  //   title: "Why is the sand of Pink Beach in NTT pink?",
  //   datePublished: "February 5, 2024",
  //   imgURL:
  //     "/images/Articles/WHY IS THE SAND OF PINK BEACH IN NTT PINK_/Agung Adit.jpg",
  //   slug: "why-is-the-sand-of-pink-beach-in-ntt-pink",
  // },
  // {
  //   title: "Wae Rebo Village: Beautiful Indonesian Village",
  //   datePublished: "February 4, 2024",
  //   imgURL:
  //     "/images/Articles/WAE REBO VILLAGE_ BEAUTIFUL TRADISIONAL INDONESIAN VILLAGE/Aniq Lubabul.jpg",
  //   slug: "wae-rebo-village-beautiful-indonesian-village",
  // },
  // {
  //   title: "Stunning: Hiking Activities on Padar Island",
  //   datePublished: "February 3, 2024",
  //   imgURL:
  //     "/images/Articles/STUNNING_ HIKING ACTIVITIES ON PADAR ISLAND/Anton Diaz.jpg",
  //   slug: "stunning-hiking-activities-on-padar-island",
  // },
  // {
  //   title: "The Enchantment of Koka Beach: Stunning Beauty",
  //   datePublished: "February 2, 2024",
  //   imgURL: "/images/Koka Beach/Christopher Moswitzer.jpg",
  //   slug: "the-enchantment-of-koka-beach-stunning-beauty",
  // },
  // {
  //   title: "Kanawa Island: The Charm of an Exotic Island",
  //   datePublished: "February 1, 2024",
  //   imgURL:
  //     "/images/Articles/KANAWA ISLAND_ THE CHARM OF AN EXOTIC ISLAND/Reza Adrianov.jpg",
  //   slug: "kanawa-island-the-charm-of-an-exotic-island",
  // },
];

export { articles };
