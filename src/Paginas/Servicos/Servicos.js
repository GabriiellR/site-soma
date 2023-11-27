import Transicao from "../../Componentes/Transicoes/Transicao";
import Slide from '../../Componentes/Slide/Slide';
import SlideServicos from "./SlideServicos";
import Particles from '../../Componentes/Particles/Particles'

import imagemInicio1 from '../../Imagens/Servicos/Inicio/01.jpg';
import imagemInicio2 from '../../Imagens/Servicos/Inicio/02.jpg';
import imagemInicio3 from '../../Imagens/Servicos/Inicio/03.jpg';

const Servicos = () => {

    return (
        <>

            <Particles />
            <Slide conteudo={[<img src={imagemInicio1} className="img-fluid w-100" />,
            <img src={imagemInicio2} className="img-fluid w-100" />,
            <img src={imagemInicio3} className="img-fluid w-100" />]} />

            <div className="container">

                <SlideServicos titulo="CADEIA DE SUPRIMENTOS" imagens={[imagemInicio1, imagemInicio2, imagemInicio3]} texto="Oferecemos soluções personalizadas, atendendo toda a cadeia de suprimentos - da base ao produto final - com serviços customizados e projetos feitos sob medida para atender às necessidades dos clientes, integrando etapas e otimizando custos. Realizamos a gestão do fluxo produtivo, bem como abastecemos e distribuímos operacionalmente matérias-primas e insumos até a entrega ao ponto de consumo, integrando todas as etapas do processo produtivo.Temos infraestrutura própria e capacidade para armazenagem e movimentação de todos os tipos de cargas." />

            </div>




        </>
    );

}

export default Transicao(Servicos);