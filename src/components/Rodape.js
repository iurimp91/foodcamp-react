import BotaoPedido from "./BotaoPedido";
import { Link } from "react-router-dom";

export default function Rodape(props) {
    return (
        <div className="rodape">
            <BotaoPedido liberarPedido={props.liberarPedido}>
                <button className="botao-fechado">Selecione os 3 itens<br />para fechar o pedido</button>
                <Link to="/RevisaoPedido" onClick={props.fecharPedido} className="botao-aberto">Fechar pedido</Link>
            </BotaoPedido>
        </div>
    );
}   