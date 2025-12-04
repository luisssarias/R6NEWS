import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import AuthController from "../controllers/AuthController";

export default function IniciarSesionScreen() {
  const navigation = useNavigation();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const user = await AuthController.login({ correo, password });
      // Aquí podrías guardar al usuario en contexto/global state si quisieras.
      navigation.navigate("TabsMenu");
    } catch (err) {
      if (err.type === "validation") {
        const msg =
          err.errors.correo ||
          err.errors.password ||
          "Revisa los datos ingresados.";
        Alert.alert("Datos inválidos", msg);
      } else {
        Alert.alert("Error", err.message || "No se pudo iniciar sesión");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>R6News</Text>

      <Text style={styles.title}>Bienvenido{"\n"}de nuevo</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />

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

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Iniciar sesión</Text>
      </TouchableOpacity>

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
