const CardPrincipal = (props) => {

    return <>
        <div class="container bg-light px-5 pb-5">
            <div class="row gy-4 mt-5">
                <div class="col-sm-12 col-md-12 col-lg-12">

                    {props.titulo &&
                        <div className="row mt-2">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="d-flex justify-content-center">
                                    <span className="fs-2 fw-medium w-auto p-2 bg-secondary text-white">{props.titulo.toUpperCase()}</span>
                                </div>
                            </div>
                        </div>
                    }
                    {props.componente}
                </div>
            </div>
        </div>

    </>


};

export default CardPrincipal;