import React from 'react';
import { v4 } from 'uuid';
import BeanList from './BeanList';
import NewBeanForm from './NewBeanForm';
import BeanDetail from './BeanDetail';

class BeanControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      mainBeanList: [...beanSeed],
      selectedCoffee: null
    };
  }

  handleNewForm = () => {
    this.setState(previousState => ({
      showForm: !previousState.showForm
    }));
  }

  handleConcatNewBean = (newBean) => {
  const updatedList = this.state.mainBeanList.concat(newBean);
  this.setState({
    mainBeanList: updatedList,
    showForm: false 
    });
  }

  handleChangingSelectedCoffee = (id) => {
    console.log(id);
    const selectedCoffee = this.state.mainBeanList.filter(element => element.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  render(){

    let visibleState = null;
    let buttonText = null;

    if (this.state.selectedCoffee != null) {
      visibleState = <CoffeeDetail 
        coffee={selectedCoffee} 
      />
    } else if (this.state.showForm) {
      visibleState = <NewBeanForm 
        onCreateBean={this.handleConcatNewBean}
      />
      buttonText= "return to list"
    } else {
      visibleState = <BeanList 
        list={this.state.mainBeanList}
        onCoffeeSelection={this.handleChangingSelectedCoffee}
        />;
      buttonText = "add a coffee";
    }
    return (
      <>
        {visibleState}
        <button id="form-ticket-button" onClick={this.handleNewForm}>{buttonText}</button>
      </>
    );

  }

}

export default BeanControl;


const beanSeed = [
  { name: 'Arabica', origin: 'Brazil', roast: 'Medium', price: 9.99, id: v4(), quantityRemaining: 105 },
  { name: 'Robusta', origin: 'Vietnam', roast: 'Dark', price: 7.99, id: v4(), quantityRemaining: 20 },
  { name: 'Colombian', origin: 'Colombia', roast: 'Medium', price: 12.99, id: v4(), quantityRemaining: 50 },
  { name: 'Sumatra', origin: 'Indonesia', roast: 'Dark', price: 10.99, id: v4(), quantityRemaining: 80 },
  { name: 'Ethiopian', origin: 'Ethiopia', roast: 'Light', price: 11.99, id: v4(), quantityRemaining: 30 },
  { name: 'Guatemala', origin: 'Guatemala', roast: 'Medium', price: 13.99, id: v4(), quantityRemaining: 70 },
  { name: 'Kenyan', origin: 'Kenya', roast: 'Light', price: 12.99, id: v4(), quantityRemaining: 90 },
  { name: 'Java', origin: 'Indonesia', roast: 'Medium', price: 9.99, id: v4(), quantityRemaining: 45 },
  { name: 'Hawaiian', origin: 'Hawaii', roast: 'Medium', price: 15.99, id: v4(), quantityRemaining: 25 },
  { name: 'Tanzanian', origin: 'Tanzania', roast: 'Medium', price: 11.99, id: v4(), quantityRemaining: 60 },
  { name: 'Peruvian', origin: 'Peru', roast: 'Medium', price: 10.99, id: v4(), quantityRemaining: 40 },
  { name: 'Costa Rican', origin: 'Costa Rica', roast: 'Medium', price: 12.99, id: v4(), quantityRemaining: 75 },
  { name: 'Nicaraguan', origin: 'Nicaragua', roast: 'Medium', price: 10.99, id: v4(), quantityRemaining: 55 },
  { name: 'Yemeni', origin: 'Yemen', roast: 'Dark', price: 13.99, id: v4(), quantityRemaining: 35 },
  { name: 'Mocha', origin: 'Yemen', roast: 'Medium', price: 11.99, id: v4(), quantityRemaining: 65 },
  { name: 'Panamanian', origin: 'Panama', roast: 'Light', price: 14.99, id: v4(), quantityRemaining: 15 }
];
