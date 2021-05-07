export default function TotalPedido(props) {
    return (
        <li className="total-pedido">
            <span>TOTAL</span>
            <span>R$ {props.total.toFixed(2).replace(".", ",")}</span>
        </li>
    );
}