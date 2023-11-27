import CardDiretoria from '../../../Componentes/Card/CardDiretoria'
import arthur from '../../../Imagens/Sobrenos/CorpoDiretivo/ArthurBarbosa.jpg'
import camila from '../../../Imagens/Sobrenos/CorpoDiretivo/CamilaFreitas.jpg'
import carol from '../../../Imagens/Sobrenos/CorpoDiretivo/CarolFreitas.jpg'
import euler from '../../../Imagens/Sobrenos/CorpoDiretivo/EulerGiancotti.jpg'
import gustavo from '../../../Imagens/Sobrenos/CorpoDiretivo/GustavoLara.jpg'
import romulo from '../../../Imagens/Sobrenos/CorpoDiretivo/RomuloPetronio.jpg'

const CorpoDiretivo = () => {

    return <>

        <div class="row gy-5">
            <div class="col-sm-12 col-md-12 col-lg-12">


                <div class="row mt-5">
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <div className='d-flex flex-wrap'>
                            <CardDiretoria nome="Camila Freitas" cargo="Presidente Comercial e de Operações" imagem={camila} />
                            <CardDiretoria nome="Carol Freitas" cargo="Presidente Administrativa" imagem={carol} />
                            <CardDiretoria nome="Arthur Barbosa" cargo="Diretor de Operações" imagem={arthur} />
                        </div>
                    </div>
                </div>

                <div class="row mt-4">
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <div className='d-flex flex-wrap'>
                            <CardDiretoria nome="Euler Giancotti" cargo="Diretor administrativo-financeiro" imagem={euler} />
                            <CardDiretoria nome="Gustavo Lara" cargo="Diretor de Projetos" imagem={gustavo} />
                            <CardDiretoria nome="Rômulo Petrônio" cargo="Diretor Comercial" imagem={romulo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default CorpoDiretivo;