export default function ItemSuper({ label }) {
    const STYLES = {
        fontSite: "1.5em",
        padding: '.5em',
        display: 'block',
        textAlign: 'center'
    }

    return <span style={STYLES}>{label}</span>
}