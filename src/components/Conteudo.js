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

    function selecionar(id) {
        setPratos([...pratos], pratos[id].selecionado = true);
    }

    return (    
        <div className="conteudo">
            <ConteudoPratos selecionar={selecionar} pratos={pratos} />
            <ConteudoBebidas />
            <ConteudoSobremesas />
        </div>
    );
}