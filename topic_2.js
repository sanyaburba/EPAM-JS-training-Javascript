//* Create a function runningAverage() that returns a callable function object:
//* Task 1

let sum = 0;
let calls = 0;

function count() {
   return function (num) {
      sum += num;
      ++calls;
      return console.log(sum / calls);
   }
}
const runningAverage = count();

runningAverage(10)
runningAverage(11)
runningAverage(12)
runningAverage(13)

// ** Write a sum() function which will work properly when invoked using syntax below:
// * Task 2

// const sum = (...args) => args.reduce((a, v) => a + v, 0);

// function curry(fn) {
//    const argumentsArray = [];

//    function subCurry(...args) {
//       argumentsArray.push(...args);

//       return subCurry;
//    }

//    subCurry[Symbol.toPrimitive] = () => {
//       const result = fn.apply(this, argumentsArray);
//       argumentsArray.length = 0;

//       return result;
//    };

//    return subCurry;
// }

// const curriedSum = curry(sum);
// console.log(Number(curriedSum(1, 5)(2)(3)(56)(443, 657)));


function sum(a, b, c) {
   return a + b + c
}


function curry(fn) {
   return function curried(...args) {
      if (args.length >= fn.length) {
         return fn.apply(this, args)
      }
      return curried.bind(this, ...args)
   }
}

const curriedSum = curry(sum)

console.log(curriedSum(1)(54654645)(2))


// ** Create a function NamedOne() which takes first & last names as parameters and returns an object with firstName, lastName and fullName. If .firstName or .lastName are changed, then .fullName should also be changed. If .fullName is changed, then .firstName and .lastName should also be changed. Note: "input format" to .fullName will be firstName + space + lastName. If given fullName isn't valid then no property is changed. */
//* Task 3

function NamedOne(firstName, lastName) {
   this.name = firstName;
   this.surname = lastName;
   Object.defineProperty(this, "fullName", {
      get() {
         return this.fullName = this.name + ' ' + this.surname;
      },
      set(value) {
         const newFullName = value.split(' ');
         if (value.includes(' ') && value.includes[1] != 'undefined') {
            this.name = newFullName[0];
            this.surname = newFullName[1]
         } else {
            return this.fullName
         }
      }
   });
}


let namedOne = new NamedOne('Naomi', 'Chong');
console.log(namedOne.name);
console.log(namedOne.surname);
console.log(namedOne.fullName);
namedOne.name = 'John'
namedOne.surname = 'wick'
console.log(namedOne.fullName);
console.log(namedOne.name);
console.log(namedOne.surname);
namedOne.fullName = 'Hello World'
console.log(namedOne.fullName);