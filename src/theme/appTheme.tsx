import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 60,
    textAlign: "right",
  },
  smallResult: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 30,
    textAlign: "right",
    marginBottom: -8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
