
// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from './app';

// test('displays a number after clicking a number button', () => {
//   render(<App />);
//   userEvent.click(screen.getByRole('button', { name: "x" }));
//   const screenValue = screen.getByText("x");
//   expect(screenValue).toBeDefined();
// });

// // describe('Home component', () => {
// //   it('renders the correct text', () => {
// //     const { getByText } = render(<App />);
// //     const headingElement = getByText('kk');
// //     expect(headingElement).toBeDefined();
// //   });
// // });

// test('resetClickHandler works as expected', () => {
//   const { getByText } = render(<App />);
  
//   const numberButton = getByText('7');
//   fireEvent.click(numberButton);
//   const anotherNumberButton = getByText('8');
//   fireEvent.click(anotherNumberButton);

//   const screen = getByText('78');
//   expect(screen).toBeDefined();

//   const resetButton = getByText('C');
//   fireEvent.click(resetButton);

//   expect(screen.textContent).toEqual("0");
//   expect(screen.textContent).not.toEqual('78');
// }); 

// // test('invertClickHandler inverts number value', () => {
// //   const { getByText, getAllByRole } = render(<App />);
  

// //   const numberButton = getByText('7');
// //   fireEvent.click(numberButton);

// //   const screenValue = getAllByRole('screen');
// //   expect(screenValue).toBeInTheDocument();

// //   const invertButton = getByText('+/-');
// //   fireEvent.click(invertButton);

// //   expect(screenValue).toHaveTextContent('-7');
// // });



// // test('percentClickHandler tính toán phần trăm chính xác', () => {
// //   render(<App />);

// //   const numberButton = screen.getByRole('button', { name: '7' });
// //   fireEvent.click(numberButton);
// //   const numberButton2 = screen.getByRole('button', { name: '8' });
// //   fireEvent.click(numberButton2);

// //   const percentButton = screen.getByRole('button', { name: '%' });
// //   fireEvent.click(percentButton);

// //   const screenDisplay = screen.getByText('screen');
// //   expect(screenDisplay).toHaveTextContent('0.78');
// // });


// // //==============================================================================================
// // test('equalsClickHandler calculates and displays the correct result for division', async () => {
// //   render(<App />);

// //   userEvent.type(screen.getByRole('button', { name: '8' }), '8');

// //   userEvent.click(screen.getByRole('button', { name: '/' }));

// //   userEvent.type(screen.getByRole('button', { name: '2' }), '2');

// //   fireEvent.click(screen.getByRole('button', { name: '=' }));

// //   await screen.findByRole('screen', { name: /4/i });
// // });

// // signClick================================================================================
// test('signClickHandler appends a sign to the current number', async () => {
//   render(<App />);

//   // Enter an initial number
//   userEvent.type(screen.getByRole('button', { name: '1' }), '1');
//   userEvent.type(screen.getByRole('button', { name: '2' }), '2');

//   // Assert the initial number is displayed
//   await screen.findByRole('screen', { name: /12/i });

//   // Click the plus sign button
//   fireEvent.click(screen.getByRole('button', { name: '+' }));

//   // Assert the sign is not appended to the result
//   await screen.findByRole('screen', { name: /12/i });

//   // Click another number button
//   userEvent.type(screen.getByRole('button', { name: '3' }), '3');

//   // Assert the sign is now appended to the number
//   await screen.findByRole('screen', { name: /12 + 3/i });
// });

// test('signClickHandler does not duplicate a sign', async () => {
//   render(<App />);

//   // Enter a number with a sign
//   userEvent.type(screen.getByRole('button', { name: '1' }), '1');
//   fireEvent.click(screen.getByRole('button', { name: '+' }));
//   userEvent.type(screen.getByRole('button', { name: '2' }), '2');

//   // Assert the number with the sign is displayed
//   await screen.findByRole('screen', { name: /1 + 2/i });

//   // Click the plus sign button again
//   fireEvent.click(screen.getByRole('button', { name: '+' }));

//   // Assert the sign is not duplicated
//   await screen.findByRole('screen', { name: /1 + 2/i });
// });


// // commaClick =================================================================

// test('commaClickHandler does not append a comma to a number without decimal places', async () => {
//   render(<App />);

//   // Enter a number without decimal places
//   userEvent.type(screen.getByRole('button', { name: '1' }), '1');

//   // Assert the number is displayed without a comma
//   await screen.findByRole('screen', { name: /1/i });

//   // Click the comma button
//   fireEvent.click(screen.getByRole('button', { name: ',' }));

//   // Assert the number is still displayed without a comma
//   await screen.findByRole('screen', { name: /1/i });
// });

// test('commaClickHandler appends a comma to a number with decimal places', async () => {
//   render(<App />);

//   // Enter a number with decimal places
//   userEvent.type(screen.getByRole('button', { name: '1' }), '1');
//   userEvent.type(screen.getByRole('button', { name: '.' }), '.');
//   userEvent.type(screen.getByRole('button', { name: '2' }), '2');

//   // Assert the number is displayed with a comma
//   await screen.findByRole('screen', { name: /1.2/i });

//   // Click the comma button
//   fireEvent.click(screen.getByRole('button', { name: ',' }));

//   // Assert the comma is appended to the number
//   await screen.findByRole('screen', { name: /1,2/i });
// });

// test('commaClickHandler does not append a comma twice', async () => {
//   render(<App />);

//   // Enter a number with decimal places
//   userEvent.type(screen.getByRole('button', { name: '1' }), '1');
//   userEvent.type(screen.getByRole('button', { name: '.' }), '.');
//   userEvent.type(screen.getByRole('button', { name: '2' }), '2');

//   // Assert the number is displayed with a comma
//   await screen.findByRole('screen', { name: /1.2/i });

//   // Click the comma button twice
//   fireEvent.click(screen.getByRole('button', { name: ',' }));
//   fireEvent.click(screen.getByRole('button', { name: ',' }));

//   // Assert the comma is not appended twice
//   await screen.findByRole('screen', { name: /1,2/i });
// });


// //numClick===================================================================
// test('numClickHandler appends a number to the current number', async () => {
//   render(<App />);

//   // Enter an initial number
//   userEvent.type(screen.getByRole('button', { name: '1' }), '1');

//   // Assert the initial number is displayed
//   await screen.findByRole('screen', { name: /1/i });

//   // Click a number button
//   fireEvent.click(screen.getByRole('button', { name: '2' }));

//   // Assert the number is appended to the first number
//   await screen.findByRole('screen', { name: /12/i });
// });

// test('numClickHandler does not append a number if the input is too long', async () => {
//   render(<App />);

//   // Enter a number that is 16 characters long
//   userEvent.type(screen.getByRole('button', { name: '1' }), '1'.repeat(16));

//   // Assert the number is displayed
//   await screen.findByRole('screen', { name: /1111111111111111111/i });

//   // Click a number button
//   fireEvent.click(screen.getByRole('button', { name: '2' }));

//   // Assert the number is not appended
//   await screen.findByRole('screen', { name: /1111111111111111111/i });
// });