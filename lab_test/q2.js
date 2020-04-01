const mixedArray = ['Matrix', 1, true, 2, false, 3]

let multiplyNumbers = (arr) => {
  
  let numbers = arr.filter( item => !isNaN(item) && item !== true && item !== false);
  return result = numbers.map(item => item * 5);
}
 
 
// Call funtion
console.log(multiplyNumbers(mixedArray));
 