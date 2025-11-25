import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function CambiarContrasena() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>R6News</Text>

      <Text style={styles.title}>Cambiar{"\n"}contraseña</Text>

      <TextInput
        style={styles.input}
        placeholder="Contraseña actual"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Nueva contraseña"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <Pressable
        style={({ pressed }) => [
          styles.btnYellow,
          pressed && styles.btnPressed
        ]}
        onPress={() => {}}
      >
        <Text style={styles.btnYellowText}>Guardar</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [
          styles.btnDark,
          pressed && styles.btnPressed
        ]}
        onPress={() => {}}
      >
        <Text style={styles.btnDarkText}>Cancelar</Text>
      </Pressable>
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
    lineHeight: 34,
  },

  input: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 14,
    color: "#fff",
    marginBottom: 15,
    fontSize: 16,
  },

  btnYellow: {
    backgroundColor: "#FFD600",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  btnYellowText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  btnDark: {
    backgroundColor: "#1a1a1a",
    padding: 14,
    borderRadius: 12,
    marginTop: 10,
  },
  btnDarkText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  btnPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },
});
