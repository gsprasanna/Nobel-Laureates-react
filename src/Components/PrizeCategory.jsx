import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";

const PrizeCategory = ({ prizeCategory }) => {
  // console.log();
  return (
    <div>
      <NavLink to={routes.category.replace(":category", prizeCategory)}>
        {prizeCategory}
      </NavLink>
    </div>
  );
};

PrizeCategory.propTypes = {
  prizeCategory: PropTypes.string.isRequired
};

export default PrizeCategory;
