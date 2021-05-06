export default function ConteudoBebidas(props) {
    const opcoesBebidas = [{
        titulo: "Coquinha gelada", //adicionar alt nas variáveis
        texto: "Lata 350ml",
        preco: 4.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }, {
        titulo: "Água de Coco",
        texto: "Garrafa 1000ml",
        preco: 7.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }, {
        titulo: "Cerveja",
        texto: "Garrafa 600ml",
        preco: 9.90,
        img: "https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg",
        selecionado: false,
        qtd: 0
    }];

    return (
        <>
            <h1 className="titulo-menu">Agora, sua bebida</h1>
            <ul className="menu-opcoes">
                {opcoesBebidas.map((objeto) => {
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