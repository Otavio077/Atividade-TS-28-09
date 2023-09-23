import { Link } from "react-router-dom";

export default function Tarefas() {
    return(
        <>
            <h1>Tarefas sobre o projeto</h1>
            <p>
            <h2>Definição de Objetivos e Escopo:</h2>
            <br/>
            Estabelecer os objetivos do projeto de Lista de Tarefas.
            Delimitar o escopo do projeto, identificando recursos e funcionalidades principais.
            Pesquisa e Análise de Mercado:
            <br/>
            Realizar uma pesquisa de mercado para entender as necessidades dos usuários.
            Analisar concorrentes e identificar oportunidades de diferenciação.
            Definição de Requisitos:
            <br/>
            Documentar os requisitos funcionais e não funcionais do sistema.
            Priorizar os requisitos com base na importância e viabilidade.
            Design de Interface (UI/UX):
            <br/>
            Criar esboços de design de interface de usuário (UI) para a Lista de Tarefas.
            Desenvolver um fluxo de usuário intuitivo.
            Criar protótipos de alta fidelidade para obter feedback.
            Desenvolvimento do Front-end:
            <br/>
            Configurar o ambiente de desenvolvimento.
            Criar a estrutura HTML/CSS para a interface da Lista de Tarefas.
            Implementar a lógica do front-end para adicionar, editar e excluir tarefas.
            Desenvolvimento do Back-end (opcional):
            <br/>
            Configurar o servidor, se necessário.
            Implementar um banco de dados para armazenar as tarefas, se aplicável.
            Desenvolver APIs para interagir com o front-end.
            Integração de Recursos:
            <br/>
            Adicionar recursos como categorização de tarefas, datas de vencimento e etiquetas.
            Implementar recursos de notificação ou lembretes, se desejado.
            Testes e Depuração:
            <br/>
            Realizar testes de unidade e testes de integração.
            Identificar e corrigir bugs e problemas de usabilidade.
            Testar em vários navegadores e dispositivos.
            Melhorias de Desempenho e Segurança:
            <br/>
            Otimizar o desempenho do aplicativo, se necessário.
            Implementar medidas de segurança para proteger os dados do usuário.
            Documentação:
            <br/>
            Criar documentação completa, incluindo um guia do usuário.
            Documentar o código-fonte para facilitar a manutenção futura.
            Lançamento:
            <br/>
            Preparar o aplicativo para o lançamento.
            Publicar o aplicativo em lojas de aplicativos ou disponibilizá-lo online.
            Marketing e Promoção (opcional):
            <br/>
            Criar uma estratégia de marketing para promover o aplicativo.
            Criar materiais de marketing, como vídeos explicativos ou postagens em redes sociais.
            Suporte e Manutenção Contínua:
            <br/>
            Estabelecer um sistema de suporte ao usuário.
            Planejar atualizações regulares para adicionar novos recursos ou corrigir problemas.
            Avaliação de Desempenho:
            <br/>
            Monitorar o desempenho do aplicativo após o lançamento.
            Coletar feedback dos usuários e realizar melhorias com base nesse feedback.
            </p>
            <hr/>
            <Link to='/'>Página inicial</Link><br/>
            <Link to='/contato'>Contato</Link><br/>
            <Link to='/sobre'>Sobre</Link>
        </>
    )
}