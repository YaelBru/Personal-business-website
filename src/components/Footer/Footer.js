import React from "react";
import styles from "./Footer.module.css";
import logoComponents from "./logos";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const logos = logoComponents;

  const icons = logos.map((logoComponent) => {
    return (
      <div key={logoComponent.id} className={styles.logoWrapper}>
        <a href={logoComponent.href}>
          <logoComponent.component className={styles.logo} />
        </a>
      </div>
    );
  });

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInfo}>
        <div className={styles.footerContact}>{icons}</div>
      </div>
      <p className={styles.copyright}>
        Made by Yael Bru | All rights reserved ©{currentYear}
      </p>
    </div>
  );
};

export default Footer;
