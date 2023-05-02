import React from "react";
import Form from "./Form";
const EditCoffeeForm = (props) => {
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
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Form, { formSubmissionHandler: handleEditFormSubmission, buttonText: "update coffee" })));
};
export default EditCoffeeForm;
