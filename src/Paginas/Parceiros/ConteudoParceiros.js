import { Link } from "react-router-dom";
import qrCode from '../../Imagens/Perceiros/qrcode.png'


const ConteudoParceiros = () => {

    return <>
        <div className="row mt-3">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                <span className="fs-4 fw-normal">Atuamos há mais de 20 anos no mercado logístico, com frota própria, agregados e terceiros. Conheça diferenciais e venha se tornar um perceiro!</span>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="d-flex">
                    <span className="fs-3 fw-medium w-auto px-1 bg-secondary text-white">AGREGADOS</span>
                </div>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <ul>
                    <li className="fs-4"><span> Atendemos os maiores embarcadores do país</span></li>
                    <li className="fs-4"><span>Carretas novas</span></li>
                    <li className="fs-4"><span>Transportamos para todo o Brasil</span></li>
                    <li className="fs-4"><span>Garantia de recebimento de frete</span></li>
                    <li className="fs-4"><span>Apoio operacional</span></li>
                    <li className="fs-4"><span>Manutenção preventiva</span></li>
                </ul>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="d-flex">
                    <span className="fs-3 fw-medium w-auto px-1 bg-secondary text-white">TERCEIROS</span>
                </div>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <span className="fs-4 fw-">Trabalhamos em parceria com empresas transportadoras (ECT) e motoristas autônomos (TAC), com rotas para todo Brasil e pagamento facilitado do frete. Venha fazer parte do nosso negócio! Para mais informações da nossa central de cargas, preencha o formulário e se cadastre.</span>
            </div>
        </div>

        <div className="row mt-4 align-items-baseline text-center">
            <div className="col-sm-12 col-md-12 col-lg-9">
                <span className="fs-2 fw-medium">Ficou interessado? Acesse o link e cadastre-se:  </span>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3">
                <Link to={"/"}><img src={qrCode} className="" width="70%" /></Link>
            </div>
        </div>
    </>
};

export default ConteudoParceiros;