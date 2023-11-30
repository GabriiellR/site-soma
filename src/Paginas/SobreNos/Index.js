import Transicao from "../../Componentes/Transicoes/Transicao.js";
import ParticlesSobreNos from '../../Componentes/Particles/Particles.js'


import SobreNos from './SobreNos.js';
import LinhaTempo from "./LinhaTempo/LinhaTempo.js";
import Valores from './Valores/Valores.js';
import CorpoDiretivo from "./CorpoDiretivo/CorpoDiretivo.js";
import Certificacao from "./Certificacao/Certificacao.js";
import NossaGente from "./LinhaTempo/NossaGente/NossaGente.js";
import Premios from './Premios/Premios.js'

import CardPrincipal from "../../Componentes/Card/CardPrincipal.js";



const SobreNosIndex = () => {
    return <>

        <ParticlesSobreNos />
        <CardPrincipal titulo="SOBRE NÓS" componente={<SobreNos />} />
        <LinhaTempo />
        <CardPrincipal titulo="NOSSOS VALORES" componente={<Valores />} />
        <CardPrincipal titulo="CORPO DIRETIVO" componente={<CorpoDiretivo />} />
        <CardPrincipal componente={<Certificacao />} />
        <NossaGente />
        <Premios />
    </>
};

export default Transicao(SobreNosIndex);