import ReactDOM from 'react-dom';
import React from "react";
import Topo from "./components/Topo";

function App() {
    return (
        <Topo />
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));