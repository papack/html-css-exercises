import * as React from "react";
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
    );
  }
}

export default Header;
