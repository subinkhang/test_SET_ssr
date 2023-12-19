import React, {
  useState,
}
  from 'react';
import Button from './Button';
import ButtonBox from './ButtonBox';
import Screen from './Screen';
import Wrapper from './Wrapper';


// const btnValues = [
//   ["AC", "+/-", "%", "/"],
//   ['7', '8', '9', "x"],
//   ['4', '5', '6', "-"],
//   ['1', '2', '3', "+"],
//   ['000', ",", "="],
// ];
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

interface Props {
  key: number;
  className: string;
  value: string|number;
  onClick: (e: any) => void;  
  // children: React.JSX.Element|React.JSX.Element[]
}



export const App: React.FC<Props> = () => { 


  
  
  return (
    <Wrapper>
      <>
        <Screen value={0} />
        <ButtonBox>
          {
            btnValues.flat().map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={btn === "=" ? "equals" : ""}
                  value={btn}
                  onClick={() => {}}
                />
              );
            })
          }
        </ButtonBox>
      </>
    </Wrapper>
  );
};

export default App;