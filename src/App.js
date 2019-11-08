import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import NobelPrizeCategories from "./Pages/NobelPrizeCategories/NobelPrizeCategories";
import routes from "./routes/routes";
import NobelLaureates from "./Pages/NobelLaureates/NobelLaureates";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Route
          exact
          path="/Nobel-Laureates-App/"
          component={NobelPrizeCategories}
        />
        <Route exact path={routes.category} component={NobelLaureates} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
