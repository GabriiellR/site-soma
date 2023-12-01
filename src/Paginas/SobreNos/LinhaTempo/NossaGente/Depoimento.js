const Depoimento = (props) => {

    return <>
        <div className="container">
            <div className="row mx-3 mb-4 d-flex px-4 align-items-center">
                <div className="col-sm-12 col-md-12 col-lg-3">
                    <img className="rounded-circle img-thumbnail" src={props.imagem} />
                </div>

                <div className="col-sm-12 col-md-12 col-lg-9 text-start ">
                    <span className="fw-normal fs-5">{props.depoimento}</span>
                    <div className="mt-3 d-flex flex-column">

                        <span className="fw-medium fs-5">{props.nome}</span>
                        <span className="">{props.cargo}</span>

                    </div>
                </div>
            </div>
        </div>

    </>
};

export default Depoimento;