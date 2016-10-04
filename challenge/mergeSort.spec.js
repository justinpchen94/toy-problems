var should = chai.should();

describe('mergeSort', function() {
  it('should exist', function(){
    should.exist(mergeSort);
  });

  it('should be a function', function() {
    mergeSort.should.be.a.Function;
  });

  it('should return an array', function() {
    var result = mergeSort([1]);
    should.exist(result);
    result.should.be.an.instanceof(Array);
  });

  it('should return an array with a single number', function(){
    var result = mergeSort([1]);
    result.should.be.eql([1]);
  });

  it('should sort a short array of integers', function(){
    var result = mergeSort([Number.MAX_SAFE_INTEGER,8,7,3,6,9,2,4,5,1]);
    result.should.be.eql([1,2,3,4,5,6,7,8,9,Number.MAX_SAFE_INTEGER]);
  });
  
  it('should handle repeated elements', function(){
    var result = mergeSort([8,7,3,3,9,2,4,5,1]);
    result.should.be.eql([1,2,3,3,4,5,7,8,9]);
  });

  it('should not use Array.sort', function(){
    var _sort = Array.prototype.sort;
    Object.defineProperty(Array.prototype, 'sort', {enumerable: false,
      value: function () {
        should.fail(null, null, 'Array.sort called! That\'s cheating.',null);
      }
    });
    var result = mergeSort([8,7,3,6,9,2,4,5,1]);
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
    sorted = input.sort(function (a,b) {return a - b;}); // sort numerically, not lexicographically
    var result = mergeSort(input);

    // using .eql can cause an n-line error message to print, so we do it by hand
    for (var i = 0; i < n; i++) {
      result[i].should.equal(sorted[i]);
    }
  });
});
