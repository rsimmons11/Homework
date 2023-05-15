let counter = 0;
let result = 1;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
  console.log(counter, result);
  // console.log(result);
}
let result = 1;
for (let i = 0; i < 10; i++) {
  result = result * 2;
  console.log(i, result)

}





//Looping a triangle
for (let i = "#"; i.length < 7; i +="#") {
  console.log(i)
}


//FizzBuzz
for (let i = 1; i <= 100; i++) {

  if (i % 15 === 0) {
    console.log("FizzBuzz")
  }

  else if (i % 5 === 0) {
    console.log("Buzz")
  }
  else if (i % 3 === 0) {
     console.log("Fizz")
  }
  else {
    console.log(i);
  }
}


//Chessboard

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);


//Minimum

function findMin(x, y) {
  if (x < y) {
    console.log(x)
  }
  else {
    console.log(y)
  }
}
findMin(15, 68)



//Recursion

function isEven(n) {
    if (n == 0) {
      return true;
    }
    else if (n = 1){
      return false;
    } 
    else if (n < 0) {
      return isEven(-n)
    }
    else {
      return isEven(n-1)
    }
}
console.log(isEven(11))  



//Bean counting
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4



