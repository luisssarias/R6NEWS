import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

export default function IniciarSesionScreen() {

  const navigation = useNavigation();

  // Estados
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Validar correo
  const validarCorreo = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleLogin = () => {

    // Validación de campos vacíos
    if (!correo || !password) {
      Alert.alert("Campos incompletos", "Por favor rellena todos los campos.");
      return;
    }

    // Validación de correo
    if (!validarCorreo(correo)) {
      Alert.alert("Correo inválido", "Ingresa un correo electrónico válido.");
      return;
    }

    // Todo correcto
    navigation.navigate("TabsMenu");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>R6News</Text>

      <Text style={styles.title}>Bienvenido{"\n"}de nuevo</Text>

      {/* INPUT CORREO */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* INPUT CONTRASEÑA CON OJO */}
      <View style={styles.passwordBox}>
        <TextInput
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
          placeholder="Contraseña"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color="#FFD600"
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>
      </View>

      {/* BOTÓN INICIAR */}
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* OLVIDASTE TU CONTRASEÑA */}
      <TouchableOpacity onPress={() => navigation.replace("OlvidarContrasena")}>
        <Text style={styles.bottomText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
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

  passwordBox: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
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

});
