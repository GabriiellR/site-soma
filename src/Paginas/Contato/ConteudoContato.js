import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons'

const ConteudoContato = () => {

    return <>
        <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="text-center">
                    <span className="fs-2 fw-medium w-auto px-2 bg-secondary text-white">GERAL</span>
                </div>

                <div className='row mt-4'>
                    <div className='col-sm-12 col-md-12 col-lg-6 w-100 text-center'>
                        <div className='d-flex flex-column gap-3'>
                            <div> <span className='fs-3'><FontAwesomeIcon icon={faPhone} /> <small>+55 (31) 3307-3000</small></span></div>
                            <div><span className='fs-3'><FontAwesomeIcon icon={faAt} /> <small>contato@somalogistica.com.br</small></span></div>
                        </div>
                    </div>
                </div>


                <div className='row mt-4'>
                    <div className='col-sm-12 col-md-12 col-lg-6 w-100'>
                        <div className="text-center">
                            <span className="fs-2 fw-medium w-auto px-2 bg-secondary text-white">COMERCIAL</span>
                        </div>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-sm-12 col-md-12 col-lg-6 w-100 text-center'>
                        <div className='d-flex flex-column gap-3'>
                            <div> <span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /><small> Comercial - +55 (31) 98411-9112</small></span></div>
                            <div><span className='fs-3'><FontAwesomeIcon icon={faAt} /> <small>comercial@somalogistica.com.br</small></span></div>
                        </div>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-sm-12 col-md-12 col-lg-6 w-100'>
                        <div className="text-center">
                            <span className="fs-2 fw-medium w-auto px-2 bg-secondary text-white">CENTRAL DE CARGAS</span>
                        </div>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-sm-12 col-md-12 col-lg-6 w-100 text-center'>
                        <div className='d-flex flex-column gap-3'>
                            <div> <span className='fs-3'><FontAwesomeIcon icon={faPhone} /><small> Central - +55 (31) 3307-3004</small></span></div>
                            <div><span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Agregados - +55 (31) 98472-8073</small></span></div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">

                <div className="text-center">
                    <span className="fs-2 fw-medium w-auto px-2 bg-secondary text-white">OPERAÇÃO DEDICADA</span>
                </div>

                <div className='row mt-4'>
                    <div className='col-sm-12 col-md-12 col-lg-6 w-100 text-center'>
                        <div className='d-flex flex-column gap-3'>
                            <div> <span className='fs-3'><FontAwesomeIcon icon={faPhone} /> <small>Barão de Cocais MG +55 (31) 3837-2348 </small></span></div>
                            <div> <span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Bauru SP +55 (14) 99900-3787 </small></span></div>
                            <div> <span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Canaã dos Carajás PA +55 (94) 99155-8304 </small></span></div>
                            <div> <span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Sabará MG +55 (31) 3837-2348 </small></span></div>
                            <div> <span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Itabira MG +55 (31) 97150-7831 </small></span></div>
                            <div> <span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Rio Piracicaba MG +55 (31) 99714-6040 </small></span></div>
                            <div> <span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Curvelo / João Pinheiro MG +55 (38) 99741-8312  </small></span></div>
                        </div>
                    </div>
                </div>


                <div className='row mt-4'>
                    <div className='col-sm-12 col-md-12 col-lg-6 w-100'>
                        <div className="text-center">
                            <span className="fs-2 fw-medium w-auto px-2 bg-secondary text-white">TRANSPORTE RODOVIÁRIO</span>
                        </div>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-sm-12 col-md-12 col-lg-6 w-100 text-center'>
                        <div className='d-flex flex-column gap-3'>
                            <div> <span className='fs-3'><FontAwesomeIcon icon={faPhone} /><small> Barão de Cocais - +55 (31) 3837-1861</small></span></div>
                            <div><span className='fs-3'><FontAwesomeIcon icon={faPhone} /> <small>Ipatinga - +55 (31) 3821-6981</small></span></div>
                            <div><span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Guarulhos - +55 (11) 97457-5765</small></span></div>
                            <div><span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Pircacicaba - +55 (11) 99563-9705</small></span></div>
                            <div><span className='fs-3'><FontAwesomeIcon icon={faPhone} /> <small>Santa Luzia MG - +55 (31) 3641-1818</small></span></div>
                            <div><span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>João Monlevade MG - +55 (31) 98498-7264</small></span></div>
                            <div><span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Porto Real RJ - +55 (31) 99564-5576</small></span></div>
                            <div><span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Volta Redonda RJ - +55 (31) 99874-6550</small></span></div>
                            <div><span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Rio de Janeiro RJ - +55 (21) 97555-3555</small></span></div>
                            <div><span className='fs-3'><FontAwesomeIcon icon={faWhatsapp} /> <small>Viana ES - +55 (31) 99626-3311</small></span></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>

}

export default ConteudoContato;