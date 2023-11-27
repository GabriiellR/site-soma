import CardPrincipal from "../../Componentes/Card/CardPrincipal";
import Transicao from "../../Componentes/Transicoes/Transicao";

import './CanalEtica.css'
import ConteudoCanalEtica from "./ConteudoCanalEtica";


const CanalEtica = () => {

    return <>
        <div className="parallax-etica">
            <CardPrincipal titulo="CANAL DE ÉTICA" componente={<ConteudoCanalEtica />} />
        </div>
    </>
}

export default Transicao(CanalEtica);