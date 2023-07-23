import {useRef, useState} from "react";

enum Opetators {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState("0");
  const [number, setNumber] = useState("0");

  const lastOperation = useRef<Opetators>();

  const clean = () => {
    setNumber("0");
    setPreviousNumber("0");
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

  const changeNumberToPrevious = () => {
    if (number.endsWith(".")) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }

    setNumber("0");
  };

  const btnDividir = () => {
    changeNumberToPrevious();
    lastOperation.current = Opetators.dividir;
  };

  const btnMultiplicar = () => {
    changeNumberToPrevious();
    lastOperation.current = Opetators.multiplicar;
  };

  const btnSumar = () => {
    changeNumberToPrevious();
    lastOperation.current = Opetators.sumar;
  };

  const btnRestar = () => {
    changeNumberToPrevious();
    lastOperation.current = Opetators.restar;
  };

  const calculate = () => {
    const num1: number = Number(number);
    const num2: number = Number(previousNumber); //previous number

    switch (lastOperation.current) {
      case Opetators.sumar:
        setNumber(`${num1 + num2}`);
        break;

      case Opetators.restar:
        setNumber(`${num2 - num1}`);
        break;

      case Opetators.multiplicar:
        setNumber(`${num1 * num2}`);
        break;

      case Opetators.dividir:
        // setNumber(`${num2 / num1}`);
        num1 !== 0 && setNumber(`${num2 / num1}`);
        break;
    }

    // Validar NaN y division sobre 0 mostrar alerta

    setPreviousNumber("0");
  };

  return {
    //* properties
    number,
    previousNumber,

    //* Methods
    clean,
    buildNumber,
    positiveOrNegative,
    deleteNumber,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calculate,
  };
};
