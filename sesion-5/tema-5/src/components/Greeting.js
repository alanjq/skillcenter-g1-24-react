import WelcomeMessage from "./WelcomeMessage"

const STYLE = { padding: '1em', border: '1px solid gray' }

export default function Greeting({ name }) {

    return <div style={STYLE}>
        Hola {name}.
        <WelcomeMessage />
    </div>
}