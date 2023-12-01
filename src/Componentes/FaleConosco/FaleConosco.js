import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion, useAnimation } from 'framer-motion';

import './FaleConosco.css'
import { useState } from 'react';

const FaleConosco = () => {


    const [aberto, setAberto] = useState(false);
    const controls = useAnimation();

    const toggleFeedbackArea = () => {
        setAberto(!aberto);
        controls.start({ width: aberto ? 0 : '350px' });
    };


    return (
        <>
            <motion.div className="feedback-form"  
                        animate={controls}
                        initial={{ width: 0 }}
                        transition={{duration: 0.5}}>

                <a href="#" className="feedback-form-btn btn btn-lg botao-flutua" onClick={toggleFeedbackArea}>
                    Fale conosco
                </a>

                <div className="feedback_form_area_inner d-flex flex-column gap-2">
                    <h3 class="fs-4">Nossos contatos</h3>
                    <div className='fs-6'>Atendimento geral <div className='d-flex align-items-center gap-2'> <FontAwesomeIcon icon={faPhone} /> +55 (31) 3307-3000</div></div>
                    <div className='fs-6'>Comercial  <div className='d-flex align-items-center gap-2'><a className='text-decoration-none text-white' href="https://wa.me/5531984119112"><FontAwesomeIcon icon={faWhatsapp} /> +55 (31) 98411-9112</a></div></div>
                    <div className='fs-6'>Central de Cargas <div className='d-flex align-items-center gap-2'> <FontAwesomeIcon icon={faPhone} /> +55 (31) 3307-3004</div></div>
                    <div className='fs-6'>Agregados <div className='d-flex align-items-center gap-2'><a className='text-decoration-none text-white' href="https://wa.me/5531984728073"><FontAwesomeIcon icon={faWhatsapp} /> +55 (31) 98472-8073</a></div></div>
                    <div className='fs-6'>Unidades <div className='d-flex align-items-center gap-2'><a className='text-decoration-none text-white' href="https://wa.me/5531984119112"> <FontAwesomeIcon icon={faWhatsapp} /> +55 (31) 98411-9112</a></div></div>
                    <div className='fs-6'>E-mail<div className='d-flex align-items-center gap-2'> <FontAwesomeIcon icon={faEnvelope} /> contato@somalogistica.com.br</div></div>

                </div>
            </motion.div>

        </>
    );

}
export default FaleConosco;