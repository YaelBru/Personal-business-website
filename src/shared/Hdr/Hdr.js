import React from "react";
import styles from "./Hdr.module.css";

const Hdr = (props) => {
  return (
    <>
      <h2 className={styles.header}>{props.title}</h2>
      <p className={styles.paragraph}>{props.text}</p>
    </>
  );
};

export default Hdr;
