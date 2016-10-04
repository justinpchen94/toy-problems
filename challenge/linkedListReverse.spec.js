var should = chai.should();

var stringify = function(list) {
  var res = [];
  while(list !== null) {
    res.push(list.value);
    list = list.next;
  }
  return res.join("");
}


describe('reverseLinkedList', function(){
  it('should be exist', function(){
    should.exist(reverseLinkedList);
  });

  it('should be a function', function(){
    reverseLinkedList.should.be.a.Function;
  });

  it('should return something', function() {
    var result = reverseLinkedList(Node('A'));
    should.exist(result);
  });
  
  it('should return a reversed list', function(){
    var list = Node('A');
    var nodeB = list.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');

    var expected = 'EDCBA';
    var result = stringify(reverseLinkedList(list));

    expected.should.be.equal(result);
  });

  it('should return the same list when the list has only one node', function(){
    var list = Node('A');

    var expected = 'A';
    var result = stringify(reverseLinkedList(list))

    expected.should.be.equal(result);
  });

});
