import React, { Component } from "react";
import fetchData from "../../Services/fetchData";
import { GET_PRIZE_API, GET_LAUREATES_API } from "../../Constants/ServerUrls";
import LoadingIndicator from "../../Components/LoadingIndicator";
import LaureatesSummary from "../../Components/LaureatesSummary";
import LazyLoad from "react-lazyload";

class NobelLaureates extends Component {
  state = {
    laureatesList: [],
    selectedCategory: "",
    laureatesDetails: []
  };
  componentDidMount() {
    const { match = {} } = this.props;
    debugger;
    const { params = {} } = match;
    const { category: selectedCategory = "" } = params;
    this.setState({ selectedCategory: selectedCategory });
    debugger;
    this.loadNobelPrizeCategoryData();
    debugger;
    this.loadNobelLaureatesData();
  }
  loadNobelPrizeCategoryData = async () => {
    try {
      const categoriesList = await fetchData(GET_PRIZE_API, "GET");
      const filteredCategories = categoriesList.prizes.filter(
        prize => prize["category"] === this.state.selectedCategory
      );
      const laureatesList = filteredCategories.sort((a, b) => b.year - a.year);
      this.setState({ laureatesList });
    } catch (e) {
      console.error(e);
    }
  };
  loadNobelLaureatesData = async () => {
    try {
      const laureatesDetails = await fetchData(GET_LAUREATES_API, "GET");
      this.setState({ laureatesDetails: laureatesDetails.laureates });
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    const { laureatesList, laureatesDetails } = this.state;
    debugger;
    return (
      <div className="container">
        <h3 className="App" sticky="top">
          {"Nobel Prize Winners"}
        </h3>
        {laureatesList.length && laureatesDetails.length ? (
          laureatesList.map((laureatesItem, Index) => {
            return (
              <LazyLoad key={Index} placeholder={<LoadingIndicator />}>
                <LaureatesSummary
                  laureatesList={laureatesItem.laureates}
                  year={laureatesItem.year}
                  category={laureatesItem.category}
                  key={Index}
                  details={laureatesDetails}
                />
              </LazyLoad>
            );
          })
        ) : (
          <LoadingIndicator />
        )}
      </div>
    );
  }
}

export default NobelLaureates;
