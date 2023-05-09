import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


// TELA DA ENFERMARIA -> PÁGINA COM OS PRONTUÁRIOS DE PACIENTES EM ATENDIMENTO
export default function MedicalRecords(){
    const navigator = useNavigate();
    const [inAttendance, setInAttendance] = useState<string[]>([]); 

    //TO DO: CARREGAR PRONTUARIOS DE PACIENTES EM ATENDIMENTO

    useEffect(() =>{
        setInAttendance([]);
    })

    function logOut(){
        navigator("/log-in");
    }

    return(
        <Container>
            <Header><p>Bem-Vindo, Usuário</p> <button onClick={logOut}>Sair</button></Header>
            {/* BOTÃO INICIAL PARA COMEÇAR O ATENDIMENTO */}

            <Pacients>{
                inAttendance.length>0?inAttendance.map(r => r):
                <p>Nenhum Paciente encontrado</p>
            }</Pacients>

        </Container>
    )
}

const Container= styled.div`
    color: #FFFFFF;
    font-weight: 700;
    padding: 0;
    font-size: 30px;
    padding: 50px;
`

const Header = styled.header`
    background-color: #0D4B9C;
    width: calc(100vw - 20px);
    display:flex;
    justify-content: space-between;
    margin: 0;
    height: auto;
    position: fixed;
    left: 0;
    top: 0;
    padding: 0 10px;
    font-size: 23px;

    P{
        display:flex;
        align-items: center;
    }

    button{
        background-color: transparent;
        color: #FFFFFF;
    }
` 

const Pacients = styled.div`

`