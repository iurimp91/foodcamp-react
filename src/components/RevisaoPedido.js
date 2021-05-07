import TotalPedido from "./TotalPedido";
import BotaoFecharPedido from "./BotaoFecharPedido";

export default function RevisaoPedido(props) {
    let total = 0;
    somaTotal();

    function somaTotal() {
        props.pedido.forEach((objeto) => total += objeto.qtd * objeto.preco);
        return total;
    }

    return (
        <div className="conteudo-revisao">
            <h1 className="titulo-menu">Revise seu pedido</h1>
            <ul className="revisao-pedido">
                {props.pedido.map((objeto) => 
                    <li>
                        <span>{objeto.titulo}</span>
                        <div>
                            <span className="quantidade-pedido">{`${objeto.qtd}x `}</span>
                            <span>{objeto.preco.toFixed(2).replace(".", ",")}</span>
                        </div>
                    </li>
                )}
                <TotalPedido total={total} />
            </ul>
            <BotaoFecharPedido />
        </div>
    );
}