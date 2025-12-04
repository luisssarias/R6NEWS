import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RegistroSesionScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  // VALIDAR CORREO
  const validateEmail = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  };

  const handleRegister = () => {
    let tempErrors = {};

    if (!name.trim()) tempErrors.name = "El nombre es obligatorio";

    if (!email.trim()) {
      tempErrors.email = "El correo es obligatorio";
    } else if (!validateEmail(email)) {
      tempErrors.email = "Ingresa un correo válido";
    }

    if (!pass.trim()) {
      tempErrors.pass = "La contraseña es obligatoria";
    } else if (pass.length < 6) {
      tempErrors.pass = "Mínimo 6 caracteres";
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      // TODO OK → Mostrar modal
      setModalVisible(true);
    }
  };

  const handleModalOk = () => {
    setModalVisible(false);
    navigation.replace("TabsMenu");
  };

  // BOTÓN ACTIVO
  const isDisabled = !name.trim() || !email.trim() || !pass.trim();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>R6News</Text>
      <Text style={styles.title}>Registrarse</Text>

      {/* Nombre */}
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      {/* Correo */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      {/* Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />
      {errors.pass && <Text style={styles.error}>{errors.pass}</Text>}

      {/* BOTÓN REGISTRARSE */}
      <TouchableOpacity
        style={[styles.btn, isDisabled && { opacity: 0.5 }]}
        disabled={isDisabled}
        onPress={handleRegister}
      >
        <Text style={styles.btnText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.replace("IniciarSesion")}>
        <Text style={styles.bottomText}>
          ¿Ya tienes una cuenta? <Text style={styles.link}>Iniciar sesión</Text>
        </Text>
      </TouchableOpacity>

      {/* MODAL */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>✔ Registro exitoso</Text>
            <Text style={styles.modalSub}>
              Tu cuenta ha sido creada correctamente.
            </Text>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleModalOk}
            >
              <Text style={styles.modalButtonText}>Aceptar</Text>
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
    marginBottom: 10,
    fontSize: 16,
  },

  error: {
    color: "#FF5A5A",
    marginBottom: 8,
    marginLeft: 5,
    fontSize: 14,
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

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "75%",
    backgroundColor: "#1A1A1A",
    padding: 25,
    borderRadius: 18,
    alignItems: "center",
  },

  modalText: {
    color: "#FFD600",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  modalSub: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 25,
    fontSize: 15,
  },

  modalButton: {
    backgroundColor: "#FFD600",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 12,
  },

  modalButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
});
