import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TicketContext } from "../context/ticketContext";

export default function ServiceType(){
    const {ticket, setTicket, preferentialTicket, setPreferentialTicket, regularTicket, setRegularTicket} = useContext(TicketContext);
    const navigator = useNavigate();

    async function addPreferentialTickets(){
        try{
            setTicket(ticket+1);
            setPreferentialTicket([...preferentialTicket, ticket+1]);
            navigator("/ticket");
        } catch (error){
            console.log(error);
            alert("Houve algum erro!");
        }
    }
    
    async function addRegularTicket(){
        try{
            setTicket(ticket+1);
            setRegularTicket([...regularTicket, ticket+1]);
            navigator("/ticket");
        } catch (error){
            console.log(error);
            alert("Houve algum erro!");
        }
    }


    return(
        <Container>
            <Title>Tipo de Atendimento:</Title>
            <Button color = {"#1877F2"} onClick={addPreferentialTickets}>Preferencial</Button>
            <Button color = {"#D6860E"} onClick={addRegularTicket}>Regular</Button>
        </Container>
    )
}


const Container= styled.div`
    color: #FFFFFF;
    font-size: 60px;
    font-weight: 700;
`
const Title = styled.p`
    margin: 0 0 20px 0;

`
const Button = styled.button`
    background-color: ${p => p.color};
    width: 50vw;
    height: 30vh;
    margin: 15px;
    box-shadow: 5px 5px 5px rgb(61, 44, 31);
`