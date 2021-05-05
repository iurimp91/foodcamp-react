import ReactDOM from 'react-dom';
import React from "react";
import Topo from "./components/Topo";
import Conteudo from './components/Conteudo';
import Rodape from "./components/Rodape";

function App() {
    return (
        <>
            <Topo />
            <Conteudo />
            <Rodape />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));

export default function selecionar(opcao) {
    const elemento = document.querySelector(opcao);
    elemento.style.boxShadow = "inset 0 0 0 5px #32B72F";
}