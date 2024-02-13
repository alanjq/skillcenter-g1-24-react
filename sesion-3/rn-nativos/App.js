import { SafeAreaView, StyleSheet, View } from 'react-native';
import ListOfGreetings from './components/ListOfGreetings';
import Boton from './components/Boton';

export default function App() {
  const NOMBRES = [
    'Alan',
    'Enedelia',
    'Santiago',
    'Luis',
    'Pedro',
    'José',
    'Alan',
    'Enedelia',
    'Santiago',
    'Luis',
    'Pedro',
    'José',
    'Alan',
    'Enedelia',
    'Santiago',
    'Luis',
    'Pedro',
    'José',
    'Alan',
    'Enedelia',
    'Santiago',
    'Luis',
    'Pedro',
    'José',
    'Alan',
    'Enedelia',
    'Santiago',
    'Luis',
    'Pedro',
    'José',
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Boton title="Mi botón" />
      <ListOfGreetings list={NOMBRES} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
