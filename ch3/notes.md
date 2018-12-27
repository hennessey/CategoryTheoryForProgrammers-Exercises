# Free Categories
## Pre-order category
A preorder is a general, binary relationship that is reflexive and
transititive. For example, `<=` forms a Pre-order over the
natural numbers, since:  
1. `1 <= 1` (reflexive property)
2. If `1 <= 2` and `2 <= 3` then `1 <= 3` (transitive property)

A _free-category_ can be constructed from a Pre-order. In
this category, our objects are the elements being ordered,
and the morphisms their binary, reflexive relationship
between them.
This is category since all of the objects have an `identity`
morphism (via the reflexive property of the binary relation)
such that `a <= a`, the morphisms between objects are
composable:
* If `a ->(<=) b` and `b ->(<=) c` then `a ->(<=) c` 

and that composition is associative:
1. `f = a <= b`
2. `g = b <= c`
3. `h = c <= d`
3. `h . (g . f) = (h . g) . f` 

A preorder category is also a _thin-category_ since the
_hom-set_ between morphisms is either empty or a singleton
as by Pre-order definition, there is only a single
relation(morphism) between objects.


## Partial Order
A partial order is a pre-order where if `a <= b` and `b <= a`
then `a = b` (antisymmetry)

## Linear/Total Order
Any two objects in a set are in relation to one another

## Monoids
A monoid is an algebraic structure that defines a set of
elements, an associative binary operation on those elements,
and an neutral element from the set.

A free category can be constructed from a monoid. For
example, consider a monoid over the set of Real Numbers,
addition, and 1 (set, binary operation and neutral element,
respectively)

Our category has a single object (representing the set of
Real numbers) and morphisms looping back to it represeting
each addition operations (`+ 1`, ` + 2`, ...) and their
compositions: 
1. `f = + 1`
2. `g = + 2`
3. `g . f = + 1 + 2` (`+ 3`)