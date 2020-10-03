import React, { Component } from "react";
import About from "../../components/About/About";
import List from "../../components/List/List";
import Contact from "../../components/Contact/Contact";

class Content extends Component {

  contactHandler(event){
     event.preventDefault();
     console.log('Sent a message!');
  }

  render() {
    return (
      <>
        <List />
        <About />
        <Contact sendMessage={this.contactHandler} />
      </>
    );
  }
}

export default Content;
