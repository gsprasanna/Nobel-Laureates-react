import React, { Fragment } from "react";
import PropTypes from "prop-types";
import LoadingIndicator from "./LoadingIndicator";
import { Media } from "reactstrap";

const LaureatesSummary = ({
  laureatesList,
  year = "",
  category = "",
  details
}) => {
  return (
    <>
      {Array.isArray(laureatesList) ? (
        laureatesList.length ? (
          laureatesList.map((laureates, Index) => {
            let laureatesDetails = details.find(x => x.id === laureates.id);
            return (
              <>
                <Media key={Index}>
                  <Media body>
                    <Media className="header-color">
                      <h2>{laureates.firstname}</h2>
                    </Media>
                    <Media>Year : {year}</Media>
                    <Media>Prize Category : {category}</Media>
                    <Media>
                      Country :
                      {laureatesDetails.bornCountry == null
                        ? "NA"
                        : laureatesDetails.bornCountry}
                    </Media>
                    <br />
                    <Media>
                      Date of Birth :
                      {laureatesDetails.born == null
                        ? "NA"
                        : laureatesDetails.born}
                    </Media>
                    <Media>
                      Gender :
                      {laureatesDetails.gender == null
                        ? "NA"
                        : laureatesDetails.gender}
                    </Media>
                  </Media>
                </Media>
                <hr style={{ border: "1px dashed crimson" }} />
              </>
            );
          })
        ) : (
          <LoadingIndicator />
        )
      ) : (
        <Fragment></Fragment>
      )}
    </>
  );
};

LaureatesSummary.propTypes = {
  category: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default LaureatesSummary;
