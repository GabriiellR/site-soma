import missao from '../../../Imagens/Sobrenos/Valores/missao.png'
import visao from '../../../Imagens/Sobrenos/Valores/visao.png'
import valores from '../../../Imagens/Sobrenos/Valores/valores.png'
import MissaoVisaoValores from '../../../Componentes/MissaoVisaoValores/MissaoVisaoValores'

const Valores = () => {

    return <>
        <MissaoVisaoValores titulo="Missão" imagem={missao} texto="Contribuir para o sucesso nas operações dos nossos clientes, oferecendo serviços e soluções que agreguem valor de forma sustentável à cadeia produtiva para desenvolver as comunidades onde atuamos e levar infraestrutura para todos os cantos do Brasil." />
        <MissaoVisaoValores titulo="Visão" imagem={visao} texto="Ser referência em atendimento logístico personalizado, crescer o faturamento de forma qualitativa, atendendo mercados diversos." />
        <MissaoVisaoValores titulo="Valores" imagem={valores} texto="Foco no cliente, Escala, Assuma erros, Cooperação, Foco na operação, Governança, Segurança, Desenvolvimento Humano, Excelência, Responsabilidade socioambiental." />
    </>
}

export default Valores;