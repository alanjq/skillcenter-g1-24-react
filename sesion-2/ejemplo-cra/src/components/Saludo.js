import React, { useState, useEffect } from "react"

export default function Saludo({ nombre }) {
    const [nombrePersona, setNombrePersona] = useState(nombre)
    const [estaVacio, setEstaVacio] = useState(nombre === '') // true o false, según el valor de nombre

    const refInputNombrePersona = React.createRef()

    const handleCambiarClick = () => {
        const newNombre = refInputNombrePersona.current.value
        console.log('evento clic en button', refInputNombrePersona.current.value);
        // Actualizar el valor de la variable de estado: nombrePersona
        setNombrePersona(newNombre)
        setEstaVacio(newNombre === '')
    }

    useEffect(()=>{
        if(nombrePersona === ''){
            setEstaVacio(true)
        }
    }, [nombrePersona])

    return <div>Saludos <br />
        <p>{estaVacio ? <b style={{color: 'red'}}>Ingresa un nombre de persona</b> : null}</p>
        <input ref={refInputNombrePersona} />
        <button type="button" onClick={handleCambiarClick} id="cambiar">Cambiar</button>

        <p>{nombrePersona} desde React</p>
    </div>
}
