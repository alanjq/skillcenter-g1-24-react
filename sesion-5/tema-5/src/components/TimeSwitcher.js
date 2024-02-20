import { useContext } from "react"
import TimesContext from "../context/TimesContext"

export default function TimeSwitcher() {
    const { setTime, time } = useContext(TimesContext)

    const handleClick = () => {
        const newValue = time < time.lenght ? time + 1 : 0
        setTime(newValue)
    }

    return <button style={{margin: '1em'}} type="button" onClick={handleClick}>Cambiar saludo</button>
}