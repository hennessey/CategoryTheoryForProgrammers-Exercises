## 4
_Is the world-wide web a category in any sense? Are links morphisms?_
The WWW is not a category because the links between pages cannot be composed. The rule for comp states that: 

``
  if there exists an morphism
  f: a -> b
  
  and
  f: b -> c

  the category must also contain a morphism
  f: a -> c
  
``

Given the above, if there a link from on page A to page B, and another on page B to page C there is no guarantee that there is also a link on page A to page C

## 5 
_Is Facebook a category, with people as objects and friendships as morphisms?_ 
If one assumes that the saying _"The friend of my friend is my friend"_ is always true, and that everyone is friends with themselves, then Facebook could be defined as a category.

## 6
_When is a directed graph a category_
A directed graph is a set of nodes and edges between them where all the edges are directed from one node to another. A directed graph is a category when:
* Each node has an edge that loops back to itself (identity)
* If there an exists an edge directed from node A to node B, and an edge directed from node B to node C there must also exist an edge directed from node A to node C (composition of morphisms)
