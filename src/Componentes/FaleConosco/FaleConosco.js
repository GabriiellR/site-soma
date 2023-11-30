import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './FaleConosco.css'

const FaleConosco = () => {

    const ControlaFaleConosco = () => {

        var teste = document.getElementsByClassName('feedback_form_area');

        teste.styles = ''

    }


    return <>
        <div id="feedback-form" class="feedback-form" onClick={ControlaFaleConosco()}>
            <a href="#" class="feedback-form-btn btn btn-lg botao-flutua">Fale conosco</a>
            <div class="feedback_form_area">
                <div class="feedback_form_area_inner">
                    <h3 class="mb-3">Nossos contatos</h3>
                    <p className='fs-4'>Atendimento geral<br /> <FontAwesomeIcon icon={faPhone} /> +55 (31) 3307-3000</p>
                    <p className='fs-4'>Comercial <br /> <a href="https://wa.me/5531984119112"><FontAwesomeIcon icon={faWhatsapp} /> +55 (31) 98411-9112</a></p>
                    <p className='fs-4'>Central de Cargas <br /> <FontAwesomeIcon icon={faPhone} /> +55 (31) 3307-3004</p>
                    <p className='fs-4'>Agregados <br /> <a href="https://wa.me/5531984728073" ><FontAwesomeIcon icon={faWhatsapp} /> +55 (31) 98472-8073</a></p>
                    <p className='fs-4'>Unidades <br /> <a href="https://wa.me/5531984119112"> <FontAwesomeIcon icon={faWhatsapp} /> +55 (31) 98411-9112</a></p>
                    <p className='fs-4'>E-mail<br /> <FontAwesomeIcon icon={faEnvelope} /> contato@somalogistica.com.br</p>
                </div>
            </div>
        </div>



    </>


}
export default FaleConosco;