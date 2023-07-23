import React, {useState} from "react";
import {Text, View} from "react-native";
import {styles} from "../theme/appTheme";
import ButtonCalc from "../components/ButtonCalc";

const CalculatorScreen = () => {
  const [previousNumber, setPreviousNumber] = useState("0");
  const [number, setNumber] = useState("0");

  const clean = () => {
    setNumber("0");
  };

  const buildNumber = (numberText: string) => {
    setNumber(number + numberText);
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>{previousNumber}</Text>
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
          action={clean}
        />
        <ButtonCalc
          title="del"
          color="primary"
          textColor="black"
          action={clean}
        />
        <ButtonCalc title="/" color="secondary" action={clean} />
      </View>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="1" action={buildNumber} />
        <ButtonCalc title="2" action={buildNumber} />
        <ButtonCalc title="3" action={buildNumber} />
        <ButtonCalc title="x" color="secondary" action={clean} />
      </View>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="4" action={buildNumber} />
        <ButtonCalc title="5" action={buildNumber} />
        <ButtonCalc title="6" action={buildNumber} />
        <ButtonCalc title="-" color="secondary" action={clean} />
      </View>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="7" action={buildNumber} />
        <ButtonCalc title="8" action={buildNumber} />
        <ButtonCalc title="9" action={buildNumber} />
        <ButtonCalc title="+" color="secondary" action={clean} />
      </View>

      {/* Row of buttons  */}
      <View style={styles.row}>
        <ButtonCalc title="0" width action={buildNumber} />
        <ButtonCalc title="." action={buildNumber} />
        <ButtonCalc title="=" color="secondary" action={clean} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
