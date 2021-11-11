import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./style.css";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/test" exact component={Test} />
        <Route path="/result" exact component={Result} />
      </BrowserRouter>
    </div>
  );
}

export default App;
