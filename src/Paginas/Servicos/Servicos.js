import Transicao from "../../Componentes/Transicoes/Transicao";
import Slide from '../../Componentes/Slide/Slide';
import ContainerServicos from "./ContainerServicos";
import Particles from '../../Componentes/Particles/Particles'

import imagemInicio1 from '../../Imagens/Servicos/Inicio/01.jpg';
import imagemInicio2 from '../../Imagens/Servicos/Inicio/02.jpg';
import imagemInicio3 from '../../Imagens/Servicos/Inicio/03.jpg';

import cadeiaSuprimentos1 from '../../Imagens/Servicos/Suprimentos/00.jpg';
import cadeiaSuprimentos2 from '../../Imagens/Servicos/Suprimentos/01.jpg';
import cadeiaSuprimentos3 from '../../Imagens/Servicos/Suprimentos/02.jpg';
import cadeiaSuprimentos4 from '../../Imagens/Servicos/Suprimentos/03.jpg';
import cadeiaSuprimentos5 from '../../Imagens/Servicos/Suprimentos/04.jpg';
import cadeiaSuprimentos6 from '../../Imagens/Servicos/Suprimentos/05.jpg';

import transporteRodoviario1 from '../../Imagens/Servicos/Transporte/01.jpg'
import transporteRodoviario2 from '../../Imagens/Servicos/Transporte/02.jpg'
import transporteRodoviario3 from '../../Imagens/Servicos/Transporte/03.jpg'
import transporteRodoviario4 from '../../Imagens/Servicos/Transporte/04.jpg'
import transporteRodoviario5 from '../../Imagens/Servicos/Transporte/05.jpg'
import transporteRodoviario6 from '../../Imagens/Servicos/Transporte/06.jpg'

import movimentacaoInterna1 from '../../Imagens/Servicos/Mineracao/movimentacaointerna/00.jpg'
import movimentacaoInterna2 from '../../Imagens/Servicos/Mineracao/movimentacaointerna/01.jpg'
import movimentacaoInterna3 from '../../Imagens/Servicos/Mineracao/movimentacaointerna/02.jpg'
import movimentacaoInterna4 from '../../Imagens/Servicos/Mineracao/movimentacaointerna/03.jpg'
import movimentacaoInterna5 from '../../Imagens/Servicos/Mineracao/movimentacaointerna/04.jpg'
import movimentacaoInterna6 from '../../Imagens/Servicos/Mineracao/movimentacaointerna/05.jpg'

import terraplanagem01 from '../../Imagens/Servicos/Mineracao/terraplanagemeinfra/00.jpg'
import terraplanagem02 from '../../Imagens/Servicos/Mineracao/terraplanagemeinfra/01.jpg'
import terraplanagem03 from '../../Imagens/Servicos/Mineracao/terraplanagemeinfra/02.jpg'
import terraplanagem04 from '../../Imagens/Servicos/Mineracao/terraplanagemeinfra/03.jpg'

import caminhoespipa1 from '../../Imagens/Servicos/Mineracao/caminhoespipa/00.jpg'
import caminhoespipa2 from '../../Imagens/Servicos/Mineracao/caminhoespipa/01.jpg'
import caminhoespipa3 from '../../Imagens/Servicos/Mineracao/caminhoespipa/02.jpg'
import caminhoespipa4 from '../../Imagens/Servicos/Mineracao/caminhoespipa/03.jpg'
import caminhoespipa5 from '../../Imagens/Servicos/Mineracao/caminhoespipa/04.jpg'
import caminhoespipa6 from '../../Imagens/Servicos/Mineracao/caminhoespipa/05.jpg'
import caminhoespipa7 from '../../Imagens/Servicos/Mineracao/caminhoespipa/06.jpg'

import escavacoes1 from '../../Imagens/Servicos/Mineracao/escavacoes/00.jpg'
import escavacoes2 from '../../Imagens/Servicos/Mineracao/escavacoes/01.jpg'
import escavacoes3 from '../../Imagens/Servicos/Mineracao/escavacoes/02.jpg'
import escavacoes4 from '../../Imagens/Servicos/Mineracao/escavacoes/03.jpg'
import escavacoes5 from '../../Imagens/Servicos/Mineracao/escavacoes/04.jpg'
import escavacoes6 from '../../Imagens/Servicos/Mineracao/escavacoes/05.jpg'
import escavacoes7 from '../../Imagens/Servicos/Mineracao/escavacoes/06.jpg'

import cargasPerigosas1 from '../../Imagens/Servicos/Mineracao/cargasperigosas/00.jpg'
import cargasPerigosas2 from '../../Imagens/Servicos/Mineracao/cargasperigosas/01.jpg'
import cargasPerigosas3 from '../../Imagens/Servicos/Mineracao/cargasperigosas/02.jpg'

import locacao1 from '../../Imagens/Servicos/Locacao/00.jpg'
import locacao2 from '../../Imagens/Servicos/Locacao/01.jpg'
import locacao3 from '../../Imagens/Servicos/Locacao/02.jpg'
import locacao4 from '../../Imagens/Servicos/Locacao/03.jpg'
import locacao5 from '../../Imagens/Servicos/Locacao/04.jpg'
import locacao6 from '../../Imagens/Servicos/Locacao/05.jpg'
import CardPrincipal from "../../Componentes/Card/CardPrincipal";

import diferenciais from '../../Imagens/Servicos/Diferenciais/diferenciais.png'

import AOS from 'aos';
import 'aos/dist/aos.css'

const Servicos = () => {

    AOS.init();
    return (
        <>
            <Particles />
            <Slide conteudo={[<img src={imagemInicio1} className="img-fluid w-100" />,
            <img src={imagemInicio2} className="img-fluid w-100" />,
            <img src={imagemInicio3} className="img-fluid w-100" />]} />

            <div className="container">
                <div className="row gy-2">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <CardPrincipal titulo="SERVIÇOS DEDICADOS À CADEIA DE SUPRIMENTOS" componente={<ContainerServicos
                            imagens={[cadeiaSuprimentos1, cadeiaSuprimentos2, cadeiaSuprimentos3, cadeiaSuprimentos4, cadeiaSuprimentos5, cadeiaSuprimentos6]}
                            texto="Oferecemos soluções personalizadas, atendendo toda a cadeia de suprimentos - da base ao produto final - com serviços customizados e projetos feitos sob medida para atender às necessidades dos clientes, integrando etapas e otimizando custos. Realizamos a gestão do fluxo produtivo, bem como abastecemos e distribuímos operacionalmente matérias-primas e insumos até a entrega ao ponto de consumo, integrando todas as etapas do processo produtivo.Temos infraestrutura própria e capacidade para armazenagem e movimentação de todos os tipos de cargas."
                        />} />

                        <CardPrincipal titulo="TRANSPORTE RODOVIÁRIO DE CARGAS" componente={<ContainerServicos
                            imagens={[transporteRodoviario1, transporteRodoviario2, transporteRodoviario3, transporteRodoviario4, transporteRodoviario5, transporteRodoviario6]}
                            texto="Perfeito para clientes com oscilação de volume. Transportamos matéria-prima e produtos acabados em todo território nacional e cone-sul, de “ponto a ponto”, cargas nacionalizadas ou cargas sob regime de trânsito aduaneiro, promovendo inclusive o desembaraço sobre rodas.Analisamos todas as variáveis para adequar nossos serviços aos anseios dos clientes e, por isso, trabalhamos com as mais diversas práticas logísticas, a exemplo de cross docking, venda direta, transferência, logística reversa, transit point, inbound, outbound."
                        />} />

                        <CardPrincipal titulo="MINERAÇÃO" componente={<ContainerServicos
                            textoSegmento="Soluções especializadas para o segmento minerário, com serviços de exploração mineral, escavação e estruturação, bem como infraestrutura, terraplanagem, movimentação interna, barragens e diques, construção civil, manutenção de vias, limpeza de dutos, transporte de minério, escória, estéril, perfuração, desmonte, logística especializada com caminhões comboio e pipas, entre outros."
                            titulo="MOVIMENTAÇÃO INTERNA"
                            imagens={[movimentacaoInterna1, movimentacaoInterna2, movimentacaoInterna3, movimentacaoInterna4, movimentacaoInterna5, movimentacaoInterna6]}
                            texto="Este serviço compreende etapas essenciais do processo de mineração que fazem a diferença na contabilidade final da obra, como movimentações, carregamentos, transporte e organizações.Nós viabilizamos soluções seguras com equipe treinada, mobilização rápida e eficiente, equipamentos de ponta e alta tecnologia, estrutura e equipe de manutenção que garantem disponibilidade física de todo maquinário."
                        />} />

                        <CardPrincipal componente={<ContainerServicos
                            titulo="TERRAPLANAGEM E INFRAESTRUTURA"
                            imagens={[terraplanagem01, terraplanagem02, terraplanagem03, terraplanagem04]}
                            texto="A Soma presta serviços de terraplanagem visando a conformação de relevos para implantação de obras de engenharia, bem como serviços de infraestrutura de mina objetivando que operações produtivas performem ciclos seguros, controlados e previsíveis. Atuamos com serviços de base como abertura e adequações de depósitos, acessos e aterros, nivelamento de áreas, confecção de diques, limpeza de sump, manutenção de acessos, instalação e manutenção de drenagens, britagem, conformação de pilhas de estéril, retaludamentos, limpeza industrial, entre outros."
                        />} />

                        <CardPrincipal componente={<ContainerServicos
                            titulo="UMECTAÇÃO E MANUTENÇÃO DE VIAS"
                            imagens={[caminhoespipa1, caminhoespipa2, caminhoespipa3, caminhoespipa4, caminhoespipa5, caminhoespipa6, caminhoespipa7]}
                            texto="Nossa empresa atua com umectação de vias, transporte e reposição de água potável em operação de mina. A frota de caminhões-pipa da Soma é grande e diferenciada, em termos de capacidade e tecnologia.Em mineração, a atuação deste equipamento é vital ao negócio, seja para preservar a saúde dos trabalhadores e da comunidade, seja para resfriar o chão quente diminuindo o aquecimento dos pneus ou mesmo para não encharcar as pistas e torná-las escorregadias, o que aumentaria o risco de acidente ou atrapalharia o fluxo logístico."
                        />} />

                        <CardPrincipal componente={<ContainerServicos
                            titulo="ESCAVAÇÕES"
                            imagens={[escavacoes1, escavacoes2, escavacoes3, escavacoes4, escavacoes5, escavacoes6, escavacoes7]}
                            texto="Dentre os serviços que a empresa executa - projetos estruturais de exploração mineral, confecção de bacias, entre outros - destaca-se a importância de uma base bem trabalhada seja na supressão vegetal ou na movimentação de terra para cortes e estruturação, aterro, reaterro, com especial atenção para as escavações precisas, rebaixamentos, compactação e nivelamento de terrenos."
                        />} />

                        <CardPrincipal componente={<ContainerServicos
                            titulo="TRANSPORTE DE QUÍMICOS E PERIGOSOS"
                            imagens={[cargasPerigosas1, cargasPerigosas2, cargasPerigosas3]}
                            texto="Transportamos produtos químicos e perigosos com licenças específicas, equipe altamente capacitada e plano de contingência para emergências.Nosso trabalho é proporcionar aos clientes segurança e tranquilidade neste tipo de transporte tão peculiar e crítico na cadeia de fornecimento devido 
                             altos riscos envolvidos, os quais são trabalhados em todas as frentes e monitorados full time pela equipe Soma."
                        />} />

                        <CardPrincipal titulo={"LOCAÇÃO DE EQUIPAMENTOS"} componente={<ContainerServicos
                            titulo="LOCAÇÃO DE EQUIPAMENTOS"
                            imagens={[locacao1, locacao2, locacao3, locacao4, locacao5, locacao6]}
                            texto="Locamos caminhões, máquinas e equipamentos pesados que vão garantir à sua operação tecnologia de ponta, alta produtividade, ampla variedade de aplicação e excelente desempenho.Temos extenso portfólio de maquinário, incluindo carregadeiras, escavadeiras, motoniveladoras, rolos compactadores, tratores de esteira, caminhões-pipa e comboio, entre outros. São inúmeras as vantagens de se locar um equipamento, entre elas, economia com estoque, redução de tempo improdutivo, custo zero de manutenção, dedução de IR, entre outros."
                        />} />

                        <CardPrincipal titulo="NOSSOS DIFERENCIAIS" componente={<div className="d-flex justify-content-center" data-aos="fade-right" data-aos-duration="2000"><img src={diferenciais} className="img-fluid mt-5 " width="80%" /></div>} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Transicao(Servicos);