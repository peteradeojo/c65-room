import ConspiratorList from "@/components/ConspiratorList";
import homeStyle from "./Home.module.scss";

export default function Home({ conspirators }) {
  return (
    <>
      <div className={homeStyle.hero}>
        <p>what's happening <br />in <span>C-65</span></p>
      </div>

      <div className={"bodyCard " + homeStyle.body}>
        <h3 className={homeStyle.title}>The Program</h3>
        <p className="mt-1.5">
          C-65 aims to provide a platform for the youth of
          today to express themselves through the arts. We are a group of
          individuals who are passionate about the arts and want to provide a
          space for the youth to express themselves and be heard.
        </p>

        <h3 className={"mt-5 " + homeStyle.title}>Co-Conspirators</h3>
        <ConspiratorList conspirators={conspirators} />
      </div>
    </>
  );
}

Home.defaultProps = {
  conspirators: [
    {
      name: "@boluwatifee__",
      thumbnail: "https://ui-avatars.com/api/?name=Boluwatife",
      image: "https://ui-avatars.com/api/?name=Boluwatife",
      description: "Boluwatife is a 21 year old self-taught software engineer. He is passionate about the arts and is the founder of C-65. He is also a student at the University of Lagos where he is studying Computer Engineering.",
      link: "https://twitter.com/boluwatifee__",
    },
    {
      name: "@identity.id",
      thumbnail: "https://ui-avatars.com/api/?name=Amanda+Charles",
      description: "Charles is a 17 year old student who is passionate about the arts. He is a rapper and a singer who is currently working on his first EP. He is also a photographer and a graphic designer. He is the founder of C-65 and is passionate about providing a platform for the youth to express themselves through the arts.",
      link: "https://instagram.com/identity.id"
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
  ],
}