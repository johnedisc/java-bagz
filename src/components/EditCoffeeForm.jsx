import React from "react";
import Form from "./Form";
import PropTypes from "prop-types";

const EditCoffeeForm = (props) => {
  const { bean } = props;

  const handleEditFormSubmission = (event) => {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value,
      origin:event.target.origin.value,
      roast: event.target.roast.value,
      price: parseFloat(event.target.price.value),
      quantityRemaining: parseInt(event.target.quantityRemaining.value),
      id: bean.id
    });
  }

  return (
    <>
      <Form 
        formSubmissionHandler={handleEditFormSubmission}
        buttonText="update coffee"
      />
    </>
  );
}

EditCoffeeForm.propTypes = {
  bean: PropTypes.object,
  onEditCoffee: PropTypes.func
}

export default EditCoffeeForm;
