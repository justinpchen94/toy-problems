var should = chai.should();

describe('Tree', function (){
  it('should exist', function(){
    should.exist(Tree);
  });
  it('should be a function', function(){
    Tree.should.be.a.Function;
  });
  describe('map()', function() {
    it('should exist on the Tree prototype', function(){
      should.exist(Tree.prototype.map);
    });

    it('should be a function', function() {
      Tree.prototype.map.should.be.a.Function;
    });

    it('should return a Tree instance', function() {
      var root = new Tree('root');
      var identity = function (value) { return value; };
      var result = root.map(identity);
      should.exist(result);
      result.should.be.an.instanceOf(Tree);
    });

    it('should return an identical tree if the mapping function returns the value unaltered', function() {
      // this "identity" function returns the same value that was passed in
      var identity = function (value) { return value; };
      // create a tree with some values
      // depth: 0
      var input = new Tree(1);
      // depth: 1
      input.addChild(2);
      input.addChild(3);
      // depth: 2
      input.children[0].addChild(4);
      input.children[0].addChild(5);
      input.children[1].addChild(6);
      input.children[1].addChild(8);
      // depth: 3 (sparse)
      input.children[0].children[0].addChild(9);
      input.children[1].children[1].addChild(10);

      var verifyTree = function (result, expectation) {
        result.should.be.an.instanceOf(Tree);  // we expect a tree node
        result.value.should.equal(expectation.value); // with the same value
        result.should.not.equal(expectation); // but NOT the same node
        result.children.should.have.length(expectation.children.length); // with the same number of children
        for (var i = 0; i < result.children.length; i++) {
          verifyTree(result.children[i], expectation.children[i]); // and each child is also verified
        }
      }

      var result = input.map(identity);
      // the input and output trees should have identical values
      verifyTree(result, input);
    });

    it('should return a tree with doubled values if the function doubles the value', function() {
      // this function doubles the value that was passed in
      var double = function (value) { return value * 2; };
      // create a tree with some values, and a tree with our *expected* output
      // depth: 0
      var input = new Tree(1);
      var output = new Tree(2);
      // depth: 1
      input.addChild(2);
      input.addChild(3);
      // expected values
      output.addChild(4);
      output.addChild(6);
      // depth: 2
      input.children[0].addChild(4);
      input.children[0].addChild(5);
      input.children[1].addChild(6);
      input.children[1].addChild(8);
      // expected values
      output.children[0].addChild(8);
      output.children[0].addChild(10);
      output.children[1].addChild(12);
      output.children[1].addChild(16);
      // depth: 3 (sparse)
      input.children[0].children[0].addChild(9);
      input.children[1].children[1].addChild(10);
      // expected values
      output.children[0].children[0].addChild(18);
      output.children[1].children[1].addChild(20);

      var verifyTree = function (result, expectation) {
        result.should.be.an.instanceOf(Tree);  // we expect a tree node
        result.value.should.equal(expectation.value); // with the same value
        result.should.not.equal(expectation); // but NOT the same node
        result.children.should.have.length(expectation.children.length); // with the same number of children
        for (var i = 0; i < result.children.length; i++) {
          verifyTree(result.children[i], expectation.children[i]); // and each child is also verified
        }
      }

      var result = input.map(double);
      verifyTree(result, output);
    });
  });
/*
  describe('mapInPlace()', function() {
    xit('should exist on the Tree prototype', function(){
      should.exist(Tree.prototype.mapInPlace);
    });

    xit('should be a function', function() {
      Tree.prototype.mapInPlace.should.be.a.Function;
    });

    xit('should update the tree with doubled values if the function doubles the value', function() {
      // this function doubles the value that was passed in
      var double = function (value) { return value * 2; };
      // create a tree with some values, and a tree with our *expected* output
      // depth: 0
      var input = new Tree(1);
      var output = new Tree(2);
      // depth: 1
      input.addChild(2);
      input.addChild(3);
      // expected values
      output.addChild(4);
      output.addChild(6);
      // depth: 2
      input.children[0].addChild(4);
      input.children[0].addChild(5);
      input.children[1].addChild(6);
      input.children[1].addChild(8);
      // expected values
      output.children[0].addChild(8);
      output.children[0].addChild(10);
      output.children[1].addChild(12);
      output.children[1].addChild(16);
      // depth: 3 (sparse)
      input.children[0].children[0].addChild(9);
      input.children[1].children[1].addChild(10);
      // expected values
      output.children[0].children[0].addChild(18);
      output.children[1].children[1].addChild(20);

      var verifyTree = function (result, expectation) {
        result.should.be.an.instanceOf(Tree);  // we expect a tree node
        result.value.should.equal(expectation.value); // with the same value
        result.children.should.have.length(expectation.children.length); // with the same number of children
        for (var i = 0; i < result.children.length; i++) {
          verifyTree(result.children[i], expectation.children[i]); // and each child is also verified
        }
      }

      input.mapInPlace(double);
      verifyTree(input, output);
    });
  });
  */
});
