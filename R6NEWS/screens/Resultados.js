import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import ResultadosController from "../controllers/ResultadosController";

export default function Resultados() {
  const [partidas, setPartidas] = useState([]);

  useEffect(() => {
    cargarResultados();
  }, []);

  const cargarResultados = async () => {
    try {
      const data = await ResultadosController.listarResultados();
      setPartidas(data);
    } catch (err) {
      Alert.alert("Error", "No se pudieron cargar los resultados");
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => Linking.openURL("https://twitch.com")}
    >
      <View style={styles.matchCard}>
        <Text style={styles.winnerText}>
          {item.ganador === "En curso"
            ? "En curso"
            : `Ganador: ${item.ganador}`}
        </Text>
        <Text style={styles.date}>{item.fecha}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* resto de tu JSX original */}
      <FlatList
        data={partidas}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  screenTitle: {
    color: "#FFD426",
    fontSize: 40,
    fontWeight: "900",
  },
  headerCard: {
    backgroundColor: "#111111",
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  headerBell: {
    color: "#FFD800",
    fontSize: 13,
  },
  matchCard: {
    backgroundColor: "#111111",
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  rowTeams: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  teamSide: {
    flexDirection: "column",
    alignItems: "center",
    width: 70,
  },
  teamLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginBottom: 4,
  },
  teamName: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  scoreBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1F1F1F",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  scoreLeft: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  scoreDash: {
    color: "#fff",
    fontSize: 22,
  },
  scoreRight: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  winnerText: {
    marginTop: 10,
    color: "#FFD800",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 13,
  },
  date: {
    color: "#aaaaaa",
    fontSize: 11,
    marginTop: 6,
    textAlign: "center",
  },
});
