import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import Bienvenida from './screens/Bienvenida';
import IniciarSesion from './screens/IniciarSesion';
import RegistroSesion from './screens/RegistroSesion';
import Inicio from './screens/Inicio';
import Noticias from './screens/Noticias';
import Resultados from './screens/Resultados';
import EstadisticasP from './screens/EstadisticasP';
import Perfil from './screens/Perfil';
import CambiarContrasena from './screens/CambiarContrasena';
import OlvidarContrasena from './screens/OlvidarContrasena';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();


function TabsMenu() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#111',
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: '#F9D708',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Inicio") return <Ionicons name="home-outline" size={22} color={color} />;
          if (route.name === "Noticias") return <Ionicons name="newspaper-outline" size={22} color={color} />;
          if (route.name === "Partidas") return <Ionicons name="game-controller-outline" size={22} color={color} />;
          if (route.name === "Estadísticas") return <Ionicons name="stats-chart-outline" size={22} color={color} />;
          if (route.name === "Perfil") return <Ionicons name="person-outline" size={22} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: -4,
        }
      })}
    >
      <Tabs.Screen name="Inicio" component={Inicio} />
      <Tabs.Screen name="Noticias" component={Noticias} />
      <Tabs.Screen name="Partidas" component={Resultados} />
      <Tabs.Screen name="Estadísticas" component={EstadisticasP} />
      <Tabs.Screen name="Perfil" component={Perfil} />
    </Tabs.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bienvenida" screenOptions={{ headerShown: false }}>

        {/* PANTALLAS SIN TABS */}
        <Stack.Screen name="Bienvenida" component={Bienvenida} />
        <Stack.Screen name="IniciarSesion" component={IniciarSesion} />
        <Stack.Screen name="RegistroSesion" component={RegistroSesion} />
        <Stack.Screen name="OlvidarContrasena" component={OlvidarContrasena} />
        <Stack.Screen name="CambiarContraseña" component={CambiarContrasena} />

        {/* PANTALLAS CON TABS */}
        <Stack.Screen name="TabsMenu" component={TabsMenu} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}