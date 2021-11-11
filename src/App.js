import React from "react";
import { HashRouter, Route } from "react-router-dom";

import "./style.css";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" exact component={Home} />
        <Route path="/YoutheRoom" exact component={Home} />
        <Route path="/test" exact component={Test} />
        <Route path="/result" exact component={Result} />
      </HashRouter>
    </div>
  );
}

export default App;
