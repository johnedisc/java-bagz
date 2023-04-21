import React from 'react';

class BeanControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    };
  }

  render(){

    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.loaded) {
      currentlyVisibleState = 'good morn';
      buttonText = "blast off";
    }
    return (
      <>
        {currentlyVisibleState}
        <button id="form-ticket-button">{buttonText}</button>
      </>
    );

  }

}

export default BeanControl;

