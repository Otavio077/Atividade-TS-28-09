import { Link } from "react-router-dom"
//import ButtonFatec from "../../components/ButtonFatec"
//import InputFatec from "../../components/InputFatec"

function Home() {

  return (
    <>
      <h1>Apresentação sobre o projeto</h1>
      <hr/>
      <div>
        <p>
        Você já se sentiu sobrecarregado pela avalanche de tarefas e responsabilidades que o dia-a-dia moderno impõe? Às vezes, parece que estamos constantemente correndo atrás do relógio, esquecendo compromissos importantes e lutando para manter a produtividade em alta.
      
        No entanto, há uma solução simples e eficaz para esses desafios comuns: uma lista de tarefas bem projetada. Imagine ter um aliado confiável que o ajuda a organizar seu tempo, priorizar suas atividades e lembrá-lo do que precisa ser feito. Este é o objetivo central do nosso projeto: criar a Lista de Tarefas Definitiva.
      
        Ao longo desta jornada, exploraremos como nosso projeto de lista de tarefas não é apenas uma ferramenta para gerenciar tarefas, mas também uma maneira de recuperar o controle sobre sua vida cotidiana. Você descobrirá como a simplicidade e a eficiência podem se unir para reduzir o estresse, aumentar a produtividade e proporcionar mais tempo para o que realmente importa.
        </p>
      </div>
      <hr/>
        <Link to='/sobre'>Sobre</Link><br/>
        <Link to='/contato'>Contato</Link><br/>
        <Link to='/tarefas'>Tarefas</Link>
    </>
  )
}

export default Home