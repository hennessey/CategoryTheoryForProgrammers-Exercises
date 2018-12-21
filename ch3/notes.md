# Orders
## Pre-order category
A preorder category is a _thin-category_ where the morphisms
are reflexive (e.g. `<=`, or more generally can be expressed
as related to another element) and each
_hom-set_ between morphisms is either empty or a singleton

Pre-orders are a more general equivalence relationship

ex: 
```
a <= a
a <= b
b <= b
b <= b


composition:
a <= b
b <= c 

a <= c

Hom(a, a): {
    a <= a
}

Hom(a, b): {
    a <= b
}

Hom(b, b): {
    b <= b
}

```

## Partial Order
A partial order is a pre-order where if a <= b and b <= a
then a = b (anti-symmatry)

### Linear/Total Order
Any two objects in a set are in relation to one another