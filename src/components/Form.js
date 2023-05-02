import React from 'react';
const Form = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { id: "help-form", className: "flexed-down", onSubmit: props.formSubmissionHandler },
            React.createElement("input", { type: "text", name: "name", placeholder: "name" }),
            React.createElement("input", { type: "text", name: "origin", placeholder: "origin" }),
            React.createElement("input", { type: "text", name: "roast", placeholder: "roast" }),
            React.createElement("input", { type: "number", name: "price", step: ".01", min: "0", placeholder: "price (ex: 3.45, 45)" }),
            React.createElement("input", { type: "number", min: "0", name: "quantityRemaining", placeholder: "quantity remaining" }),
            React.createElement("button", { type: "submit" }, props.buttonText))));
};
export default Form;
