import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EstadisticasP() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <View style={styles.headerRow}>
          <Text style={styles.title}>R6News</Text>

          <TouchableOpacity onPress={() => navigation.navigate("Notificaciones")}>
            <Text style={styles.notif}>🔔</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.scoreBox}>
          <View style={styles.team}>
            <Image
              source={require("../assets/faze.png")}
              style={styles.logo}
            />
            <Text style={styles.teamName}>Faze</Text>
          </View>

          <Text style={styles.score}>7 - 4</Text>

          <View style={styles.team}>
            <Image
              source={require("../assets/rogue.png")}
              style={styles.logo}
            />
            <Text style={styles.teamName}>Rogue</Text>
          </View>
        </View>

        <Text style={styles.date}>14 de Marzo de 2025</Text>
        <Text style={styles.torneo}>R6</Text>

        {/* BOTÓN DE ESTADÍSTICAS */}
        <TouchableOpacity
          style={styles.statsButton}
          onPress={() => navigation.navigate("Stats")}
        >
          <Text style={styles.statsButtonText}>Estadísticas</Text>
        </TouchableOpacity>

        {/* TABLA */}
        <View style={styles.statsTable}>
          <View style={styles.column}>
            <Text style={styles.columnTitle}>Faze</Text>
            <Text style={styles.item}>10 Kills</Text>
            <Text style={styles.item}>8 Deaths</Text>
            <Text style={styles.item}>1.3 K/D</Text>
            <Text style={styles.item}>60% Headshot</Text>
            <Text style={styles.item}>0.9 Kills/round</Text>
            <Text style={styles.item}>1 Plant</Text>
            <Text style={styles.item}>Zofia MVP</Text>
            <Text style={styles.item}>20 Open Kills</Text>
            <Text style={styles.item}>20% Trade %</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.columnTitle}>Rogue</Text>
            <Text style={styles.item}>8 Kills</Text>
            <Text style={styles.item}>10 Deaths</Text>
            <Text style={styles.item}>0.8 K/D</Text>
            <Text style={styles.item}>50% Headshot</Text>
            <Text style={styles.item}>0.7 Kills/round</Text>
            <Text style={styles.item}>2 Plants</Text>
            <Text style={styles.item}>Lion MVP</Text>
            <Text style={styles.item}>4 Open Kills</Text>
            <Text style={styles.item}>0% Trade %</Text>
          </View>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
    alignItems: "center",
  },
  card: {
    width: "100%",
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 1)",
    borderRadius: 12,
    padding: 18,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "yellow",
    fontSize: 28,
    fontWeight: "bold",
  },
  notif: {
    fontSize: 28,
    color: "yellow",
  },
  scoreBox: {
    flexDirection: "row",
    backgroundColor: "#2d2d2d",
    padding: 18,
    borderRadius: 12,
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  team: {
    alignItems: "center",
    gap: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  teamName: {
    color: "white",
    fontSize: 14,
  },
  score: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  date: {
    marginTop: 10,
    textAlign: "center",
    color: "white",
    opacity: 0.8,
  },
  torneo: {
    textAlign: "center",
    color: "white",
    opacity: 0.8,
    marginBottom: 12,
  },
  statsButton: {
    backgroundColor: "yellow",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 15,
  },
  statsButtonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  statsTable: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#2c2c2c",
    padding: 15,
    borderRadius: 12,
  },
  column: {
    alignItems: "center",
    width: "45%",
  },
  columnTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    color: "white",
    fontSize: 14,
    marginVertical: 2,
  },
});
