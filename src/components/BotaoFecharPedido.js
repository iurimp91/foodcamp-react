import { Link } from "react-router-dom";

export default function BotaoFecharPedido() {
    return (
        <div className="botoes-fechar-cancelar">
            <button>Tudo certo, pode pedir!</button>
            <Link to="/">Cancelar</Link>
        </div> 
    );
}