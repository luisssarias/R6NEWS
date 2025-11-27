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

export default function CambiarContrasenaScreen() {
  const navigation = useNavigation();

  const [actual, setActual] = useState("");
  const [nueva, setNueva] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const handleGuardar = () => {
    if (!actual || !nueva || !confirmar) {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    if (nueva !== confirmar) {
      Alert.alert("Error", "Las nuevas contraseñas no coinciden.");
      return;
    }

    // 👉 Aquí es donde conectas tu lógica real para cambiar contraseña
    Alert.alert("Éxito", "Tu contraseña fue actualizada correctamente.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        {/* TÍTULO R6 */}
        <Text style={styles.r6}>R6News</Text>

        <Text style={styles.title}>Cambiar{"\n"}contraseña</Text>

        {/* INPUTS */}
        <TextInput
          style={styles.input}
          placeholder="Contraseña actual"
          placeholderTextColor="#888"
          secureTextEntry
          value={actual}
          onChangeText={setActual}
        />

        <TextInput
          style={styles.input}
          placeholder="Nueva contraseña"
          placeholderTextColor="#888"
          secureTextEntry
          value={nueva}
          onChangeText={setNueva}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          placeholderTextColor="#888"
          secureTextEntry
          value={confirmar}
          onChangeText={setConfirmar}
        />

        {/* BOTONES */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.btnGuardar} onPress={handleGuardar}>
            <Text style={styles.btnGuardarText}>Guardar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnCancelar}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.btnCancelarText}>Cancelar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    padding: 20,
    alignItems: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#0F0F0F",
    borderRadius: 12,
    padding: 25,
  },
  r6: {
    color: "#FFD700",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  input: {
    backgroundColor: "#1C1C1C",
    padding: 15,
    borderRadius: 12,
    color: "white",
    marginBottom: 15,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  btnGuardar: {
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  btnGuardarText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  btnCancelar: {
    backgroundColor: "#1C1C1C",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  btnCancelarText: {
    fontSize: 18,
    color: "white",
  },
});
