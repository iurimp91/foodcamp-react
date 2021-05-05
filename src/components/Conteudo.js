import ConteudoBebidas from "./ConteudoBebidas";
import ConteudoSobremesas from "./ConteudoSobremesas";
import ConteudoPratos from "./ConteudoPratos";

export default function Conteudo() {

    return (    
        <div className="conteudo">
            <ConteudoPratos />
            <ConteudoBebidas />
            <ConteudoSobremesas />
        </div>
    );
}