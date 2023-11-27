const ModalSimples = (props) => {

    return <>
        <div className="row mt-4">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <button data-bs-toggle="modal" data-bs-target="#modal" className="btn yellow-soma text-white p-2">{props.tituloBotao}</button>
            </div>
        </div>


        <div class="modal fade modal-dialog-scrollable modal-xl" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{props.tituloModal}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {props.conteudo}
                    </div> 

                    {props.tituloBotaoRodape &&
                        <div class="modal-footer">
                            <button type="button" class="btn yellow-soma text-white">{props.tituloBotaoRodape}</button>
                        </div>
                    }
                </div>
            </div>
        </div>



    </>
}

export default ModalSimples;