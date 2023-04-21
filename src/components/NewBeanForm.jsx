import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const NewBeanForm = (props) => {

  const handleNewFormSubmission = (event) => {
    event.preventDefault();
    props.onCreateBean({ 
      name: event.target.name.value,
      origin:event.target.origin.value,
      roast: event.target.roast.value,
      price: parseFloat(event.target.price.value),
      quantityRemaining: parseInt(event.target.quantityRemaining.value),
      id: v4()
    });
  }

  return (
    <>
      <form id="help-form" className="flexed-down" onSubmit={handleNewFormSubmission}>
        <input 
          type="text" 
          name="name" 
          placeholder="name" /> 
        <input 
          type="text" 
          name="origin" 
          placeholder="origin" /> 
        <input 
          type="text" 
          name="roast" 
          placeholder="roast" /> 
        <input 
          type="number" 
          name="price" 
          step=".01"
          min="0"
          placeholder="price (ex: 3.45, 45)" /> 
        <input 
          type="number" 
          min="0"
          name="quantityRemaining" 
          placeholder="quantity remaining" /> 
        <button type="submit">candela!</button>
      </form>
    </>
  );
}

NewBeanForm.propTypes = {
  onCreateBean: PropTypes.func 
}

export default NewBeanForm;

