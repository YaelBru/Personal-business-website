import React from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./NavItem.module.css";

const NavItem = (props) => {
    return (
      <HashLink className={styles.navItemLink} to={props.scrollTo} smooth>
        {props.navItemName}
      </HashLink>
    );
};


export default NavItem;