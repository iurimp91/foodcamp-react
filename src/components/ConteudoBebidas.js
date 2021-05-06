export default function ConteudoBebidas(props) {
    
    return (
        <>
            <h1 className="titulo-menu">Agora, sua bebida</h1>
            <ul className="menu-opcoes">
                {props.bebidas.map((objeto) => {
                    const {id, titulo, texto, preco, img, selecionado, qtd} = objeto;

                    return (
                        <li onClick={() => {props.selecionar(id, "bebidas")}} className={selecionado ? "opcao selecionado" : "opcao"}>
                            <img src={img} />
                            <h1 className="titulo-opcao">{titulo}</h1>
                            <span className="texto-opcao">{texto}</span>
                            <div className="preco-contador">
                                <span className="preco-opcao">R$ {preco.toFixed(2).replace(".", ",")}</span>
                                <span className={selecionado || "escondido"}>
                                    <button onClick={(e) => props.subtrair(e, id, "bebidas")} className="subtrair">-</button>
                                    {qtd}
                                    <button onClick={(e) => props.adicionar(e, id, "bebidas")} className="adicionar">+</button>
                                </span>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}