import Head from "next/head";
import styles from "../styles/About.module.scss";

import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stockholm - Just another Website</title>
        <meta
          name="description"
          content="Product branding solutons and packiagin desing have been my main filed of expterise"
        />
        <link rel="icon" href="/Favicon.png" />
      </Head>

      <Header />
    </div>
  );
}
