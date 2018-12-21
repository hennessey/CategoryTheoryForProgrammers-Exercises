const seedrandom = require('seedrandom')

/*
* 1
* Define higher-order function (or a function object)
* `memoize` in your favorite langauge. This function takes a
* pure function `f` as an argument and returns a function
* that behaves almost exactly like `f`, except that it only
* calls the original function once for every argument,
* stores the results internally, and subsequently returns
* this stored result every time it's called with the same
* argument. 
*
* You can tell the memoized frunction from the original by
* watching it's perfomance. For instance, try to memoize a
* function that takes a long time to evaluate. You'll have
* to wait for the result the first time you call it, but on
* subsequent calls, with the same argument, you should get
* the result immediatetly.
*/


function memoize(fn) {
    let results = {}
    return function() {
       const args = JSON.stringify(arguments)

        const storedResult = results[args]
        if (storedResult) {
            return storedResult 
        } else {
            const result = fn.call(this, ...arguments)
            results[args] = result

            return result
        }
    }
}

/*
* 2
* Try to memoize a function from your standard library that
* you normally use to produce random numbers. Does it work?
*/

const memoizedRandom = memoize(Math.random)

// console.log(memoizedRandom())
// console.log(memoizedRandom())

/*
* No, it does not work. `Math.random()` is not pure,
* therefore calling it with the same value _by
* implementation_ will produce different results. My
* memoization function can only accept _pure_ functions
* without any side effects. 
*/

/*
* 3
* Most random generator functions can be initialized with a
* seed. Implement a function that takes a seed, calls the
* random number generator with that seed, and returns the
* result. Memoize that function. Does it work?
*/

const seededRandom = (seed) => seedrandom(seed)() 
const memedSeedRandom = memoize(seededRandom)

console.log(memedSeedRandom('a'))
console.log(memedSeedRandom('a'))

/* 
* Nope. Since the function we're memoizing takes a seed
* value and returns the randomly generated number based on
* that seed, the second call with the same seed value will
* result in the memoization implementation to return the
* result of the first call.
*/