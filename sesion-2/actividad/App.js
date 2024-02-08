import { SafeAreaView, Text, View } from "react-native";
import Hola from "./components/Hola";

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: 50, padding: 10 }}>
      <View>
        <Text>Saludos Actividad desde React+Expo</Text>
        <Hola />
      </View>
    </SafeAreaView>
  );
}
