const conspirators = [
  {
    name: "@boluwatifee__",
    thumbnail: "https://ui-avatars.com/api/?name=Boluwatife",
    image: "https://ui-avatars.com/api/?name=Boluwatife",
    description: "Boluwatife is a 21 year old self-taught software engineer. He is passionate about the arts and is the founder of C-65. He is also a student at the University of Lagos where he is studying Computer Engineering.",
  },
  {
    name: "@identity.1",
    thumbnail: "https://ui-avatars.com/api/?name=Amanda+Charles",
    description: "Charles is a 17 year old student who is passionate about the arts. He is a rapper and a singer who is currently working on his first EP. He is also a photographer and a graphic designer. He is the founder of C-65 and is passionate about providing a platform for the youth to express themselves through the arts.",
  },
  {
    name: "@pluto_c65",
    thumbnail: "https://ui-avatars.com/api/?name=Pluto",
    description: "Pluto is a 17 year old student who is passionate about the arts. He is a rapper and a singer who is currently working on his first EP. He is also a photographer and a graphic designer. He is the founder of C-65 and is passionate about providing a platform for the youth to express themselves through the arts.",
  },
  {
    name: "@tomi",
    thumbnail: "https://ui-avatars.com/api/?name=Tomi",
    description: "Pluto is a 17 year old student who is passionate about the arts. He is a rapper and a singer who is currently working on his first EP. He is also a photographer and a graphic designer. He is the founder of C-65 and is passionate about providing a platform for the youth to express themselves through the arts.",
  },
];

export default function handler(req, res) {
  res.status(200).json(conspirators);
}