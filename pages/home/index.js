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