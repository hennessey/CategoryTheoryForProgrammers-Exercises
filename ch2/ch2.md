## 4
_Which of these `C++` functions are pure? Try to memoize
them and observe what happens when you call them multiple
times: memoized or not_

Skipped due to c++ ness/laziness

## 5
> How many different functions are there from `Bool` to
> `Bool`? Can you implement them all?

```javascript
//1 
const VoidToFalse = () => false
//2
const VoidToTrue = () => true
//3
const FalseToFalse = (x = false) => false
//4
const TrueToTrue = (x = true) => true
//5
const FalseToTrue = (x = false) => true
//6
const TrueToFalse = (x = true) => false
//7
const TrueToUnit = (x = true) => ({})
//8
const FalseToUnit = (x = false) => ({})
```

## 6
> Draw a picture of a catory whose only objects are the types
> `Void`, `()`(unit), and `Bool`; with arrows corresponding
> to all possible functions between these types. Label the
> arrows with the names of the functions.

```
    Void -> Void (id)
    Void -> Bool (absurd)
    Void -> () (absurd)
    () -> () (id)
    () -> Bool (True)
    () -> Bool (False)
    Bool -> Bool (id)
    Bool -> Bool (notTrue)
    Bool -> Bool (notFalse)
    Bool -> () (discard)
```