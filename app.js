// const user = {}
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete'
// delete user.name;
// console.log(user);

// const schedule = {}

// function isEmpty(obj) {
//    for (let key in obj) {
//       return false
//    }
//    return true
// }
// console.log(schedule);
// console.log(isEmpty(schedule));
// schedule.name = 'burba';
// console.log(schedule);
// console.log(isEmpty(schedule));

// let salaries = {
//    John: 100,
//    Ann: 160,
//    Pete: 130
// }
// let sum = 0

// for (let key in salaries) {
//    sum += salaries[key]
// }
// console.log(sum);

// let menu = {
//    width: 200,
//    height: 300,
//    title: "My menu"
// };

// function multiplyNumeric(obj) {
//    for (let key in obj) {
//       if (typeof (obj[key] === 'number')) {
//          obj[key] *= 2
//       }
//    }
// }

// multiplyNumeric(menu)
// console.log(menu);


// let calculator = {
//    read(a, b) {
//       return this.a = a, this.b = b
//    },
//    sum() {
//       return this.a + this.b
//    },
//    mul() {
//       return this.a * this.b
//    }
// };
// calculator.read(56, 2)
// console.log(calculator.sum());
// console.log(calculator.mul());

// let ladder = {
//    step: 0,
//    up() {
//       this.step++;
//       return this
//    },
//    down() {
//       this.step--;
//       return this
//    },
//    showStep: function () { // показывает текущую ступеньку
//       console.log(this.step);
//    }
// };
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.up().up().down().showStep();


var Vector = function (components) {
   if (components === undefined || typeof components !== "object") {
      throw "Improper argument; need an array object"
   }

   const l = components.length;
   const _sorted = components.sort();

   return {
      array: _sorted,

      // Add Vector v to this vector
      //   a.add(b); // should return Vector([4,6,8])
      add: function (v) {
         v = validateVector(v, l);
         var sum = [];
         for (var i = 0; i < l; i++) {
            sum[i] = v[i] + this.array[i];
         }
         return new Vector(sum);
      },

      // Subtract Vector v from this vector
      //   a.subtract(b); // should return Vector([-2,-2,-2])
      subtract: function (v) {
         v = validateVector(v, l);
         var sum = [];
         for (var i = 0; i < l; i++) {
            sum[i] = this.array[i] - v[i];
         }
         return new Vector(sum);
      },

      // Dot product of Vector v and this vector
      //   a.dot(b); // should return 1*3+2*4+3*5 = 26
      dot: function (v) {
         v = validateVector(v, l);
         var sum = 0;
         for (var i = 0; i < l; i++) {
            sum += this.array[i] * v[i];
         }
         return sum;
      },

      // Norm of Vector v and this vector
      //   a.norm(); // should return sqrt(1^2+2^2+3^2)=sqrt(14)
      norm: function () {
         var norm = 0;
         for (var i = 0; i < l; i++) {
            norm += Math.pow(this.array[i], 2);
         }
         return Math.pow(norm, 0.5)
      },

      // Vector.toString()
      //   a.toString() === '(1,2,3)'
      toString: function () {
         return "(" + components.toString() + ")";
      },

      // Two vectors with same components are equals
      equals: function (v) {
         for (var i = 0; i < l; i++) {
            if (v.array[i] !== this.array[i]) {
               return false;
            } else {
               return true;
            }
         }
      }
   }
};

function validateVector(v, l) {
   if (v === undefined || v.array === undefined) {
      throw "v or v.array undefined";
   }
   // Vectors must be the same size
   if (v.array.length === l) {
      return v.array.sort();
   } else {
      throw "Error: Not the same size vector."
   }
}


var a = new Vector([1, 2, 5, 6, 8]);
var b = new Vector([3, 4, 8, 9]);

console.log(a.add(b));