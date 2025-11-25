import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegisterScreen from './screens/RegistroSesion';
import IniciarSesionScreen from './screens/IniciarSesion';
import CambiarContrasena from './screens/CambiarContrasena';

export default function App() {
  return (
    <View style={styles.container}>
      <CambiarContrasena></CambiarContrasena>
    </View>
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
