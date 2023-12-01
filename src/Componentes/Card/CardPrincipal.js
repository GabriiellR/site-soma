import AOS from 'aos';
import 'aos/dist/aos.css'

const CardPrincipal = (props) => {

    AOS.init();

    return <>
        <div class="container bg-light px-5 pb-5" data-aos="fade-right" data-aos-duration="1000">
            <div class="row mt-3">
                <div class="col-sm-12 col-md-12 col-lg-12">

                    {props.titulo &&
                        <div className="row mt-4">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="d-flex justify-content-center">
                                    <span className="fs-2 fw-medium w-auto px-2 bg-secondary text-white">{props.titulo.toUpperCase()}</span>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
            <div className='row'>
                <div className='cols-m-12 col-md-12 col-lg-12'>
                    {props.componente}
                </div>
            </div>
        </div>

    </>


};

export default CardPrincipal;