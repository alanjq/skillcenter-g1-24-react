import ListaSuper from "./components/ListaSuper"
import { createRef, useEffect, useState } from 'react'

const App = () => {
    const refInput = createRef()
    const [listaSuper, setListaSuper] = useState(['Tomate', 'Cebolla', 'Pollo', 'Café', 'Tortilla'])
    const [disableButton, setDisableButton] = useState(true)

    const handleAddItem = () => {
        setListaSuper([refInput.current.value, ...listaSuper])
        refInput.current.value = ''
        setDisableButton(true)
    }

    const handleInputChange = ({ target }) => {
        setDisableButton(target.value == '')
    }

    return (<div>
        <form style={{ padding: '1em' }}>
            <input type="text" placeholder="Escribe un artículo a agregar" style={{ fontSize: '1em', width: '20em' }} ref={refInput}
                onChange={handleInputChange} />
            <button type="button" style={{ fontSize: '1em' }} onClick={handleAddItem} disabled={disableButton}>Agregar</button>
        </form>

        <ListaSuper elementos={listaSuper} />
    </div>)
}
export default App