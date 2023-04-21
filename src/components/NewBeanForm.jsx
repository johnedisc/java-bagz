import React from "react";
import PropTypes from "prop-types";

function NewBeanForm(props){

  return (
    <>
      <form id="help-form" className="flexed-down">
        <input 
          type="text" 
          name="names" 
          placeholder="Pair Names" /> 
        <input 
          type="text" 
          name="location" 
          placeholder="Location" /> 
        <textarea 
          name="issue"
          placeholder="Describe your issue." />
        <button type="submit">candela!</button>
      </form>
    </>
  );
}

NewBeanForm.propTypes = {
  onCreateBean: PropTypes.func 
}

export default NewBeanForm;

