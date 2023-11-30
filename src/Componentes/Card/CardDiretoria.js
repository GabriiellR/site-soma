import AOS from 'aos';
import 'aos/dist/aos.css'

const CardDiretoria = (props) => {

    AOS.init();
    return <>

        <div class="col-md-4" data-aos="fade-left" data-aos-duration="2000">
            <div className="d-flex w-100 justify-content-center">
                <img src={props.imagem} alt="..." class="img-thumbnail rounded-circle" width="50%" />
            </div>
            <div class="pt-2">
                <h4 class="text-center mb-1 fw-bold">{props.nome}</h4>
                <h5 class="text-center fw-normal">{props.cargo}</h5>
            </div>
        </div>

    </>
}

export default CardDiretoria;