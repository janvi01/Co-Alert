import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Front from "../src/Front";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Front} />
      </Switch>
      <Search />
    </BrowserRouter>
  );
}

export default App;
