import logoMenu from '../../Imagens/Cabecalho/logo-menu.png'
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";


import './index.css'

const Cabecalho = () => {

    const pagina = useLocation();
    const { scrollYProgress } = useScroll();
    window.scrollTo(0, 0);

    return <>
        <nav class="navbar navbar-expand-lg d-flex gap-3 p-4 sticky-top bg-white">
            <div class="container-fluid">

                <img src={logoMenu} />

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" className={`fs-5 mx-2 nav-link hover text-decoration-none text-black fw-normal ${pagina.pathname == '/' ? 'text-yellow-soma fw-bold' : ''}`}>Inicio</Link>
                        </li>
                        <li class="nav-item ">
                            <Link to="sobrenos" className={`fs-5 mx-2 hover nav-link text-decoration-none text-black fw-normal ${pagina.pathname == '/sobrenos' ? 'text-yellow-soma fw-bold' : ''}`}>Sobre nós</Link>
                        </li>
                        <li class="nav-item ">
                            <Link to="servicos" className={`fs-5 mx-2 hover nav-link text-decoration-none text-black fw-normal ${pagina.pathname == '/servicos' ? 'text-yellow-soma fw-bold' : ''}`}>Serviços</Link>
                        </li>
                        <li class="nav-item ">
                            <Link to="parceiros" className={`fs-5 mx-2 hover nav-link text-decoration-none text-black fw-normal ${pagina.pathname == '/parceiros' ? 'text-yellow-soma fw-bold' : ''}`}>Parceiros</Link>
                        </li>
                        <li class="nav-item ">
                            <Link to="contato" className={`fs-5 mx-2 hover nav-link text-decoration-none text-black fw-normal ${pagina.pathname == '/contato' ? 'text-yellow-soma fw-bold' : ''}`}>Contato</Link>
                        </li>
                        <li class="nav-item ">
                            <Link to="https://somalogistica.solides.jobs/" className={`fs-5 mx-2 hover nav-link text-decoration-none text-black fw-normal ${pagina.pathname == '/trabalheconosco' ? 'text-yellow-soma fw-bold' : ''}`}>Trabalhe conosco</Link>
                        </li>
                        <li class="nav-item ">
                            <Link to="etica" className={`fs-5 mx-2 nav-link hover text-decoration-none text-black fw-normal ${pagina.pathname == '/etica' ? 'text-yellow-soma fw-bold' : ''}`}>Canal de ética</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
    </>
}

export default Cabecalho;