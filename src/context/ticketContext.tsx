import {createContext} from "react" ;

export type TicketData = {
    ticket: number
    setTicket:(c: number) => void

    regularTicket: number[]
    setRegularTicket:(c: number[]) => void

    preferentialTicket: number[]
    setPreferentialTicket:(c: number[]) => void
  }

export const TicketContext = createContext<TicketData>({
    ticket: 0,
    setTicket: () => {},

    regularTicket: [],
    setRegularTicket: () => {},

    preferentialTicket: [],
    setPreferentialTicket: () => {}
});

//-----------------