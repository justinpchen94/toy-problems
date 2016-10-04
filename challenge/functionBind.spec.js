var should = chai.should();

describe('bind', function(){
  it('should exist', function(){
    should.exist(bind);
  });

  it('should be a function', function(){
    bind.should.be.a.Function;
  });
  it('should return a function', function(){
    var func = function(){ };
    var res = bind(func);
    should.exist(res);
    res.should.be.a.Function;
  });
  it('should not return the original function', function(){
    var func = function(){ };
    var res = bind(func);
    //aka, the original function should not be returned by `bind()`
    // instead, we want to return a new function that will call our original
    // function with the default (aka, curried) arguments we specified in our
    // original call to `bind`.
    res.should.not.be.equal(func);
  });
  it('should return a result when calling the bounded function', function(){
    var func = function(arg1){ return arg1 };
    var context = null;
    var boundFunc = bind(func, context, "foobar");
    var result = boundFunc();
    should.exist(result);
    result.should.be.equal('foobar');
  });
  it('should call the "curried" function in the bound context', function(){
    // wtf does that mean, right? well, bind takes a `context` argument which
    // is the context in which our newly returned function will be called in.
    // see: http://msdn.microsoft.com/en-us/library/ie/ff841995(v=vs.94).aspx
    var func = function() { return this };
    var context = { foo: 'bar' };
    var boundFunc = bind(func, context);
    var result = boundFunc();
    should.exist(result);
    result.should.be.equal(context);
  });
  it('should bind the first argument', function(){
    // are you sure you're not forgetting about the arguments?
    // hint: don't forget `arguments` isn't a "true" array
    var func = function(a){ return a };
    var context = null;
    var boundFunc = bind(func, context, 'foo');
    var result = boundFunc();
    should.exist(result);
    result.should.be.a.String;
    result.should.equal('foo');
  });
  it('should allow the bound function to be called multiple times with different arguments', function(){
    var func = function(a, b){ return a + b };
    var context = null;
    var boundFunc = bind(func, context, 'wow '); // "bind" 'wow ' => the first argument (a)

    var result1 = boundFunc('dawg'); // first call to boundFunc with b='dawg'
    should.exist(result1);
    result1.should.be.equal('wow dawg');

    var result2 = boundFunc('man'); // second call to boundFunc with b='man'
    should.exist(result2);
    result2.should.be.equal('wow man');
    // you're probably modifying some shared `args` array in the
    // clojure scope ( or possibly the global scope :( ) everytime `boundFunc`
    // is being called.
    // hint: myArray.push.call(myArray, [1,2,3]) will _append_ to `myArray`
    // hint: but myArray.concat([1,2,3]) will _return_ a new array and _not_
    // hint: modify `myArray`
  });
  it('should bind the first and second arguments', function(){
    var func = function(a, b){ return a + b };
    var context = null;
    var boundFunc = bind(func, context, 'foo', 'bar');
    var result = boundFunc();
    should.exist(result);
    result.should.be.a.String;
    result.should.equal('foobar');
  });
  it('should bind only first and second arguments (in this example) and allow the bound function to take the third', function(){
    var func = function(a, b, c){ return a + b + c };
    // here we only bind to the first 2 arguments, `a` and `b`
    var context = null;
    var boundFunc = bind(func, context, 'foo', 'bar');
    // should call `func` with a='foo', b='bar', c='baz'
    var result = boundFunc('baz');
    should.exist(result);
    result.should.be.a.String;
    result.should.equal('foobarbaz');
  });
  it('should bind only the first and second arguments (in this example) and allow the bound function to take the third and fourth', function(){
    // we've only written tests for up to 4 original arguments but your
    // bound function should allow any number of arguments to be bound to it
    // when calling `bind` or when calling the `bound` function return by it.
    var func = function(a, b, c, d){ return a + b + c + d };
    var boundFunc = bind(func, null, 'foo', 'bar');
    var result = boundFunc('biz','baz');
    should.exist(result);
    result.should.be.a.String;
    result.should.equal('foobarbizbaz');
  });
});

describe('Function.prototype.bind', function(){
  it('should exist', function(){
    should.exist(Function.prototype.bind);
  });
  it('should be a function', function(){
    Function.prototype.bind.should.be.a.Function;
  });
  it('should return a function', function(){
    var func = function(){ };
    var res = func.bind();
    should.exist(res);
    res.should.be.a.Function;
  });
  it('should not return the original function', function(){
    var func = function(){ };
    var res = func.bind();
    //aka, the original function should not be returned by `bind()`
    // instead, we want to return a new function that will call our original
    // function with the default (aka, curried) arguments we specified in our
    // original call to `bind`.
    res.should.not.be.equal(func);
  });
  it('should return a result when calling the bounded function', function(){
    var func = function(arg1){ return arg1 };
    var context = null;
    var boundFunc = func.bind(context, "foobar");
    var result = boundFunc();
    should.exist(result);
    result.should.be.equal('foobar');
  });
  it('should call the "curried" function in the bound context', function(){
    // wtf does that mean, right? well, bind takes a `context` argument which
    // is the context in which our newly returned function will be called in.
    // see: http://msdn.microsoft.com/en-us/library/ie/ff841995(v=vs.94).aspx
    var func = function() { return this };
    var context = { foo: 'bar' };
    var boundFunc = func.bind(context);
    var result = boundFunc();
    should.exist(result);
    result.should.be.equal(context);
  });
  it('should bind the first argument', function(){
    // are you sure you're not forgetting about the arguments?
    // hint: don't forget `arguments` isn't a "true" array
    var func = function(a){ return a };
    var context = null;
    var boundFunc = func.bind(context, 'foo');
    var result = boundFunc();
    should.exist(result);
    result.should.be.a.String;
    result.should.equal('foo');
  });
  it('should allow the bound function to be called multiple times with different arguments', function(){
    var func = function(a){ return a + a };
    var context = null; // we're not worrying about the context in this text
    var boundFunc = func.bind(context);

    var result1 = boundFunc('foo');
    should.exist(result1);
    result1.should.be.equal('foofoo');

    var result2 = boundFunc('bar');
    should.exist(result2);
    result2.should.be.equal('barbar');
    // you're probably modifying some shared `args` array in the
    // clojure scope ( or possibly the global scope :( ) everytime `boundFunc`
    // is being called.
    // hint: myArray.push.call(myArray, [1,2,3]) will _append_ to `myArray`
    // hint: but myArray.concat([1,2,3]) will _return_ a new array and _not_
    // hint: modify `myArray`
  });
  it('should bind the first and second arguments', function(){
    var func = function(a, b){ return a + b };
    var context = null; // we're not worrying about the context in this text
    var boundFunc = func.bind(context, 'foo', 'bar');
    var result = boundFunc();
    should.exist(result);
    result.should.be.a.String;
    result.should.equal('foobar');
  });
  it('should bind only first and second arguments (as in this example) and allow the bound function to take the third', function(){
    var func = function(a, b, c){ return a + b + c };
    // here we only bind to the first 2 arguments, `a` and `b`
    var context = null; // we're not worrying about the context in this text
    var boundFunc = func.bind(context, 'foo', 'bar');
    // should call `func` with a='foo', b='bar', c='baz'
    var result = boundFunc('baz');
    should.exist(result);
    result.should.be.a.String;
    result.should.equal('foobarbaz');
  });
  it('should bind only the first and second arguments (as in this example) and allow the bound function to take the third and fourth', function(){
    // we've only written tests for up to 4 original arguments but your
    // bound function should allow any number of arguments to be bound to it
    // when calling `bind` or when calling the `bound` function return by it.
    var func = function(a, b, c, d){ return a + b + c + d };
    var boundFunc = func.bind(null, 'foo', 'bar');
    var result = boundFunc('biz','baz');
    should.exist(result);
    result.should.be.a.String;
    result.should.equal('foobarbizbaz');
  });

});
