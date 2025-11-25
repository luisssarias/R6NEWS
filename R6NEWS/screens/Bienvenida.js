import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>R6News</Text>
        <Text style={styles.subtitle}>
          Conecta con el mundo{"\n"}
          competitivo de{"\n"}
          Rainbow Six
        </Text>

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0C0E",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#0D0D0D",
    paddingVertical: 50,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1a1a1a",
  },
  title: {
    color: "#FFD426",
    fontSize: 38,
    fontWeight: "900",
    marginBottom: 20,
  },
  subtitle: {
    color: "#d3d3d3",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
  },
  loginBtn: {
    backgroundColor: "#FFD426",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 18,
    width: 180,
    alignItems: "center",
  },
  loginText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "700",
  },
  registerBtn: {
    backgroundColor: "#2c2c2c",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: 180,
    alignItems: "center",
  },
  registerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
