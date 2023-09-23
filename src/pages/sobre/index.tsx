import { Link } from "react-router-dom";

export default function Sobre(){
    return(
        <>
        <h1>Sobre</h1>
        <p>
            Esse projeto foi desenvolvido pelo aluno Otávio do curso de Análise e Desenvolvimento de Sistemas da Fatec
        </p>
        <hr/>
        <Link to='/'>Página inicial</Link><br/>
        <Link to='/contato'>Contato</Link><br/>
        <Link to='/tarefas'>Tarefas</Link>
        </>
    )
}