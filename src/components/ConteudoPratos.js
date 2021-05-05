export default function ConteudoPratos(props) {
    const opcoesPratos = [{
        titulo: "Frango Yin Yang", //adicionar alt nas variáveis
        texto: "Um pouco de batata, um pouco de salada",
        preco: 14.90
    }, {
        titulo: "Arroz e Feijão",
        texto: "Um pouco de arroz, um pouco de feijão",
        preco: 11.90
    }, {
        titulo: "X-Podrão",
        texto: "Um nada de saúde, um nada de gourmet",
        preco: 9.90
    }];

    return (
        <>
            <h1 className="titulo-menu">Primeiro, seu prato</h1>
            <ul className="menu-opcoes">
                {opcoesPratos.map((objeto) => {
                    const {titulo, texto, preco} = objeto;

                    return (
                        <li className="opcao">
                            <img src="https://http2.mlstatic.com/D_NQ_NP_620438-MLB29512328329_022019-O.jpg" alt="frango" />
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