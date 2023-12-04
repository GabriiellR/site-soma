import AOS from 'aos';
import 'aos/dist/aos.css'
import axios from 'axios'

import Transicao from '../../Componentes/Transicoes/Transicao'
import CampoTexto from '../../Componentes/Inputs/Text';
import { DateInput } from '../../Componentes/Mask/DateMask';
import { useState } from 'react';
import TextArea from '../../Componentes/Inputs/TextArea';
import File from '../../Componentes/Inputs/File';

const FormularioOuvidoria = () => {

// TODO ABRIR O CHAMADO E ENVIAR O EMAIL ATRAVÉS DA API.

    const passo = 2;
    const tipo = 47;

    const [nomeVitima, setNomeVitima] = useState('');
    const [nomeDenunciado, setNomeDenunciado] = useState('');
    const [localOcorrido, setLocalOcorrido] = useState('');
    const [dataOcorrido, setDataOcorrido] = useState("");
    const [testemunhas, setTestemunhas] = useState("");
    const [detalheFatos, setDetalheFatos] = useState("");
    const [areasEnvolvidas, setAreasEnvolvidas] = useState("");
    const [informacoesDocumentos, setInformacoesDocumentos] = useState("");
    const [informacoesAdicionais, setInformacoesAdicionais] = useState("");
    const [anexo, setAnexo] = useState(null);


    AOS.init();

    return <>
        <form action="http://intranet.somalogistica.com.br/sistemas_chamado/site_ouvidoria_controller.php" method="POST" name="formulario" enctype="multipart/form-data">
            <div className='bg-cinza container px-5 py-3' data-aos="fade-right" data-aos-duration="2000">

                <div className='row mt-4 mb-5'>
                    <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                        <span className='fs-4 fw-medium m'>Colete o máximo de informações sobre a infração, para auxiliar na apuração dos fatos</span>
                    </div>
                </div>

                <div class="row mb-2">
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <CampoTexto
                            obrigatorio={true}
                            placeholder="Nome completo vítima"
                            valor={nomeVitima}
                            name="nomeVitima"
                            atualizarEstado={valor => setNomeVitima(valor)} />
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='row-sm-12 col-md-12 col-lg-12'>
                        <CampoTexto
                            obrigatorio={true}
                            placeholder="Nome completo denunciado"
                            valor={nomeDenunciado}
                            name="nomeDenunciado"
                            atualizarEstado={valor => setNomeDenunciado(valor)}
                        />
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='row-sm-12 col-md-12 col-lg-6'>
                        <CampoTexto
                            obrigatorio={true}
                            placeholder="Local do ocorrido"
                            valor={localOcorrido}
                            name="localOcorrido"
                            atualizarEstado={valor => setLocalOcorrido(valor)}
                        />
                    </div>
                    <div className='row-sm-12 col-md-12 col-lg-6'>
                        {<DateInput
                            name="dataOcorrido"
                            value={dataOcorrido}
                            atualizarEstado={valor => setDataOcorrido(valor)}></DateInput>}
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='row-sm-12 col-md-12 col-lg-12'>
                        <CampoTexto
                            obrigatorio={true}
                            placeholder="Testemunhas"
                            valor={testemunhas}
                            name="testemunhas"
                            atualizarEstado={valor => setTestemunhas(valor)}
                        />
                    </div>
                </div>

                <div class="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <TextArea
                            name="detalhamento"
                            placeholder="Detalhamento dos fatos"
                            rows={3}
                            valor={detalheFatos}
                            atualizarEstado={valor => setDetalheFatos(valor)}
                        />
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='row-sm-12 col-md-12 col-lg-12'>
                        <CampoTexto
                            obrigatorio={false}
                            placeholder="Empresas, departamentos ou áreas envolvidas"
                            name="areaEnvolvida"
                            valor={areasEnvolvidas}
                            atualizarEstado={valor => setAreasEnvolvidas(valor)}
                        />
                    </div>
                </div>

                <div class="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <TextArea
                            name="informacoes"
                            placeholder="Informações sobre documentos ou contratos relativos à violação"
                            rows={3}
                            valor={informacoesDocumentos}
                            atualizarEstado={valor => setInformacoesDocumentos(valor)}
                        />
                    </div>
                </div>

                <div class="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <TextArea
                            name="adicionais"
                            placeholder="Informações adicionais"
                            rows={3}
                            valor={informacoesAdicionais}
                            atualizarEstado={valor => setInformacoesAdicionais(valor)}
                        />
                    </div>
                </div>

                <div class="row my-3">
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <File
                            label="Anexe um arquivo"
                            id="anexoComprovante"
                            name={"arquivo"}
                            valor={anexo}
                            atualizarEstado={valor => setAnexo(valor)}
                        />
                    </div>
                </div>

                <input type='hidden'  name='tipo' value={tipo}/>
                <input type='hidden'  name='passo' value={passo}/>

                <div className='row mt-5'>
                    <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                        <button className="btn text-white yellow-soma btn-lg">Enviar</button>
                    </div>
                </div>

            </div >
        </form>
    </>


}
export default Transicao(FormularioOuvidoria);