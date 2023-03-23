import style from "./index.module.scss";

import Conspirator from "../Conspirator";

const Conspirators = ({ conspirators }) => {
  return (
    <div className={style.conspirators}>
      {conspirators?.map((conspirator, index) => (
        <Conspirator
          key={index}
          name={conspirator.name}
          image={conspirator.image}
          link={conspirator.link}
          description={conspirator.description}
          thumbnail={conspirator.thumbnail}
          className={style.badge}
        />
      ))}
    </div>
  );
}

export default Conspirators;