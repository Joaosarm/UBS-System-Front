import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { TicketContext } from "../context/ticketContext";


// TELA DE BUSCA DE CPF EM USUÁRIOS CADASTRADOS
export default function InitialPage(){
    const navigator = useNavigate();
    const {ticket} = useContext(TicketContext);

    const [cpf, setCpf] = useState<string>("");
    
    
    const [registered, setRegistered] = useState<string[]>();
    

    function logOut(){
        navigator("/log-in");
    }
    
    function newRegister(){
        navigator("/register");
    }
    
    function SearchCPF(){
        //TO DO: PROCURAR CADATRO DE CPF - GET
        setRegistered([])
    }

    return(
        <Container>
            <Header><p></p><button onClick={logOut}>Sair</button></Header>

            <Title>Buscar Cadastro:  Senha Número {ticket}</Title>

            <div>CPF: <Input type="number" size= {300}value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="" /></div>
            <button onClick={SearchCPF}>Realizar Busca</button>

            <FoundRegisters>{
                registered?registered.map(r => r):
                <div><p>Nenhum Paciente encontrado</p> <u onClick={newRegister}>Realizar Cadastro</u></div>
            }</FoundRegisters>
            
        </Container>
    )
}

const Container= styled.div`
    color: #FFFFFF;ß
    font-weight: 700;ß
    padding: 0;
    font-size: 30px;

    display:flex;
    flex-direction: column;
    button{
        margin: 10px;
    }

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
    padding: 10px;
    font-size: 23px;

    button{
        background-color: transparent;
        color: #FFFFFF;
        margin: 0;
    }
` 

const Title = styled.h1`
    font-size: 32px;
    color: #FFFFFF;
    padding: 24px;
`

const Input = styled.input`
  height: auto;
  width: ${p => p.size}px;
  border: none;
  background-color: #FFFFFF;
  font-size: 20px;
  padding: 15px;
  margin: 13px;
  border-radius: 5px;
  color: #000000;
`;

const FoundRegisters= styled.div`
    color: #000000;
    background-color: #FFFFFF;
    font-size: 20px;
    border-radius: 20px;
    height: 15vh;
    width: 560px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;

    p{
        padding:0;
        margin:0;
    }

    u{
        cursor: pointer;
    }
`