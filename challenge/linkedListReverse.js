// Link: https://challenge.makerpass.com/c/6bad0524288a4a7e2461bf1eb891d8cc

// Description:
// Write a function that reverses a linked list.

// Explanation:

// Given the below linked list:

// A -> B -> C -> D -> E -> null

// Return:

// E -> D -> C -> B -> A -> null

// ‘Constraint 1: Do this in linear time’

// ‘Constraint 2: Do this in constant space’

// ‘Constraint 3: Do not mutate the original nodes in any way’

// Code:
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

var reverseLinkedList = function(linkedList) {

};