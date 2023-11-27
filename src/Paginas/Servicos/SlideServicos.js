import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalSimples from "../../Componentes/Modal/ModalSimples";

const SlideServicos = (props) => {

    return <>
        <div class="mb-5 mt-5">
            <div class="row">
                <div class="col-md-6 col-sm-6 pr-1 pl-1">
                    <div id="carousel" class="carousel slide">
                        <div class="carousel-inner">

                            {props.imagens ? props.imagens.map((imagem, index) => (
                                <div className={`caroulsel-item ${index == 0 ? 'active' : ''}`} data-slide-number={index}><img src={imagem} className="d-block w-100" /> </div>
                            )) : ''}
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="text-left center-block">
                        <div class="heading-title padding_half">
                            <h4 class="cinza_escuro mb-2 mt-2"><span class="cor_titulo">{props.titulo}</span></h4>
                            <p class="cinza_escuro servicoTexto">{props.texto} </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="carousel-thumbs" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row mx-0">
                                {props.imagens ? props.imagens.map((imagem, index) => (

                                    <div class={`thumb col-2 px-1 py-2 ${index == 0 ? 'selected' : ''}`} data-target="#carousel" data-slide-to={index}><img src={imagem} class="img-fluid" /></div>

                                )) : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {props.imagens && 

                <ModalSimples tituloBotao={`${<FontAwesomeIcon icon={faPlus} />} Mais fotos`} tituloModal={props.titulo} conteudo="" />
            }

        </div >
    </>


}

export default SlideServicos;