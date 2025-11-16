import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>FloodMApp</Text>
      <View style={styles.card}>
        <Text style={styles.title}>Current Water Level</Text>
        <Text style={styles.value}>2.3m — Safe</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Rainfall (24h)</Text>
        <Text style={styles.value}>15mm</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Nearby Alerts</Text>
        <Text style={styles.value}>No active warnings ✅</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f9ff', padding: 20 },
  header: { fontSize: 22, fontWeight: '700', marginBottom: 15 },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: '600', color: '#333' },
  value: { fontSize: 18, color: '#0077cc', marginTop: 5 },
});
