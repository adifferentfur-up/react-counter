import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Counter from "./components/counter";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
