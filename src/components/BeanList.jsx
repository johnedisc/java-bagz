import React from "react";
import Bean from "./Bean";
import PropTypes from "prop-types";

function BeanList(props){
  return (
    <>
      {props.list.map((listItem) =>
        <Bean 
          whenCoffeeClicked = { props.onCoffeeSelection }
          name = { listItem.name }
          origin = { listItem.origin }
          roast = { listItem.roast }
          price = { listItem.price }
          quantityRemaining = { listItem.quantityRemaining }
          id = { listItem.id }
          key = { listItem.id }
        />
      )}
    </>
  );
}

BeanList.propTypes = {
  list: PropTypes.array,
  onCoffeeSelection: PropTypes.func
}


export default BeanList;

