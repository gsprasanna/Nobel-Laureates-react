import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import NobelPrizeCategories from "./Pages/NobelPrizeCategories/NobelPrizeCategories";
import routes from "./routes/routes";
import NobelLaureates from "./Pages/NobelLaureates/NobelLaureates";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { GET_PRIZE_API } from "./Constants/ServerUrls";
import fetchData from "./Services/fetchData";

class App extends Component {
  state = {
    prizeCategories: [],
    categoriesList: []
  };
  componentDidMount() {
    const { history, location } = this.props;
    if (location.pathname === "/") {
      history.push("/Nobel-Laureates");
    }
    this.loadNobelPrizeCategoryData();
  }
  loadNobelPrizeCategoryData = async () => {
    try {
      const getCategories = await fetchData(GET_PRIZE_API, "GET");
      const prizeCategories = getCategories.prizes
        .map(value => value.category)
        .filter((value, index, _arr) => _arr.indexOf(value) === index);
      this.setState({ prizeCategories, categoriesList: getCategories });
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    const { prizeCategories, categoriesList } = this.state;
    return (
      <div>
        <Header />
        <Route
          exact
          path={"/Nobel-Laureates"}
          render={() => (
            <NobelPrizeCategories prizeCategories={prizeCategories} />
          )}
        />
        <Route
          exact
          path={routes.category}
          render={props => (
            <NobelLaureates {...props} categoriesList={categoriesList} />
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
