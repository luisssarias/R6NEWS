// screens/Noticias.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native';

const noticias = [
  {
    id: '1',
    titulo: 'R6News',
    subtitulo: 'Noticias recientes',
    tipoHeader: true,
  },
  {
    id: '2',
    fecha: '10 Octubre 2025',
    titulo: 'R6 SI, los ganadores\nson anunciados',
    descripcion: 'Resumen del Six Invitational',
    imagen: 'https://i.ytimg.com/vi/cmxTr1glH7Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDuBKoyoOhOrmv1QY1T5r0dS33h_g',
  },
  {
    id: '3',
    fecha: '10 Octubre 2025',
    titulo: 'Actualización de\ntemporada disponible',
    descripcion: 'Nuevos agentes y mapa',
    imagen: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6c8RMJr3sa4cU2KFjPtBb4/1455dfdc6761bbd62d32ea44cb34c64c/00_R6M_RIPTIDE_KEYART.jpg',
  },
  {
    id: '4',
    fecha: '10 Octubre 2025',
    titulo: 'Nuevo evento con\nskins limitadas',
    descripcion: 'Consíguelas antes de que se vayan',
    imagen: 'https://staticctf.ubisoft.com/p0f8o8d25gmk/4GUg0baRKceIlfJDuPuUin/24a1dfb20e322ca06f1f74dcb0b66018/Y9S4_Proteams_IGN_web.jpg',
  },
];

const Noticias = () => {
  const renderItem = ({ item }) => {
    if (item.tipoHeader) {
      return (
        <View style={styles.headerCard}>
          <View>
            <Text style={styles.brand}>R6News</Text>
            <Text style={styles.headerSubtitle}>Noticias recientes</Text>
          </View>
          <Text style={styles.notificationText}>Notificaciones 🔔</Text>
        </View>
      );
    }

    return (
      <View style={styles.newsCard}>
        <Image source={{ uri: item.imagen }} style={styles.newsImage} />
        <View style={styles.newsContent}>
          <Text style={styles.newsDate}>{item.fecha}</Text>
          <Text style={styles.newsTitle}>{item.titulo}</Text>
          <Text style={styles.newsDescription}>{item.descripcion}</Text>
          <TouchableOpacity>
            <Text style={styles.newsMore}>Ver más</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.screenTitle}>Noticias</Text>

      <FlatList
        data={noticias}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Noticias;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  screenTitle: {
    color: "#FFD426",
    fontSize: 40,
    fontWeight: "900",
  },
  headerCard: {
    backgroundColor: '#1f1f1f',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    color: '#FFD800',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#ffffff',
    marginTop: 4,
  },
  notificationText: {
    color: '#FFD800',
    fontSize: 12,
  },
  newsCard: {
    backgroundColor: '#1f1f1f',
    borderRadius: 16,
    padding: 10,
    flexDirection: 'row',
    marginBottom: 12,
  },
  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 10,
    backgroundColor: '#333',
  },
  newsContent: {
    flex: 1,
  },
  newsDate: {
    color: '#aaaaaa',
    fontSize: 11,
  },
  newsTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  newsDescription: {
    color: '#cfcfcf',
    fontSize: 12,
    marginTop: 2,
  },
  newsMore: {
    color: '#FFD800',
    fontSize: 12,
    marginTop: 4,
  },
});
