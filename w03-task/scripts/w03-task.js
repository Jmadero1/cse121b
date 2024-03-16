/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
  }
  
  const subtractNumbers = () => {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  }
  
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
  


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
  }
  
  const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
  }
  
  document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2;
  }
  
  function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
  }
  
  document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
  


/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let total = subtotal;
    if (document.querySelector('#member').checked) {
      total *= 0.8; // Apply 20% discount
    }
    document.querySelector('#total').textContent = total.toFixed(2);
  });


/* ARRAY METHODS - Functional Programming */
const numbersArray = Array.from({length: 13}, (_, index) => index + 1);
document.querySelector('#array').textContent = numbersArray;

const odds = numbersArray.filter(num => num % 2 !== 0);
document.querySelector('#odds').textContent = odds;

const evens = numbersArray.filter(num => num % 2 === 0);
document.querySelector('#evens').textContent = evens;

const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;

const multiplied = numbersArray.map(num => num * 2);
document.querySelector('#multiplied').textContent = multiplied;

const sumOfMultiplied = multiplied.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
