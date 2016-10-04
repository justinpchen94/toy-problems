var expect = chai.expect;

describe("sortedInsert", function() {
  it("exists", function() {
    expect(sortedInsert).to.be.a('function')
  });
  
  it("returns the original stack", function() {
    var a = new Stack();
    var result = sortedInsert(a, 0);

    expect(a).to.equal(result);
  });

  it("inserts the element at the top when appropriate", function() {
    var a = new Stack();
    sortedInsert(a, 3);

    expect(a.peek()).to.equal(3);
    expect(a.count).to.equal(1);

    var b = new Stack(20);
    b.push(15);
    b.push(10);

    expect(sortedInsert(b, 5).peek()).to.equal(5);
    expect(b.count).to.equal(4);
  });

  it("inserts the element in the middle correctly", function() {
    var a = new Stack();
    a.push(9);
    a.push(7);
    a.push(5);
    a.push(3);
    sortedInsert(a, 6);

    var a_result = [];
    while(!a.isEmpty()) {
      a_result.push(a.pop());
    }

    expect(a_result.join("")).to.equal("35679");

    var b = new Stack();
    b.push(5);
    b.push(3);
    b.push(2);
    b.push(1);
    sortedInsert(b, 4);

    var b_result = [];
    while (!b.isEmpty()) {
      b_result.push(b.pop());
    }

    expect(b_result.join("")).to.equal("12345");
  });

  it("inserts the element to the bottom correctly", function() {
    var a = new Stack(3);
    sortedInsert(a, 6);

    expect(a.pop()).to.equal(3);
    expect(a.pop()).to.equal(6);

    var b = new Stack(6);
    b.push(4);
    b.push(2);
    b.push(0);
    sortedInsert(b, 8);

    var b_result = [];
    while (!b.isEmpty()) {
      b_result.push(b.pop());
    }

    expect(b_result.join("")).to.equal("02468");
  });
});
