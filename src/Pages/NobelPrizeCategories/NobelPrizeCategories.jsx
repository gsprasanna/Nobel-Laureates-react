import React, { Component } from "react";
import PrizeCategory from "../../Components/PrizeCategory";
import LoadingIndicator from "../../Components/LoadingIndicator";
import { CardDeck } from "react-bootstrap/";

class NobelPrizeCategories extends Component {
  state = {
    prizeCategories: []
  };
  render() {
    const { prizeCategories } = this.props;
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
