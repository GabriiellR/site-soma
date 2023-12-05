import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { MostrarToastErro, MostrarToastSucesso } from '../../Componentes/SweetAlert/SweetAlert';
import { ExibirPreLoader, RemoverPreLoader } from '../../Componentes/Preloader/Preloader';

import Transicao from '../../Componentes/Transicoes/Transicao';
import CampoTexto from '../../Componentes/Inputs/Text';
import { DateInput } from '../../Componentes/Mask/DateMask';
import { useState } from 'react';
import TextArea from '../../Componentes/Inputs/TextArea';
import File from '../../Componentes/Inputs/File';

const FormularioOuvidoria = () => {

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

    const EnviarDenuncia = () => {

        const url = "https://bennerweb.somalogistica.com.br/intranet/api/chamados/Chamados/abrir";
        var usuarioAberturaId = 1018;
        var categoriaId = 10;
        var filaId = 47;
        var titulo = "Denúncia site";
        var mensagem = `<li>Nome denunciado: ${nomeDenunciado}</li>
                        <li>Nome vítima: ${nomeVitima}</li>
                        <li>Local do ocorrido: ${localOcorrido}</li>
                        <li>Data do ocorrido: ${dataOcorrido}</li>
                        <li>Testemunhas: ${testemunhas}</li>
                        <li>Detalhe dos fatos: ${detalheFatos}</li>
                        <li>Áreas envolviddas: ${areasEnvolvidas}</li>
                        <li>informações de documentos: ${informacoesDocumentos}</li>
                        <li>Informações adicionais: ${informacoesAdicionais}</li>`;


        const data = {
            "titulo": titulo,
            "mensagem": mensagem,
            "usuarioAberturaId": usuarioAberturaId,
            "filaId": filaId,
            "categoriaId": categoriaId,
        }

        ExibirPreLoader();

        axios({
            url: url,
            method: "POST",
            data: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }

        }).then((response) => {

            RemoverPreLoader();

            var mensagem = "Denúncia recebida com sucesso"
            MostrarToastSucesso(mensagem);

            setTimeout(() => {
                window.location.reload();
            }, 3000);
            
        }).catch((error) => {
            console.log(error);
            var mensagem = "Erro ao enviar informações";
            MostrarToastErro(mensagem);
            RemoverPreLoader();
            return;
        })


    }

    AOS.init();

    return <>
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


            <div className='row mt-5'>
                <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                    <button className="btn text-white yellow-soma btn-lg" onClick={EnviarDenuncia}>Enviar</button>
                </div>
            </div>

        </div >
    </>


}
export default Transicao(FormularioOuvidoria);