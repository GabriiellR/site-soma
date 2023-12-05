import axios from 'axios';
import Transicao from '../../Componentes/Transicoes/Transicao';
import { useEffect, useState } from 'react';
import { MostrarToastErro } from '../../Componentes/SweetAlert/SweetAlert';
import { PegarToken } from './Token';
import { ExibirPreLoader, RemoverPreLoader } from '../../Componentes/Preloader/Preloader';

const PortalAgregados = () => {



    const urlBaseApi = "https://bennerhom.somalogistica.com.br/LogisticaWebHomologacao";
    const idPagamentoEletronico = new URLSearchParams(window.location.search).get("id");
    const [informacoesPortal, setInformacoesPortal] = useState(null);

    useEffect(() => {

        var url = `${urlBaseApi}/api/v1/logistica/gestao-operacional/${idPagamentoEletronico}`;

        axios({
            method: 'GET',
            url: url,
            headers: {
                Authorization: `Bearer ${PegarToken()}`
            }
        }).then((response) => {

            setInformacoesPortal(response.data);

        }).catch((error) => {
            var mensagem = `${error.code} - Erro ao buscar informações`;
            MostrarToastErro(mensagem);
            RemoverPreLoader();
            return;
        });

    }, []);

    ExibirPreLoader();

    if (informacoesPortal) {
        RemoverPreLoader();
    }

    return <>
        <div class="container-fluid min-h-90">

            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-4 text-center">
                    <h4><strong>Número</strong></h4>
                    <span className='fs-5' id="numero">{informacoesPortal ? informacoesPortal.Numero : ''}</span>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4 text-center">
                    <h4><strong>Ciot</strong></h4>
                    <span className='fs-5' id="ciot">{informacoesPortal ? informacoesPortal.Ciot : ''}</span>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4 text-center ">
                    <h4><strong>ID Pamcard</strong></h4>
                    <span className='fs-5' id="pamcard">{informacoesPortal ? informacoesPortal.IdPagamentoEletronico : ''}</span>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col sm-12 md-12 lg-12">
                    <div class="table-responsive-sm">
                        <table class="table table-hover">
                            <thead className='table-dark'>
                                <tr>
                                    <th>Tipo parcela</th>
                                    <th>Data vencimento</th>
                                    <th>Valor</th>
                                    <th>Pago</th>
                                </tr>
                            </thead>
                            <tbody>

                                {informacoesPortal && informacoesPortal.Parcelas.map((parcela, index) => (
                                    <tr key={index}>
                                        <td>{parcela.TipoParcela ? parcela.TipoParcela : 'Não informado'}</td>
                                        <td>{parcela.DataVencimento ? new Date(parcela.DataVencimento).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }) : 'Não informado'}</td>
                                        <td>{parcela.Valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                                        <td>{parcela.Pago ? <span class="badge text-bg-success">Sim</span> : <span class="badge text-bg-warning">Não</span>}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </>



}

export default Transicao(PortalAgregados);