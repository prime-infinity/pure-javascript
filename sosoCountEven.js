arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

function countEvenNumbers(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log(countEvenNumbers(arrayOfNumbers));

//console.log(20 % 2);
