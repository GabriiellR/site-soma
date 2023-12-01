
const MissaoVisaoValores = (props) => {

    return <>
        <div class="row">
            <div class="col-sm-1 col-md-1 col-lg-2 text-center">
                <img src={props.imagem} class="rounded-circle w-100" />
            </div>
            <div class="col-sm-11 col-md-11 col-lg-10">
                <h3 class="mb-2 mt-2 fs-2 fw-medium">{props.titulo}</h3>
                <span className='fw-medium fs-5'>{props.texto}</span>
            </div>
        </div>
    </>



}

export default MissaoVisaoValores;