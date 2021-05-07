import ReactDOM from 'react-dom';
import React from "react";
import Topo from "./components/Topo";
import Conteudo from './components/Conteudo';
import Rodape from "./components/Rodape";
import RevisaoPedido from "./components/RevisaoPedido";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    const [pratos, setPratos] = React.useState([{
        id: 0,
        titulo: "Frango Yin Yang",
        texto: "Um pouco de batata, um pouco de salada",
        preco: 14.90,
        img: "./images/frango_yin_yang.png",
        selecionado: false,
        qtd: 0
    }, { 
        id: 1,
        titulo: "Arroz e Feijão",
        texto: "Um pouco de arroz, um pouco de feijão",
        preco: 11.90,
        img: "./images/arroz-feijao.jpg",
        selecionado: false,
        qtd: 0
    }, {
        id: 2,
        titulo: "X-Podrão",
        texto: "Um nada de saúde, um nada de gourmet",
        preco: 9.90,
        img: "./images/podrao.jpg",
        selecionado: false,
        qtd: 0
    }]);

    const [bebidas, setBebidas] = React.useState([{
        id: 0,
        titulo: "Coquinha gelada",
        texto: "Lata 350ml",
        preco: 4.90,
        img: "./images/coquinha_gelada.png",
        selecionado: false,
        qtd: 0
    }, {
        id: 1,
        titulo: "Água de Coco",
        texto: "Garrafa 1000ml",
        preco: 7.90,
        img: "./images/agua-de-coco.jpg",
        selecionado: false,
        qtd: 0
    }, {
        id: 2,
        titulo: "Cerveja",
        texto: "Garrafa 600ml",
        preco: 9.90,
        img: "./images/cervejas.jpg",
        selecionado: false,
        qtd: 0
    }]);

    const [sobremesas, setSobremesas] = React.useState([{
        id: 0,
        titulo: "Pudim",
        texto: "Apenas pudim",
        preco: 7.90,
        img: "./images/pudim.png",
        selecionado: false,
        qtd: 0
    }, {
        id: 1,
        titulo: "Petit Gateau",
        texto: "Sorvete de creme",
        preco: 14.90,
        img: "./images/petit-gateau.jpg",
        selecionado: false,
        qtd: 0
    }, {
        id: 2,
        titulo: "Sorvete caseiro",
        texto: "Sabor chocolate",
        preco: 8.90,
        img: "./images/sorvete.jpg",
        selecionado: false,
        qtd: 0
    }]);

    const [pedido, setPedido] = React.useState([]);

    function selecionar(id, categoria) {
        if(categoria === "pratos") {
            if (pratos[id].qtd === 0) {
                setPratos([...pratos], pratos[id].selecionado = true, pratos[id].qtd = 1);    
            }            
        } else if(categoria === "bebidas") {
            if (bebidas[id].qtd === 0) {
                setBebidas([...bebidas], bebidas[id].selecionado = true, bebidas[id].qtd = 1);    
            }    
        } else {
            sobremesas[id].qtd > 0 || setSobremesas([...sobremesas], sobremesas[id].selecionado = true, sobremesas[id].qtd = 1);
        }
        liberarPedido();
    }

    function adicionar(e, id, categoria) {
        e.stopPropagation();
        if(categoria === "pratos") {
            setPratos([...pratos], pratos[id].qtd++);
        } else if(categoria === "bebidas") {
            setBebidas([...bebidas], bebidas[id].qtd++);
        } else {
            setSobremesas([...sobremesas], sobremesas[id].qtd++);
        }
        liberarPedido();
    }

    function subtrair(e, id, categoria) {
        e.stopPropagation();
        if(categoria === "pratos") {
            setPratos([...pratos], pratos[id].qtd--);
            if(pratos[id].qtd === 0) {
                pratos[id].selecionado = false;
            }
        } else if(categoria === "bebidas") {
            setBebidas([...bebidas], bebidas[id].qtd--);
            if(bebidas[id].qtd === 0) {
                bebidas[id].selecionado = false;
            }
        } else {
            setSobremesas([...sobremesas], sobremesas[id].qtd--);
            if(sobremesas[id].qtd === 0) {
                sobremesas[id].selecionado = false;
            }
        }
        liberarPedido();
    }

    function liberarPedido() {
        let liberarPrato = pratos.find((objeto) => objeto.selecionado ? true : false);
        let liberarBebida = bebidas.find((objeto) => objeto.selecionado ? true : false);
        let liberarSobremesa = sobremesas.find((objeto) => objeto.selecionado ? true : false);
        if (liberarPrato !== undefined && liberarBebida !== undefined && liberarSobremesa !== undefined) {
            return true;
        } else {
            return false;
        }
    }

    function fecharPedido() {
        const pratosPedido = pratos.filter((objeto) => objeto.selecionado);
        const bebidasPedido = bebidas.filter((objeto) => objeto.selecionado);
        const sobremesasPedido = sobremesas.filter((objeto) => objeto.selecionado);
        setPedido([...pratosPedido, ...bebidasPedido, ...sobremesasPedido]);
    }

    return (
        <Router>
            <Topo />
            <Switch>
                <Route exact path="/">
                    <Conteudo pratos={pratos} bebidas={bebidas} sobremesas={sobremesas} selecionar={selecionar} adicionar={adicionar} subtrair={subtrair} />
                    <Rodape liberarPedido={liberarPedido} fecharPedido={fecharPedido} />
                </Route>
                <Route path="/RevisaoPedido">
                    <RevisaoPedido pedido={pedido} />
                </Route> 
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));