import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

//  {coin.price_change_percentage_24h.toFixed(2)}%
// {typeof coin.count === 'number' ? coin.count.toFixed(2) + '%' : 'N/A'}

const CoinItem = ({ coin }) => {
  // Reemplazar "USDT" con una cadena vacía en el primer símbolo
  const firstSymbol = coin.symbol.replace('USDT', '');

  return (
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
  );
};


const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
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
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
});

export default CoinItem;