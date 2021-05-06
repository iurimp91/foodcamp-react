export default function BotaoPedido(props) {
    console.log(props);
    
    return (
        <>
            {props.liberarPedido(true) ? props.children[1] : props.children[0]}
        </>
    );
}