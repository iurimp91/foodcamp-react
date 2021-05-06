export default function ConteudoPratos(props) {
    
    return (
        <>
            <h1 className="titulo-menu">Primeiro, seu prato</h1>
            <ul className="menu-opcoes">
                {props.pratos.map((objeto) => {
                    const {id, titulo, texto, preco, img, selecionado, qtd} = objeto;

                    return (
                        <li onClick={() => {props.selecionar(id, "pratos")}} className={selecionado ? "opcao selecionado" : "opcao"}>
                            <img src={img} />
                            <h1 className="titulo-opcao">{titulo}</h1>
                            <span className="texto-opcao">{texto}</span>
                            <div className="preco-contador">
                                <span className="preco-opcao">R$ {preco.toFixed(2).replace(".", ",")}</span>
                                <span className={selecionado || "escondido"}>
                                    <button onClick={(e) => props.subtrair(e, id, "pratos")} className="subtrair">-</button>
                                    {qtd}
                                    <button onClick={(e) => props.adicionar(e, id, "pratos")} className="adicionar">+</button>
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}