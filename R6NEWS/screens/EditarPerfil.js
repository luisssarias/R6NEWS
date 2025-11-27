import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EditarPerfilScreen() {
  const navigation = useNavigation();

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
        <TouchableOpacity style={styles.cameraBtn} activeOpacity={0.7}>
          <Text style={styles.cameraIcon}>📷</Text>
        </TouchableOpacity>
      </View>

      {/* Nombre */}
      <TouchableOpacity style={styles.row} activeOpacity={0.8}>
        <Text style={styles.rowText}>Nombre</Text>
        <Text style={styles.rowIcon}>✏️</Text>
      </TouchableOpacity>

      {/* Correo */}
      <TouchableOpacity style={styles.row} activeOpacity={0.8}>
        <Text style={styles.rowText}>Correo</Text>
        <Text style={styles.rowIcon}>✏️</Text>
      </TouchableOpacity>

      {/* Cambiar contraseña */}
      <TouchableOpacity
        style={styles.row}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("CambiarContrasena")}
      >
        <Text style={styles.rowText}>Cambiar contraseña</Text>
        <Text style={styles.rowIcon}>✏️</Text>
      </TouchableOpacity>

      {/* Botones */}
      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.btnSave} activeOpacity={0.8} onPress={handleSave}>
          <Text style={styles.btnSaveText}>Guardar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnCancel}
          activeOpacity={0.8}
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
  row: {
    backgroundColor: "#1a1a1a",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  rowText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  rowIcon: {
    color: "#FFD600",
    fontSize: 16,
  },
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
