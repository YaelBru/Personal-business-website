import React from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./ScrollUp.module.css";

const ScrollUp = () => {
  return (
    <div>
      <HashLink to="/#top" smooth>
       <button className={styles.scrollUpBtn}>⨇</button>
      </HashLink>
    </div>
  );
};

export default ScrollUp;
