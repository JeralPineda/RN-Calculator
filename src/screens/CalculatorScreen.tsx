import React from "react";
import {Text, View} from "react-native";

import {styles} from "../theme/appTheme";
import ButtonCalc from "../components/ButtonCalc";
import {useCalculator} from "../hooks/useCalculator";

const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    clean,
    buildNumber,
    positiveOrNegative,
    deleteNumber,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== "0" && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}
      <Text style={styles.text}>{number}</Text>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc
          title="C"
          color="primary"
          textColor="black"
          action={clean}
        />
        <ButtonCalc
          title="+/-"
          color="primary"
          textColor="black"
          action={positiveOrNegative}
        />
        <ButtonCalc
          title="del"
          color="primary"
          textColor="black"
          action={deleteNumber}
        />
        <ButtonCalc title="/" color="secondary" action={btnDividir} />
      </View>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="1" action={buildNumber} />
        <ButtonCalc title="2" action={buildNumber} />
        <ButtonCalc title="3" action={buildNumber} />
        <ButtonCalc title="x" color="secondary" action={btnMultiplicar} />
      </View>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="4" action={buildNumber} />
        <ButtonCalc title="5" action={buildNumber} />
        <ButtonCalc title="6" action={buildNumber} />
        <ButtonCalc title="-" color="secondary" action={btnRestar} />
      </View>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="7" action={buildNumber} />
        <ButtonCalc title="8" action={buildNumber} />
        <ButtonCalc title="9" action={buildNumber} />
        <ButtonCalc title="+" color="secondary" action={btnSumar} />
      </View>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="0" width action={buildNumber} />
        <ButtonCalc title="." action={buildNumber} />
        <ButtonCalc title="=" color="secondary" action={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
