export default function Boton() {
    const handleClick = () => {
        console.log('ok');
    }
    
    return <button type="button" onClick={handleClick}>Soy un botón</button>
}