export default function RevisaoPedido() {
    return (
        <div className="conteudo-revisao">
            <h1 className="titulo-menu">Revise seu pedido</h1>
            <ul className="revisao-pedido">
                <li>
                    <span>Frango Yin Yang</span>
                    <span>14,90</span>
                </li>
                <li>
                    <span>Coquinha gelada</span>
                    <span>4,90</span>
                </li>
                <li>
                    <span>Pudim</span>
                    <span>7,90</span>
                </li>
                <li className="total-pedido">
                    <span>TOTAL</span>
                    <span>R$ 27,70</span>
                </li>
            </ul>
            <div className="botoes-fechar-cancelar">
                <button>Tudo certo, pode pedir!</button>
                <span>Cancelar</span>
            </div>
        </div>
    );
}