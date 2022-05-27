import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $70,000</Text>
      </View>
    </View>
  );
};

export default CarItem;

//rnfce
