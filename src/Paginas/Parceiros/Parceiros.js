import CardPrincipal from "../../Componentes/Card/CardPrincipal";
import Transicao from "../../Componentes/Transicoes/Transicao";

import './Parceiros.css'
import ConteudoParceiros from "./ConteudoParceiros";

const Parceiros = () => {

    return (

        <div class="paralax-parceiros">
            <CardPrincipal titulo="PARCEIROS" componente={<ConteudoParceiros />} />
        </div>

    )
};

export default Transicao(Parceiros);