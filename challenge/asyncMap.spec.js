chai.should();
P = Promise;
Array.prototype.m = Array.prototype.map;
describe('asyncMap', function() {

  it('should exist', function() {
    expect(asyncMap).toBeDefined();
  });

  it('should be a function', function() {
    asyncMap.should.be.a.Function;
  });

  it('should take two arguments', function() {
    asyncMap.length.should.equal(2);
  });

  it('should pass the completed tasks to its callback', function(done){

    // These functions aren't really asynchronous, but for the purposes of testing it works.
    function wait2For2(callback){
      Test.setTimeout(function () {
        callback(2);
      }, 200, done.fail);
    }

    function wait3For1(callback){
      Test.setTimeout(function() {
        callback(1);
      }, 300, done.fail);
    }

    var res;
    asyncMap([wait2For2, wait3For1], function(arr){
      res = arr;
      /* This should work regardless of order because of
       * the time it takes to execute these 2 functions
       */
      res.should.deep.equal([2,1]);
      res.length.should.equal(2);
      done();
    });

  });

  it('should pass the completed tasks to its callback in the correct order', function(done) {

    function wait2For2(callback){
      Test.setTimeout(function() {
        callback(2);
      }, 200, done.fail);
    }

    function wait3For1(callback){
      Test.setTimeout(function() {
        callback(1);
      }, 300, done.fail);
    }

    var res;
    asyncMap([wait3For1, wait2For2], function(arr){
      res = arr;
      res.should.deep.equal([1,2]);
      done();
    });

  });

  it('should handle more than two async functions in the correct order', function(done) {
    function wait2For2(callback){
      Test.setTimeout(function() {
        callback(2);
      }, 200, done.fail);
    }

    function wait5For4(callback){
      Test.setTimeout(function() {
        callback(4);
      }, 500, done.fail);
    }

    function wait1For3(callback){
      Test.setTimeout(function() {
        callback(3);
      }, 100, done.fail);
    }

    function wait3For1(callback){
      Test.setTimeout(function() {
        callback(1);
      }, 300, done.fail);
    }

    function wait1For5(callback){
      Test.setTimeout(function() {
        callback(5);
      }, 100, done.fail);
    }

    var res;
    asyncMap([wait3For1, wait2For2, wait1For3, wait5For4, wait1For5], function(arr){
      res = arr;
      res.should.deep.equal([1,2,3,4,5]);
      done();
    });

  });

});
