import { Link } from "react-router-dom";

export default function WelcomePage() {
    return <div>
        <h1>Página de bienvenida</h1>
        <hr/>
        <Link to="/">Inicio</Link><br/>
        <Link to="/welcome">Bienvenida</Link><br/>
        <Link to="/greeting">Saludo</Link><br/>
        <Link to="/other">Otra página</Link>
    </div>
}