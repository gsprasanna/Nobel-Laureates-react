import React from "react";

class LoadingIndicator extends React.Component {
  render() {
    return (
      <div>
        <img src={require("../assets/images/loading.gif")} alt={"loading"} />
      </div>
    );
  }
}

export default LoadingIndicator;
