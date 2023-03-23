import style from "./index.module.scss";
import { useState } from "react";

import Image from "next/image";
import Modal from "../ConspiratorModal";

const Conspirator = ({ name, image, link, thumbnail, description }) => {
  const [modalDisplay, setModalDisplay] = useState();

  return <>
    <div className={style.badge} onClick={() => setModalDisplay({ name, image, link, description })}>
      <div className={style.img}>
        <img src={thumbnail} alt={name} width={150} height={150} />
      </div>
      <div className={style.name}>
        <p>{name}</p>
      </div>
    </div>.

    {modalDisplay !== undefined ? <Modal modalDisplay={modalDisplay} setModalDisplay={setModalDisplay} /> : null}
  </>
}

export default Conspirator;