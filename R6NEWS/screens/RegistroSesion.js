import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function RegistroSesionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>R6News</Text>

      <Text style={styles.title}>Registrarse</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Registrarse</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        ¿Ya tienes una cuenta? <Text style={styles.link}>Iniciar sesión</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  logo: {
    color: "#FFD600",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    marginBottom: 15,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "#FFD600",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  bottomText: {
    color: "#aaa",
    marginTop: 20,
    textAlign: "center",
    fontSize: 14,
  },
  link: {
    color: "#fff",
    fontWeight: "bold",
  },
});
