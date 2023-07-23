import React from "react";
import {Text, View} from "react-native";
import {styles} from "../theme/appTheme";
import ButtonCalc from "../components/ButtonCalc";

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.text}>1,500.00</Text>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="C" color="primary" textColor="black" />
        <ButtonCalc title="+/-" color="primary" textColor="black" />
        <ButtonCalc title="del" color="primary" textColor="black" />
        <ButtonCalc title="/" color="secondary" />
      </View>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="1" />
        <ButtonCalc title="2" />
        <ButtonCalc title="3" />
        <ButtonCalc title="x" color="secondary" />
      </View>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="4" />
        <ButtonCalc title="5" />
        <ButtonCalc title="6" />
        <ButtonCalc title="-" color="secondary" />
      </View>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="7" />
        <ButtonCalc title="0" />
        <ButtonCalc title="9" />
        <ButtonCalc title="+" color="secondary" />
      </View>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="0" width />
        <ButtonCalc title="." />
        <ButtonCalc title="=" color="secondary" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
