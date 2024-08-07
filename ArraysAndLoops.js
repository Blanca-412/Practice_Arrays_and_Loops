
// E1. Sum of Resistors in Series

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

//Another way to solve them:

const resistors2 = [14, 3.5, 6];
const sumResist2 = (resistors2) => {
    let total = 0;
    for (let i = 0; i < resistors2.length; i++) {
        total += Math.abs(resistors2[i]);
    }
    return `${total} ohms`;
}
console.log(sumResist2(resistors2));
/////



//////////////////////////////////////
// E2. Number divided into halves

const number = 10;
const half1 = number / 2;
const half2 = number - half1;
const numDiv = [half1, half2];

console.log(numDiv);


//////////////////////////////////////
// E3. Secret Society

const names = ["Esperanza", "Franco", "Nia"];
let secretName = "";
for (let i = 0; i < names.length; i++) {
    secretName += names [i][0];
}

console.log(secretName);


//////////////////////////////////////
// E4. Online Status

const users = ['mockIng99', 'J0eyPunch', 'glassedFer'];
let statusMes = '';
const userCount = users.length;
if (userCount === 1) {
    statusMes = `${users[0]} is online`;
} else if (userCount === 2) {
    statusMes = `${users[0]} and ${users[1]} are online`;
} else if (userCount > 2) {
    let userList = '';
    for (let i = 0; i < userCount - 1; i++) {
        userList += users[i] + ', ';
    }
    userList += `and ${users[userCount - 1]}`;
    statusMessage = `${userList} are online`;
}

console.log(statusMessage); 


//////////////////////////////////////
// E5. Array of Multiples

const numb = 2;
const length = 10;
const multiples = [];
for (let i = 1; i <= length; i++) {
    multiples.push(number * i);
}

console.log(multiples);


//////////////////////////////////////
// E6. Positive dominance in Array

const numbers = [-1, -3, -5, 4, 6767]; 
let positiveDominant = 0;
const totalDominant = numbers.length;

for (let i = 0; i < totalDominant; i++) {
    if (numbers[i] > 0) {
        positiveDominant++;
    }
}
const isPositiveDominant = positiveDominant > totalDominant / 2;

console.log(isPositiveDominant);

//////////////////////////////////////
// E7. Antipodal Average

const array = [1, 2, 3, 5, 22, 6];
const length7 = array.length;
const mid = Math.floor(length7 / 2);
let part1;
let part2;

if (length7 % 2 === 0) {
    part1 = array.slice(0, mid);
    part2 = array.slice(mid);
} else {
    part1 = array.slice(0, mid);
    part2 = array.slice(mid + 1);
}

part2.reverse();

const result7 = [];

for (let i = 0; i < part1.length; i++) {
    const sum = (part1[i] + part2[i]) / 2;
    result7.push(sum);
}

console.log(result7);




