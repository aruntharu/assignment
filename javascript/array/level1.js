const arr =  [3,5,2]

//Q1 calculate length of array and console log
//expected output is 3
console.log(arr.length)

//Q2 reverse the array and console log
//expected output [2,5,3]
const reversed = arr.reverse()
console.log(reversed)

///Q3 join the array and console log
// expected output 352  or 253
console.log(arr.join(''))

//Q4 Remove the last element from the array and log the modified array to the console


// Q5 Check if all elements in the num  are even. Log "All even" or "Not all even" accordingly.
const num = [6,4,2,8,10,12]
const num = [6,4,2,8,10,12]
let result = "All even"
num.forEach((item)=>{
  if (item%2 !== 0){
    result = "Not all even"
  }
})
console.log(result)

// Find the index of a specific element in the array. Log the index to the console. 
//expected output: 3

const allNum = [3, 5, 2, 8, 5];
const searchElement = 2;
console.log(allNum.indexOf(searchElement))