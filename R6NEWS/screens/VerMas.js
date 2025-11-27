import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function VerMasScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.logo}>R6News</Text>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Noticias recientes</Text>
        <Text style={styles.notif}>🔔 Notificaciones</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require("../assets/noticia.jpg")} 
          style={styles.cardImg}
        />

        <Text style={styles.cardTitle}>Road to S.I. se pone en marcha</Text>

        <Text style={styles.cardText}>
          El evento competitivo del año se encuentra a la vuelta de la esquina. 
          Estamos muy emocionados de anunciar que este año se marcha el evento competitivo 
          del año. A partir de hoy...
        </Text>

        <Text style={styles.cardDate}>16 Octubre 2025</Text>
      </View>

      <TouchableOpacity
        style={styles.btnBack}
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.btnBackText}>Regresar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  logo: {
    color: "#FFD600",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  notif: {
    color: "#FFD600",
    fontSize: 12,
  },
  card: {
    backgroundColor: "#181818",
    borderRadius: 16,
    padding: 14,
  },
  cardImg: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardText: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 12,
  },
  cardDate: {
    textAlign: "right",
    color: "#aaa",
    fontSize: 12,
  },
  btnBack: {
    backgroundColor: "#FFD600",
    marginTop: 25,
    marginBottom: 40,
    paddingVertical: 14,
    borderRadius: 14,
  },
  btnBackText: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 17,
  },
});
