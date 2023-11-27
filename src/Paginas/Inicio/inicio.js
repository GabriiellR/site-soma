import videoInicio from '../../Imagens/Videos/Inicio/videosoma2.mp4';
import Transicao from '../../Componentes/Transicoes/Transicao';

import './inicio.css';

const Inicio = () => {

    return <>
        <main>
            <video muted autoplay="autoplay" loop="true" width="100%" className='video-inicio' type="video/mp4">
                <source src={videoInicio} type='video/mp4'></source>
            </video>
        </main>
    </>
};

export default Transicao(Inicio);