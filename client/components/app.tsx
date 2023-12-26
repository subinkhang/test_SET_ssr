import React, {
  useState,
  // useContext,
  useEffect
}
  from 'react';
import Button from './Button';
import ButtonBox from './ButtonBox';
import Screen from './Screen';
import Wrapper from './Wrapper';
import AppProvider from '../contexts/AppProvider';
// import AppContext from '../contexts/AppContext';




interface Props {
  key: number;
  className: string;
  value: string|number;
  onClick: (e: any) => void;  
  // children: React.JSX.Element|React.JSX.Element[]
}


// const toLocaleString = (num: any) =>{
//   String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
// };

const removeSpaces = (num: any) => String(num).replace(/\s/g, "");



export const App: React.FC<Props> = () => { 
  // const {handleClick, ac , setAc}  = useContext(AppContext);
  const [ac, setAc] = useState("AC");

  const btnValues = [
    [ac, "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  
  const [calc, setCalc] = useState({
    sign: "",
    num: "0",
    res: "0",
  });
  
  useEffect(() => {
    if(calc.num === "0" && calc.res === "0" && calc.sign === "")
      setAc("AC");
    else
      setAc("C");
  });

  const numClickHandler = (e: any) => {
    e.preventDefault();
    const value = e.target.innerHTML;    

    if (calc.num.toString().length < 16) {  
      let startNum = calc.num;
      if(calc.num === "0")
        startNum = "";
      setCalc({
        ...calc,
        num:
          calc.num === "0" && value === "0"
            ? "0"
            : Number(removeSpaces(calc.num)) % 1 === 0
              ? String(removeSpaces(startNum + value))
              : String(startNum + value),
        res: !calc.sign ? "0" : calc.res,
      });
      console.log();
      
    }
  };

  const commaClickHandler = (e: any) => {
    console.log('comma');
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e: any) => {
    const lastChar = calc.num.slice(-1);
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,  
      num: lastChar === "/" || lastChar === "-" || lastChar === "+" || lastChar === "X"
        ? calc.num
        : calc.num + value,
    });
  };

  const equalsClickHandler = () => {
    const parts = calc.num.split(/[^0-9]/);
    const operators = calc.num.match(/[+-/X]/g);
    const lastNum = parts[parts.length - 1];

    if (calc.sign && lastNum) {

      const math = (a: any, b: any, sign: string) =>
        sign === "+"
          ? a + b
          : sign === "-"
            ? a - b
            : sign === "X"
              ? a * b
              : a / b;

      let finalResult = 0;
      let currentNum = 0;

      if (operators) {
        for (let i = 0; i < parts.length-1; i++) {

          const newParts = parts;
          const newOperators = operators;

          let j = 0;
          for(j; j < operators.length; j++) {
            if(operators[j] === "X" || operators[j] === "/"){
              const a = math(Number(parts[j]), Number(parts[j + 1]), operators[j]);
              newParts.splice(j, 2);
              newParts.splice(j, 0, String(a));
              newOperators.splice(j, 1);
              j = j - 1;
            }
          }

          if (!isNaN(Number(newParts))) {
            currentNum = Number(newParts);
          }
          if (newOperators[i]) {
            if(i === 0){
              currentNum = math(Number(newParts[i]), Number(newParts[i + 1]), newOperators[i]);
              finalResult += currentNum;
            } else {
              currentNum = math(finalResult, Number(newParts[i + 1]), newOperators[i]);
              finalResult = currentNum;
            }
            currentNum = 0;          
          }

          finalResult += currentNum;
        }}        

      setCalc({
        ...calc,
        res:
          lastNum === "0" && calc.sign === "/"
            ? "NaN"
            : String( finalResult ),
        sign: "",
        num:
          lastNum === "0" && calc.sign === "/"
            ? "NaN"
            : String( finalResult ),
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? String(Number(removeSpaces(calc.num)) * -1) : "0",
      res: calc.res ? String(Number(removeSpaces(calc.res)) * -1) : "0",
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: String((num /= Math.pow(100, 1))),
      res: String((res /= Math.pow(100, 1))),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    console.log('reset');    
    setCalc({
      ...calc,
      sign: "",
      num: "0",
      res: "0",
    });
  };  
  
  return (
    <AppProvider>
      <Wrapper>
        <>
          <Screen value={calc.num ? calc.num : calc.res} />
          <ButtonBox>
            {
              btnValues.flat().map((btn, i) => {
                return (
                  <Button
                    key={i}
                    className={btn === "=" ? "equals" : ""}
                    value={btn}
                    onClick={(e: any) => {
                      btn === "C" || btn === "AC"
                        ? resetClickHandler()
                        : btn === "+-"
                          ? invertClickHandler()
                          : btn === "%"
                            ? percentClickHandler()
                            : btn === "="
                              ? equalsClickHandler() //
                              : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                                ? signClickHandler(e)
                                : btn === "."
                                  ? commaClickHandler(e)
                                  : numClickHandler(e);
                    }}
                  />
                );
              })
            }
          </ButtonBox>
        </>
      </Wrapper>
    </AppProvider>
  );
};

export default App;