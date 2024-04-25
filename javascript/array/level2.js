const arr =  [3,5,2]
//console.log the maximum number of an array
//expectedd output 5
console.log(Math.max(...arr));

//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]
const afterElementRemove = arr.slice(0,2)
console.log(afterElementRemove)

//Q3 Multiply each element of the array by a constant value 5 and log the modified array to the console.
//expected output [15,10]
const arr3 = arr.filter(num => num != 5)
const multiply = arr3.map(afterElementRemove =>afterElementRemove*5)
console.log(multiply)

//find intersection (common elements) of arr and arr2
//expected output: [5]
const arr2 = [5,21,32]
function performIntersection(arr1, arr2) {
    const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);
    return intersectionResult;
}
const result = performIntersection(arr, arr2);
console.log(result);