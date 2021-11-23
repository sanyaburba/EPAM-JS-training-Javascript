//** Variables: Declare admin and name variables. Assign the value "John" to name. Copy the value from name to admin. Show the value of admin using alert (must output “John”). */ 
//* Task 1

// let name = 'John';
// let admin = name;
// alert(admin);

//** Array: Complete the method which accepts such an array, and returns that single different number (length >= 3) */ 
//* Task 2

// let arr = [9, 5, 9, 9, 9];
// let anotherNumber = numbers => numbers.reduce((x, y) => x ^ y);
// let result = anotherNumber(arr);
// alert(result);

//** Array: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. */ 
//* Task 3

// let createPhoneNumber = numbers => {
//    let number = '(xxx) xxx-xxxx'
//    for (let i = 0; i < numbers.length; i++) {
//       number = number.replace('x', numbers[i])
//    }
//    return alert(number)
// }
// createPhoneNumber([2,2,8,7,5,6,6,5,9,5])

//** Array: Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays. */ 
//* Task 4

// let arr = ['x', 8, 10, 12, [[14]]]

// function deepCount(arr) { 
//    return arr.reduce((sum, elem) => sum + (Array.isArray(elem) ? deepCount(elem) : 0), arr.length); 
// }

// console.log(deepCount(arr));

//** Array: The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars. Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line. Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue? */ 
//* Task 5

// let money = 0;
// let queue = [25, 25, 25, 100, 100];

// queue.forEach((item) => {
//    if (item == 25) {
//       money += 25;
//    } else if (item == 50) {
//       money -= 25;
//    } else if (item == 100) {
//       money -= 75;
//    }
//    console.log(money);
//    switch (money < 0) {
//       case true: {
//          console.log('he cant');
//          break;
//       }
//       case false: {
//          console.log('he can');
//          break;
//       }
//    }
// })


//** Write an if condition to check that age is NOT between 14 and 90 inclusively. */
//* Task 6

// let age = 100

// if (age >= 14 && age <=90) {
//    console.log('no, age is between 14 and 90');
// } else {
//    console.log('age is out of 14 and 90');
// }


//** Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).*/
//* Task 7

// let x = 0
// while( x < 3) console.log( `number ${x++}!` );

//** Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again. The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line. */ 
//* Task 8

// do {
//  let num = prompt("Please type number greater than 100", 0);
// } while (num <= 100 && num);

//** Write a function min(a,b) which returns the least of two numbers a and b */
//* Task 9

// let min = (a,b) => console.log(a < b ? a : b);
// min(45,2)

//** Rewrite the function using '?' and '||'. */
//* Task 10

// let checkAgeConditional = age => age > 18 ? true : confirm('did parents allow you');
// let checkAgeLogical = age => age > 18 || confirm('did parents allow you');