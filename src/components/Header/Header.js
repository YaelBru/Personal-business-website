import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerBackground}>
      <div className={styles.h1Container}>
        <h1 className={styles.h1Text}>טאיה בקשייב</h1>
        <div className={styles.pContainer}>
          <p className={styles.pText}>
            מומחית לעיסוי רפואי, עיסוי משולב וסדנאות עיסוי לזוגות
          </p>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Header;
