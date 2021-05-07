import TotalPedido from "./TotalPedido";
import BotaoFecharPedido from "./BotaoFecharPedido";

export default function RevisaoPedido(props) {
    let total = 0;
    somaTotal();

    function somaTotal() {
        props.pedido.forEach((objeto) => total += objeto.qtd * objeto.preco);
        return total;
    }

    function enviarMensagem() {
        let stringOpcoes = "";
        props.pedido.forEach((objeto) => {
            return  stringOpcoes += `- ${objeto.titulo} (${objeto.qtd}x)\n`;
        });
        console.log(stringOpcoes);  
        
        const textoPedido = 'Olá, gostaria de fazer o pedido: \n' + stringOpcoes + 'Total: R$ ' + total.toFixed(2).replace(".", ",");
        console.log(textoPedido);
        textoPedido = encodeURIComponent(textoPedido);
        window.open(`https://wa.me/5527981582571?text=${textoPedido}`);
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
            <BotaoFecharPedido enviarMensagem={enviarMensagem} />
        </div>
    );
}