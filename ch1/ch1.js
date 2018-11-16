/*
 * 1
 * Implement, as best you can, the identity function in your favorite language
 * (or second favorite if youre favorite language happens to be Haskell)
 */

export const identity = a => a

/*
 * 2
 * Implement the composition function in your favorite language. It takes two
 * functions as arguments and returns a function that is their composition
 */

export const compose = (g, f) => (args) => g(f(args))

