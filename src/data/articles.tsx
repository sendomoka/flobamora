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
      "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Miles Films _ Humba Dreams.jpeg",
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
          "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Lola Amaria Production  Labuan Hati.jpeg",
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
          "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Starvision Plus  Susah Sinyal.jpeg",
      },
      {
        title: "3. Humba Dreams (2018)",
        credit: "dok. Miles Films / Humba Dreams",
        description: [
          `"Humba Dreams," released in 2018, is a cinematic ode to the cultural richness and natural splendor of East Nusa Tenggara. The film immerses viewers in the vibrant traditions and mesmerizing landscapes that define the region. From the intricate weaving of Sumba's traditional fabrics to the rhythmic beats of indigenous music, "Humba Dreams" provides a sensory feast for audiences. Against the backdrop of NTT's picturesque scenery, the movie invites viewers to explore the profound connection between the characters and their surroundings. Through its compelling narrative and breathtaking visuals, "Humba Dreams" succeeds in showcasing the allure of East Nusa Tenggara, leaving an indelible mark on the audience's hearts.`,
        ],
        imgURL:
          "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Miles Films _ Humba Dreams.jpeg",
      },
      {
        title: "4. Kulari Ke Pantai (2018)",
        credit:
          "dok. Miles Films / Kulari ke Pantaidok. Miles Films / Kulari ke Pantaidok. Miles Films / Kulari ke Pantai",
        description: [
          `"Kulari Ke Pantai," a film released in 2018, unfolds a heartfelt story against the stunning coastal landscapes of East Nusa Tenggara. The narrative follows the protagonist's journey as they embark on an adventure, with the pristine beaches of NTT serving as both a metaphorical and literal backdrop. The film captures the essence of the coastal communities, portraying the harmonious relationship between the characters and the vast ocean. Viewers are treated to breathtaking scenes of white sandy beaches, crystal-clear waters, and the warm hospitality of the local people. "Kulari Ke Pantai" not only tells a compelling tale of self-discovery but also invites the audience to fall in love with the coastal wonders of East Nusa Tenggara.`,
        ],
        imgURL:
          "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Miles Films  Kulari ke Pantai.jpeg",
      },
      {
        title: "5. Nona Manis Sayange (2023)",
        credit: "dok. Putaar Film / Nona Manis Sayange",
        description: [
          `"Nona Manis Sayange," a film released in 2023, continues the tradition of showcasing the unparalleled beauty of East Nusa Tenggara. The movie unfolds against a backdrop of stunning landscapes, featuring the iconic destinations of NTT in all their glory. Pulau Komodo, with its mythical dragons, and Pulau Flores, adorned with lush greenery, play pivotal roles in the film's visual narrative. As the characters navigate through the intricate plot, the audience is treated to a visual feast of NTT's diverse and captivating scenery. "Nona Manis Sayange" not only narrates a compelling story but also serves as a testament to the cinematic potential of East Nusa Tenggara, leaving the audience captivated by the region's natural wonders.`,
          `These films collectively contribute to a growing cinematic repertoire that not only entertains but also celebrates the cultural and natural richness of East Nusa Tenggara. Through compelling narratives and breathtaking visuals, each movie invites viewers to immerse themselves in the enchanting landscapes and cultural tapestry that make NTT a truly remarkable destination.`,
        ],
        imgURL:
          "/images/Articles/5 MOVIES SET IN BEAUTIFUL EAST NUSA TENGGARA/dok. Putaar Film _ Nona Manis Sayange.png",
      },
    ],
  },
  {
    title: "Top 3 Best Beaches in East Nusa Tenggara",
    datePublished: "February 9, 2024",
    imgURL:
      "/images/Articles/TOP 3 BEST BEACHES IN EAST NUSA TENGGARA/@theouterislands.jpg",
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
          "/images/Articles/TOP 3 BEST BEACHES IN EAST NUSA TENGGARA/Rivan Awal Lingga.jpeg",
      },
      {
        title: "2. Koka Beach",
        credit: "Christopher Moswitzer",
        description: [
          `Hiding behind green hills and lush trees, Koka Beach is a hidden paradise in East Nusa Tenggara. This beach offers a stunning combination of clean white sand and calm blue sea water. Its natural beauty is further enriched by the presence of two green hills that hug the beach, creating a charming backdrop. Visitors can enjoy surfing, sunbathing, or just relaxing while enjoying the beautiful views at Koka Beach. This is the ideal place to escape the hustle and bustle of everyday life and experience the authentic tranquility of nature.`,
        ],
        imgURL:
          "/images/Articles/TOP 3 BEST BEACHES IN EAST NUSA TENGGARA/Christopher Moswitzer.jpg",
      },
      {
        title: "3. Padar Island Beach",
        credit: "Authentic Indonesia",
        description: [
          `Padar Island, which is located in the Komodo National Park area, has hidden beauty on the eastern edge of Nusa Tenggara. The beaches around Padar Island offer soft white sand and clear sea water with stunning shades of blue and green. What makes it unique is the view from the top of Padar hill which shows an extraordinary panorama of three bays with white, black and pink sand. Climbing to the top is also an interesting adventure for visitors who want to enjoy the spectacular natural views of East Nusa Tenggara. The beaches on Padar Island present an alluring natural charm and are an unforgettable destination in this region.`,
        ],
        imgURL:
          "/images/Articles/TOP 3 BEST BEACHES IN EAST NUSA TENGGARA/authentic indonesia.jpg",
      },
    ],
  },
  {
    title: "5 Reasons to Visit The Magnificent Komodo Island",
    datePublished: "February 8, 2024",
    imgURL:
      "/images/Articles/5 REASONS TO VISIT THE MAGNIFICENT KOMODO ISLAND/Swandi Changra.jpg",
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
          "/images/Articles/5 REASONS TO VISIT THE MAGNIFICENT KOMODO ISLAND/Abimanyu Photowork.jpg",
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
          "/images/Articles/5 REASONS TO VISIT THE MAGNIFICENT KOMODO ISLAND/Rivan Awal Lingga.jpeg",
      },
      {
        title: "3. Climate and Geography",
        credit: "Deri Nazaroni",
        description: [
          `The weather conditions within the Komodo Island represent some of the driest in Indonesia. With minimal to no rainfall for approximately 8 months of the year, the park is significantly affected by monsoonal rains. Throughout the dry season, spanning from May to October, daily temperatures typically hover around 40 degrees Celsius. This arid climate contributes to a rugged landscape marked by stony hills, and the variety of plant species is confined to grass, shrubs, orchids, and trees. In stark contrast, the marine environment boasts a vibrant and diverse scenery. Positioned within the Asia Pacific Coral Triangle, the national park is abundant with various seagrass beds, colorful coral reefs, and dense mangrove forests.`,
        ],
        imgURL:
          "/images/Articles/5 REASONS TO VISIT THE MAGNIFICENT KOMODO ISLAND/Deri Nazaroni.jpg",
      },
      {
        title: "4. Komodo National Park",
        credit: "Amos Chapple",
        description: [
          `Komodo National Park, a natural wonder in Indonesia, offers an unforgettable experience for its visitors. Located on the Komodo Islands, this national park is home to the Komodo lizard, an ancient animal that has become a national icon. Apart from the Komodo lizard, its natural beauty is unrivaled, with the islands offering exotic beaches, colorful coral reefs and spectacular underwater views. The adventure involves trekking on the islands to witness beautiful panoramic views, as well as diving or snorkeling to explore the rich underwater life. Komodo National Park exudes enchanting natural charm and offers a memorable tourist experience in the heart of Indonesia's biodiversity.`,
        ],
        imgURL:
          "/images/Articles/5 REASONS TO VISIT THE MAGNIFICENT KOMODO ISLAND/Amos Chapple.jpg",
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
          "/images/Articles/5 REASONS TO VISIT THE MAGNIFICENT KOMODO ISLAND/wonderful indonesia.jpg",
      },
    ],
  },
  {
    title: "Dive into the Beauty of the Riung 17 Island ",
    datePublished: "February 7, 2024",
    imgURL:
      "/images/Articles/DIVE INTO THE BEAUTY OF THE RIUNG 17 ISLAND/danaanandrew.jpg",
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
  {
    title: "Chasing Sunrise in the Sky of Three Colored Lakes",
    datePublished: "February 6, 2024",
    imgURL:
      "/images/Articles/CHASING SUNRISE IN THE SKY OF THE THREE COLORED LAKES/commons.wikimedia.org.jpg",
    slug: "chasing-sunrise-in-the-sky-of-three-colored-lakes",
    articleMainDescription: [
      "The Tale of Kelimutu's Three-Color Lake in Ende Regency, East Nusa Tenggara Province, Captivates Travelers from Abroad and Throughout the Archipelago, Including Locals on Flores Island.",
      `The three colorful lakes on Mount Kelimutu are part of the Kelimutu National Park. Travelers often purchase travel packages to Flores Island with the goal of visiting Kelimutu's three-color lakes.`,
      `Even during the Eid holiday in 2023, tourists from East Manggarai Regency took advantage of the opportunity to explore Kelimutu Lake. They embarked on a sunrise hunt at the peak of Kelimutu Lake on Saturday, April 22, 2023. Travelers from East Manggarai, along with their family entourage, traveled a considerable distance from Borong City to the summit of Kelimutu Lake before sunrise.`,
      `Edy Lento, a local traveler from East Manggarai, shared with [Kompas.com](http://kompas.com/) on Saturday, April 22, 2023, that he and his family enjoyed a vacation at the three-color lakes of Kelimutu.`,
    ],
    thumbnailCredit: "commons.wikimedia.org",
    source: "Kompas.com",
    body: [
      {
        title: "The Charm of The Sunrise at Lake Kelimutu",
        credit: "bloodydirtyboots.wordpress.com",
        description: [
          `**Until now, he has been intrigued by various tales and stories of Kelimutu's three-color lake, which has gained worldwide renown.**`,
          `Foreign and domestic tourists frequently visit the lake to witness the sunrise and marvel at the three uniquely colored lakes atop Mount Kelimutu.`,
          `"Yesterday, on Friday, (April 21, 2023), we departed from East Manggarai and stayed overnight in Moni Village. Early this morning, around 04:00 AM local time, we traversed the hills to Lake Kelimutu, parking our vehicles at the hillside parking lot," he said.`,
          `Subsequently, they walked towards the summit of Mount Kelimutu, climbing stairs until reaching the peak.`,
          `Edy Lento described the journey to the Kelimutu peak as truly astonishing, with the natural beauty of the forested area and the unique landscape featuring three lakes at the mountain's summit.`,
          `"This morning the weather was very clear, allowing us to capture the sunrise and experience the chilly weather at the top of Mount Kelimutu with its three exotic-colored lakes," he added.`,
          `They felt the marvels presented by the universe and the sun's rays at the summit of Mount Kelimutu.`,
          `Edy Lento added that upon reaching the peak of Mount Kelimutu at the location of the summit monument, they also encountered other tourists from abroad and different regions of Indonesia who were also capturing the sunrise at the summit of Mount Kelimutu.`,
          `"Kelimutu's three-color lake is a globally renowned destination. Foreign and domestic tourists often purchase travel packages to Kelimutu Lake located in the Kelimutu Mountains," he explained.`,
          `As known, travel agencies and tour guides in Flores, Bali, and Jakarta have incorporated Kelimutu Lake as a favorite destination in Flores Island. From West Flores to East Flores and vice versa, they sell travel packages to Kelimutu Lake. This represents the natural and lake tourism heritage in Flores Island, East Nusa Tenggara.`,
        ],
        imgURL:
          "/images/Articles/CHASING SUNRISE IN THE SKY OF THE THREE COLORED LAKES/bloodydirtyboots.wordpress.com.jpg",
      },
    ],
  },
  {
    title: "Why is the sand of Pink Beach in NTT pink?",
    datePublished: "February 5, 2024",
    imgURL:
      "/images/Articles/WHY IS THE SAND OF PINK BEACH IN NTT PINK_/Agung Adit.jpg",
    slug: "why-is-the-sand-of-pink-beach-in-ntt-pink",
    articleMainDescription: [
      `One of the must-visit attractions for tourists in Komodo National Park (KNP), West Manggarai Regency, Flores, East Nusa Tenggara, is the Pink Beach. Beyond offering views of the beautiful and crystal-clear blue sea, the stretch of pink-hued sand is the distinctive allure of Pink Beach.`,
      `Travel Blogger Kadek Arini explained that behind the captivating sand color lies the role of waves dragging coral reefs to the shore. "The coral reefs at Pink Beach are mostly pink. When the waves hit them, they break. The fragments, mixed with white sand, result in the pink-colored sand," she stated during a virtual press conference on "Comprehensive Protection of Affordable Spirit and Health" on Monday, December 21, 2020.`,
      `According to information from Bobo on Monday, July 15, 2019, the beach's sand color on Komodo Island originates from microorganisms called foraminifera. Additionally, citing [Kompas.com](http://kompas.com/) on Monday, September 14, 2020, foram or Foraminifera is a microscopic plankton that dates back nearly a billion years in the ocean.`,
      `So, what is the connection between plankton and the sand color at Pink Beach?`,
    ],
    thumbnailCredit: "Agung Adit",
    source: "Kompas.com",
    body: [
      {
        imgURL:
          "/images/Articles/WHY IS THE SAND OF PINK BEACH IN NTT PINK_/Fiqih Alfarish.jpg",
        credit: "Fiqih Alfarish",
        description: [
          `Foram has a slightly orange or coral hue, which then mixes with the beach sand. As a result, the sand at Pink Beach takes on a pinkish color.`,
          `Although foram is said to cause the sand to turn pink, as per Tribun Travel on Sunday, August 5, 2018, the sand color is influenced by shell fragments. These broken shell fragments are carried by the waves to the coastal areas. The shell fragments then mix with the white sand from the limestone rocks around the beach.`,
          `This process creates the distinctive color of Pink Beach, one of the seven pink sandy beaches globally, as seen by tourists today.`,
        ],
      },
    ],
  },
  {
    title: "Wae Rebo Village: Beautiful Indonesian Village",
    datePublished: "February 4, 2024",
    imgURL:
      "/images/Articles/WAE REBO VILLAGE_ BEAUTIFUL TRADISIONAL INDONESIAN VILLAGE/Aniq Lubabul.jpg",
    slug: "wae-rebo-village-beautiful-indonesian-village",
    articleMainDescription: [
      `Situated at an altitude of 1,200 meters above sea level, Wae Rebo Village in Flores resembles a paradise above the clouds. While reaching this destination requires effort, the reward upon arrival is truly equivalent to the journey taken. The breathtaking natural scenery, with mountains blending seamlessly with seven cone-shaped traditional houses, leaves a unique impression on every visitor who has ventured to Wae Rebo Village.`,
      `Located southwest of Ruteng city in the Manggarai Regency, East Nusa Tenggara, Wae Rebo Village is not easily accessible due to its mountaintop location. A considerable amount of extra energy is required for the approximately 3 to 4-hour trek, covering a distance of 7 km, depending on physical conditions.`,
      `I consider Wae Rebo Village the most beautiful village in Indonesia, and it's a place where mobile signals are entirely absent. In terms of tourism, Wae Rebo Village is well-managed, receiving guidance from the Indonesia Ecotourism Network. The aim is to uplift villages that were previously overlooked into sought-after tourist destinations.`,
      `Travelers heading to Wae Rebo Village in Flores usually start their journey from Ruteng. If coming from Denpasar (Bali), direct flights to Ruteng are available. In case there are no flights to Ruteng, buses or travel services from Labuan Bajo, the capital of West Manggarai Regency, which takes approximately 6 hours, can be utilized. Upon reaching Ruteng, the journey continues to the villages of Denge or Dintor, taking about 2 hours, and Denge is the last village accessible by vehicle.`,
    ],
    thumbnailCredit: "Aniq Lubabul",
    source: "Kompas.com",
    body: [
      {
        imgURL:
          "/images/Articles/WAE REBO VILLAGE_ BEAUTIFUL TRADISIONAL INDONESIAN VILLAGE/Wirestock Creators.jpg",
        credit: "Wirestock Creators",
        description: [
          `To reach Denge, visitors can opt for motorcycle taxis (ojek) or wooden trucks, usually available at Terminal Mena operating from 09:00 to 10:00. For a more budget-friendly choice, the wooden trucks are recommended, though they don't operate every day.`,
          `The journey then continues on foot to Wae Rebo Village, taking approximately 4-5 hours. If choosing an ojek from Ruteng to Denge, the cost can be higher, ranging from Rp 150,000 to Rp 200,000 for a single trip. Opting for the wooden trucks is more economical, with a fare of only Rp 30,000 per person.`,
          `In terms of facilities, Denge Village has a home stay available for accommodation. Not far from the home stay, there is an information center and a library.`,
          `Upon arriving in Wae Rebo Village, visitors can stay in the traditional houses owned by the locals. There are no specific home stays or accommodations here, as the village consists of only 7 traditional houses.`,
          `In addition to its breathtaking scenery, the warmth of the villagers welcomes visitors upon arrival in Wae Rebo. Here, you'll find the iconic Mbaru Niang, a traditional architectural wonder made of wood with a thatched roof woven from cogon grass. The unique cone-shaped structures have stood for 19 generations, attracting curious tourists, especially from abroad.`,
          `Surrounded by lush greenery and beautiful hills, the seven Mbaru Niang structures create a picturesque landscape with a cool climate, surrounded by forests. Recognized as a UNESCO World Heritage cultural site in 2012, Wae Rebo Village is a historical and culturally significant destination.`,
        ],
      },
    ],
  },
  {
    title: "Stunning: Hiking Activities on Padar Island",
    datePublished: "February 3, 2024",
    imgURL:
      "/images/Articles/STUNNING_ HIKING ACTIVITIES ON PADAR ISLAND/Anton Diaz.jpg",
    slug: "stunning-hiking-activities-on-padar-island",
    articleMainDescription: [
      `Embark on an exhilarating journey as you partake in hiking activities on Padar Island, a mesmerizing gem within the Komodo National Park. The ascent to the island's summit promises an awe-inspiring adventure, where every step unveils breathtaking panoramas that will leave hikers in absolute wonder.`,
      `Reaching the pinnacle of Padar Island is not just a hike; it's an immersive experience offering unparalleled rewards. From the summit, soak in the astonishing 360-degree views that stretch across the pristine waters, numerous islands, and picturesque beaches, creating a visual feast for nature enthusiasts.`,
      `Whether you opt for a day trip from the nearby hub of Labuan Bajo or embark on a more extended live-aboard expedition, hiking Padar Island stands out as a must-do activity in the Komodo National Park. The flexibility of this adventure caters to both those seeking a brief escape and those indulging in a more extended exploration of the stunning surroundings.`,
      `Padar Island's hiking trails offer more than just physical exertion; they lead adventurers through nature's canvas. The vibrant colors of the landscape, the azure waters, and the golden beaches contribute to an enchanting masterpiece that captivates the senses and creates lasting memories for those who venture into this natural wonder.`,
    ],
    thumbnailCredit: "Anton Diaz",
    source: "Kompas.com",
    body: [
      {
        title: "How to Get to The Padar Island Hike",
        credit: "Wendy Stevian",
        description: [
          `Reaching Padar Island offers two main options: a day excursion from Labuan Bajo or incorporating Padar into your Komodo Diving Liveaboard experience. The liveaboard, essentially a spacious boat equipped with cabins, scuba diving gear, a kitchen, and more, allows you to stay on board, eliminating the need for daily transit to and from Labuan Bajo. This setup positions you conveniently at the base of Padar and other hiking or diving sites, ensuring you're ready to immerse yourself in the beauty of sunrise without the hassle of daily commuting.`,
          `Choosing a Komodo Diving Liveaboard entails comprehensive inclusions such as meals, scuba dives, and various activities. The cost varies, ranging from $200 per night to $1000 for the most luxurious cabins and boats. Booking a liveaboard is simplified through platforms like [Liveaboard.com](http://liveaboard.com/), a reputable global website that provides a comprehensive list of available boats, trips, cabin details, and included activities, making it a reliable choice for securing your unforgettable Komodo experience.`,
        ],
        imgURL:
          "/images/Articles/STUNNING_ HIKING ACTIVITIES ON PADAR ISLAND/Wendy Stevian.jpg",
      },
    ],
  },
  {
    title: "The Enchantment of Koka Beach: Stunning Beauty",
    datePublished: "February 2, 2024",
    imgURL: "/images/Koka Beach/Christopher Moswitzer.jpg",
    slug: "the-enchantment-of-koka-beach-stunning-beauty",
    articleMainDescription: [
      `Koka Beach, nestled in the village of Wolowiro, Paga District, Sikka Regency, East Nusa Tenggara (NTT), is a familiar destination for many locals on Flores Island. Serving as a popular spot for weekend getaways and holidays, both local residents and foreign tourists gather in groups to indulge in the beauty of this coastal paradise. Some even opt to stay overnight, immersing themselves in the serene atmosphere.`,
      `If you traverse the Trans Flores Road from Maumere towards Ende, a prominent sign reading "Destinasi Wisata Pantai Koka" (Koka Beach Tourism Destination) on the left side of the road signals the proximity of this beach, just about 2 kilometers from the Trans Flores Road. While the road conditions may be challenging, with some parts still unpaved, worry not. Once you enter, you'll soon find sections that have been smoothly asphalted.`,
      `Approximately 35 km from Maumere, a one-hour motorcycle ride brings you to Pantai Koka. At the first gate, a nominal entrance fee is collected – Rp 5,000 for motorcycles and Rp 10,000 for cars. As you continue your journey, you'll reach the shores of Pantai Koka, where a parking fee equivalent to the entrance fee is applied.`,
      `On weekends, the beach is bustling with children and adults alike, engaging in activities ranging from swimming in the sea to capturing delightful moments with selfies against the backdrop of the white sandy beach. Local residents provide bamboo seating arrangements, free of charge, along the shoreline. Pantai Koka also offers homestay accommodations, especially catering to foreign tourists.`,
      `Beyond the joys of swimming and capturing picturesque moments, visitors can relax on bamboo seating while enjoying refreshments like coffee, young corn, banana fritters, and other local snacks offered by nearby vendors. For those craving a grilled fish experience, it's readily available. A visit to Pantai Koka is sure to captivate, providing an enchanting escape with its beauty that will linger in your memory.`,
    ],
    thumbnailCredit: "Christopher Moswitzer",
    source: "",
    body: [
      {
        title: "Surrounded by Two Hills",
        credit: "tripadvisor.com",
        description: [
          `Koka Beach is flanked by two small hills, namely Rodja on the west side of the beach and Bukit Ndate Sare on the east. Bukit Rodja features a steep cliff right at the edge of the beach, rising to a height of 50-100 meters. At the base of Bukit Rodja lies a rocky cave known as Lia Wio, extending approximately 500 meters inland.`,
          `As recounted by Frans Koke, a local resident, a foreign tourist from the Netherlands explored the cave's depth beneath Bukit Rodja in 1992 but only reached a depth of 50 meters. The cave's ceiling boasts numerous beautiful rock formations (stalactites), and it can be explored during low tide.`,
          `At the base of Bukit Ndate Sare, remnants of a Japanese bunker from World War II can be found, with a depth of about 50 meters. Within this area, old tanks and weaponry, remnants of the Japanese military, are still preserved. Both the Japanese bunker and the natural cave have never been visited by tourists, as locals believe the area holds sacred significance.`,
        ],
        imgURL:
          "/images/Articles/THE ENCHANTMENT OF KOKA BEACH_ STUNNING BEAUTY/tripadvisor.com.jpg",
      },
    ],
  },
  {
    title: "Kanawa Island: The Charm of an Exotic Island",
    datePublished: "February 1, 2024",
    imgURL:
      "/images/Articles/KANAWA ISLAND_ THE CHARM OF AN EXOTIC ISLAND/Reza Adrianov.jpg",
    slug: "kanawa-island-the-charm-of-an-exotic-island",
    articleMainDescription: [
      `Kanawa Island in Labuan Bajo is a small paradise adorned with thousands of beautiful starfish scattered along its shores. Locals commonly refer to this gem as Kanawa, and describing one of the numerous beauties found on Flores Island never seems to end.`,
      `Known for its breathtaking scenery, every corner of Flores Island is truly captivating. From the westernmost point to the easternmost edge, extraordinary landscapes and tourist spots await discovery.`,
      `Starting from the Komodo National Park, your journey can lead you to Kanawa Island, a hidden paradise on the western edge of Flores.`,
      `Pulau Kanawa is a small island boasting crystal-clear waters, pristine white sands, and remarkably beautiful coral reefs. The gradient of the blue sea, combined with the tranquil surroundings, makes it an ideal destination for a rejuvenating getaway, providing respite from the demands of daily life.`,
      `The quaint cottages along the shoreline, surrounded by lush ketapang trees, create a mesmerizing atmosphere, leaving you feeling like the luckiest person on Earth to revel in such natural beauty.`,
      `Kanawa Island has become one of the most sought-after destinations for both local and international tourists in Labuan Bajo, Flores.`,
    ],
    thumbnailCredit: "Reza Adrianov",
    source: "gotravelaindonesia.com",
    body: [
      {
        title: "Where is Kanawa Island?",
        credit: "helloflores",
        description: [
          `Pulau Kanawa is precisely situated in Labuan Bajo, covering an area of 35 hectares. This white sandy island is part of the Komodo Islands cluster, located in the West Manggarai Regency, East Nusa Tenggara Province.`,
          `This small island boasts an extraordinary marine panorama and is separated by the larger Pungu or Kelor Island, which is also a key destination for sailing tours in the Komodo region.`,
          `The greatest wonder of Kanawa Island, Labuan Bajo, lies in its exceptionally beautiful underwater scenery. You will be fascinated by the marine biodiversity inhabiting the waters around this island.`,
          `This tourist attraction is managed by an Italian. Previously, the island was under the management of the local population, but its condition became less maintained. Located within the Komodo National Park, the island can be reached in 10 minutes from Komodo International Airport to Bajo Port. Afterward, you will continue the journey by boat for approximately 1 hour.`,
        ],
        imgURL:
          "/images/Articles/KANAWA ISLAND_ THE CHARM OF AN EXOTIC ISLAND/helloflores.jpg",
      },
    ],
  },
];

export { articles };
