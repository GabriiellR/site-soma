import AOS from 'aos';
import 'aos/dist/aos.css'



const FormularioOuvidoria = () => {

    AOS.init();


    return <>
        <div className='bg-cinza container' data-aos="fade-right" data-aos-duration="2000">

            <div className='row mt-2'>
                <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                    <span className='fs-5 fw-medium'>Colete o máximo de informações sobre a infração, para auxiliar na apuração dos fatos</span>
                </div>
            </div>

            <div class="row mb-2">
                <div className='col-sm-12 col-md-12 col-lg-12'>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nome completo vítima" />
                </div>
            </div>

            <div className='row mt-2'>
                <div className='row-sm-12 col-md-12 col-lg-12'>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nome completo dunciado" />
                </div>
            </div>

            <div className='row mt-2'>
                <div className='row-sm-12 col-md-12 col-lg-6'>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Local do ocorrido" />
                </div>
                <div className='row-sm-12 col-md-12 col-lg-6'>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Local do ocorrido" />
                </div>
            </div>

            <div className='row mt-2'>
                <div className='row-sm-12 col-md-12 col-lg-12'>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Testemunhas" />
                </div>
            </div>

            <div class="row mt-3">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Detalhamento dos fatos" rows="3"></textarea>
                </div>
            </div>

            <div className='row mt-2'>
                <div className='row-sm-12 col-md-12 col-lg-12'>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Empresas, departamentos ou áreas envolvidas" />
                </div>
            </div>

            <div class="row mt-3">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Informações sobre doucmentos ou contratos relativos à violação" rows="3"></textarea>
                </div>
            </div>

            <div class="row mt-3">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Informações adicionais" rows="3"></textarea>
                </div>
            </div>

            <div class="mb-3">
                <label for="formFile" class="form-label">Escolha um arquivo</label>
                <input class="form-control" type="file" id="formFile" />
            </div>

            

        </div>
    </>


}
export default FormularioOuvidoria;