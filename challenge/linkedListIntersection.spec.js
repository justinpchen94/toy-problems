var should = chai.should();

var stringify = function(list) {
  var res = [];
  while(list !== null) {
    res.push(list.value);
    list = list.next;
  }
  return res.join("");
}


describe('linkedListIntersection', function(){
  it('should be exist', function(){
    should.exist(linkedListIntersection);
  });

  it('should be a function', function(){
    linkedListIntersection.should.be.a.Function;
  });
  
  it('should return the correct node in the case of two merged linked lists of the same size', function(){
    var list1 = Node('A');
    var nodeB = list1.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');
    var nodeF = nodeE.next = Node('F');

    var list2 = Node('X')
    var nodeY = list2.next = Node('Y');
    var nodeZ = nodeY.next = Node('Z');
    nodeZ.next = nodeD;

    var expected = 'DEF';
    var result = stringify(linkedListIntersection(list1, list2));

    expected.should.be.equal(result);
  });

  
  it('should return the correct node in the case of two merged linked lists of different sizes', function(){
    var list1 = Node('A');
    var nodeB = list1.next = Node('B');
    var nodeC = nodeB.next = Node('C');
    var nodeD = nodeC.next = Node('D');
    var nodeE = nodeD.next = Node('E');
    var nodeF = nodeE.next = Node('F');

    var list2 = Node('X')
    var nodeY = list2.next = Node('Y');
    nodeY.next = nodeD;

    var expected = 'DEF';
    var result = stringify(linkedListIntersection(list1, list2));

    expected.should.be.equal(result);
  });

  it('should return null if the two lists have no intersection', function(){
    var list1 = Node('N');
    var list2 = Node('O');

    var expected = null;
    var result = linkedListIntersection(list1, list2);

    should.equal(result, expected);
  });

});
