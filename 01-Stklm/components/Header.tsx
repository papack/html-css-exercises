import * as React from "react";
import Link from "next/link";

import styles from "./Header.module.scss";

export interface Props {}

export interface State {}

class Header extends React.Component<Props, State> {
  render() {
    return (
      <header>
        <nav>
          <ul className={styles.navFlexBox}>
            <li className={styles.navFlexItems}>
              <Link href="/">
                <a>Stklm</a>
              </Link>
            </li>
            <li className={styles.navFlexItems}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className={styles.navFlexItems}>
              <Link href="/work">
                <a>Work</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
