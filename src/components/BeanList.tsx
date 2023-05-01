import React from "react";
import Bean from "./Bean";
import { BeanType } from "../interfaces/interfaces";

interface BeanListProps {
  list: BeanType[];
  onCoffeeSelection: () => void;
}

function BeanList(props: BeanListProps){
  return (
    <>
      {props.list.map((listItem) =>
        <Bean 
          whenCoffeeClicked = { props.onCoffeeSelection }
          name = { listItem.name }
          origin = { listItem.origin }
          roast = { listItem.roast }
          price = { listItem.price }
          quantityRemaining = { listItem.quantityRemaining }
          id = { listItem.id }
          key = { listItem.id }
        />
      )}
    </>
  );
}

export default BeanList;

