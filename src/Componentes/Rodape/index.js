import logoGenyx from '../../Imagens/Rodape/logo_genyx.png';
import logoLughe from '../../Imagens/Rodape/logo_lughe.png';
import logoSoma from '../../Imagens/Rodape/logo_soma_vertical.png';
import logoGtpw from '../../Imagens/Rodape/thumb-selo.png';
import logoAbnt from '../../Imagens/Rodape/certificado.png';
import logoDuns from '../../Imagens/Rodape/dun-number.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons'

import './index.css';
import FaleConosco from '../FaleConosco/FaleConosco';

const Rodape = () => {

    return <>

        <FaleConosco />


        <div className='row mt-5 w-100'>

            <div className='container bg-light'>
                <div className='d-flex flex-wrap justify-content-around gap-4'>

                    <div className='d-flex flex-column'>
                        <div className="fs-3 text-center">Empresas do grupo</div>

                        <div className='d-flex flex-column align-items-center'>
                            <div> <img src={logoGenyx} className='mt-4' /></div>
                            <div> <img src={logoLughe} className='mt-4' /></div>
                        </div>
                    </div>

                    <div>
                        <div><img src={logoSoma} className='mt-4' /></div>
                    </div>

                    <div>
                        <div><img src={logoGtpw} height="140px" className='mt-4' /></div>
                    </div>

                    <div>
                        <div><img src={logoAbnt} height="140px" className='mt-4' /></div>
                    </div>

                    <div className='d-flex flex-column'>

                        <div className='d-flex flex-column gap-3'>
                            <div className="fs-3">Siga-nos nas redes sociais</div>

                            <div className='d-flex gap-3 justify-content-center'>
                                <a className='icone-redes'><FontAwesomeIcon icon={faFacebook} size='2xl' /></a>
                                <a className='icone-redes'><FontAwesomeIcon icon={faLinkedin} size='2xl' /></a>
                                <a className='icone-redes'><FontAwesomeIcon icon={faYoutube} size='2xl' /></a>
                                <a className='icone-redes'><FontAwesomeIcon icon={faInstagram} size='2xl' /></a>
                            </div>

                            <div className='d-flex flex-column align-items-center'>
                                <div className="fs-3">Registro DUNS</div>
                                <div className='d-flex align-items-center'>
                                    <div><img src={logoDuns} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Rodape;