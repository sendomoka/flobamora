type article = {
  title: string;
  slug: string;
  imgURL: string;
  datePublished: string;
  description?: string[];
  articleMainDescription: string[];
  source?: string;
  thumbnailCredit: string;
  body?: {
    title?: string;
    credit?: string;
    imgURL?: string;
    description?: string[];
  }[];
};

const articles: article[] = [
  {
    title: "5 Movies set in Beautiful East Nusa Tenggara",
    datePublished: "February 10, 2024",
    imgURL:
      "https://cdn.discordapp.com/attachments/1204994105298526220/1210384816822812802/dok._Miles_Films___Humba_Dreams.jpeg?ex=65ea5db4&is=65d7e8b4&hm=e39a23a43833d51e4277063bbeeee78ec7ba321503eb0fbf1e0725ca3bebfddb&",
    slug: "5-movies-set-in-beautiful-east-nusa-tenggara",
    source: "Kompas.com",
    thumbnailCredit: "dok. Miles Films / Humba Dreams",
    description: [
      "Of course, this natural beauty has been used as a backdrop for several films. I don't know if the story is related, or the film helps promote the natural beauty of NTT. The latest are the films Aku Rindu and Nona Manis Sayange. Here are 10 captivating movies set in East Nusa Tenggara.",
      "These films not only showcase the stunning landscapes but also capture the unique culture and stories of the region. From the picturesque shores of Riung 17 Island to the mystical Kelimutu, these movies ...",
    ],
    articleMainDescription: [
      "East Nusa Tenggara (NTT) is one of Indonesia's provinces that presents extraordinary natural beauty. Mention the Komodo Island, Sumba, Flores Island, and many more places that can indulge the eyes and mind.",
      'Certainly, this natural beauty has been used as the backdrop for several films. Whether the story is related or the film promotes the beauty of East Nusa Tenggara. The latest ones include the films "Aku Rindu" and "Nona Manis Sayange". Here are 10 recommended Indonesian films set against the backdrop of the beauty of East Nusa Tenggara. Let\'s take a look!',
    ],
    body: [
      {
        title: "1. Labuan Hati (2017)",
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210384815958794290/dok._Lola_Amaria_Production_Labuan_Hati.jpeg?ex=65ea5db3&is=65d7e8b3&hm=7ce9ea58fd3372cce344eb04a6209dc5c1907675e5a09ac0f0f5caf4e4ce0340&",
        credit: "dok. Lola Amaria Production Labuan Hati",
        description: [
          '"Labuan Hati," a film released in 2017, unfolds its captivating narrative against the breathtaking backdrop of East Nusa Tenggara (NTT). As the story unfolds, viewers are treated to the mesmerizing beauty of the region, showcasing iconic destinations like Pulau Komodo and Pulau Flores. The film seamlessly integrates the enchanting landscapes of NTT into its plot, enhancing the emotional resonance of the characters and their journey. Labuan Hati not only serves as a cinematic experience but also as a visual love letter to the stunning natural wonders of East Nusa Tenggara, leaving the audience enchanted by both the compelling storyline and the picturesque locales. ',
        ],
      },
      {
        title: "2. Susah Sinyal (2017)",
        credit: "dok. Lola Amaria Production Labuan Hati",
        description: [
          `"Labuan Hati," a film released in 2017, unfolds its captivating narrative against the breathtaking backdrop of East Nusa Tenggara (NTT). As the story unfolds, viewers are treated to the mesmerizing beauty of the region, showcasing iconic destinations like Pulau Komodo and Pulau Flores. The film seamlessly integrates the enchanting landscapes of NTT into its plot, enhancing the emotional resonance of the characters and their journey. Labuan Hati not only serves as a cinematic experience but also as a visual love letter to the stunning natural wonders of East Nusa Tenggara, leaving the audience enchanted by both the compelling storyline and the picturesque locales.`,
        ],
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210384817779245116/dok._Starvision_Plus_Susah_Sinyal.jpeg?ex=65ea5db4&is=65d7e8b4&hm=1982e41d1125a1f0dc32fc8971aaf4ad7ac9dd6f01530b95626f5ec9c43c53cc&",
      },
      {
        title: "3. Humba Dreams (2018)",
        credit: "dok. Miles Films / Humba Dreams",
        description: [
          `"Humba Dreams," released in 2018, is a cinematic ode to the cultural richness and natural splendor of East Nusa Tenggara. The film immerses viewers in the vibrant traditions and mesmerizing landscapes that define the region. From the intricate weaving of Sumba's traditional fabrics to the rhythmic beats of indigenous music, "Humba Dreams" provides a sensory feast for audiences. Against the backdrop of NTT's picturesque scenery, the movie invites viewers to explore the profound connection between the characters and their surroundings. Through its compelling narrative and breathtaking visuals, "Humba Dreams" succeeds in showcasing the allure of East Nusa Tenggara, leaving an indelible mark on the audience's hearts.`,
        ],
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210384816822812802/dok._Miles_Films___Humba_Dreams.jpeg?ex=65ea5db4&is=65d7e8b4&hm=e39a23a43833d51e4277063bbeeee78ec7ba321503eb0fbf1e0725ca3bebfddb&",
      },
      {
        title: "4. Kulari Ke Pantai (2018)",
        credit:
          "dok. Miles Films / Kulari ke Pantaidok. Miles Films / Kulari ke Pantaidok. Miles Films / Kulari ke Pantai",
        description: [
          `"Kulari Ke Pantai," a film released in 2018, unfolds a heartfelt story against the stunning coastal landscapes of East Nusa Tenggara. The narrative follows the protagonist's journey as they embark on an adventure, with the pristine beaches of NTT serving as both a metaphorical and literal backdrop. The film captures the essence of the coastal communities, portraying the harmonious relationship between the characters and the vast ocean. Viewers are treated to breathtaking scenes of white sandy beaches, crystal-clear waters, and the warm hospitality of the local people. "Kulari Ke Pantai" not only tells a compelling tale of self-discovery but also invites the audience to fall in love with the coastal wonders of East Nusa Tenggara.`,
        ],
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210384816407846972/dok._Miles_Films_Kulari_ke_Pantai.jpeg?ex=65ea5db4&is=65d7e8b4&hm=df799b3473a42abfc9ce1be773e8f5277e6d805bd8c780ede0bba0da6183733f&",
      },
      {
        title: "5. Nona Manis Sayange (2023)",
        credit: "dok. Putaar Film / Nona Manis Sayange",
        description: [
          `"Nona Manis Sayange," a film released in 2023, continues the tradition of showcasing the unparalleled beauty of East Nusa Tenggara. The movie unfolds against a backdrop of stunning landscapes, featuring the iconic destinations of NTT in all their glory. Pulau Komodo, with its mythical dragons, and Pulau Flores, adorned with lush greenery, play pivotal roles in the film's visual narrative. As the characters navigate through the intricate plot, the audience is treated to a visual feast of NTT's diverse and captivating scenery. "Nona Manis Sayange" not only narrates a compelling story but also serves as a testament to the cinematic potential of East Nusa Tenggara, leaving the audience captivated by the region's natural wonders.`,
          `These films collectively contribute to a growing cinematic repertoire that not only entertains but also celebrates the cultural and natural richness of East Nusa Tenggara. Through compelling narratives and breathtaking visuals, each movie invites viewers to immerse themselves in the enchanting landscapes and cultural tapestry that make NTT a truly remarkable destination.`,
        ],
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210384817250770965/dok._Putaar_Film___Nona_Manis_Sayange.png?ex=65ea5db4&is=65d7e8b4&hm=a4997fbb830a7284e8a77e71e294b2203858e789689b53d1ee0d843dd0d0fc83&",
      },
    ],
  },
  {
    title: "Top 3 Best Beaches in East Nusa Tenggara",
    datePublished: "February 9, 2024",
    imgURL:
      "https://cdn.discordapp.com/attachments/1204994105298526220/1210387177855385650/theouterislands.jpg?ex=65ea5fe7&is=65d7eae7&hm=df1ef8f14c5cdbf2bd6ce6df31ec173f96cad7cb8ed6bcbbafa025d803c79d38&",
    slug: "top-3-best-beaches-in-east-nusa-tenggara",
    source: "",
    thumbnailCredit: "@theouterislands",
    articleMainDescription: [
      `Welcome to the unforgettable natural exoticism of Indonesia! This article will take you through the beauty of three of the best beaches in East Nusa Tenggara, places where natural charm and cultural richness come together in perfect harmony. East Nusa Tenggara, with its extraordinary natural wealth, presents an unforgettable holiday experience for visitors. From clean white sand to clear sea water, each beach has its own charm. Get ready to explore and be enchanted by the alluring natural beauty of the three best beach destinations that will be revealed in this article. Enjoy your virtual trip to the tropical paradise of Indonesia!`,
    ],
    body: [
      {
        title: "1. Pink Beach",
        credit: "Rivan Awal Lingga",
        description: [
          `Known as one of the hidden natural wonders, Pink Beach in East Nusa Tenggara offers a unique charm with its pink sand. This natural beauty is caused by a mixture of white sand and red coral grains carried by the waves. The clear sea water shows the underwater beauty with attractive coral reefs. Located on Komodo Island, Pink Beach is a magnet for divers and visitors looking for an unusual beach experience. With a stunning sunset panorama, Pink Beach ensures your holiday experience in East Nusa Tenggara is unforgettable.`,
        ],
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210387177595342868/Rivan_Awal_Lingga.jpeg?ex=65ea5fe7&is=65d7eae7&hm=81dbf4cac9968d87952ad45964e60de444c4ba57d1ce0123accc3cc74538a682&",
      },
      {
        title: "2. Koka Beach",
        credit: "Christopher Moswitzer",
        description: [
          `Hiding behind green hills and lush trees, Koka Beach is a hidden paradise in East Nusa Tenggara. This beach offers a stunning combination of clean white sand and calm blue sea water. Its natural beauty is further enriched by the presence of two green hills that hug the beach, creating a charming backdrop. Visitors can enjoy surfing, sunbathing, or just relaxing while enjoying the beautiful views at Koka Beach. This is the ideal place to escape the hustle and bustle of everyday life and experience the authentic tranquility of nature.`,
        ],
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210387177297412116/Christopher_Moswitzer.jpg?ex=65ea5fe6&is=65d7eae6&hm=ed5edb92464edd96b6d95031ce1446f487afc689d59b1ecb28f6a45065caa973&",
      },
      {
        title: "3. Padar Island Beach",
        credit: "Authentic Indonesia",
        description: [
          `Padar Island, which is located in the Komodo National Park area, has hidden beauty on the eastern edge of Nusa Tenggara. The beaches around Padar Island offer soft white sand and clear sea water with stunning shades of blue and green. What makes it unique is the view from the top of Padar hill which shows an extraordinary panorama of three bays with white, black and pink sand. Climbing to the top is also an interesting adventure for visitors who want to enjoy the spectacular natural views of East Nusa Tenggara. The beaches on Padar Island present an alluring natural charm and are an unforgettable destination in this region.`,
        ],
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210387178165772300/authentic_indonesia.jpg?ex=65ea5fe7&is=65d7eae7&hm=a729a2e6816af5de8c8587e8e773c717b0d73b4a3d5b6f60c9919b2f41d888a4&",
      },
    ],
  },
  {
    title: "5 Reasons to Visit The Magnificent Komodo Island",
    datePublished: "February 8, 2024",
    imgURL:
      "https://cdn.discordapp.com/attachments/1204994105298526220/1210388931934158910/Swandi_Changra.jpg?ex=65ea6189&is=65d7ec89&hm=5be261d0e1ee4d9269eac9035a33cfc0625d3c30377ddafbd83d47546646e837&",
    slug: "5-reasons-to-visit-the-magnificent-komodo-island",
    articleMainDescription: [
      `Nestled between Sumbawa and Flores islands within the East Nusatenggara province lies the expansive and remarkable Komodo National Park. Covering 29 volcanic islands, including the prominent Rinca, Padar, and Komodo, the park serves as a habitat for around 2,500 Komodo Dragons and diverse terrestrial fauna, including various reptile, bird, and mammal species. The park's topography is exceptionally varied, featuring mountainous slopes, tropical rainforests, grass-woodland savannah, and pristine sandy beaches that host a wealth of marine life. The marine ecosystem in Komodo Island ranks among the world's most abundant in flora and fauna, remaining relatively unexplored. Spanning 2,000 km2, incorporating protected land and water, the park holds global significance as a conservation priority, boasting a range of captivating natural attractions.`,
      `For those embarking on their inaugural journey to this enchanting part of Indonesia, here are 5 suggestions to facilitate your exploration of this magnificent Komodo Island`,
    ],
    source: "Wonderful Indonesia",
    thumbnailCredit: "Swandi Changra",
    body: [
      {
        title: "1. The Komodo Dragons",
        credit: "Abimanyu Photowork",
        description: [
          `With a length that can reach approximately 3 meters and a weight exceeding 70kg, the Komodo Dragon, scientifically known as Varanus Komodoensis, stands as the largest lizard and reptile on Earth. Recognizable by their immense size, flat heads, bowed legs, lengthy thick tails, and forked tongues, these dragons exhibit remarkable physical features. Capable of reaching speeds up to 20kph on land and displaying adept swimming skills, Komodos possess excellent vision, allowing them to perceive objects from a distance of 300 meters. Functioning as formidable predators, these carnivores can consume up to 80% of their body weight in a single feeding. Their diet includes substantial prey like water buffaloes, deer, carrion, pigs, and, notably, even humans. Employing a distinctive hunting technique, especially against large prey like water buffaloes, Komodos encircle their victim, patiently waiting for the slow-acting venom in their saliva to take effect. Once incapacitated, the prey is torn apart and devoured entirely, bones included. If the prey manages to escape, it often succumbs within 24 hours due to the poisonous and bacteria-laden saliva.`,
          `Exclusive to the Komodo National Park and the surrounding Flores island, these Jurassic and majestic creatures stand as the park's star attraction. While witnessing them is awe-inspiring, visitors are strongly advised to maintain a safe distance and exercise caution. It is imperative to be accompanied by a ranger and adhere to all given instructions when in proximity to these potentially dangerous lizards, despite their seemingly docile appearance.`,
        ],
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210388929921159248/Abimanyu_Photowork.jpg?ex=65ea6188&is=65d7ec88&hm=8f76d3da07b41f9a992269cb59a30b97f8dc2a9d56c6018786069a4c1874e53b&",
      },
      {
        title: "2. Pink Beach on Komodo Island",
        credit: "Rivan Awal Lingga",
        description: [
          `Named for the combination of deteriorating red coral and immaculate white sand, this distinctive and enchanting beach has earned the moniker Pink Beach, or Pantai Merah. Distinguished as one of seven globally with a subtle, glowing pink hue, the beach offers breathtaking panoramic vistas encompassing lush green hills, crystal-clear turquoise waters, radiant pink sand, and azure blue skies.`,
          `Beyond its visual allure, Pink Beach provides exceptional snorkeling and diving opportunities. The unspoiled underwater terrain is richly adorned with a diverse array of marine life. The subaquatic garden hosts hundreds of species of both soft and hard corals, along with vibrant reefs bustling with various marine fauna.`,
          `Given that Komodo Island remains the habitat of Komodo Dragons, visitors are advised to exercise caution both on the beach and in the water. It is highly recommended to explore this area with an authorized guide or ranger for a safe and enriching experience.`,
        ],
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210388931556933642/Rivan_Awal_Lingga.jpeg?ex=65ea6189&is=65d7ec89&hm=141b8d71c6f92ab583fa81f4691330ec9f6a5f12cc8e4f7ac578fe16a713b95e&",
      },
      {
        title: "3. Climate and Geography",
        credit: "Deri Nazaroni",
        description: [
          `The weather conditions within the Komodo Island represent some of the driest in Indonesia. With minimal to no rainfall for approximately 8 months of the year, the park is significantly affected by monsoonal rains. Throughout the dry season, spanning from May to October, daily temperatures typically hover around 40 degrees Celsius. This arid climate contributes to a rugged landscape marked by stony hills, and the variety of plant species is confined to grass, shrubs, orchids, and trees. In stark contrast, the marine environment boasts a vibrant and diverse scenery. Positioned within the Asia Pacific Coral Triangle, the national park is abundant with various seagrass beds, colorful coral reefs, and dense mangrove forests.`,
        ],
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210388931179192350/Deri_Nazaroni.jpg?ex=65ea6189&is=65d7ec89&hm=dc562fa448ccd29fa7c902db2e9d50c6c73a121421e05ed0cea811513b3a14d4&",
      },
      {
        title: "4. Komodo National Park",
        credit: "Amos Chapple",
        description: [
          `Komodo National Park, a natural wonder in Indonesia, offers an unforgettable experience for its visitors. Located on the Komodo Islands, this national park is home to the Komodo lizard, an ancient animal that has become a national icon. Apart from the Komodo lizard, its natural beauty is unrivaled, with the islands offering exotic beaches, colorful coral reefs and spectacular underwater views. The adventure involves trekking on the islands to witness beautiful panoramic views, as well as diving or snorkeling to explore the rich underwater life. Komodo National Park exudes enchanting natural charm and offers a memorable tourist experience in the heart of Indonesia's biodiversity.`,
        ],
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210388930290262148/Amos_Chapple.jpg?ex=65ea6188&is=65d7ec88&hm=22d15e8a27a88ca255f90ee6bb374ba7a55989bb3675a1c78292a76ebe961015&",
      },
      {
        title: "5. Land and Marine Fauna",
        credit: "Wonderful Indonesia",
        description: [
          `In addition to the majestic Komodo Dragon, Komodo National Park serves as the natural habitat for a wide array of both terrestrial and marine creatures. Visitors have the opportunity to observe these fascinating animals in their unrestricted, natural environments.`,
          `The park's terrestrial fauna boasts a rich variety of reptiles, mammals, and birds. This encompasses, but is not limited to, 12 snake species, 9 lizard species, diverse frog species, the Timor deer (a primary prey for the Komodo Dragon), horses, water buffalos, wild boars, the indigenous Rinca rat, fruit bats, the orange-footed scrub fowl, and more than 40 bird species.`,
          `Underwater, the marine fauna showcases remarkable diversity, comprising over 1,000 fish species, 70 sponge varieties, 10 dolphin species, 6 whale species, dugongs, green turtles, various shark species, large manta rays, stingrays, marine reptiles, crustaceans, and sporadically migrating whales.`,
        ],
        imgURL:
          "https://cdn.discordapp.com/attachments/1204994105298526220/1210388932265644092/wonderful_indonesia.jpg?ex=65ea6189&is=65d7ec89&hm=bce89a4d382feb1b3771fa5b16fd21ebe531fa3d53e04e93e8159f8fe928e9e2&",
      },
    ],
  },
  {
    title: "Dive into the Beauty of the Riung 17 Island ",
    datePublished: "February 7, 2024",
    imgURL:
      "https://cdn.discordapp.com/attachments/1204994105298526220/1210390839683977346/danaanandrew.jpg?ex=65ea6350&is=65d7ee50&hm=3cc624f8dfa4854edc94e32046b0aa6053e822ce95ed7aca9490192de51df806&",
    slug: "dive-into-the-beauty-of-the-riung-17-island",
    articleMainDescription: [
      `Riung 17 Island, nestled in the heart of East Nusa Tenggara, is a hidden gem that promises an enchanting underwater world waiting to be explored. As you submerge into the crystal-clear waters, a mesmerizing dance of sea anemones welcomes you. What appears to be a waving sea rose is, in fact, a collection of giant clam eggs delicately bound by mucous, creating a vibrant crimson spectacle.`,
      `Beneath the surface of Riung's waters lies a mesmerizing world, where vibrant marine life and coral formations create a visual feast for underwater enthusiasts. The marine biodiversity here is astonishing, with schools of tropical fish darting among the colorful corals, creating a living kaleidoscope that captivates the senses.`,
      `Riung 17 Island is a haven for marine enthusiasts seeking encounters with exotic sea creatures. The underwater landscape is teeming with various species, from graceful sea turtles gliding effortlessly to the majestic manta rays soaring through the depths. It's an underwater paradise that promises encounters with the extraordinary.`,
      `One of the most captivating sights beneath the waves is the mesmerizing dance of sea roses. These aren't your typical flowers; they are, in fact, the delicately intertwined eggs of giant sea clams. Bound by a glistening mucous, these radiant red ribbons create an otherworldly spectacle, offering a glimpse into the intricate and delicate marine life thriving beneath the surface.`,
      `For diving enthusiasts seeking a tranquil escape, Riung 17 Island provides an idyllic setting. Away from the bustling crowds, the underwater landscape offers a serene environment for divers to explore and connect with the beauty of nature. The clear visibility and diverse marine life make Riung a destination that caters to both novice and experienced divers.`,
      `While reveling in the underwater beauty of Riung 17 Island, it is crucial to emphasize the importance of responsible tourism. Preserving the delicate ecosystem is a collective responsibility, ensuring that future generations can continue to marvel at the vibrant marine life and unique underwater wonders that this enchanting destination has to offer. Dive into Riung 17 Island and embark on a journey to discover the secrets of its underwater beauty.`,
    ],
    thumbnailCredit: "danaanandrew",
  },
];

export { articles };
