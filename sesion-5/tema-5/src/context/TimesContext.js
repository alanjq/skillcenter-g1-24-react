import { createContext } from "react";

export const TIMES = [
    {
        style: {
            background: '#a5d5ff',
            color: 'blue',
            padding: '.5em'
        },
        message: 'Hello'
    }, {
        style: {
            background: '#ffca66',
            color: '#4c000c',
            padding: '.5em'
        },
        message: 'Hola'
    }]

const TimesContext = createContext({
    selected: 0,
    TIMES
})

export default TimesContext
