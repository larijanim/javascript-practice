/*Currying is the technique of converting a function that takes multiple arguments into a sequence
 of functions that each takes a single argument.
Implement the curry function which accepts a function as the only argument and returns a function 
that accepts single arguments 
and can be repeatedly called until at least the minimum number of arguments have been provided 
(determined by how many arguments the original function accepts). The initial function argument is 
then invoked with the provided arguments. */

// https://blog.logrocket.com/understanding-javascript-currying
/**
 * 
 * @param {Function} func
 * @return {Function}
 */
export default function curry(func) {
    //    return  function curried(...args) {
    //         if (func.length !== args.length){
    //             return curried.bind(null, ...args)
    //         }
    //     return func(...args);
    //     };
    // }
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        }

        return curried.bind(this, ...args);
    };
}

//Noncurried version
const add = (a, b, c) => {
    return a + b + c
}
console.log(add(2, 3, 5)) // 10

//Curried version
const addCurry = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(addCurry(2)(3)(5)) // 10
