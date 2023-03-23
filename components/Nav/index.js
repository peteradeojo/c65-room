import Link from 'next/link';
import { useRef } from 'react';

import styles from './Nav.module.scss';

const Nav = () => {
  const linkRef = useRef();

  const setLink = () => {
    const elems = linkRef.current?.querySelectorAll(`li.${styles.active}`);
    elems?.forEach((elem) => {
      elem.classList.remove(styles.active);
    });

    const activeLink = linkRef.current?.querySelector(`li a[href="${window.location.pathname}"]`);
    activeLink?.parentElement.classList.add(styles.active);
  }

  setLink();

  return <nav className={styles.navBar}>
    <ul ref={linkRef}>
      {/* <li></li> */}
      <li className={styles.active}>
        <Link href="/" onClick={setLink}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={setLink}>
          About
        </Link>
      </li>
    </ul>
  </nav>;
}

export default Nav;