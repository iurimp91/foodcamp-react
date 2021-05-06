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
            setPratos([...pratos], pratos[id].selecionado = true);
        } else if(categoria === "bebidas") {
            setBebidas([...bebidas], bebidas[id].selecionado = true);
        } else {
            setSobremesas([...sobremesas], sobremesas[id].selecionado = true);
        }
    }

    return (    
        <div className="conteudo">
            <ConteudoPratos selecionar={selecionar} pratos={pratos} />
            <ConteudoBebidas selecionar={selecionar} bebidas={bebidas} />
            <ConteudoSobremesas selecionar={selecionar} sobremesas={sobremesas} />
        </div>
    );
}