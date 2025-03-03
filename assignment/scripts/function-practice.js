console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function helloWorld() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', helloWorld());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Marcy'));
console.log(helloName('Steve'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  let result = firstNumber + secondNumber;
  return result;
}

console.log("4 + 5 =", addNumbers(4,5));
console.log("-1  + 0 =", addNumbers(-1,0));


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3){
  let result = num1 * num2 * num3;
  return result;
}

console.log("1 * 2 * 3 =", multiplyThree(1,2,3));
console.log("0 * 4 * 6 =", multiplyThree(0,4,6));
console.log("78 * -45 * 34 =", multiplyThree(78,-45,34));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0){
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true (3 is positive)', isPositive(3) );
console.log( 'isPositive - should say false (0 is not positive)', isPositive(0) );
console.log( 'isPositive - should say false (-3 is not positive)', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[array.length - 1];
  }
}
let simpleArray = [1, 6, 'John', -4];
console.log("The last value is:", getLast(simpleArray));
let arrayOfCats = ['Tabby', 'Black', 'Persian'];
console.log("The last cat is:", getLast(arrayOfCats));
let emptyArray = [];
console.log("This array is empty, or", getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array){
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    } else {

    }
  }
  return false;
}

console.log("There is a 6 in the array:", find(6, simpleArray));
let cat = 'Tabby';
let otherCat = 'Siamese';
console.log("There is a Tabby in the array:", find(cat, arrayOfCats));
console.log("There is a Siamese in the array:", find(otherCat, arrayOfCats));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.charAt(0) === letter) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let arrayOfNums = [5, -6, 0, 3, -7];
console.log("5 - 6 + 0 + 3 - 7 =", sumAll(arrayOfNums));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive (array) {
  let positiveArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveArray.push(array[i]);
    } else {

    }
  }
  return positiveArray;
}

console.log("The new array should have 5 and 3 in it:", allPositive(arrayOfNums), " The old array is the same:", arrayOfNums);
console.log("The new array should be empty:", allPositive(emptyArray), " The old array is the same:", emptyArray);
let newArrayOfNums = [-6, -4, 0, -7];
console.log("The new array should be empty:", allPositive(newArrayOfNums), " The old array is the same:", newArrayOfNums);

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
/* The problem says to write a function that takes an array
of only numbers and returns the first number in the array*/
function firstNumber(array) {
  return array[0];
}

console.log("The first number of", arrayOfNums, " is:", firstNumber(arrayOfNums));
console.log("The first number of", newArrayOfNums, " is:", firstNumber(newArrayOfNums));
