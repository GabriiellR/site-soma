const Depoimento = (props) => {


    return <>
        <div className="container">
            <div className="row p-4 mx-3">
                <div className="col-sm-12 col-md-12 col-lg-2">
                    <img className="img-fluid rounded-circle" src={props.imagem} />
                </div>

                <div className="col-sm-12 col-md-12 col-lg-10 ">
                    <div className="fw-normal overflow-y-auto">{props.depoimento}</div>
                    <div className="fw-medium">{props.nome}</div>
                    <small>{props.cargo}</small>
                </div>
            </div>
        </div>

    </>

};

export default Depoimento;