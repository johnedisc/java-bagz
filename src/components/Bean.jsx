import React from "react";
import PropTypes from "prop-types";

const listItemStyle = {
  alignItems: "center"
}

function Bean(props){
  return (
    <>
      <div className="list-item flexed-down" style={listItemStyle}>
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
  quantityRemaining: PropTypes.number
};

export default Bean;

