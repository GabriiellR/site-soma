import certificacaoAbnt from '../../../Imagens/Sobrenos/Certificacao/logoiso.png'
import smart from '../../../Imagens/Sobrenos/Certificacao/smart.png'

const Certificacao = () => {

    return <>

        <div className="row mt-5 gy-5">
            <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="d-flex justify-content-center">
                    <span class="fs-2 fw-medium w-auto px-2 bg-secondary text-white">CERTIFICAÇÃO</span>                </div>

                <div className="row mt-5">
                    <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                        <span className="fs-5 fw-normal ">A certificação é uma garantia de que estamos cumprindo satisfatoriamente nossa Política da Qualidade, que é: "Garantir o sucesso das operações dos nossos clientes, por meio da melhoria contínua, gestão eficaz e excelência de processos éticos, legais e íntegros que valorizem a nossa gente e que gerem valor e retorno à todas as pessoas impactadas pelo nosso negócio</span>
                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                        <img src={certificacaoAbnt} width="30%" />
                    </div>
                </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="d-flex justify-content-center">
                    <span class="fs-2 fw-medium w-auto px-2 bg-secondary text-white">SUSTENTABILIDADE</span>                </div>
                <div className="row mt-5">
                    <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                        <span className="fs-5 fw-normal">Nossa atitude responsável repercute no valor agregado e também financeiro do seu negócio. Nós produzimos por fonte limpa, o Sol, nossa própria energia. Somos autossustentáveis. Conscientes.</span>
                    </div>
                </div>
                <div className="row mt-3"><div className="col-sm-12 col-md-12 col-lg-12 text-center"><span className="fs-5 fw-normal">#NossaEnergisEstaLaNoAlto</span></div></div>

                <div className='row mt-4'>
                    <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                        <img src={smart} width="45%" />
                    </div>
                </div>

            </div>
        </div>
    </>
}

export default Certificacao;