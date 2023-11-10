import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TextInput,
} from "react-native";

import CoinItem from "./components/CoinItem";
import ListCriptos from "./components/ListCriptos";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [screen, setScreen] = useState("App");

  const loadData = async () => {
    const res = await fetch(
      "https://api.binance.com/api/v3/ticker/24hr"
    );
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    loadData();
  }, []);

//Funcion para cuando clicke en una coin/cripto me redirija a sus datos en la pantalla ListCriptos
  const handleCoinPress = (coin) => {
    setSelectedCoin(coin);
    setScreen("ListCriptos");
  };

  //Función para volver a App (lista criptomonedas)
  const handleBackPress = () => {
    setScreen('App');
  };
  
  return (
    <>
      <StatusBar backgroundColor="#141414" />
      {screen === "App" && (
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

          <FlatList
            style={styles.list}
            data={coins.filter(
              (coin) =>
                coin.symbol.toLowerCase().includes("usdt".toLowerCase()) &&
                coin.symbol.toLowerCase().includes(search.toLowerCase())
            )}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CoinItem coin={item} onPress={() => handleCoinPress(item)} />
            )}
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await loadData();
              setRefreshing(false);
            }}
          />
        </View>
      )}
      {screen === "ListCriptos" && (
        <ListCriptos coin={selectedCoin} setScreen={setScreen} handleBackPress={handleBackPress} />
      )}
    </>
  );
} 

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
  list: {
    width: "90%",
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#4657CE",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center",
  },
});

export default App;
