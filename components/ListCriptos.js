import React from "react";
import { View, Text, StyleSheet, ScrollView, Button, TextInput } from "react-native";


const ListCriptos = ({ coin, setScreen }) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CryptoMarket</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a Coin"
          placeholderTextColor="#858585"
          onChangeText={(text) => text && setSearch(text)}
        />
      </View>
      <View style={styles.backButton}>
        <Button title="BACK" onPress={() => setScreen("App")} color="black"></Button>
      </View>
      <ScrollView style={styles.scrollView}>
        {Object.entries(coin).map((entry, index) => (
          <View key={index} style={styles.entry}>
            <Text style={styles.key}>{entry[0]}</Text>
            <Text style={styles.value}>{entry[1]}</Text>
          </View>
        ))}
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
  },

  searchInput: {
    color: "#fff",
    borderBottomColor: "#4657CE",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center",
  },

  backButton: {
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "black",
    padding: 10,
    width: "100%",
    borderRadius: 8,
  },

  scrollView: {
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "black",
    padding: 10,
    width: "100%",
    borderRadius: 8,
  },

  entry: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
  },

  key: {
    color: "#fff",
  },

  value: {
    color: "#fff",
  },
});

export default ListCriptos;
