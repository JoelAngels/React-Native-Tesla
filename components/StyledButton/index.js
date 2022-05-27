/*
in order to register user touches and press on the screen we use Pressable

*/

import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const StyledButton = (props) => {
  const { type, content, onPress } = props;

  //if the type is = primary then it will be black otherwise if not primary it will be white
  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFF46";

  const textColor = type === "primary" ? "FFFFFF46" : "#171A20CC";

  return (
    <View style={styles.container}>
      <Pressable
        //MERGING 2 STYLES, WE USE ARRAYS
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
