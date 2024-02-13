import { Alert, Button } from "react-native";

export default function Boton(props) {
    const handlePress = (valor) => {
        console.log('clic en el botón', valor);
        const name = Alert.prompt("Ingresa un nombre")
        
        console.log(name);
        // Alert.alert("Ingresaste el nombre: " + name)
    }

    return <Button
        color="red"
        title={props.title}
        onPress={() => handlePress('BOTON')}
    />
}