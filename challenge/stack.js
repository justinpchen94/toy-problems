// Link: https://challenge.makerpass.com/c/1c3ba217e15098cfa933a04be0f98110

// Description:
// Implement a stack with the following restrictions and methods:

// Restrictions:
// * Do not use an array as storage

// Methods:
// * size should return an integer representing the number of elements in the stack.
// * peek should return the top item of the stack without removing it. If the stack is empty, it should return null.
// * push should add an item to the top of the stack. It should also accept multiple arguments and push them to the stack in order. It should return the topmost value of the stack after the pushing.
// * pop should remove an item off the top of the stack and returned the removed value.

// Code:

var Stack = function(initialValue) {
  this.storage = {};
  this.count = 0;
  
  // your code here
};

Stack.prototype.size = function() {
  // your code here
};

Stack.prototype.peek = function() {
  // your code here
};

Stack.prototype.push = function(val) {
  // your code here
};

Stack.prototype.pop = function() {
  // your code here
};