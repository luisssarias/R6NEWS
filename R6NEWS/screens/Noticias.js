// screens/NoticiasCrud.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

const NoticiasCrud = () => {
  const [noticias, setNoticias] = useState([
    {
      id: "1",
      fecha: "10 Octubre 2025",
      titulo: "R6 SI, los ganadores",
      descripcion: "Resumen del Six Invitational",
      imagen: "https://i.ytimg.com/vi/cmxTr1glH7Y/hq720.jpg",
    },
  ]);

  const [modoEdicion, setModoEdicion] = useState(false);
  const [editId, setEditId] = useState(null);

  // Campos del formulario
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [imagen, setImagen] = useState("");

  // LIMPIAR FORMULARIO
  const resetFormulario = () => {
    setTitulo("");
    setDescripcion("");
    setFecha("");
    setImagen("");
    setModoEdicion(false);
    setEditId(null);
  };

  // AGREGAR NOTICIA
  const agregarNoticia = () => {
    const nueva = {
      id: Date.now().toString(),
      titulo,
      descripcion,
      fecha,
      imagen,
    };

    setNoticias([...noticias, nueva]);
    resetFormulario();
  };

  // CARGAR NOTICIA PARA EDITAR
  const cargarParaEditar = (item) => {
    setTitulo(item.titulo);
    setDescripcion(item.descripcion);
    setFecha(item.fecha);
    setImagen(item.imagen);
    setModoEdicion(true);
    setEditId(item.id);
  };

  // GUARDAR EDICIÓN
  const guardarEdicion = () => {
    const actualizadas = noticias.map((n) =>
      n.id === editId
        ? {
            ...n,
            titulo,
            descripcion,
            fecha,
            imagen,
          }
        : n
    );

    setNoticias(actualizadas);
    resetFormulario();
  };

  // ELIMINAR
  const eliminarNoticia = (id) => {
    setNoticias(noticias.filter((n) => n.id !== id));
  };

  // RENDER ITEM
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
      <Text style={styles.screenTitle}>CRUD Noticias</Text>

      {/* FORMULARIO */}
      <View style={styles.formCard}>
        <Text style={styles.formTitle}>
          {modoEdicion ? "Editar Noticia" : "Crear Noticia"}
        </Text>

        <TextInput
          placeholder="Título"
          placeholderTextColor="#777"
          style={styles.input}
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          placeholder="Descripción"
          placeholderTextColor="#777"
          style={[styles.input, { height: 80 }]}
          multiline
          value={descripcion}
          onChangeText={setDescripcion}
        />

        <TextInput
          placeholder="Fecha"
          placeholderTextColor="#777"
          style={styles.input}
          value={fecha}
          onChangeText={setFecha}
        />

        <TextInput
          placeholder="URL Imagen"
          placeholderTextColor="#777"
          style={styles.input}
          value={imagen}
          onChangeText={setImagen}
        />

        {/* BOTONES DEL FORM */}
        <View style={styles.formActions}>
          {modoEdicion ? (
            <TouchableOpacity style={styles.saveButton} onPress={guardarEdicion}>
              <Text style={styles.btnTextBlack}>Guardar Cambios</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.addButton} onPress={agregarNoticia}>
              <Text style={styles.btnTextBlack}>Agregar</Text>
            </TouchableOpacity>
          )}

          {modoEdicion && (
            <TouchableOpacity style={styles.cancelButton} onPress={resetFormulario}>
              <Text style={styles.btnText}>Cancelar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* LISTA */}
      <FlatList
        data={noticias}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

export default NoticiasCrud;

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
