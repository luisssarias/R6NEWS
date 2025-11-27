import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function EditarPerfilScreen() {
  const navigation = useNavigation();

  // Estados para datos del usuario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ver contraseña

  const handleSave = () => {
    Alert.alert(
      "Cambios guardados",
      "Tu información fue actualizada correctamente.",
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar perfil</Text>

      {/* Foto */}
      <View style={styles.avatarContainer}>
        <Image
          source={require("../assets/user.jpg")}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.cameraBtn}>
          <Text style={styles.cameraIcon}>📷</Text>
        </TouchableOpacity>
      </View>

      {/* INPUT NOMBRE */}
      <View style={styles.inputBox}>
        <View style={styles.rowHeader}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.editIcon}>✏️</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          placeholderTextColor="#777"
          value={nombre}
          onChangeText={setNombre}
        />
      </View>

      {/* INPUT CORREO */}
      <View style={styles.inputBox}>
        <View style={styles.rowHeader}>
          <Text style={styles.label}>Correo</Text>
          <Text style={styles.editIcon}>✏️</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="correo@ejemplo.com"
          placeholderTextColor="#777"
          keyboardType="email-address"
          value={correo}
          onChangeText={setCorreo}
        />
      </View>

      {/* INPUT CONTRASEÑA */}
      <View style={styles.inputBox}>
        <View style={styles.rowHeader}>
          <Text style={styles.label}>Nueva contraseña</Text>
          <Text style={styles.editIcon}>✏️</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="******"
            placeholderTextColor="#777"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />

          {/* Ver/Ocultar contraseña */}
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={22}
              color="#FFD600"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Botones */}
      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.btnSave} onPress={handleSave}>
          <Text style={styles.btnSaveText}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnCancel}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.btnCancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    padding: 25,
  },
  title: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 20,
  },

  // --- FOTO ---
  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  cameraBtn: {
    backgroundColor: "#000",
    padding: 6,
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
    right: 95 - 30,
  },
  cameraIcon: {
    color: "#FFD600",
    fontSize: 18,
  },

  // --- INPUTS ---
  inputBox: {
    backgroundColor: "#1a1a1a",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },
  rowHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    color: "#ccc",
    fontSize: 14,
  },
  editIcon: {
    color: "#FFD600",
    fontSize: 16,
  },
  input: {
    color: "#fff",
    fontSize: 16,
  },

  // --- BOTONES ---
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btnSave: {
    backgroundColor: "#FFD600",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  btnSaveText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnCancel: {
    backgroundColor: "#1a1a1a",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  btnCancelText: {
    color: "#fff",
    fontSize: 16,
  },
});
