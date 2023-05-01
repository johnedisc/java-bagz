import React from "react";
import { v4 } from "uuid";
import Form from "./Form";
import { BeanType } from "../interfaces/interfaces";

interface NewBeanFormProps {
  onCreateBean: (bean: BeanType) => void;
}

const NewBeanForm = (props: NewBeanFormProps) => {

  const handleNewFormSubmission = (event: any) => {
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

export default NewBeanForm;

