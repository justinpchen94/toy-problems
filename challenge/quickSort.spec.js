var should = chai.should();

describe('quickSort', function() {
  it('should exist', function(){
    should.exist(quickSort);
  });

  it('should be a function', function() {
    quickSort.should.be.a.Function;
  });

  it('should return an array', function() {
    var result = quickSort([1]);
    should.exist(result);
    result.should.be.an.instanceof(Array);
  });

  it('should return an array with a single number', function(){
    var result = quickSort([1]);
    result.should.be.eql([1]);
  });
  
  it('should handle an empty array', function(){
    var result = quickSort([]);
    result.should.be.eql([]);
  });
  
  it('should sort a short array of integers', function(){
    var result = quickSort([Number.MAX_SAFE_INTEGER,8,7,3,6,9,2,4,5,1]);
    result.should.be.eql([1,2,3,4,5,6,7,8,9,Number.MAX_SAFE_INTEGER]);
  });
  
  it('should handle repeated elements', function(){
    var result = quickSort([8,7,3,3,9,2,4,5,1]);
    result.should.be.eql([1,2,3,3,4,5,7,8,9]);
  });
  
  it('should handle reversely sorted array', function(){
    var result = quickSort([9,8,7,6,5,4,3,2,1]);
    result.should.be.eql([1,2,3,4,5,6,7,8,9]);
  });

  it('should not use Array.sort', function(){
    var _sort = Array.prototype.sort;
    Object.defineProperty(Array.prototype, 'sort', {enumerable: false,
      value: function () {
        should.fail(null, null, 'Array.sort called! That\'s cheating.',null);
      }
    });
    var result = quickSort([8,7,3,6,9,2,4,5,1]);
    Object.defineProperty(Array.prototype, 'sort', {enumerable: false,
      value: _sort
    });
  });

  it('should sort an enormous array of random integers', function(){
    var input = [];
    var sorted;
    var n = 100000;
    for (var i = 0; i < n; i++) {
      var number = Math.floor(Math.random() * n);
      input.push(number);
    }
    sorted = input.slice().sort(function (a,b) {return a - b;}); // sort numerically, not lexicographically
    var result = quickSort(input);

    // using .eql can cause an n-line error message to print, so we do it by hand
    for (var i = 0; i < n; i++) {
      result[i].should.equal(sorted[i]);
    }
  });
});
