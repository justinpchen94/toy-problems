var should = chai.should();

var stringify = function(list) {
  var res = [];
  while(list !== null) {
    res.push(list.value);
    list = list.next;
  }
  return res.join("");
}


describe('insertFromEnd', function(){
  it('should be exist', function(){
    should.exist(insertFromEnd);
  });

  it('should be a function', function(){
    insertFromEnd.should.be.a.Function;
  });

  it('should take at least three arguments', function(){
    insertFromEnd.length.should.be.above(2);
  });

  it('should return something', function() {
    var result = insertFromEnd(Node('A'), 'B', 0);
    should.exist(result);
  });
  
  it('should return a list with a value inserted at the correct position', function(){
    var list = Node('A');
    var nodeB = list.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    var expected = 'ABCFDE';
    var result = stringify(insertFromEnd(list, 'F', 2))

    expected.should.be.equal(result);
  });

  it('should return a list with a value inserted at the correct position', function(){
    var list = Node('A');
    var nodeB = list.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    var expected = 'AFBCDE';
    var result = stringify(insertFromEnd(list, 'F', 4))

    expected.should.be.equal(result);
  });

  it('should return the same list when the offset is greater than the length of the list', function(){
    var list = Node('A');
    var nodeB = list.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    var original = stringify(list);
    var result = stringify(insertFromEnd(list, 'F', 100))

    original.should.be.equal(result);
  });

  it('should return a list with a value appended to the end when offset is 0', function(){
    var list = Node('A');
    var nodeB = list.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    var expected = stringify(list) + 'F';
    var result = stringify(insertFromEnd(list, 'F', 0))

    expected.should.be.equal(result);
  });


  it('should return a list with a value inserted at the head when offset is equal to length', function(){
    var list = Node('A');
    var nodeB = list.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    var expected = 'FABCDE';
    var result = stringify(insertFromEnd(list, 'F', 5))

    expected.should.be.equal(result);
  });

});
