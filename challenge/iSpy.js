// Link: https://challenge.makerpass.com/c/78a81f6fc494133c63d501269602266f

// Description:
// Write a function – spyOn – which takes in another function as an argument. spyOn should return a spy (i.e. a function) that can be invoked and behaves like the original function. However, the spy has some extra capabilities in addition to behaving like the original function.

// Please read the requirements carefully!

// The spy (i.e. the returned function) should also have these methods:
// - .callCount() which returns the number of times the spy was invoked.
// - .wasCalledWith(arg) which returns a boolean representing whether the supplied ‘arg’ was used in a previous invocation of spy. When a spy is invoked with multiple arguments, each argument supplied should be stored such that .wasCalledWith() will return true for each individual argument.
// - .returned(val) which returns a boolean representing whether the spy was invoked and returned the supplied ‘val’.

// Read the test cases to double check the use-cases.

// Code:

function spyOn(fn) {
  // todo
}