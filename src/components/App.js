import React from 'react';
import './../App.css';
import { Navbar } from './Navbar';
import { Footer } from './Navbar';
import { BeanControl } from './BeanControl';
import { Timer } from './Timer';
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'container flexed-down' },
            React.createElement(Navbar, null),
            React.createElement(Timer, null),
            React.createElement(BeanControl, null),
            React.createElement(Footer, null))));
}
export default App;
