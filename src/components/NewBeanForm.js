import React from "react";
//import { v4 } from "uuid";
import Form from "./Form";
const NewBeanForm = (props) => {
    const handleNewFormSubmission = (event) => {
        event.preventDefault();
        props.onCreateBean({
            name: event.target.name.value,
            origin: event.target.origin.value,
            roast: event.target.roast.value,
            price: parseFloat(event.target.price.value),
            quantityRemaining: parseInt(event.target.quantityRemaining.value)
            //      id: v4()
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Form, { formSubmissionHandler: handleNewFormSubmission, buttonText: 'add this bean' })));
};
export default NewBeanForm;
