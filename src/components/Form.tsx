import React from 'react';

interface FormProps {
  formSubmissionHandler: (event: any) => void;
  buttonText: string;
}

const Form = (props: FormProps) => {
  return (
    <>
      <form id="help-form" className="flexed-down" onSubmit={props.formSubmissionHandler}>
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
        <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

export default Form;
