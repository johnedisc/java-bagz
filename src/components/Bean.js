import React from "react";
const listItemStyle = {
    alignItems: "center"
};
const Bean = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "list-item flexed-down", style: listItemStyle, onClick: () => props.whenCoffeeClicked(props.id) },
            React.createElement("h3", null,
                props.name,
                " - ",
                props.origin),
            React.createElement("p", null,
                props.roast,
                " roast | $",
                props.price,
                " | ",
                props.quantityRemaining,
                " lbs. remaing"))));
};
export default Bean;
