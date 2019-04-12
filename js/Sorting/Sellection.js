// Making array of size 100
let arr = [];
let k = 0;
while (k < 5) {
  let rand = Math.floor(Math.random() * 10 + 1);
  arr[k] = rand;
  // console.log("random: " + rand + " k: " + k + " arr[k]: " + arr[k]);
  k++;
}
console.log("Initial array: " + arr);

let length = arr.length;
let minNumber = arr[0];
let i = 0;

while (length >= 1) {
  let indexOfMinNumber;
  let j = i;
  let smallerArrLength = length;

  while (smallerArrLength >= 1) {
    if (minNumber > arr[j]) {
      minNumber = arr[j]; // Finding minimal number
      indexOfMinNumber = j; // Storing its index
    }

    j++;
    smallerArrLength--;
  }

  // Swapping min and first of number in array that reminding
  let temp = arr[i];
  arr[i] = minNumber;
  arr[indexOfMinNumber] = temp;

  length--;
  i++;
  minNumber = arr[i];
}

console.log("Output array: " + arr);
