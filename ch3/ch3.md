## 1
> Generate a free category from:  
> 1. A graph with one node and no edges 
> 2. A graph with one node and one (directed) edge (hint:
>    this edge can be composed with itself) 
> 3. A graph with two nodes and a single arrow between them
> 4. A graph with a single node and 26 arrows marked with
>    the letters of the alphabet: a, b, c, ..., z.

1. 
```
    ...
```

2.
```
    node0 -> node0 (id)
    node0 -> node0 (id(id))
    ...
    node0 -> node 0 (id(id(id)...))
```

3.
```
    node0 -> node0 (id0)
    node0 -> node0 (id0(id0))
    node0 -> node1 (f)
    node0 -> node1 (f(id0))
    node1 -> node1 (id1)
    node1 -> node1 (id1(id1))

```

4.
```
    a -> a (idA)
    a -> a (idA(idA))
    a -> b (f)
    a -> b (f(idA))
    b -> b (idB)
    b -> b (idB(idB))

```

## 2
> What kind of order is this? 

> 1. A set of sets with the inclusions relations: `A` is
>    included in `B` if every element of `A` is also an
>    element of `B`.

* Pre-order, as there exists a reflexive relationship
between elements (`A ⊆ B`)
* Composition holds 
```
A ⊆ B
B ⊆ C

A ⊆ C
```
* Composition is Associative
```
A ⊆ (B ⊆ C) = (A ⊆ B) ⊆ C   
```

* Identity
```
A ⊆ A  
```
* It is also a partial order because if `A ⊆ B` and `B ⊆ A`
  then `A = B`

* It is not a total, or linear order because not every every
 set is a subset of another set.

> 2. `C++` types with the following subtyping relation: `T1`
>    is a subtype of `T2` if a pointer to `T1` can be passed
>    to a function that expects a pointer to `T2` without
>    triggering a compilation error

In this example, our reflexive relationship is `subtyping`,
or `T2 subType T1`. Since we have a reflexive relationship
between our set of types, we have at least a pre-order.
Also, we can express that if `T2 subType T1` and `T2 subtype
T1` then `T2 = T1`. Since all subtypes are not subtypes of
each other, we do not have a linear or total order.

## 3
> Considering that `Bool` is a set of two values `True` and
> `False`, show that it forms two (set-theoretical) monoids
> with respect to, respectively, operator `&& (and)` and `||
> (or)`

A monoid is a set of elements, combined with an associative binary
operation and a neutral value. 
1. In this case, our set is `{ True, False }`, our binary
  operation is `&&`, and our neutral value is `True`

```
identity/neutral value:
a && True = True
True && a = True

associativity:
a && (b && c) = (a && b) && c
```

2. In this case, our set is `{ True, False }`, our binary
  operation is `||`, and our neutral value is `False`

```
identity/neutral value:
a || True = False
True || a = False

associativity:
a || (b || c) = (a || b) || c
```

## 4 
> Represent the Bool monoid with the `&&` operator as a
> category: List the morphisms and their rules of
> composition.

```
id (&& True)
f (&& False)

id . id
f . id
id . f
f . f
```

## 5 
> Represent addition modulo 3 as a monoid category
```
id = + 0 mod 3
f = + 1 mod 3
g = + 2 mod 3

id . id = + 0 mod 3 . + 0 mod 3
id . f = + 0 mod 3 . + 1 mod 3
f . id = + 1 mod 3 . + 0  mod 3
f . g = + 1 mod 3 . + 2 mod 3
```
