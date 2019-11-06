import React, { Component } from "react";
import fetchData from "../../Services/fetchData";
import PrizeCategory from "../../Components/PrizeCategory";
import { GET_PRIZE_API } from "../../Constants/ServerUrls";
import LoadingIndicator from "../../Components/LoadingIndicator";

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
      console.log(getCategories);
      const prizeCategories = getCategories.prizes
        .map(value => value.category)
        .filter((value, index, _arr) => _arr.indexOf(value) == index);
      this.setState({ prizeCategories });
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    const { prizeCategories } = this.state;
    return (
      <div>
        <h3 className="App">Nobel Prize Category</h3>
        {prizeCategories.length ? (
          prizeCategories.map((category, categoryIndex) => {
            return (
              <PrizeCategory prizeCategory={category} key={categoryIndex} />
            );
          })
        ) : (
          <LoadingIndicator />
        )}
      </div>
    );
  }
}

export default NobelPrizeCategories;
