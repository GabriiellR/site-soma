const CardPremios = (props) => {


    return <>
        <div class="card">
            <img src={props.imagem} class="card-img-top" />
            <div class="card-body">
                <h5 class="card-title">{props.titulo}</h5>
                <p class="card-text fw-medium"><small>{props.descricao}</small></p>
            </div>
        </div>
    </>
}

export default CardPremios;