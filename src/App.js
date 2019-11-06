import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NobelPrizeCategories from "./Pages/NobelPrizeCategories/NobelPrizeCategories";
import routes from "./routes/routes";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Route exact path="/" component={NobelPrizeCategories} />
        <Route exact path={routes.category} component={Authors} />
      </div>
    );
  }
}

export default App;
