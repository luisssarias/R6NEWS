// screens/Resultados.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar, Image } from 'react-native';

const partidas = [
  {
    id: '1',
    izquierda: 'BDS',
    derecha: 'Rogue',
    marcadorIzq: 7,
    marcadorDer: 4,
    fecha: '11 Marzo 2024',
    imgIzq: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBc4bwkWUivshcqIFtxwjLlaCuFXI0gdnDPg&s',
    imgDer: 'https://ih1.redbubble.net/image.753351556.0305/st,small,507x507-pad,600x600,f8f8f8.jpg',
  },
  {
    id: '2',
    izquierda: 'FURIA',
    derecha: 'MNM',
    marcadorIzq: 2,
    marcadorDer: 7,
    fecha: '11 Marzo 2024',
    imgIzq: 'https://ih1.redbubble.net/image.1179359660.4569/st,small,507x507-pad,600x600,f8f8f8.jpg',
    imgDer: 'https://esports-news.co.uk/wp-content/uploads/2016/08/MnM-logo.jpg',
  },
  {
    id: '3',
    izquierda: 'G2',
    derecha: 'WZM',
    marcadorIzq: 3,
    marcadorDer: 7,
    fecha: '11 Marzo 2024',
    imgIzq: 'https://logowik.com/content/uploads/images/g2-esport6091.jpg',
    imgDer: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE13WkVBdmT4dICVcW7i1pf1sCWSf2iIdE2g&s',
  },
];

const Resultados = () => {
  const renderItem = ({ item }) => {
    // 👑 DETERMINAR GANADOR
    let ganador = null;

    if (item.marcadorIzq === 7) {
      ganador = item.izquierda;
    } else if (item.marcadorDer === 7) {
      ganador = item.derecha;
    } else {
      ganador = "En curso";
    }

    return (
      <View style={styles.matchCard}>
        <View style={styles.rowTeams}>

          {/* EQUIPO IZQUIERDO */}
          <View style={styles.teamSide}>
            <Image source={{ uri: item.imgIzq }} style={styles.teamLogo} />
            <Text style={styles.teamName}>{item.izquierda}</Text>
          </View>

          {/* MARCADOR */}
          <View style={styles.scoreBox}>
            <Text style={styles.scoreLeft}>{item.marcadorIzq}</Text>
            <Text style={styles.scoreDash}> - </Text>
            <Text style={styles.scoreRight}>{item.marcadorDer}</Text>
          </View>

          {/* EQUIPO DERECHO */}
          <View style={styles.teamSide}>
            <Image source={{ uri: item.imgDer }} style={styles.teamLogo} />
            <Text style={styles.teamName}>{item.derecha}</Text>
          </View>
        </View>

        {/* 🟩 GANADOR */}
        <Text style={styles.winnerText}>
          {ganador === "En curso" ? "En curso" : `Ganador: ${ganador}`}
        </Text>

        {/* FECHA */}
        <Text style={styles.date}>{item.fecha}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.screenTitle}>Resultados</Text>

      <View style={styles.headerCard}>
        <Text style={styles.headerTitle}>Resultados de partidas</Text>
        <Text style={styles.headerBell}>🔔 Notificaciones</Text>
      </View>

      <FlatList
        data={partidas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Resultados;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  screenTitle: {
    color: "#FFD426",
    fontSize: 40,
    fontWeight: "900",
  },
  headerCard: {
    backgroundColor: '#111111',
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  headerBell: {
    color: '#FFD800',
    fontSize: 13,
  },
  matchCard: {
    backgroundColor: '#111111',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 14,
  },
  rowTeams: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teamSide: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 70,
  },
  teamLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginBottom: 4,
  },
  teamName: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  scoreBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F1F1F',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  scoreLeft: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scoreDash: {
    color: '#fff',
    fontSize: 22,
  },
  scoreRight: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  winnerText: {
    marginTop: 10,
    color: '#FFD800',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 13,
  },
  date: {
    color: '#aaaaaa',
    fontSize: 11,
    marginTop: 6,
    textAlign: 'center',
  },
});
