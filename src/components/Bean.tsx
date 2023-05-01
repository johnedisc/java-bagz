import React from "react";
import { BeanType } from './../interfaces/interfaces';

interface BeanProps {
  name: string,
  origin: string,
  roast: string,
  price: number,
  id: string,
  quantityRemaining: number,
  whenCoffeeClicked: (id: string) => void;
}

const listItemStyle = {
  alignItems: "center"
}

const Bean = (props: BeanProps) => {
  return (
    <>
      <div className="list-item flexed-down" style={listItemStyle} onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - {props.origin}</h3>
        <p>{props.roast} roast | ${props.price} | {props.quantityRemaining} lbs. remaing</p>
      </div>
    </>
  );
}

export default Bean;

