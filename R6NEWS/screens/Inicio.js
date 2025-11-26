import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Text style={styles.title}>R6News</Text>
      </View>

      {/* Slider principal */}
      <View style={styles.mainCard}>
        <Image
          source={{ uri: "https://i.imgur.com/QbmB9TO.jpeg" }}
          style={styles.mainImage}
        />
      </View>

      {/* Latest */}
      <Text style={styles.sectionTitle}>LATEST</Text>

      <TouchableOpacity style={styles.latestCard}>
        <Image
          source={{ uri: "https://i.imgur.com/iEdfc0g.jpeg" }}
          style={styles.latestImg}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.latestTitle}>JACKAL OPERATOR BALANCING</Text>
          <Text style={styles.latestTime}>2h ago</Text>
        </View>
      </TouchableOpacity>

      {/* Upcoming Matches */}
      <Text style={styles.sectionTitle}>UPCOMING MATCHES</Text>

      <View style={styles.matchCard}>
        <Text style={styles.matchText}>PWN  vs  FNC</Text>
        <Text style={styles.timeText}>12:00 PM</Text>
      </View>

      <View style={styles.matchCard}>
        <Text style={styles.matchText}>CAG  vs  DIG</Text>
        <Text style={styles.timeText}>1:30 PM</Text>
      </View>

      <View style={styles.matchCard}>
        <Text style={styles.matchText}>SSG  vs  TS</Text>
        <Text style={styles.timeText}>3:00 PM</Text>
      </View>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 12,
  },

  header: {
    marginTop: 20,
    marginBottom: 12,
  },

  title: {
    color: "#FFD426",
    fontSize: 40,
    fontWeight: "900",
  },

  mainCard: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#222",
    marginBottom: 18,
  },

  mainImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 10,
    marginTop: 10,
  },

  latestCard: {
    flexDirection: "row",
    backgroundColor: "#1c1c1c",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    gap: 12,
  },

  latestImg: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  latestTitle: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 4,
  },

  latestTime: {
    color: "#aaa",
    fontSize: 13,
  },

  matchCard: {
    backgroundColor: "#1b1b1b",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2a2a2a",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  matchText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  timeText: {
    color: "#FFD426",
    fontWeight: "700",
    fontSize: 15,
  },
});
