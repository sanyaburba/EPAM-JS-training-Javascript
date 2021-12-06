// ** Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example. If you try to add, subtract, or dot two vectors with different lengths, you must throw an error. Also provide: a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' an equals method, to check that two vectors that have the same components are equal.
// * Task 1


class Vector {
   constructor(currArr) {
      this.array = currArr;
   }
   add(anotherVector) {
      const array = anotherVector.array;
      validateVector(this.array, array)
      return this.array.map((value, index) => value + array[index]);
   }
   subtract(anotherVector) {
      const array = anotherVector.array;
      validateVector(this.array, array)
      return this.array.map((v, i) => v - array[i]);
   }
   dot(anotherVector) {
      const array = anotherVector.array;
      validateVector(this.array, array)
      const mul = this.array.map((v, i) => v * array[i]);
      return mul.reduce((acc, cur) => acc + cur, 0);
   }
   norm() {
      const sqrt = this.array.map((v) => v ** 2);
      return sqrt.reduce((acc, cur) => acc + cur, 0);
   }
   toString() {
      return `(${this.array.toString()})`;
   }
   equals(anotherVector) {
      const array = anotherVector.array;
      for (let i = 0; i < this.array.length; i++) {
         if (array[i] !== this.array[i]) {
            return false;
         } else {
            return true;
         }
      }
   }
}

function validateVector(firstVector, nextVector) {
   if (firstVector === undefined || nextVector === undefined) {
      throw "array undefined";
   }
   if (firstVector.length !== nextVector.length) {
      throw "Error: Not the same size vector."
   }
}

const a = new Vector([1, 2, 3])
const b = new Vector([5, 6, 7])
const c = new Vector([5, 6, 7])

console.log(b.equals(c));


/* 
Write a myNew function that replicates all the behavior of the new operator.This function should take one function parameter(the constructor), plus an unknown number of additional parameters of any type(arguments for the constructor).When invoked, myNew should do everything new does and return the same object new would evaluate to, as specified below:
*/

// * Task 2

class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
}
Person.prototype.introduce = function () {
   return 'My name is ' + this.name + ' and I am ' + this.age;
};
const myNew = (Class, ...params) => {
   return new Class(...params);
}

const john = myNew(Person, 'John', 30);
const jack = new Person('Jack', 40);

console.log(john.introduce())
console.log(jack.introduce())
