//Create an array of movie titles. Loop through the array and add each element to the h2.
// let marvelMovies = [blackPanther, captainAmerica, ironMan, antMan]
// for (i = 0; i < marvelMovies.length; i++) { 
//   document.querySelector('h2').innerText += marvelMovies[i]
// }

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let arrayOfNumbers = [10, 20, 30]
arrayOfNumbers.forEach((item, index) => {
  arrayOfNumbers[index] = item + 3
}
)

//Find the average of all the numbers from question three

let sum = 0

for (let i = 0; i < arrayOfNumbers.length; i++) {
  sum = sum + arrayOfNumbers[i]
}
console.log(sum / arrayOfNumbers.length)


let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");
console.log(`${firstName} ${lastName}`);


let rawPrice = Number(prompt("enter price"))
let vat = rawPrice * .206
console.log(vat + rawPrice)

let celsius = Number(prompt("enter temp"))
let fahrenheit = (celsius * 9/5 + 32)
console.log(fahrenheit)



let number1 = 5;
let number2 = 3;
let number3 = 5;
number1 = number2
number2 = number3
number3 = number1
// TODO: type your code here (and nowhere else!)

console.log(number1); // Should show 3
console.log(number2); // Should show 5


const number = Number(prompt("Enter a number:"));
if (number > 0){
    console.log(`${number} is positive`);
}   
else if(number < 0){
    console.log (`${number} is negative`);
}

else{
    console.log(`${number} is zero`);
}


let day = prompt("Enter a Day");
if (day = "Monday"){
  console.log("Tomorrow is Tuesday")

}
else if (day = "Tuesday") {
  console.log("Tomorrow is Wednesday")
  
}


let spin = 1;
while (spin <= 10) {
  console.log(spin);
  spin++;
}


let spin2 = Number(prompt("enter a number"))
for (let i = 1; i <= spin2; i++ ) {
  console.log(i)
}


let spin3 = Number(prompt("enter a number"))
for (let i = 1; i <= spin3; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`)

  }
  else {
    console.log(`${i} is odd`)
  }
}

let i = Number(prompt("enter a number"))
if (i < 100) {
  prompt("enter another number")

}


for (let i = 1; i <= 100; i++) {
  
  if (i % 15 === 0) {
    console.log("FizzBuzz")
  }
  else {
    console.log(i)
  }
}



// Square the given number x
function square1(x) {
  return x * x; 
}

// Square the given number x
const square2 = x => x * x; 

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25