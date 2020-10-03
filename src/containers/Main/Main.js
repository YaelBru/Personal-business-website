import React, { Component } from "react";
import styles from "./Main.module.css";

import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Content from "../Content/Content";
import Footer from "../../components/Footer/Footer";


class Main extends Component {

  render() {

    return (
      <div>
        <Nav />
        <div className={styles.mainContainer}>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
