import React from "react";
import "./App.css";
import Main from "./containers/Main/Main";

import { BrowserRouter } from "react-router-dom";
import ScrollUp from "./shared/ScrollUp/ScrollUp";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
        <ScrollUp />
      </div>
    </BrowserRouter>
  );
}

export default App;
