import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TicketContext } from "../context/ticketContext";
// import axios from "axios";

export default function ServiceType(){
    const {setTicket} = useContext(TicketContext);
    const navigator = useNavigate();

    async function preferentialTicket(){
        // ENVIAR PARA DB - TICKETS PREFERENCIAIS - UMA NOVA REQUISIÇÃO E RETORNAR O ID
        try{
            // const response = await axios.post("http://localhost:5000/preferential-ticket"); 
            setTicket(300);
            navigator("/ticket");
        } catch (error){
            console.log(error);
            alert("Houve algum erro!");
        }
    }
    
    async function regularTicket(){
        // ENVIAR PARA DB - TICKETS REGULARES - UMA NOVA REQUISIÇÃO E RETORNAR O ID
        try{
            // const response = await axios.post("http://localhost:5000/regular-ticket"); 
            setTicket(200);
            navigator("/ticket");
        } catch (error){
            console.log(error);
            alert("Houve algum erro!");
        }
    }


    return(
        <Container>
            <Title>Tipo de Atendimento:</Title>
            <Button color = {"#1877F2"} onClick={preferentialTicket}>Preferencial</Button>
            <Button color = {"#D6860E"} onClick={regularTicket}>Regular</Button>
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