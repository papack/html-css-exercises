import Head from "next/head";
import styles from "../styles/Home.module.scss";

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

      <header>
        <nav>
          <ul className={styles.navFlexBox}>
            <li className={styles.navFlexItems}>
              <a href="#">Stklm</a>
            </li>
            <li className={styles.navFlexItems}>
              <a href="#">About</a>
            </li>
            <li className={styles.navFlexItems}>
              <a href="#">Work</a>
            </li>
          </ul>
        </nav>
      </header>

      <section className={styles.hero}>
        <ul>
          <li>Hello World!</li>
        </ul>
        <p>
          Product branding solutions and packaging design have been my main
          filed of expertise for years. Browse through some of my professional
          work an chekc out my branding projects as well!
        </p>
        <a>Discover All</a>
      </section>
    </div>
  );
}
