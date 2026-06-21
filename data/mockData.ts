export type StructureItem = {
  id: string;
  title: string;
  location: string;
  era: string;
  image_placeholder: string;
  description: string;
};

export type Category = {
  id: string;
  name: string;
  visual_cue: string;
  image_url: string;
  items: StructureItem[];
};

export const categoriesData: Category[] = [
  {
    id: "archaeological",
    name: "Archaeological",
    visual_cue: "Classic column structures (e.g., Smyrna Agora)",
    image_url: "https://images.unsplash.com/photo-1503152394-c571994fd383?q=80&w=800&auto=format",
    items: [
      {
        id: "arch-01",
        title: "Smyrna Agora",
        location: "Namazgah, Konak",
        era: "Hellenistic & Roman Period",
        image_placeholder: "https://images.unsplash.com/photo-1548661710-7f540c9c56d6?q=80&w=1600&auto=format",
        description: "The administrative and commercial heart of ancient Smyrna. Its well-preserved basilicas, stoas, and monumental arches reveal the strict grid planning and grand scale of Roman civic architecture."
      },
      {
        id: "arch-02",
        title: "Ephesus Library of Celsus",
        location: "Selçuk",
        era: "Roman Period (110s AD)",
        image_placeholder: "https://upload.wikimedia.org/wikipedia/commons/8/84/Ephesus_Celsus_Library_Fa%C3%A7ade.jpg",
        description: "A masterpiece of Roman architecture, featuring an intricate facade with double columns and niches. It demonstrates the sophisticated structural engineering and aesthetic refinement of the era."
      }
    ]
  },
  {
    id: "modern",
    name: "Brutalist & Modern Architecture",
    visual_cue: "Raw concrete and geometric forms (e.g., Kültürpark Pavilions)",
    image_url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format",
    items: [
      {
        id: "mod-01",
        title: "Kültürpark Pavilion Structures",
        location: "Alsancak, Konak",
        era: "1930s - 1950s",
        image_placeholder: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format",
        description: "Functional geometry and wide spans. These pavilions strip away ornamentation, leaving behind the pure, brutalist concrete surfaces that defined the rationalism of early republican architecture."
      },
      {
        id: "mod-02",
        title: "Central Bank of İzmir",
        location: "Pasaport",
        era: "1970s",
        image_placeholder: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format",
        description: "A radical monumental block rising in the city center. Its exposed concrete texture and rhythmic vertical panels create a massive interplay of light and shadow."
      }
    ]
  },
  {
    id: "historical",
    name: "Historical Places",
    visual_cue: "Stone masonry and Levantine textures (e.g., Kemeraltı)",
    image_url: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format",
    items: [
      {
        id: "hist-01",
        title: "Kemeraltı Bazaar",
        location: "Konak",
        era: "17th Century onwards",
        image_placeholder: "https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a?q=80&w=1600&auto=format",
        description: "A dense, labyrinthine commercial center shaped by centuries of trade. The organic urban layout features historic caravanserais, courtyards, and narrow streets that prioritize human-scale spatial experience."
      },
      {
        id: "hist-02",
        title: "Kızlarağası Hanı",
        location: "Kemeraltı, Konak",
        era: "1744",
        image_placeholder: "https://images.unsplash.com/photo-1585068205423-889ce32551ec?q=80&w=1600&auto=format",
        description: "A quintessential Ottoman urban caravanserai. Built with solid stone masonry, its rational courtyard plan provided both secure commercial storage and a serene inner spatial refuge from the bustling bazaar."
      }
    ]
  }
];
