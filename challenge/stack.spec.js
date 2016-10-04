var expect = chai.expect;

describe("Stack constructor", function() {

  it("returns an instance of a stack with the right methods", function() {
    var stack = new Stack();
    expect(stack.size).to.be.a('function');
    expect(stack.peek).to.be.a('function');
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
  });

  it("can be called with an initial value", function() {
    var stack = new Stack(3);
    expect(stack.size()).to.equal(1);
  })
})

describe("#size", function() {
  var stack = new Stack();
  it("returns the correct size", function() {
    stack.push(1);
    expect(stack.size()).to.equal(1);
    stack.push(5);
    stack.push(3);
    stack.push(4);
    expect(stack.size()).to.equal(4);
  })
})

describe("#peek", function() {

  it("returns the top value", function() {
    var stack = new Stack(10);
    expect(stack.peek()).to.equal(10);
  });

  it("returns null for an empty stack", function() {
    var stack = new Stack();
    expect(stack.peek()).to.equal(null);
  })

  it("does not mutate the stack", function() {
    var stack = new Stack(10)
    expect(stack.peek()).to.equal(10);
    expect(stack.peek()).to.equal(10);
    expect(stack.size()).to.equal(1);
  });
});


describe("#push", function() {

  it("pushes to the top of the stack", function() {
    var stack = new Stack(10);
    stack.push(20);
    expect(stack.peek()).to.equal(20);
    expect(stack.size()).to.equal(2);
    stack.push(15);
    expect(stack.peek()).to.equal(15);
    expect(stack.size()).to.equal(3);
  });

  it("pushes multiple arguments in the stack in order", function() {
    var stack = new Stack();
    stack.push(15, 20, 25);
    expect(stack.size()).to.equal(3);
    expect(stack.pop()).to.equal(25);
    expect(stack.size()).to.equal(2);
    expect(stack.pop()).to.equal(20);
    expect(stack.size()).to.equal(1);
    expect(stack.pop()).to.equal(15);
    expect(stack.size()).to.equal(0);
  });

  it("returns the top most value in the modified stack", function() {
    var stack = new Stack();
    stack.push(5);
    expect(stack.push(5)).to.equal(5);
    expect(stack.peek()).to.equal(5);
    expect(stack.push(10, 15, 20)).to.equal(20);
    expect(stack.peek()).to.equal(20);
  })

});

describe("#pop", function() {

  it("pops off the top of the stack", function() {
    var stack = new Stack(5);
    stack.pop();
    expect(stack.peek()).to.equal(null);

    stack.push(35);
    stack.push(10);
    stack.pop();
    expect(stack.peek()).to.equal(35);
  });

  it("returns the removed value", function() {
    var stack = new Stack(3);
    expect(stack.pop()).to.equal(3);

    stack.push(5);
    stack.push(7);
    expect(stack.pop()).to.equal(7);
    expect(stack.pop()).to.equal(5);
  });

  it("can remove and add seamlessly and keep the size consistent", function() {
    var stack = new Stack(3);
    expect(stack.pop()).to.equal(3);
    stack.push(15);
    expect(stack.pop()).to.equal(15);
    expect(stack.size()).to.equal(0);
    stack.push(30);
    expect(stack.size()).to.equal(1);
    stack.push(31);
    stack.push(32);
    expect(stack.size()).to.equal(3);
    expect(stack.pop()).to.equal(32);
    expect(stack.size()).to.equal(2);   
    expect(stack.pop()).to.equal(31);
    expect(stack.size()).to.equal(1);
    expect(stack.pop()).to.equal(30);
    expect(stack.size()).to.equal(0);
  });

  it("should not alter the size if there is nothing left to pop off", function() {
    var stack = new Stack();
    expect(stack.size()).to.equal(0);
    stack.pop();
    expect(stack.size()).to.equal(0);
  });

  it("should return null if there is nothing left to pop off", function() {
    var stack = new Stack();
    expect(stack.pop()).to.equal(null);
  })
});