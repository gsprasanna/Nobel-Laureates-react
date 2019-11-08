import React, { Component } from "react";
import fetchData from "../../Services/fetchData";
import PrizeCategory from "../../Components/PrizeCategory";
import { GET_PRIZE_API } from "../../Constants/ServerUrls";
import LoadingIndicator from "../../Components/LoadingIndicator";
import { CardDeck } from "react-bootstrap/";

class NobelPrizeCategories extends Component {
  state = {
    prizeCategories: []
  };
  componentDidMount() {
    this.loadNobelPrizeCategoryData();
  }
  loadNobelPrizeCategoryData = async () => {
    try {
      const getCategories = await fetchData(GET_PRIZE_API, "GET");
      const prizeCategories = getCategories.prizes
        .map(value => value.category)
        .filter((value, index, _arr) => _arr.indexOf(value) === index);
      this.setState({ prizeCategories });
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    const { prizeCategories } = this.state;
    return (
      <div className="container">
        <h3 className="App">Nobel Prize Categories</h3>

        {prizeCategories.length ? (
          <CardDeck className="col-md-12">
            {prizeCategories.map((category, categoryIndex) => {
              return (
                <PrizeCategory prizeCategory={category} key={categoryIndex} />
              );
            })}
          </CardDeck>
        ) : (
          <LoadingIndicator />
        )}
      </div>
    );
  }
}

export default NobelPrizeCategories;
