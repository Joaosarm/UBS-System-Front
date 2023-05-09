import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


// TELA DE NOVO PRONTUÁRIO
export default function NewMedicalRecord(){
    const navigator = useNavigate();

    const [pressure, setPressure] = useState<string>("");
    const [temperature, setTemperature] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [complains, setComplains] = useState<string>("");
    const [alergies, setAlergies] = useState<string>("");
    const [medicalHistory, setMedicalHistory] = useState<string>("");
    const [familyHistory, setFamilyHistory] = useState<string>("");
    const [medicationsInUse, setMedicationsInUse] = useState<string>("");
    // const [vaccines, setVaccines] = useState<boolean>();
    const [pendentVaccines, setPendentVaccines] = useState<string>("");
    const [specificSymptoms, setSpecificSymptoms] = useState<string>("");
    // const [ryskClassification, setRyskClassification] = useState<string>("");
    

    function logOut(){
        navigator("/log-in");
    }
    
    function goBack(){
        navigator("/medical-records");
    }
    
    function registerMedicalRecord(){
        //TO DO: FINALIZAR REGISTRO - POST
    }

    return(
        <Container>
            <Header><p></p><button onClick={logOut}>Sair</button></Header>

            <Infos>
                <div> Pressão: <Input type="text" value={pressure} onChange={(e) => setPressure(e.target.value)} size={350} placeholder={""} /> </div>
                <div>Temperatura: <Input type="text" value={temperature} onChange={(e) => setTemperature(e.target.value)} placeholder="" /></div>
                <div>Peso: <Input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="" /></div>
                <div>Queixas: <Input type="text" size={350} value={complains} onChange={(e) => setComplains(e.target.value)} placeholder="" /></div>
                <div>Alergias: <Input type="text" value={alergies} onChange={(e) => setAlergies(e.target.value)} placeholder="" /></div>
                <div>Histórico Médico: <Input type="text" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} placeholder="" /></div>
                <div>Histórico Familiar: <Input type="text" value={familyHistory} onChange={(e) => setFamilyHistory(e.target.value)} placeholder="" /></div>
                <div>Medicamentos em Uso: <Input type="text"  value={medicationsInUse} onChange={(e) => setMedicationsInUse(e.target.value)} placeholder="" /></div>
                <div>Pendente: <Input type="text" value={pendentVaccines} onChange={(e) => setPendentVaccines(e.target.value)} placeholder="" /></div>
                <div>Sintomas Específicos: <Input type="text" value={specificSymptoms} onChange={(e) => setSpecificSymptoms(e.target.value)} placeholder="" /></div>
            </Infos>
            <button onClick={registerMedicalRecord}>Finalizar Cadastro</button>
            <button onClick={goBack}>Voltar</button>
            
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
        background-color: #0D4B9C;
        color: #FFFFFF;
        margin: 15px;
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

  const Infos = styled.div`
    text-align: left;
    margin-top: 100px;
  `

const Input = styled.input`
  height: auto;
  width: ${p => p.size}px;
  border: none;
  background-color: #FFFFFF;
  font-size: 20px;
  padding: 15px;
  margin-bottom: 13px;
  border-radius: 5px;
  color: #000000;
`;