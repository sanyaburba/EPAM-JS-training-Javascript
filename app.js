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


let calculator = {
   read(a, b) {
      return this.a = a, this.b = b
   },
   sum() {
      return this.a + this.b
   },
   mul() {
      return this.a * this.b
   }
};
calculator.read(56, 2)
console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
   step: 0,
   up() {
      this.step++;
      return this
   },
   down() {
      this.step--;
      return this
   },
   showStep: function () { // показывает текущую ступеньку
      console.log(this.step);
   }
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.up().up().down().showStep();