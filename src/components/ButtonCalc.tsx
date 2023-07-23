import React from "react";
import {StyleSheet, Text, View} from "react-native";

interface ButtonCalcProps {
  title: string;
  color?: "primary" | "secondary" | "dark";
  textColor?: "black" | "white";
}

const ButtonCalc = ({
  title,
  color = "dark",
  textColor = "white",
}: ButtonCalcProps) => {
  return (
    <View style={[styles.button, styles[color]]}>
      <Text style={[styles.buttonText, styles[textColor]]}>{title}</Text>
    </View>
  );
};

export default ButtonCalc;

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    backgroundColor: "#2d2d2d",
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: "#fff",
    fontWeight: "400",
  },

  //* Colors
  primary: {
    backgroundColor: "#9b9b9b",
  },
  secondary: {
    backgroundColor: "#ff9427",
  },
  dark: {
    backgroundColor: "#2d2d2d",
  },

  //* Text colors
  black: {
    color: "#000",
  },
  white: {
    color: "#fff",
  },
});
