//! 34. Convert Decimal to Binary

let number = prompt("Enter a decimal number: ");

function convertToBinary(x) {
  let bin = 0;
  let rem,
    i = 1,
    step = 0;
  while (x != 0) {
    rem = x % 2;
    console.log(
      `Step ${++step}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(
        x / 2
      )}`
    );
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }
  console.log(i)
  console.log(`Binary: ${bin}`);
}
convertToBinary(number);

// using toString() method
// const number = parseInt(prompt("Enter a decimal number: "));
const result = number.toString(2);

console.log("Binary:" + " " + result);


// let number = prompt("enter a number")

// function binarynumber (x) {
//     let bin = 0;
//     let reminder;
//     i = 1;

//     while (x != 0){
//         reminder = x % 2;
//         console.log(`Quotient and remainder of ${x} is ${parseInt(x / 2)} and ${reminder}`);
//         x=parseInt(x/2)
//         bin = bin + reminder *i
//         i=i*10
//     }
//     console.log(bin)
// }
// binarynumber(number)