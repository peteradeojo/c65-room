import style from "./Layout.module.scss";

import Head from "next/head";
import Nav from "../Nav";

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Head>
        <title>C65: The Program</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <Nav /> */}
      <main>{children}</main>
    </div>
  );
}

export default Layout;