import React from "react";
import CalculatorScreen from "./screens/CalculatorScreen";
import {SafeAreaView, StatusBar} from "react-native";
import {styles} from "./theme/appTheme";

function App() {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <CalculatorScreen />
    </SafeAreaView>
  );
}

export default App;
