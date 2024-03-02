type accomodation = {
    title: string;
    address: string;
    imgURL: string[];
    desc: string;
    source: string;
    sourceURL: string;
    price: string;
    rating: string;
};

const accomodations: accomodation[] = [
    {
        title: "Menjaga Bay",
        address: "Kampung Menjaga, Macang Tanggar, Labuan Bajo, Indonesia, 86763",
        imgURL: [
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213383806283939932/1menjaga.webp?ex=65f546ba&is=65e2d1ba&hm=a2dad2ae685cbb13f20b1150f45a9e013c08235a9d8c47db30b713bdc57e389c&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213383807596503121/2menjaga.webp?ex=65f546bb&is=65e2d1bb&hm=9b3e618f547613d6ff1636bc8b6d7cd196918640639021ce0ab9c37ec780484a&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213383807214944256/3menjaga.webp?ex=65f546bb&is=65e2d1bb&hm=9455325b2918490a06f24168bb6e43c3573c9d16e44987f6efa281e125c8af6a&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213383806682140682/4menjaga.jpg?ex=65f546bb&is=65e2d1bb&hm=d264068fc30d945da4d622c1132d2b938a0ff42252e2345abf4901f688d8a85a&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213383806929600542/5menjaga.jpg?ex=65f546bb&is=65e2d1bb&hm=b87a593449c4343c89c7a11d2b28722b598c057218257db9f0e89d304b6952e4&"
        ],
        desc: "Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Strategically situated in Macang Tanggar, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Komodo Airport. Rated with 5 stars, this high-quality property provides guests with access to massage, restaurant and outdoor pool on-site.",
        source: "Agoda",
        sourceURL: "https://www.agoda.com/menjaga-bay/hotel/labuan-bajo-id.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1891460&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2024-03-5&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=0&showReviewSubmissionEntry=false&currencyCode=IDR&isFreeOccSearch=false&tag=f71b0106-fb42-0cf2-b13e-84355fbe83c7&isCityHaveAsq=false&tspTypes=8&los=1&searchrequestid=b79856fd-9c8b-4be9-b908-71c3b15e6aaf&ds=Qyka%2F6AK92T1NJTz",
        price: "USD 153.57",
        rating: "9.1"
    },
    {
        title: "Zasgo Hotel",
        address: "Jalan Soekarno Hatta, Labuan Bajo, Labuan Bajo, Indonesia, 86763",
        imgURL: [
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213384336620126208/zasgo1.webp?ex=65f54739&is=65e2d239&hm=6b48307eb1ee3bbf15988e73d0fa5afe6b2264e67b54d6e385f0bb74ffb7c098&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213384338482401381/zasgo2.webp?ex=65f54739&is=65e2d239&hm=82680dee2200f16a1c5e1ab5e31699343b7db1c66ce5af68f510f24e416e67cc&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213384338096398366/zasgo3.webp?ex=65f54739&is=65e2d239&hm=367b6b295f25fd3508f5a72d2683c073c3ee88f6bf8e860ba7a7415a2ca4cf43&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213384337626497024/zasgo4.webp?ex=65f54739&is=65e2d239&hm=b689b3d4d284617e388c8fdd8e55e9572f9856b351d77c1136433cf42912cf97&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213384337169453076/zasgo5.webp?ex=65f54739&is=65e2d239&hm=75c7048668f0434ec6d9299b475b40f63e83e3d60ab11390000d2e18b56b5fc1&"
        ],
        desc: "The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Strategically situated in Labuan Bajo, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Komodo Airport. This 4-star property features restaurant to make your stay more indulgent and memorable.",
        source: "Agoda",
        sourceURL: "https://www.agoda.com/zasgo-hotel/hotel/goron-talo-id.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1908612&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2024-03-5&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=0&showReviewSubmissionEntry=false&currencyCode=IDR&isFreeOccSearch=false&isCityHaveAsq=false&tspTypes=8&los=1&searchrequestid=67a49ea2-ba86-4154-ad86-af2794579029",
        price: "USD 40.35",
        rating: "8.4"
    },
    {
        title: "AYANA Komodo Waecicu Beach",
        address: "Pantai Waecicu, Labuan Bajo, Manggarai Barat, Nusa Tenggara Timur, Indonesia, 86554",
        imgURL: [
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213385756865732679/ayana1.webp?ex=65f5488c&is=65e2d38c&hm=30e7699aadeab4b9a0699004b4e585f3fbebd82ebe795366b0ecb8b2944217a9&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213385758841241621/ayana2.webp?ex=65f5488c&is=65e2d38c&hm=8ff117d63ac1e525dbc93d89fad20a87e94436442f94d785025b3d475cfac1f4&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213385758480666685/ayana3.webp?ex=65f5488c&is=65e2d38c&hm=23d7f2d64dd140fb02aa97d1e9cc2ef8db6411573c1b3614275a3528b170e605&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213385757918765087/ayana4.webp?ex=65f5488c&is=65e2d38c&hm=4657c7312aa86fbdcfb60cbf3cd565c379abb784260f27c3b01d4246806bc376&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213385757432221696/ayana5.webp?ex=65f5488c&is=65e2d38c&hm=3c96ac6e70107a599692988dda44fb652bd4ef235e4a60a7b74c10a4c50b7716&"
        ],
        desc: "World-class Luxury with Gracious Indonesian Hospitality at Labuan Bajo Hotel. A perfectly balanced retreat sanctuary welcomes you to the heart of Komodo National Park. Experience and create lasting memories in the lap of luxury with state-of-the-art facilities and services while surrounded by unparalleled natural beauty at the best 5-star hotel in Labuan Bajo, AYANA Komodo Resort. Do you long for a private break-away where your thoughts can roam while kayaking around the Labuan Bajo Resort to a private island? Or do you want to mingle with otherguests and create wonderful new friendships on our bustling 250m long private jetty? The Labuan Bajo Hotel has what you need—and so much more.",
        source: "Traveloka",
        sourceURL: "https://www.traveloka.com/id-id/hotel/detail?spec=03-03-2024.04-03-2024.1.1.HOTEL.3000020012727.AYANA%20Komodo%20Waecicu%20Beach.1&contexts=%7B%22inventoryRateKey%22%3A%22povEwB3ZzsU2C6pd%2B6MdU13LUNuufACdbU0usK5vg0dM0tKsNUio4Rxug1zOzHJilcvZa8YdqqIySdppe7dolTIewZlxfjiOGz6oXLTucMvN0%2BgQ3yZPvZcoHwUFNN%2BZpcr%2F%2FNa8o9ElfN8zOYhzzZeg0X586laFpeUViPi9rxBJUdjfh7Kwv3D2AXvZD2TOIvEWeildVo7nbHxIWcXPVNGysXwP9P%2F6jQTjnyKeTv%2ByqYmxSenRKFEfSHS0XO3kZfZPEEhT4qTyZ4NnGlioFk6ay4RXlsebEjOdYqJCyZaMtDSNGh18CHz1fdeRO9FZFE1TgKa9ew4G5utQz7gGRWS6bi7h%2Fw2IxaeAsuP0oBoJvMSm%2BJYK0fG1rNkywkoSeOjRTl6ytxGba%2F42pjcyycAV0FLSWnDGKO8K5NDbch6ye8H8B7diudEPIK1xPvN%2BTW8Ky7dIz%2F8vuFaf4od3zzr6YNymnTk58iYKaBwFeu9eKx0jA7izbI%2B%2Bg2rqPRLdTEz1OwP3IrAA8Jugwb1nItK86GilTqHjHMsEEFrul1Z8CS%2FWFNqllBTLDfKALgAatbkPrlGHYMvOxUcd8gSuE9olaRmAWbSrbAx4lGVLBha%2FzTvZV0gOgy8QojE2ombEtMM9W5F3LU%2B3MiLXiG%2FcrZ%2BcjOcshP%2FlnzDiU9VoWjc%3D%22%7D&loginPromo=1&prevSearchId=1792396691774660037",
        price: "USD 285.83",
        rating: "9.0"
    },
    {
        title: "Loccal Collection Hotel Komodo",
        address: "Jl. Raya Binongko -  Kelurahan Labuan Bajo, Manggarai Barat - Nusa enggara Timur, Labuan Bajo, Manggarai Barat, Nusa Tenggara Timur, Indonesia, 86754",
        imgURL: [
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213386851092664360/loccal1.webp?ex=65f54990&is=65e2d490&hm=61c95617c784e2ee9c98eb121d209142935818cd25573f89c67494bec173d54e&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213386853105934356/loccal2.webp?ex=65f54991&is=65e2d491&hm=ea468ce02378eab33a56067cc7ce7b7e33b5fd2d159ebcb320203c852be16d58&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213386852736700417/loccal3.webp?ex=65f54991&is=65e2d491&hm=d0e8d0e4b419f34a33cb4102dbcb531fd44ba7c18252d52df53f0f641fb84d72&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213386852334305290/loccal4.webp?ex=65f54991&is=65e2d491&hm=4b404bd1c34db3c446d0f5a2d770001af636bdc3db74c75ab83f655fa8d6b319&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213386851885518908/loccal5.webp?ex=65f54991&is=65e2d491&hm=ee32ed876a9360915566b522445362b934f5b02c93aba06e6639494df54a33bf&"
        ],
        desc: "Not only located within easy reach of various places of interests for your adventure, but staying at Loccal Collection Hotel Komodo will also give you a pleasant stay. This hotel is the perfect choice for couples seeking a romantic getaway or a honeymoon retreat. Enjoy the most memorable nights with your loved one by staying at Loccal Collection Hotel Komodo. Spa treatment is one of the main features of the hotel. Pamper yourself with the relaxing treatment that rejuvenates you.",
        source: "Traveloka",
        sourceURL: "https://www.traveloka.com/en-en/hotel/detail?spec=03-03-2024.04-03-2024.1.1.HOTEL.9000000966354.Loccal%20Collection%20Hotel%20Komodo.1&contexts=%7B%22inventoryRateKey%22%3A%22EPSy2lMQRUbs4Z%2BpcPzDIbq5l8JOBcwg%2FgAQ7s4L7YrH87ecHjJgWWYE139qp5Q3TNLSrDVIqOEcboNczsxyYpXL2WvGHaqiMknaaXu3aJUyHsGZcX44jhs%2BqFy07nDLzdPoEN8mT72XKB8FBTTfmaXK%2F%2FzWvKPRJXzfMzmIc82XoNF%2BfOpWhaXlFYj4va8Q5USsgtCsS0GG9hEGdGfATyLxFnopXVaO52x8SFnFz1TRsrF8D%2FT%2F%2Bo0E458ink7%2FsqmJsUnp0ShRH0h0tFzt5GX2TxBIU%2BKk8meDZxpYqBZOmsuEV5bHmxIznWKiQsmWjLQ0jRodfAh89X3XkTvRWRRNU4CmvXsOBubrUM%2B4BkUfut%2FyeYlVHq97pGyzXbiVF6SdGxy0EFSadsJgBu00ADqnDFN1iw7m5oI52bYX4d%2FAFdBS0lpwxijvCuTQ23IesnvB%2FAe3YrnRDyCtcT7zfv0rsDliuZML2axtjINmLrt%2ByLS3mEiQHWxlGEnqsEq8KMcXjTm43BkjSigWUMwXa0xM9TsD9yKwAPCboMG9ZyLSvOhopU6h4xzLBBBa7pdWfAkv1hTapZQUyw3ygC4AGrW5D65Rh2DLzsVHHfIErhPaJWkZgFm0q2wMeJRlSwYWv8072VdIDoMvEKIxNqJmxLTDPVuRdy1PtzIi14hv3K2fnIznLIT%2F5Z8w4lPVaFo3%22%7D&loginPromo=1&prevSearchId=1792393043425383516",
        price: "USD 110.33",
        rating: "8.3"
    },
    {
        title: "Meruorah Komodo Labuan Bajo",
        address: "Kawasan Marina Labuan Bajo, Jalan Soekarno Hatta, Labuan Bajo - Manggarai Barat, NTT 86711 Indonesia",
        imgURL: [
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213387439964557332/meruorah1.webp?ex=65f54a1d&is=65e2d51d&hm=cfc3a02e5957dc140eb386710adac0c7aa43aad251b70571e1407ca169a4a6b5&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213387441633886249/meruorah2.webp?ex=65f54a1d&is=65e2d51d&hm=edcedfc5b9752468cbc3b3f09ed5492ba03991c0db5864b538f1d99cd38f2b8b&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213387441277247538/meruorah3.webp?ex=65f54a1d&is=65e2d51d&hm=a1866cd85720b94079c81702f6aa35bf9e9c7c6c1c4f6ba33efdedb090384816&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213387440933572648/meruorah4.webp?ex=65f54a1d&is=65e2d51d&hm=773acf55b8473d34897a28e6a54848248bdf0591f82d846a51d0baf07a112dc7&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213387440346365972/meruorah5.webp?ex=65f54a1d&is=65e2d51d&hm=71db83e548dd890a859c7248d82362fdf8b360a2174b7073253cfb2b150bc5ad&"
        ],
        desc: "Meruorah Komodo Labuan Bajo is a hotel near Airport, an ideal accommodation while waiting for your next flight. Enjoy a satisfying place to rest during your transit.From business event to corporate gathering, Meruorah Komodo Labuan Bajo provides complete services and facilities that you and your colleagues need.Whether you are planning an event or other special occasions, Meruorah Komodo Labuan Bajo is a great choice for you with a large and well-equipped function room to suit your requirements.",
        source: "Traveloka",
        sourceURL: "https://www.traveloka.com/en-en/hotel/detail?spec=03-03-2024.04-03-2024.1.1.HOTEL.9000000406691.Meruorah%20Komodo%20Labuan%20Bajo.1&contexts=%7B%22inventoryRateKey%22%3A%22povEwB3ZzsU2C6pd%2B6MdU2B9D%2BXTtnp8xBPheXkh8zdM0tKsNUio4Rxug1zOzHJilcvZa8YdqqIySdppe7dolTIewZlxfjiOGz6oXLTucMvN0%2BgQ3yZPvZcoHwUFNN%2BZpcr%2F%2FNa8o9ElfN8zOYhzzZeg0X586laFpeUViPi9rxDke8%2B9K%2FUKUmyQEgJqCfYRIvEWeildVo7nbHxIWcXPVNGysXwP9P%2F6jQTjnyKeTv%2ByqYmxSenRKFEfSHS0XO3kZfZPEEhT4qTyZ4NnGlioFk6ay4RXlsebEjOdYqJCyZaMtDSNGh18CHz1fdeRO9FZFE1TgKa9ew4G5utQz7gGRWS6bi7h%2Fw2IxaeAsuP0oBoJvMSm%2BJYK0fG1rNkywkoSeOjRTl6ytxGba%2F42pjcyycAV0FLSWnDGKO8K5NDbch6ye8H8B7diudEPIK1xPvN%2BTW8Ky7dIz%2F8vuFaf4od3zzr6YNymnTk58iYKaBwFeu9eKx0jA7izbI%2B%2Bg2rqPRLdTEz1OwP3IrAA8Jugwb1nItK86GilTqHjHMsEEFrul1Z8CS%2FWFNqllBTLDfKALgAatbkPrlGHYMvOxUcd8gSuE9olaRmAWbSrbAx4lGVLBha%2FzTvZV0gOgy8QojE2ombEtMM9W5F3LU%2B3MiLXiG%2FcrZ%2BcjOcshP%2FlnzDiU9VoWjc%3D%22%7D&loginPromo=1&prevSearchId=1792396691774660037",
        price: "USD 154.59",
        rating: "8.7"
    },
    {
        title: "Sudamala Resort",
        address: "Jl. Pantai Pede, Km. 3, Gorontalo, Labuan Bajo, Labuan Bajo, Manggarai Barat, Nusa Tenggara Timur, Indonesia, 86554",
        imgURL: [
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213408168990875658/sudamala1.webp?ex=65f55d6b&is=65e2e86b&hm=e330cd9a2b45b3fb3b58e681bc45ad4f40228ecd86a965fee0d58755c4513157&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213408171075567627/sudamala2.webp?ex=65f55d6c&is=65e2e86c&hm=3d3a7f7e96c60fb6112970e4a4d9c01814f32280152d06327a8c976bdde2592e&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213408170706341919/sudamala3.webp?ex=65f55d6b&is=65e2e86b&hm=73a3092f6faa5b71f0f2ebb3c130afc6d951ae98d1f950bd5faf965634dd178f&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213408170177855538/sudamala4.webp?ex=65f55d6b&is=65e2e86b&hm=07cdcf67e61fc8a12dc8985db17093265f67ee798734923b7599b1c6e1a83043&",
            "https://cdn.discordapp.com/attachments/1204994105298526220/1213408169389203518/sudamala5.webp?ex=65f55d6b&is=65e2e86b&hm=600809651edf6c36ad2920c081fa5bef80dd80675b7de7189d7573007585b83d&"
        ],
        desc: "Whether you are planning an event or other special occasions, Sudamala Resort, Komodo, Labuan Bajo is a great choice for you with a large and well-equipped function room to suit your requirements. This resort is the perfect choice for couples seeking a romantic getaway or a honeymoon retreat. Enjoy the most memorable nights with your loved one by staying at Sudamala Resort, Komodo, Labuan Bajo. Sudamala Resort, Komodo, Labuan Bajo is the splendid choice for you who are seeking a luxurious treat for your holiday. Get pampered with the most excellent services and make your holiday memorable by staying here.",
        source: "Traveloka",
        sourceURL: "https://www.traveloka.com/en-en/hotel/indonesia/sudamala-resort-komodo-labuan-bajo-9000000724384?spec=03-03-2024.04-03-2024.1.1.HOTEL.9000000724384..1",
        price: "USD 134.55",
        rating: "9.1"
    },
]

export { accomodations };