import React, { Component } from "react";
import fetchData from "../../Services/fetchData";
import { GET_LAUREATES_API } from "../../Constants/ServerUrls";
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
    debugger;
    const { match = {} } = this.props;
    const { params = {} } = match;
    const { category: selectedCategory = "" } = params;
    this.setState({ selectedCategory: selectedCategory });
    const categoriesList = this.props.categoriesList;
    const filteredCategories = categoriesList.prizes.filter(
      prize => prize["category"] === selectedCategory
    );
    const laureatesList = filteredCategories.sort((a, b) => b.year - a.year);
    this.setState({ laureatesList });
    this.loadNobelLaureatesData();
  }
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
