import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewBeanForm(props){

  return (
    <>
      <form id="help-form" className="flexed-down" onSubmit={handleNewTicketFormSubmission}>
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
};

export default NewBeanForm;

