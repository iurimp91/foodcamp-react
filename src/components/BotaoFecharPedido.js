import { Link } from "react-router-dom";

export default function BotaoFecharPedido(props) {
    return (
        <div className="botoes-fechar-cancelar">
            <button onClick={props.enviarMensagem}>Tudo certo, pode pedir!</button>
            <Link to="/">Cancelar</Link>
        </div> 
    );
}