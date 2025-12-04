import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Switch,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const notificacionesData = [
  {
    id: "1",
    titulo: "Nueva actualización disponible",
    descripcion: "Ubisoft lanzó un nuevo parche con balance de operadores.",
    fecha: "Hace 2h",
  },
  {
    id: "2",
    titulo: "Partido en vivo",
    descripcion: "El encuentro SSG vs TS ha comenzado.",
    fecha: "Hace 30 min",
  },
  {
    id: "3",
    titulo: "Operador rework",
    descripcion: "Jackal recibe ajustes importantes en la próxima temporada.",
    fecha: "Ayer",
  },
];

export default function NotificacionesScreen() {
  const navigation = useNavigation();
  const [activadas, setActivadas] = useState(true);

  return (
    <View style={styles.container}>
      {/* BOTÓN DE REGRESO */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={28} color="#FFD700" />
      </TouchableOpacity>

      {/* ENCABEZADO */}
      <View style={styles.header}>
        <Ionicons name="notifications-outline" size={32} color="#FFD700" />
        <Text style={styles.title}>Notificaciones</Text>
      </View>

      {/* SWITCH */}
      <View style={styles.switchRow}>
        <Text style={styles.switchLabel}>Activar notificaciones</Text>
        <Switch
          value={activadas}
          onValueChange={setActivadas}
          trackColor={{ false: "#555", true: "#FFD700" }}
          thumbColor="#111"
        />
      </View>

      {/* LISTA */}
      <FlatList
        data={notificacionesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardDesc}>{item.descripcion}</Text>
            <Text style={styles.cardFecha}>{item.fecha}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  /* --- REGRESAR --- */
  backButton: {
    position: "absolute",
    top: 20,
    left: 15,
    padding: 8,
    zIndex: 10,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
    justifyContent: "center",
  },
  title: {
    color: "#FFD700",
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 10,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingVertical: 10,
  },
  switchLabel: {
    color: "white",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#1A1A1A",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: "#FFD700",
  },
  cardTitle: {
    color: "#FFD700",
    fontSize: 17,
    fontWeight: "bold",
  },
  cardDesc: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 4,
  },
  cardFecha: {
    color: "#888",
    fontSize: 12,
    marginTop: 8,
    textAlign: "right",
  },
});
