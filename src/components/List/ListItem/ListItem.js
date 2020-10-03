import React from "react";
import styles from "./ListItem.module.css";


const ListItem = (props) => {
  return (
    <div className={styles.listItemContainer}>
      <div>
        <img className={styles.serviceIcon} src={require(`../../../assets/${props.icon}`)} alt="Icon" />
      </div>
      <h3>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default ListItem;
