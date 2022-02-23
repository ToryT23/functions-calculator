//You have been provided the add() function in the editor. Your job is to write the following functions 
//to perform the other operations. 
//
//Make sure each function has these exact names.
//
//subtract
//divide
//multiply
//square
//Subtract, divide, and multiply take two parameters, but the square function only takes one.
//
//Make sure that you invoke your functions, store the return value in a variable, and then console.log() 
// the result to verify that your functions work as expected.

const add = (number1, number2) => {
    const answer = number1 + number2

    return answer
}
const subtract = (number1, number2) => {
    const answer = number1 - number2

    return answer
}
const divide = (number1, number2) => {
    const answer = number1 / number2

    return answer
}
const multiply = (number1, number2) => {
    const sum = number1 * number2

    return sum
}
const squared = (number1) => {
    const sum = number1 * number1

    return sum
}

let resultAdd = add(10, 20)
console.log(resultAdd)

let resultSubtract = subtract(200, 90)
console.log(resultSubtract)

let resultDivide = divide( 50, 10)
console.log(resultDivide)

let resultMultiply = multiply(5, 5)
console.log(resultMultiply)

let resultSquared = squared(7)
console.log(resultSquared)

//See if you can solve this problem using your calculator.

//A quarter of the animals on a farm have four legs. The remaining three quarters of the animals have two legs. 
// If there are 60 legs overall,
// how many animals are there on the farm?

let resultofFourLegs = multiply(60, .25)
let resultofTwoLegs = multiply(60 , 0.75) 

console.log(resultofFourLegs /4)
console.log(resultofTwoLegs/ 2)