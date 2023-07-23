import React from "react";
import {Text, View} from "react-native";
import {styles} from "../theme/appTheme";
import ButtonCalc from "../components/ButtonCalc";

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.text}>1,500.00</Text>

      <View style={styles.row}>
        {/* Button */}
        <ButtonCalc title="C" />
        <ButtonCalc title="+/-" color="primary" textColor="black" />
        <ButtonCalc title="del" color="primary" textColor="black" />
        <ButtonCalc title="/" color="secondary" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
