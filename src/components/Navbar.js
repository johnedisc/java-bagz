import React from "react";
const componentStyle = {
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'center'
};
export function Navbar() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'flexed-row', style: componentStyle },
            React.createElement("h1", null, "java bagz"))));
}
export function Footer() {
    const footStyle = {
        backgroundColor: 'black',
        width: '100%',
        justifyContent: 'space-around',
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'flexed-row', style: footStyle },
            React.createElement("h3", null, "thanks for reading"),
            React.createElement("h3", null, "no vibing, please"))));
}
