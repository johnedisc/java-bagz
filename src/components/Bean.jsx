import React from "react";
import PropTypes from "prop-types";

function Bean(props){
  return (
    <>
      <div className="list-item">
        <h3>{props.name} - {props.origin}</h3>
        <p>{props.roast}</p>
        <p>{props.price}</p>
        <p>{props.quantityRemaining}</p>
      </div>
    </>
  );
}

Bean.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string
};

export default Bean;

