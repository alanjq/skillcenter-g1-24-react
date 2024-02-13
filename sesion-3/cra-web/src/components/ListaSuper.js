import ItemSuper from "./ItemSuper"

export default function ListaSuper({elementos}) {
    const STYLE = {border: '1px solid gray'}

    return <div style={STYLE}>
        {elementos.map((item, key) => <ItemSuper key={key} label={item} />)}
    </div>
}
