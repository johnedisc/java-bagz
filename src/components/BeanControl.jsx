import React from 'react';
import { v4 } from 'uuid';

class BeanControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      beanList: [...beanSeed]
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


const beanSeed = [
  { name: 'Arabica', origin: 'Brazil', roast: 'Medium', price: 9.99, key: v4(), id: 1, quantityRemaining: 105 },
  { name: 'Robusta', origin: 'Vietnam', roast: 'Dark', price: 7.99, key: v4(), id: 2, quantityRemaining: 20 },
  { name: 'Colombian', origin: 'Colombia', roast: 'Medium', price: 12.99, key: v4(), id: 3, quantityRemaining: 50 },
  { name: 'Sumatra', origin: 'Indonesia', roast: 'Dark', price: 10.99, key: v4(), id: 4, quantityRemaining: 80 },
  { name: 'Ethiopian', origin: 'Ethiopia', roast: 'Light', price: 11.99, key: v4(), id: 5, quantityRemaining: 30 },
  { name: 'Guatemala', origin: 'Guatemala', roast: 'Medium', price: 13.99, key: v4(), id: 6, quantityRemaining: 70 },
  { name: 'Kenyan', origin: 'Kenya', roast: 'Light', price: 12.99, key: v4(), id: 7, quantityRemaining: 90 },
  { name: 'Java', origin: 'Indonesia', roast: 'Medium', price: 9.99, key: v4(), id: 8, quantityRemaining: 45 },
  { name: 'Hawaiian', origin: 'Hawaii', roast: 'Medium', price: 15.99, key: v4(), id: 9, quantityRemaining: 25 },
  { name: 'Tanzanian', origin: 'Tanzania', roast: 'Medium', price: 11.99, key: v4(), id: 10, quantityRemaining: 60 },
  { name: 'Peruvian', origin: 'Peru', roast: 'Medium', price: 10.99, key: v4(), id: 11, quantityRemaining: 40 },
  { name: 'Costa Rican', origin: 'Costa Rica', roast: 'Medium', price: 12.99, key: v4(), id: 12, quantityRemaining: 75 },
  { name: 'Nicaraguan', origin: 'Nicaragua', roast: 'Medium', price: 10.99, key: v4(), id: 13, quantityRemaining: 55 },
  { name: 'Yemeni', origin: 'Yemen', roast: 'Dark', price: 13.99, key: v4(), id: 14, quantityRemaining: 35 },
  { name: 'Mocha', origin: 'Yemen', roast: 'Medium', price: 11.99, key: v4(), id: 15, quantityRemaining: 65 },
  { name: 'Panamanian', origin: 'Panama', roast: 'Light', price: 14.99, key: v4(), id: 16, quantityRemaining: 15 },
];
