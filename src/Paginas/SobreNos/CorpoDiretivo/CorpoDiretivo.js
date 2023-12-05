import CardDiretoria from './CardDiretoria.js'
import arthur from '../../../Imagens/Sobrenos/CorpoDiretivo/ArthurBarbosa.jpg'
import camila from '../../../Imagens/Sobrenos/CorpoDiretivo/CamilaFreitas.jpg'
import carol from '../../../Imagens/Sobrenos/CorpoDiretivo/CarolFreitas.jpg'
import euler from '../../../Imagens/Sobrenos/CorpoDiretivo/EulerGiancotti.jpg'
import gustavo from '../../../Imagens/Sobrenos/CorpoDiretivo/GustavoLara.jpg'
import romulo from '../../../Imagens/Sobrenos/CorpoDiretivo/RomuloPetronio.jpg'

import Collapse from '../../../Componentes/Collapse/Collapse.js'

const CorpoDiretivo = () => {

    return <>

        <div className="col-sm-12 col-md-12 col-lg-10 offset-1">
            <div className="container bg-cinza p-5">

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                        <span className="fs-2 fw-medium w-auto px-2 bg-secondary text-white">
                            CORPO DIRETIVO
                        </span>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="d-flex flex-wrap">
                            <CardDiretoria
                                nome="Camila Freitas"
                                cargo="Presidente Comercial e de Operações"
                                imagem={camila}
                                curriculo={
                                    <Collapse
                                        identificador="curriculoCamila"
                                        botao={
                                            <div className="d-flex justify-content-center pointer text-decoration-none">
                                                <a>Ver minicurrículo</a>
                                            </div>
                                        }
                                        texto="Graduada em direito pela Faculdade Milton Campos e pós-graduada em administração pela FGV, Camila acumula mais de dez anos de experiência na Soma Logística. Lidera as diretorias de operação e comercial. Em conjunto e sintonia com a irmã, Caroline Freitas, define as diretrizes estratégicas da empresa."
                                    />
                                }
                            />
                            <CardDiretoria
                                nome="Carol Freitas"
                                cargo="Presidente Administrativa"
                                imagem={carol}
                                curriculo={
                                    <Collapse
                                        identificador="curriculoCarol"
                                        botao={
                                            <div className="d-flex justify-content-center pointer text-decoration-none">
                                                <a>Ver minicurrículo</a>
                                            </div>
                                        }
                                        texto="Graduada em administração pela Faculdade IBMEC, possui mais de três anos de experiência na Soma Logística. Caroline lidera a diretoria administrativa financeira da empresa e, em conjunto e sintonia com a irmã, Camila Freitas, define as diretrizes estratégicas da empresa."
                                    />
                                }
                            />
                            <CardDiretoria
                                nome="Arthur Barbosa"
                                cargo="Diretor de Operações"
                                imagem={arthur}
                                curriculo={
                                    <Collapse
                                        identificador="curriculoArthur"
                                        botao={
                                            <div className="d-flex justify-content-center pointer text-decoration-none">
                                                <a>Ver minicurrículo</a>
                                            </div>
                                        }
                                        texto="Graduado em administração de empresas com ênfase em logística e varejo, possui pós-graduação em gestão de negócios pela Fundação Dom Cabral e tem mais de quinze anos de experiência no mercado logístico em segmentos variados. Há mais de 9 anos atuando nas operações da Soma Logística, Arthur aplica sua experiência e conhecimento para garantir rentabilidade aos negócios, qualidade no atendimento e satisfação do cliente."
                                    />
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="d-flex flex-wrap">
                            <CardDiretoria
                                nome="Euler Giancotti"
                                cargo="Diretor Administrativo-financeiro"
                                imagem={euler}
                                curriculo={
                                    <Collapse
                                        identificador="curriculoEuler"
                                        botao={
                                            <div className="d-flex justify-content-center pointer text-decoration-none">
                                                <a>Ver minicurrículo</a>
                                            </div>
                                        }
                                        texto="Contador, administrador com habilitação em comércio exterior e com MBA em finanças corporativas, atualmente segue em sua terceira graduação em direito, pela PUC Minas. Com mais de vinte anos de experiência nas áreas administrativas financeiras, começou sua vida profissional no segmento de logística, como estagiário, galgando vários cargos até tornar-se diretor. Há mais de cinco anos na Soma, Euler, dedica toda sua experiência e conhecimento para garantir que as áreas administrativas e financeiras forneçam os indicadores necessários para uma gestão eficiente, séria, comprometida com a responsabilidade social, o desenvolvimento econômico e a sustentabilidade."
                                    />
                                }
                            />
                            <CardDiretoria
                                nome="Gustavo Lara"
                                cargo="Diretor de Projetos"
                                imagem={gustavo}
                                curriculo={
                                    <Collapse
                                        identificador="curriculoGustavo"
                                        botao={
                                            <div className="d-flex justify-content-center pointer text-decoration-none">
                                                <a>Ver minicurrículo</a>
                                            </div>
                                        }
                                        texto="Bacharel em engenharia mecânica com ênfase em mecatrônica e obtenção de novo título em engenharia civil pela PUC Minas, pós-graduado em gestão de custos pela IETEC e experiência de mais de dez anos no mercado de construção civil como diretor executivo da Andar Empreendimentos. Em 2020, entrou para time Soma Logística como gestor executivo, apoiando a vice-presidência."
                                    />
                                }
                            />
                            <CardDiretoria
                                nome="Rômulo Petrônio"
                                cargo="Diretor Comercial"
                                imagem={romulo}
                                curriculo={
                                    <Collapse
                                        identificador="curriculoRomulo"
                                        botao={
                                            <div className="d-flex justify-content-center pointer text-decoration-none">
                                                <a>Ver minicurrículo</a>
                                            </div>
                                        }
                                        texto="Graduado em administração pela PUC Minas, completou sua formação com pós-graduação em gestão estratégica de finanças pela Fundação Dom Cabral e mestrado em logística pela UFSC. Com mais de quatorze anos de experiência no mercado logístico, teve sua carreira consolidada no desenvolvimento e comercialização de soluções para clientes de diversos segmentos. Como diretor comercial, seu foco é buscar negócios rentáveis e manter o nível elevado de satisfação dos clientes."
                                    />
                                }
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default CorpoDiretivo;