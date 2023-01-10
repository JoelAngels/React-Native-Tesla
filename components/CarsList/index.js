import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";

import styles from "./styles";
import cars from "./cars";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false} //hide scrolling indicator
        snapToAlignment={"start"} //snap to the start of the component
        decelerationRate={"fast"} // speed of animation when the Flatlist move up and down
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarsList;
