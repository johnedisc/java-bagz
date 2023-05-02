import React from "react";
function BeanDetail(props) {
    const componentStyle = {
        justifyContent: 'center',
        alignItems: 'center'
    };
    const { bean, onClickingDelete, onClickingEdit, onClickingSell } = props;
    console.log(bean);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flexed-down", style: componentStyle },
            React.createElement("h3", null,
                bean.name,
                " details"),
            React.createElement("p", null, bean.origin),
            React.createElement("p", null,
                bean.roast,
                " roast"),
            React.createElement("p", null,
                "$",
                bean.price,
                "/lbs"),
            React.createElement("p", null,
                bean.quantityRemaining,
                " lbs. remaining")),
        React.createElement("span", null,
            React.createElement("button", { onClick: () => onClickingSell(bean.id) }, "sell coffee")),
        React.createElement("span", null,
            React.createElement("button", { onClick: onClickingEdit }, "update coffee")),
        React.createElement("span", null,
            React.createElement("button", { onClick: () => onClickingDelete(bean.id) }, "remove coffee from list"))));
}
export default BeanDetail;
