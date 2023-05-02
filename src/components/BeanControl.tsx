import { v4 } from 'uuid';
import BeanList from './BeanList';
import NewBeanForm from './NewBeanForm';
import BeanDetail from './BeanDetail';
import EditCoffeeForm from './EditCoffeeForm';
import React, { useState, useEffect } from 'react';
import { BeanType } from './../interfaces/interfaces';
import db from '../firebase';
import { collection, addDoc } from "firebase/firestore";

export const BeanControl = () => {

  const [showForm, setShowForm] = useState(false)
  const [mainBeanList, setMainBeanList] = useState([...beanSeed])
  const [selectedCoffee, setSelectedCoffee] = useState<BeanType | null>(null)
  const [editing, setEditing] = useState(false)

  const handleNewForm = () => {
    if (selectedCoffee !== null) {
      setShowForm(false);
      setSelectedCoffee(null);
      setEditing(false);
    } else {
      setShowForm(!showForm);
    }
  }

  const handleConcatNewBean = async (newBean: BeanType) => {
    console.log('que mierda', newBean);
    await addDoc(collection(db, "beans"), newBean);
    setShowForm(false);
  }

  const handleDeleteBean = (id: string) => {
    setMainBeanList(mainBeanList.filter(element => element.id !== id));
    setSelectedCoffee(null);
  }

  const handleChangingSelectedCoffee = (id: string) => {
    setSelectedCoffee(mainBeanList.filter(element => element.id === id)[0]);
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditList = (beanToEdit: BeanType) => {
    if (selectedCoffee !== null) {
    const editedMainBeanList = mainBeanList
      .filter(element => element.id !== selectedCoffee.id)
      .concat(beanToEdit);
    setMainBeanList(editedMainBeanList);
    setSelectedCoffee(null);
    setEditing(false);
    }
  }

  const handleSellCoffee = (id: string) => {
    if (selectedCoffee !== null) {
      setSelectedCoffee(mainBeanList.filter(element => element.id === id)[0]);
      if (selectedCoffee.quantityRemaining > 0) {
        const newQuantity = { quantityRemaining: selectedCoffee.quantityRemaining - 1 };
        const tempCoffee = (Object.assign({}, selectedCoffee, newQuantity));
  //      console.log('temp', tempCoffee);
  //      console.log('update', selectedCoffee);
        const editedMainBeanList = mainBeanList
          .filter(element => element.id !== selectedCoffee.id)
          .concat(tempCoffee);
        setMainBeanList(editedMainBeanList);
        setSelectedCoffee(tempCoffee);
      }
    }
  }

  let visibleState = null;
  let buttonText = null;

  if (editing && selectedCoffee !== null) {
    visibleState= <EditCoffeeForm 
      bean={selectedCoffee}
      onEditCoffee={handleEditList}
    />
    buttonText= "return to list";
  } else if (selectedCoffee !== null) {
    visibleState = <BeanDetail 
      bean={selectedCoffee} 
      onClickingDelete={handleDeleteBean}
      onClickingEdit={handleEditClick}
      onClickingSell={handleSellCoffee}
    />
    buttonText= "return to list";
  } else if (showForm) {
    visibleState = <NewBeanForm 
      onCreateBean={handleConcatNewBean}
    />
    buttonText= "return to list";
  } else {
    visibleState = <BeanList 
      list={mainBeanList}
      onCoffeeSelection={handleChangingSelectedCoffee}
      />;
    buttonText = "add a coffee";
  }

  return (
    <>
      {visibleState}
      <span><button id="form-ticket-button" onClick={handleNewForm}>{buttonText}</button></span>
    </>
  );


}

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
