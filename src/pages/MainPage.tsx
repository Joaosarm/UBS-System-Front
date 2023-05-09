import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { TicketContext } from "../context/ticketContext";
import { useContext } from "react";


// TELA DO USUÁRIO
export default function InitialPage(){
    const navigator = useNavigate();
    const {preferentialTicket, regularTicket} = useContext(TicketContext);

    //TO DO: CARREGAR SENHAS CADASTRADAS


    console.log(preferentialTicket);

    function logOut(){
        navigator("/log-in");
    }

    function register(ticket: string){
        navigator(`/search-register/?ticket=${ticket}`);
    }

    return(
        <Container>
            <Header><p>Bem-Vindo, Usuário</p> <button onClick={logOut}>Sair</button></Header>
            {/* BOTÃO INICIAL PARA COMEÇAR O ATENDIMENTO */}

            <h4>Preferencial:</h4>
            <Box color = {"#1877F2"}>
                <div>
                    {preferentialTicket.length>0?preferentialTicket.map(ticket => <p onClick={() =>register(ticket.toString())}>{ticket}</p>):
                    <p>Nenhuma senha a espera</p>}
                </div>
            </Box>
            
            <h4>Regular:</h4>
            <Box color = {"#D6860E"}>
                <div>
                    {regularTicket.length>0?regularTicket.map(ticket => <p onClick={() =>register(ticket.toString())}>{ticket}</p>):
                    <p>Nenhuma senha a espera</p>}
                </div>
            </Box>
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

const Box = styled.div`
    background-color: ${p => p.color};
    width: 60vw;
    height: 25vh;
    border-radius: 10px;
    overflow: scroll;

    p{
        margin: 0px;
    }
    div{
        margin: 20px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`