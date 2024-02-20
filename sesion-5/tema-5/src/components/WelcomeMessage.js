import { useContext } from "react"
import TimesContext from "../context/TimesContext"

export default function WelcomeMessage() {
    const {TIMES, time} = useContext(TimesContext)
    // console.log('valores disponibles', contexto);

    // return null
    // if (value > TIMES.length - 1) {
    //     return null
    // }

    return <div style={TIMES[time].style}>{TIMES[time].message}</div>
}
