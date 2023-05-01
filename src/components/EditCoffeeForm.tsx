import React from "react";
import { BeanType } from "../interfaces/interfaces";
import Form from "./Form";

interface EditCoffeeProps {
  bean: BeanType;
  onEditCoffee: (bean: BeanType) => void;
}

const EditCoffeeForm = (props: EditCoffeeProps) => {
  const { bean, onEditCoffee } = props;

  const handleEditFormSubmission = (event) => {
    event.preventDefault();
    onEditCoffee({
      name: event.target.name.value,
      origin: event.target.origin.value,
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

export default EditCoffeeForm;
