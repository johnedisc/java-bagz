import React from "react";
import PropTypes from "prop-types";

const listItemStyle = {
  alignItems: "center"
}

const Bean = (props) => {
  return (
    <>
      <div className="list-item flexed-down" style={listItemStyle} onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - {props.origin}</h3>
        <p>{props.roast} roast | ${props.price} | {props.quantityRemaining} lbs. remaing</p>
      </div>
    </>
  );
}

Bean.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  quantityRemaining: PropTypes.number,
  whenCoffeeClicked: PropTypes.func
};

export default Bean;

