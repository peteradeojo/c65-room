import style from "./index.module.scss";
import Link from "next/link";
import { MdLink } from 'react-icons/md';

const Modal = ({ setModalDisplay, modalDisplay }) => {
  return <div className={style.modal}>
    <div className={style.modalContent}>
      <div className={style.modalHeader}>
        <div className={style.img}>
          <img src={modalDisplay?.image} alt={modalDisplay?.name} cover />
        </div>
      </div>
      <div className={style.modalBody}>
        <p>{modalDisplay?.description}</p>

        <p className="mt-5"><a href={modalDisplay.link ?? ""} target="_blank" referrerPolicy="no-referrer"><MdLink /> Click here to view</a> </p>
      </div>
      <div className={style.modalFooter}>
        <button onClick={() => setModalDisplay(undefined)}>Close</button>
      </div>
    </div>
  </div>;
}

export default Modal;