import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import AuthController from "../controllers/AuthController";

export default function RegistroSesionScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = async () => {
    try {
      setErrors({});
      await AuthController.register({
        nombre: name,
        correo: email,
        password: pass,
      });
      setModalVisible(true);
    } catch (err) {
      if (err.type === "validation") {
        setErrors(err.errors || {});
      } else {
        Alert.alert("Error", err.message || "No se pudo registrar");
      }
    }
  };

  const onSuccess = () => {
    setModalVisible(false);
    navigation.replace("TabsMenu");
  };

  const disabled = !name.trim() || !email.trim() || !pass.trim();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />
      {errors.nombre && <Text style={styles.error}>{errors.nombre}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.correo && <Text style={styles.error}>{errors.correo}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <TouchableOpacity
        style={[styles.btn, disabled && { opacity: 0.5 }]}
        disabled={disabled}
        onPress={handleRegister}
      >
        <Text style={styles.btnText}>Registrarse</Text>
      </TouchableOpacity>

      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalBg}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Registro exitoso</Text>
            <TouchableOpacity onPress={onSuccess} style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#111",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 5,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#F9D708",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalBg: {
    flex: 1,
    backgroundColor: "#000000aa",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalText: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalBtn: {
    backgroundColor: "#F9D708",
    padding: 10,
    borderRadius: 8,
  },
  modalBtnText: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
});
