import AOS from 'aos';
import 'aos/dist/aos.css'
import Collapse from '../../../Componentes/Collapse/Collapse';

const CardDiretoria = (props) => {

    AOS.init();
    return <>

        <div class="col-md-4" data-aos="fade-left" data-aos-duration="2000">
            <div className="d-flex w-100 justify-content-center">
                <img src={props.imagem} alt="..." class="img-thumbnail rounded-circle" width="50%" />
            </div>
            <div class="pt-2 d-flex  flex-column align-items-center">
                <h5 class="text-center mb-1 fw-bold">{props.nome}</h5>
                <span class="text-center fw-semibold fs-6">{props.cargo}</span>
                <span className='fs-6'>{props.curriculo}</span>
            </div>
        </div>

    </>
}

export default CardDiretoria;