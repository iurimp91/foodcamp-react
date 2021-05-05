import ReactDOM from 'react-dom';
import React from "react";
import Topo from "./components/Topo";

function App() {
    return (
        <>
            <Topo />
            <div className="conteudo">
                <h1 className="titulo-menu">Primeiro, seu prato</h1>
                <ul className="menu-opcoes">
                    <li className="opcao">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg" alt="frango" />
                        <h1 className="titulo-opcao">Frango Yin Yang</h1>
                        <span className="texto-opcao">Um pouco de batata, um pouco de salada</span>
                        <div className="preco-contador">
                            <span className="preco-opcao">R$ 14,90</span>
                            <span>
                                <button className="subtrair">-</button>
                                1
                                <button className="adicionar">+</button>
                            </span>
                        </div>
                    </li>
                </ul> 
            </div>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));