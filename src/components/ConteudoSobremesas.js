export default function ConteudoSobremesas(props) {
    const opcoesSobremesas = [{
        titulo: "Pudim", //adicionar alt nas variáveis
        texto: "Apenas pudim",
        preco: 7.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }, {
        titulo: "Petit Gateau",
        texto: "Sorvete de creme",
        preco: 14.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }, {
        titulo: "Sorvete caseiro",
        texto: "Sabor chocolate",
        preco: 8.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }];

    return (
        <>
            <h1 className="titulo-menu">Por fim, sua sobremresa</h1>
            <ul className="menu-opcoes">
                {opcoesSobremesas.map((objeto) => {
                    const {titulo, texto, preco, img} = objeto;

                    return (
                        <li className="opcao">
                            <img src={img} />
                            <h1 className="titulo-opcao">{titulo}</h1>
                            <span className="texto-opcao">{texto}</span>
                            <div className="preco-contador">
                                <span className="preco-opcao">R$ {preco.toFixed(2).replace(".", ",")}</span>
                                <span>
                                    <button className="subtrair">-</button>
                                    1
                                    <button className="adicionar">+</button>
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}