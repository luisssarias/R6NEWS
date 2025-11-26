import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa tus pantallas reales
import Bienvenida from './screens/Bienvenida';
import IniciarSesion from './screens/IniciarSesion';
import RegistroSesion from './screens/RegistroSesion';
import Inicio from './screens/Inicio';
import Noticias from './screens/Noticias';
import Perfil from './screens/Perfil';
import Notificaciones from './screens/Notificaciones';
import Resultados from './screens/Resultados';
import VerMas from './screens/VerMas';
import EstadisticasP from './screens/EstadisticasP';
import CambiarContrasena from './screens/CambiarContrasena';
import OlvidarContrasena from './screens/OlvidarContrasena';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Perfil">
        <Stack.Screen name="Bienvenida" component={Bienvenida} />
        <Stack.Screen name="IniciarSesion" component={IniciarSesion} />
        <Stack.Screen name="RegistroSesion" component={RegistroSesion} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Noticias" component={Noticias} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Notificaciones" component={Notificaciones} />
        <Stack.Screen name="Resultados" component={Resultados} />
        <Stack.Screen name="VerMas" component={VerMas} />
        <Stack.Screen name="EstadisticasP" component={EstadisticasP} />
        <Stack.Screen name="CambiarContraseña" component={CambiarContrasena} />
        <Stack.Screen name="OlvidarContraseña" component={OlvidarContrasena} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
