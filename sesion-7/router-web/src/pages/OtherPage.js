import { Link } from "react-router-dom";

export default function OtherPage() {
    return <div>
        <h1>Página adicional</h1>
        <Link to="/">Inicio</Link><br/>
        <Link to="/welcome">Bienvenida</Link><br/>
        <Link to="/greeting">Saludo</Link><br/>
        <Link to="/other">Otra página</Link>
    </div>
}