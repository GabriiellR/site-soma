import imagemPresidencia from '../../Imagens/Sobrenos/01.jpg';


const SobreNos = () => {

    return <>
        <div className="container">
            <div className="row mt-4">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="text-center">
                        <span className="fs-5">Uma história com mais de 20 anos de prestação de serviço no mercado logístico, atendendo às maiores empresas do país. O nome Soma Logística foi escolhido para selar a união das marcas e empresas CMC Transportes e NSA Rental. Nossa origem é familiar, sob a governança do patriarca Freitas e as irmãs Camila Freitas e Caroline Freitas.</span>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="d-flex justify-content-center">
                        <img src={imagemPresidencia} width="50%" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SobreNos;