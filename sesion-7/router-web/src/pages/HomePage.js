import { Link } from "react-router-dom";

export default function HomePage() {
    return <div>
         <h1>Hello world. React + Parcel!</h1>
        <hr />
        <Link to="/">Inicio</Link><br />
        <Link to="/welcome">Bienvenida</Link><br />
        <Link to="/greeting">Saludo</Link><br />
        <Link to="/other">Otra página</Link>
    </div>
}