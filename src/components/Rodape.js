import BotaoPedido from "./BotaoPedido";

export default function Rodape(props) {
    return (
        <div className="rodape">
            <BotaoPedido liberarPedido={props.liberarPedido}>
                <button className="botao-fechado">Selecione os 3 itens<br />para fechar o pedido</button>
                <button className="botao-aberto">Fechar pedido</button>
            </BotaoPedido>
        </div>
    );
}   