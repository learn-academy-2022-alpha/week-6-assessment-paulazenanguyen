// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("caping", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(caping(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// FAIL  ./code-challenges.test.js
//  caping
//    ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)
//  remainder
//    ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (3 ms)
//
//  ● caping › takes in an array of objects and returns an array with a sentence about each person with their name capitalized
//
//    ReferenceError: caping is not defined



// b) Create the function that makes the test pass.
// declare a function called caping
// parameter: array
// so we are dealing with an array that has an object inside of it
// i feel like for each would be the best way to go about this... the reason why i feel that way is because i know that i want to get inside the array.. and return something with that array. map anf filter doesn't seem like the best. my instincts are telling me to go with for each

// so now that I am using the high order function each object is an element
// now that each object is an array i need to remember how to access an object
// const people = [object1, object2, object3]
// once i do the foreach then I will be able to be at the oject level

// -   "Ford Prefect is a hitchhiker.",
// -   "Zaphod Beeblebrox is president of the galaxy.",
// -   "Arthur Dent is a radio employee.",
// +   "Ford prefect is a hitchhiker",
// +   "Zaphod beeblebrox is president of the galaxy",
// +   "Arthur dent is a radio employee",

// so i am very close... at the moment I was able to combine the objects but my problem is that I need to capitilize the last name.
//
const caping = (array) => {
  let arr = array.map(value => {
  let capitalizedName = value.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')
  let occupation = value.occupation
  let final =  `${capitalizedName} is ${occupation}.`
  return final
  })
return arr
}

// PASS  ./code-challenges.test.js
//  caping
//    ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (3 ms)
//  remainder
//    ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("remainder", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
// FAIL  ./code-challenges.test.js
//  remainder
//    ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (9 ms)
//
//  ● remainder › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// b) Create the function that makes the test pass.
// declare a function remainder
// parameter: array
// use .filter to pick and choose each element and how to manipulate that data.
// use .map so that I can manipulate each data (number) divided by 3.
// then return the variable that hold the .map

const remainder = (array) => {
  let newArr = array.filter(value => typeof value === "number")
  let leftOverArr = newArr.map(value => value % 3)
  return leftOverArr
}
// PASS  ./code-challenges.test.js
//  remainder
//    ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (3 ms)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubeAdd", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(cubeAdd(cubeAndSum1)).toEqual(99)
    expect(cubeAdd(cubeAndSum2)).toEqual(1125)
  })
})
// FAIL  ./code-challenges.test.js
//  remainder
//    ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (3 ms)
//  cubeAdd
//    ✕ takes in an array of numbers and returns the sum of all the numbers cubed
//
//  ● cubeAdd › takes in an array of numbers and returns the sum of all the numbers cubed
//
//    ReferenceError: cubeAdd is not defined




// b) Create the function that makes the test pass.
// create a function cubeAdd
// we are going to use the .map so that we can cube it first
// then i will add all the elements together

const cubeAdd = (array) => {
  let cube = array.map(value => value ** 3)
  let sum = cube.map(value => value).reduce((prev, curr) => prev + curr, 0)
  return sum 
}
