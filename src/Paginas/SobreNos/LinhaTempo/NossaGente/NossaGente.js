import './NossaGente.css';
import Slide from '../../../../Componentes/Slide/Slide';

import imagemAdilio from '../../../../Imagens/Sobrenos/NossaGente/Adilio.jpg';
import imagemDouglas from '../../../../Imagens/Sobrenos/NossaGente/Douglas.jpg';
import imagemRondecarlos from '../../../../Imagens/Sobrenos/NossaGente/Rondecarlos.jpg';
import imagemRosemeire from '../../../../Imagens/Sobrenos/NossaGente/Rosimeire.jpg';
import imagemDurval from '../../../../Imagens/Sobrenos/NossaGente/Durval.jpg';
import imagemCleo from '../../../../Imagens/Sobrenos/NossaGente/Cleo.jpg';
import imagemJeanderson from '../../../../Imagens/Sobrenos/NossaGente/Jeanderson.jpg';
import imagemGeiziano from '../../../../Imagens/Sobrenos/NossaGente/Geiziano.jpg';

import Depoimento from './Depoimento';


import AOS from 'aos';
import 'aos/dist/aos.css'

const NossaGente = () => {

    AOS.init();

    return <>
        <div className="paralax">
            <div className='fundoNossaGente' data-aos="fade-right" data-aos-duration="2000">

                <div className="row mt-4">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="text-center">
                            <span class="fs-2 fw-medium w-auto px-2 bg-secondary text-white">NOSSA GENTE</span></div>
                    </div>
                </div>

                <div className='row mt-4 p-3'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <figure className='text-end'>
                            <blockquote class="blockquote">
                                <span className='fw-bold fs-4'>"Sucesso é encontrar aquilo que se tenciona ser e depois fazer o que é necessário para isso."</span>
                            </blockquote>
                            <figcaption class="blockquote-footer fs-4"> <cite title="Source Title">EPICTETUS</cite></figcaption>
                        </figure>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <Slide conteudo={[
                            <Depoimento imagem={imagemAdilio} nome="Adílio Soares" cargo="Mecânico" depoimento="“A Soma vem se aperfeiçoando cada dia mais para atender seus clientes e funcionários. Tem uma estrutura física espetacular, com profissionais qualificados, e se preocupa com a segurança de seus funcionários. Gosto muito de trabalhar na Soma, vou além, tenho orgulho de fazer parte da família Soma.”" />,
                            <Depoimento imagem={imagemDouglas} nome="Douglas Silva" cargo="Assistente de operações" depoimento="“Procuro atuar de forma criativa e inovadora, aplicando os conhecimentos que estou adquirindo no meu curso de logística na SOMA. Em contra partida espero reconhecimento e crescimento profissional, almejo uma oportunidade na área de manutenção. O meu sucesso depende do sucesso da Soma no mercado. Quero somar e fazer a diferenças.”" />,
                            <Depoimento imagem={imagemRondecarlos} nome="Rondecarlos Francisco" cargo="Coordenador de Projetos" depoimento="“Eu me sinto muito orgulhoso em fazer parte da família Soma. Após minha primeira experiência profissional no ramo de logística, pensei que seria difícil me habituar tão rapidamente a um novo ambiente de trabalho, mas tive e tenho todo o apoio da empresa, o que é essencial para o desenvolvimento de minhas atividades profissionais e para o meu crescimento pessoal.”" />,
                            <Depoimento imagem={imagemRosemeire} nome="Rosemeire Bastos" cargo="Gerente de unidade" depoimento="“Trabalho na empresa Soma há quase 13 anos e tenho orgulho em fazer parte desta família. Eu me lembro quando comecei a trabalhar na empresa, momentos de incertezas e medo por assumir um novo desafio, porém, aqui fui abraçada e isto tornou mais fácil a minha trajetória. Sou feliz e grata por tudo que conquistei nessa jornada e continuar fazer parte desta família só me faz sentir mais forte!”" />,
                            <Depoimento imagem={imagemDurval} nome="Durval Neto" cargo="Coordenador Operacional" depoimento="“Existe na Soma um ambiente agradável, pessoas de bom coração que nos inspiram e motivam a encarar o dia de trabalho como vencedores. Tenho uma gratidão eterna pela Soma, que abriu suas portas e me acolheu após quase dois anos fora do mercado de trabalho. A empresa acreditou em mim e na minha capacidade. Aprendi com meu pai que é através do trabalho que conquistamos e realizamos tudo que é solido nesta vida e que caráter, honestidade, respeito e amor são tesouros que moeda nenhuma pode pagar e esses princípios são parte da política da Soma. É por isso que, pra mim, estar na Soma não é estar só no meu trabalho, é algo que faz parte da minha vida. Obrigado, Soma, por me fazer tão bem.”" />,
                            <Depoimento imagem={imagemCleo} nome="Cleo Cortez" cargo="Encarregado de Produção" depoimento="“Admiro minha liderança, que exerce seu trabalho de forma transparente, buscando melhoria contínua para toda a equipe, mantendo um excelente relacionamento interpessoal, trabalhando de uma maneira positiva e harmoniosa, durante o exercício das nossas atividades.”" />,
                            <Depoimento imagem={imagemJeanderson} nome="Jeanderson Beleza" cargo="Encarregado de Produção" depoimento="“A Soma se preocupa com a saúde e segurança de todos os seus funcionários e, em virtude dessa preocupação, ela realiza várias campanhas de saúde e segurança como forma de incentivar o comprometimento de todos e garantir a prevenção sempre.”" />,
                            <Depoimento imagem={imagemGeiziano} nome="Geiziano Souza" cargo="Coordenador Operacional" depoimento="“Trabalhar na Soma é gratificante. Tenho muito orgulho em fazer parte deste time vencedor! Vivo uma experiência espetacular de vida e conhecimento.”" />,
                        ]} />
                    </div>
                </div>

            </div>
        </div>
    </>
};

export default NossaGente;