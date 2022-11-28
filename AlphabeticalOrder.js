//! 56.convert letterof a givenstring in alphabetical order

// function alphabet_Soup(str) {
//   return str.split("").sort().join("");
// }

// console.log(alphabet_Soup("Python"));

// console.log(alphabet_Soup("Exercises"));


let string = prompt("enter a string")

function order(x) {
  let char = "";
  for (i = 0; i <= 122; i++){
    for (j = 0; j < string.length; j++){
      if (x[j].charCodeAt()==i) {
        char+=x[j]
      }
    }
  }
  console.log(char);
  return char;
}


order(string)