import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface ButtonCalcProps {
  title: string;
  color?: "primary" | "secondary" | "dark";
  textColor?: "black" | "white";
  width?: boolean;
  action: (numberText: string) => void;
}

const ButtonCalc = ({
  title,
  color = "dark",
  textColor = "white",
  width = false,
  action,
}: ButtonCalcProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => action(title)}>
      <View style={[styles.button, styles[color], width && styles.width]}>
        <Text
          style={[
            styles.buttonText,
            styles[textColor],
            width && styles.textStart,
          ]}
          adjustsFontSizeToFit>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
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
  width: {
    width: 180,
  },
  textStart: {
    textAlign: "left",
    marginLeft: 20,
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
