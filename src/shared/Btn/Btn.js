import React from "react";
import styles from "./Btn.module.css";

const Btn = (props) => {
  return (
    <button name={props.name} type={props.type} className={styles.btn}>
      {props.value}
    </button>
  );
};

export default Btn;
