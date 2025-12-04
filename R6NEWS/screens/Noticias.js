import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import NoticiasController from "../controllers/NoticiasController";

export default function NoticiasScreen() {
  const [noticias, setNoticias] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [editId, setEditId] = useState(null);

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    cargarNoticias();
  }, []);

  const cargarNoticias = async () => {
    try {
      const data = await NoticiasController.listarNoticias();
      setNoticias(data);
    } catch (err) {
      Alert.alert("Error", "No se pudieron cargar las noticias");
    }
  };

  const resetFormulario = () => {
    setTitulo("");
    setDescripcion("");
    setFecha("");
    setImagen("");
    setModoEdicion(false);
    setEditId(null);
  };

  const manejarGuardar = async () => {
    const data = { titulo, descripcion, fecha, imagen };

    try {
      if (modoEdicion && editId != null) {
        await NoticiasController.actualizarNoticia(editId, data);
      } else {
        await NoticiasController.crearNoticia(data);
      }
      await cargarNoticias();
      resetFormulario();
    } catch (err) {
      if (err.type === "validation") {
        const msg =
          err.errors.titulo ||
          err.errors.descripcion ||
          err.errors.fecha ||
          "Revisa los campos.";
        Alert.alert("Datos inválidos", msg);
      } else {
        Alert.alert("Error", err.message || "No se pudo guardar");
      }
    }
  };

  const cargarParaEditar = (item) => {
    setTitulo(item.titulo);
    setDescripcion(item.descripcion);
    setFecha(item.fecha);
    setImagen(item.imagen);
    setModoEdicion(true);
    setEditId(item.id);
  };

  const eliminarNoticia = async (id) => {
    try {
      await NoticiasController.eliminarNoticia(id);
      await cargarNoticias();
    } catch (err) {
      Alert.alert("Error", "No se pudo eliminar la noticia");
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.newsCard}>
      <Image source={{ uri: item.imagen }} style={styles.newsImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.newsDate}>{item.fecha}</Text>
        <Text style={styles.newsTitle}>{item.titulo}</Text>
        <Text style={styles.newsDescription}>{item.descripcion}</Text>

        <View style={styles.actionsRow}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => cargarParaEditar(item)}
          >
            <Text style={styles.btnText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => eliminarNoticia(item.id)}
          >
            <Text style={styles.btnText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* El resto de tu JSX original, usando manejarGuardar en lugar de dos funciones */}
      {/* ... */}
      <FlatList
        data={noticias}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  screenTitle: {
    color: "#FFD426",
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 20,
    textAlign: "center",
  },

  // FORMULARIO
  formCard: {
    backgroundColor: "#1f1f1f",
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
  },
  formTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#2a2a2a",
    padding: 12,
    borderRadius: 10,
    color: "white",
    marginBottom: 10,
  },
  formActions: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  addButton: {
    backgroundColor: "#FFD800",
    padding: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#4caf50",
    padding: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#ff4b4b",
    padding: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },
  btnTextBlack: {
    color: "black",
    fontWeight: "800",
  },
  btnText: {
    color: "white",
    fontWeight: "800",
  },

  // LISTA
  newsCard: {
    backgroundColor: "#1f1f1f",
    borderRadius: 16,
    padding: 10,
    flexDirection: "row",
    marginBottom: 12,
  },
  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 10,
  },
  newsDate: {
    color: "#aaaaaa",
    fontSize: 11,
  },
  newsTitle: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  newsDescription: {
    color: "#cfcfcf",
    fontSize: 12,
  },
  actionsRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },
  editButton: {
    backgroundColor: "#2e7dff",
    padding: 8,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: "#ff4b4b",
    padding: 8,
    borderRadius: 8,
  },
});
