export default function BotaoRevisaoPedido(props) {
    
    return (
        <>
            {props.liberarPedido(true) ? props.children[1] : props.children[0]}
        </>
    );
}