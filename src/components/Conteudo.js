import ConteudoBebidas from "./ConteudoBebidas";
import ConteudoSobremesas from "./ConteudoSobremesas";
import ConteudoPratos from "./ConteudoPratos";

export default function Conteudo(props) {
    const {pratos, bebidas, sobremesas, selecionar, adicionar, subtrair} = props;

    return (    
        <div className="conteudo">
            <ConteudoPratos pratos={pratos} selecionar={selecionar} adicionar={adicionar} subtrair={subtrair} />
            <ConteudoBebidas bebidas={bebidas} selecionar={selecionar} adicionar={adicionar} subtrair={subtrair} />
            <ConteudoSobremesas sobremesas={sobremesas} selecionar={selecionar} adicionar={adicionar} subtrair={subtrair} />
        </div>
    );
}