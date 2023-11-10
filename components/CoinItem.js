import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CoinItem = ({ coin, onPress }) => {

  // Reemplazar "USDT" con una cadena vacía en el primer símbolo
  const firstSymbol = coin.symbol.replace('USDT', '');

  return (
    <TouchableOpacity onPress={() => onPress()}>
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <View style={styles.containerNames}>
          <Text style={styles.text}>{firstSymbol}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
      <Text style={styles.textPrice}>${coin.lastPrice}</Text>
      <Text
        style={[
          styles.priceChangePercent,
          coin.priceChangePercent > 0
            ? styles.priceUp
            : styles.priceDown,
        ]}
      >
          {parseFloat(coin.priceChangePercent).toFixed(2)}%
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  coinName: {
    flexDirection: "row",
  },

  containerNames: {
    marginLeft: 10,
  },
  
  text: {
    color: "#fff",
  },

  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },

  textPrice: {
    color: "#fff",
    fontWeight: "bold",
  },

  priceChangePercent: {
    textAlign: "right",
  },

  priceUp: {
    color: "#00B589",
  },

  priceDown: {
    color: "#fc4422",
  },  
});

export default CoinItem;