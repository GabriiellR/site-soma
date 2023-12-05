import Slide from "../../../Componentes/Slide/Slide";
import CardPrincipal from '../../../Componentes/Card/CardPrincipal';
import CardPremios from "./CardPremios";
import './premios.css'


import premio1 from '../../../Imagens/Sobrenos/Premios/01.jpg'
import premio2 from '../../../Imagens/Sobrenos/Premios/02.jpg'
import premio3 from '../../../Imagens/Sobrenos/Premios/03.jpg'
import premio4 from '../../../Imagens/Sobrenos/Premios/04.jpg'
import premio5 from '../../../Imagens/Sobrenos/Premios/05.jpg'
import premio6 from '../../../Imagens/Sobrenos/Premios/06.jpg'
import premio7 from '../../../Imagens/Sobrenos/Premios/07.jpg'
import premio8 from '../../../Imagens/Sobrenos/Premios/08.jpg'
import premio9 from '../../../Imagens/Sobrenos/Premios/09.jpg'
import premio10 from '../../../Imagens/Sobrenos/Premios/10.jpg'
import premio11 from '../../../Imagens/Sobrenos/Premios/11.jpg'
import premio12 from '../../../Imagens/Sobrenos/Premios/12.jpg'
import premio13 from '../../../Imagens/Sobrenos/Premios/13.jpg'

const Premios = () => {

    return <>
        <div className="container">
            <CardPrincipal titulo="PRÊMIOS"
                componente={<Slide
                    slidersPerView={3}
                    conteudo={
                        [<CardPremios imagem={premio1} titulo="Gerdau" descricao="Prêmio transportadora 2018 1º Lugar" />,
                        <CardPremios imagem={premio2} titulo="Gerdau" descricao="Prêmio Transportadora 2017 1º Lugar" />,
                        <CardPremios imagem={premio3} titulo="AEAEE - UFMG" descricao="Prêmio Top Engenharias 5º Lugar" />,
                        <CardPremios imagem={premio4} titulo="Prêmio AR 2016" descricao="Empresa vencedora na Categoria Mérito Ambiental" />,
                        <CardPremios imagem={premio5} titulo="Gerdau Barão de Cocais" descricao="Prêmio a melhor empresa de transporte 2010" />,
                        <CardPremios imagem={premio6} titulo="Gerdau" descricao="Prêmio Transportador 2008 Melhor empresa de transporte de cargas" />,
                        <CardPremios imagem={premio7} titulo="Anglo Gold Ashanti" descricao="2º lugar 2016 Prevenção, Acidente Zero" />,
                        <CardPremios imagem={premio8} titulo="Gerdau" descricao="Melhor Empresa de Transporte 2011" />,
                        <CardPremios imagem={premio9} titulo="Prêmio AR 2017" descricao="Empresa vencedora na Categoria Meio Ambiente" />,
                        <CardPremios imagem={premio10} titulo="Gerdau" descricao="Certificado de reconhecimento 2015 Segurança do trabalho" />,
                        <CardPremios imagem={premio11} titulo="Usina Gerdau 2014" descricao="Divinópolis / Barão de Cocais Agradecimento pelos resultados e comprometimentos em 2014" />,
                        <CardPremios imagem={premio12} titulo="Usina Gerdau 2013" descricao="Divinópolis / Barão de Cocais Melhor transportadora" />,
                        <CardPremios imagem={premio13} titulo="Vallourec 2022" descricao="Empresa revelação do ano" />,
                        ]} />} />
        </div>
    </>

}

export default Premios;