import ConteudoBebidas from "./ConteudoBebidas";
import ConteudoSobremesas from "./ConteudoSobremesas";
import ConteudoPratos from "./ConteudoPratos";
import React from "react";

export default function Conteudo() {
    const [pratos, setPratos] = React.useState([{
        id: 0,
        titulo: "Frango Yin Yang",
        texto: "Um pouco de batata, um pouco de salada",
        preco: 14.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }, { 
        id: 1,
        titulo: "Arroz e Feijão",
        texto: "Um pouco de arroz, um pouco de feijão",
        preco: 11.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }, {
        id: 2,
        titulo: "X-Podrão",
        texto: "Um nada de saúde, um nada de gourmet",
        preco: 9.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }]);

    const [bebidas, setBebidas] = React.useState([{
        id: 0,
        titulo: "Coquinha gelada",
        texto: "Lata 350ml",
        preco: 4.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }, {
        id: 1,
        titulo: "Água de Coco",
        texto: "Garrafa 1000ml",
        preco: 7.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }, {
        id: 2,
        titulo: "Cerveja",
        texto: "Garrafa 600ml",
        preco: 9.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }]);

    const [sobremesas, setSobremesas] = React.useState([{
        id: 0,
        titulo: "Pudim",
        texto: "Apenas pudim",
        preco: 7.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }, {
        id: 1,
        titulo: "Petit Gateau",
        texto: "Sorvete de creme",
        preco: 14.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }, {
        id: 2,
        titulo: "Sorvete caseiro",
        texto: "Sabor chocolate",
        preco: 8.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }]);

    function selecionar(id, categoria) {
        if(categoria === "pratos") {
            setPratos([...pratos], pratos[id].selecionado = true, pratos[id].qtd = 1);
        } else if(categoria === "bebidas") {
            setBebidas([...bebidas], bebidas[id].selecionado = true, bebidas[id].qtd = 1);
        } else {
            setSobremesas([...sobremesas], sobremesas[id].selecionado = true, sobremesas[id].qtd = 1);
        }
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
    } 

    return (    
        <div className="conteudo">
            <ConteudoPratos pratos={pratos} selecionar={selecionar} adicionar={adicionar} subtrair={subtrair} />
            <ConteudoBebidas bebidas={bebidas} selecionar={selecionar} adicionar={adicionar} subtrair={subtrair} />
            <ConteudoSobremesas sobremesas={sobremesas} selecionar={selecionar} adicionar={adicionar} subtrair={subtrair} />
        </div>
    );
}