import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";
import NobelPrizeLogo from "../assets/images/NobelPrizeIcon.jpeg";
import { Card, Col } from "react-bootstrap/";

const PrizeCategory = ({ prizeCategory = "" }) => {
  return (
    <Col md={3}>
      <NavLink to={routes.category.replace(":category", prizeCategory)}>
        <Card className="col-md-12">
          <Card.Img variant="top" src={NobelPrizeLogo} />
          <Card.Body>
            <Card.Title>{prizeCategory}   </Card.Title>
          </Card.Body>
        </Card>
      </NavLink>
    </Col>
  );
};

PrizeCategory.propTypes = {
  prizeCategory: PropTypes.string.isRequired
};

export default PrizeCategory;
