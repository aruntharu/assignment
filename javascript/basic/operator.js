//Q1 create two constants, add them assign to a new constants
const x = 10
const y = 20
const z = x  + y
console.log(z)


//Check below code, output should be false by comparing. console.log the answer
const a = 10
const b = '10'
console.log(a === b)


// generate a random number between 0 and 5, if it is lesser than 3,
//console.log "lesser than 3" else "Greater"
const randomNum = Math.random()
const roundOffVal = Math.floor(randomNum)
console.log(roundOffVal)
if(roundOffVal<3){
  console.log(roundOffVal + " is less than 3")
}else if(roundOffVal===3){
  console.log(roundOffVal + " is equal to")
}
else{
  console.log(roundOffVal + " is greather than 3")
}

