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
    //No aceptar mas de un punto

    if (number.includes(".") && numberText === ".") {
      return;
    }

    if (number.startsWith("0") || number.startsWith("-0")) {
      // Punto decimal
      if (numberText === ".") {
        setNumber(number + numberText);

        //Evaluar si es otro cero, y hay un punto
      } else if (numberText === "0" && number.includes(".")) {
        setNumber(number + numberText);

        // Evaluar si es diferente de 0 y no tiene un punto
      } else if (numberText !== "0" && !number.includes(".")) {
        setNumber(numberText);

        //Evitar 000.000
      } else if (numberText === "0" && !number.includes(".")) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveOrNegative = () => {
    if (number.includes("-")) {
      setNumber(number.replace("-", ""));
    } else {
      setNumber("-" + number);
    }
  };

  const deleteNumber = () => {
    if (number.length === 1 || (number.length === 2 && number.includes("-"))) {
      setNumber("0");
    } else {
      setNumber(number.slice(0, -1));
    }
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
          action={positiveOrNegative}
        />
        <ButtonCalc
          title="del"
          color="primary"
          textColor="black"
          action={deleteNumber}
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
