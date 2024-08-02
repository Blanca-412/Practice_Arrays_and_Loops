/* E1. Sum of Resistors in Series
 

Calculate the sum of all resistors connected in series.
Examples:
- `sumResistance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
- `sumResistance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
- `sumResistance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

Note: This approach uses the absolute value of each resistance to ensure all values are positive.*/

////////My solution//////////

// An array is declared with the data from the first example
const sumResistance1 = [-1,5,6,3];
// Variable is initialized
const initialR = 0;
// Using reduce() method
const sumWhitInitialR = sumResistance1.reduce(
    (accumulatorR, currentValueR) => accumulatorR + Math.abs(currentValueR), initialR, //applying absolute value in 'currentValueR'
);

console.log(sumWhitInitialR + " ohms");
/*function sumResistance (resistors);
let totalResistors = 0
for(let i = 0 )*/




//////////////////////////////////////
/* E2. Number divided into halves
 

Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.*/





