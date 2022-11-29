arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

function sumOfNumbers(array) {
  var total = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    total = total + element;
  }
  return total;
}

console.log(sumOfNumbers(arrayOfNumbers));
