// ** Write your own MyPromise class with syncThen method.
// * Task 1

// const MyPromise = class {
//    constructor(callback) {
//       this.promise = new Promise(callback);
//    }
//    then(fn) {
//       this.promise.then(fn);
//       return this;
//    }
//    
// };

function noop() {}

class IlyaPromise {
   constructor(executor) {
      this.queue = [];
      this.finallyHandler = noop;
      this.errorHandler = noop

      try {
         executor.call(null, this.onResolve.bind(this), this.onReject.bind(this))
      } catch (e) {
         this.errorHandler(e)
      } finally {
         this.finallyHandler()
      }
   }
   onResolve(data) {
      this.queue.forEach((callback) => {
         data = callback(data)
      })
   }
   then(resolve) {
      this.queue.push(resolve)
   }
   synch(fn) {
      fn()
      return this
   }
   onReject(error) {
      this.errorHandler(error);
      this.finallyHandler()
   }

   catch (fn) {
      this.errorHandler = fn
      return this
   } finally(fn) {
      this.finallyHandler = fn
      return this
   }
}

const promise = new IlyaPromise((resolve, reject) => {
      console.log(1);
      onResolve();
   })
   .synch((f) => {
      console.log(2);
   })
   .then((f) => {
      console.log(3);
   })


console.log(4);


// ** Write ReversePromise class so that ‘then’ functions are calling from the end to the start
// * Task 2

// class ReversePromise extends Promise {
//    constructor(fn) {
//       super((f) => f());
//       this.fn = fn;
//       this.stack = [];
//    }
//    then(fn) {
//       this.stack.push(fn);
//       return this;
//    }
//    run() {
//       const p = new Promise(this.fn);
//       let current = p;

//       while (this.stack.length) {
//          current = current.then(this.stack.pop());
//       }

//       return p;
//    }
// }

// const revP = new ReversePromise((res) => {
//       console.log(1);
//       res();
//    })
//    .then((f) => console.log(2))
//    .then((f) => console.log(3))
//    .then((f) => console.log(4))
//    .run();