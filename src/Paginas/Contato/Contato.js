import CardPrincipal from '../../Componentes/Card/CardPrincipal';
import ParticlesIndex from '../../Componentes/Particles/Particles';
import Localizacao from './Localizacao.js';
import ConteudoContato from './ConteudoContato.js';
import Transicao from '../../Componentes/Transicoes/Transicao.js';



const Contato = () => {

    return <>
        <ParticlesIndex />
        <CardPrincipal titulo="FALE CONOSCO" componente={<ConteudoContato />} />

        <CardPrincipal componente={<Localizacao />} />
    </>
}

export default Transicao(Contato);