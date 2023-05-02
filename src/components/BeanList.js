import React from "react";
import Bean from "./Bean";
function BeanList(props) {
    return (React.createElement(React.Fragment, null, props.list.map((listItem) => React.createElement(Bean, { whenCoffeeClicked: props.onCoffeeSelection, name: listItem.name, origin: listItem.origin, roast: listItem.roast, price: listItem.price, quantityRemaining: listItem.quantityRemaining, id: listItem.id, key: listItem.id }))));
}
export default BeanList;
