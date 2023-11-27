import CardPrincipal from "../../Componentes/Card/CardPrincipal";
import Transicao from "../../Componentes/Transicoes/Transicao";
import ModalSimples from "../../Componentes/Modal/ModalSimples";

import './CanalEtica.css'

import qrCode from '../../Imagens/CanalEtica/code.png';
import codigoConduta from '../../Imagens/CanalEtica/codigoConduta.pdf'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUserCheck, faEnvelope, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import BotaoSimples from "../../Componentes/Botao/BotaoSimples";

const CanalEtica = () => {


    const conteudo = () => {

        return <>

            <div className="row mt-5">
                <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                    <div><span className="fs-4">A Soma e empresas coligadas têm a condução de suas atividades orientada por um conjunto de valores que refletem elevados padrões éticos e morais, o que nos estimula a atuar com responsabilidade, honestidade, confiança, respeito e lealdade. Estes princípios fundamentais estão refletidos em todos os tópicos do Código de Conduta e asseguram nossa credibilidade perante funcionários, terceiros, parceiros, prestadores de serviço, provedores externos, sociedade e clientes.</span></div>
                    <div className="mt-3"><span className="fs-4">O Conselho de ética e conformidade atua com base nos princípios da boa governança corporativa e legislações aplicáveis, sendo que o Canal de ética e ouvidoria está disponível aos públicos interno e externo da Soma Logística e empresas coligadas, para o reporte de violações ou suspeita de descumprimento de qualquer um dos pontos defendidos no Código.</span></div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                    <ModalSimples tituloBotaoRodape="Fechar" tituloBotao="Ver Código de Conduta" titu tituloModal={"CÓDIGO DE CONDUTA"} conteudo={<iframe src={codigoConduta} width="100%" height="700" allowFullScreen={true}></iframe>} />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <span className="fs-4">Utilize um dos canais abaixo para relatar preocupações éticas e resolver dúvidas relacionadas ao nosso código.</span>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-sm-12 col-md-12 col-lg-9">

                    <div className="d-flex flex-column gap-4 mt-3">
                        <span className="fs-4"><FontAwesomeIcon icon={faUserCheck} size="xl" /> Pessoalmente: procure pelo o responsável pela Ouvidoria.</span>
                        <span className="fs-4"><FontAwesomeIcon icon={faPhone} size="xl" /> Por telefone: +55 (31) 3307-3011</span>
                        <span className="fs-4"><FontAwesomeIcon icon={faEnvelope} size="xl" /> Por e-mail: ouvidoria@somalogistica.com.br</span>
                        <span className="fs-4"><FontAwesomeIcon icon={faPenToSquare} size="xl" /> Pela central de denúncias, por meio do QRCode ou <BotaoSimples titulo="Acesse aqui" /></span>
                    </div>

                </div>
                <div className="col-sm-12 col-md-12 col-lg-3">
                    <img src={qrCode} />
                </div>
            </div>
        </>

    }


    return <>
        <div className="parallax-etica">
            <CardPrincipal titulo="CANAL DE ÉTICA" componente={conteudo()} />
        </div>

    </>


}

export default Transicao(CanalEtica);