import React, { useLayoutEffect, useState } from "react";
import styles from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";
import NavDropdown from "./NavDropdown/NavDropdown";
import logo from "../../assets/logo.jpg";
import Button from "@material-ui/core/Button";

const Nav = () => {
  const [size, setSize] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {setSize(window.innerWidth)};
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <nav className={styles.navMenu} id="top">
      {size > 600 && (
        <div className={`${styles.navItemsWrapper}`}>
          <div className={styles.navUl}>
            <Button>
              <NavItem navItemName="אודות" scrollTo="/#about" />
            </Button>
            <Button>
              <NavItem navItemName="טיפולים" scrollTo="/#services" />
            </Button>
            <Button>
              <NavItem navItemName="יצירת קשר" scrollTo="/#contact" />
            </Button>
          </div>
        </div>
      )}

      {size <= 600 && <NavDropdown />}

      <div className={styles.imgContainer}>
        <a href="/" className={styles.link}>
          <img className={styles.imgLogo} src={logo} alt="logo" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
