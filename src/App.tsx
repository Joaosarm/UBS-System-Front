import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import InitialPage from './pages/InitialPage';
import ServiceType from './pages/ServiceType';
import TicketNumber from './pages/TicketNumber'

import LogIn from './pages/LogIn'
import MainPage from './pages/MainPage';
import SearchRegister from './pages/SearchRegister';
import RegisterPage from './pages/RegisterPage';
import MedicalRecords from './pages/MedicalRecords';
import NewMedicalRecord from './pages/NewMedicalRecord';

import { TicketContext } from "./context/ticketContext"

function App() {
  const [ticket, setTicket] = useState<number>(0);
  

  return (
    <>
      <TicketContext.Provider value = {{ticket, setTicket}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InitialPage/>} />
            <Route path="/service-type" element={<ServiceType/>} />
            <Route path="/ticket" element={<TicketNumber/>} />
          </Routes>
        </BrowserRouter>
      </TicketContext.Provider>

      <BrowserRouter>
        <Routes>
          <Route path="/log-in" element={<LogIn/>} />
          <Route path="/main-page" element={<MainPage/>} />
          <Route path="/search-register" element={<SearchRegister/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/medical-records" element={<MedicalRecords/>} />
          <Route path="/new-medical-record" element={<NewMedicalRecord/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
