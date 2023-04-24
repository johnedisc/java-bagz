import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import Form from "./Form";

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
      <Form 
        formSubmissionHandler={handleNewFormSubmission}
        buttonText= 'add this bean'
      />
    </>
  );
}

NewBeanForm.propTypes = {
  onCreateBean: PropTypes.func 
}

export default NewBeanForm;

