var should = chai.should();

describe('Stack', function(){
  describe('constructor', function(){
    it('should exist', function(){
      should.exist(Stack);
    });
    it('should be a function', function(){
      // `typeof Stack !== 'function'` but it _should_ be a function!
      Stack.should.be.a.Function;
    });
    it('should be useable as a constructor', function(){
      var stack = new Stack();
      // the constructor should return an object
      should.exist(stack);
    });
    it('should return an instance of a stack', function(){
      var stack = new Stack();
      // aka, `stack instanceof Stack` is returning false, but it should be true!
      stack.should.be.an.instanceOf(Stack);
    });
    it('should return difference instances each time its called using the `new` keyword', function(){
      var stack1 = new Stack();
      var stack2 = new Stack();
      // aka, `stack === stack` but they should be two different `Stack` instances!
      stack1.should.not.be.equal(stack2);
    });
  });

  describe('#push', function(){
    it('should exist', function(){
      var stack = new Stack();
      // stack instances should have a `push` method
      should.exist(stack.push);
    });
    it('should add an item to the stack', function(){
      var stack = new Stack();
      // aka, calling `push` should not throw an error
      (function(){
        stack.push('a');
      }).should.not.throw();
    });
  });
  describe('#pop', function(){
    it('should exist', function(){
      var stack = new Stack();
      // aka, stack instances should have a `pop` method
      should.exist(stack.pop);
    });
    it('should not throw an error', function(){
      var stack = new Stack();
      stack.push('a');
      // aka, calling `pop` should not throw an error
      (function(){
        stack.pop();
      }).should.not.throw();
    });
  });
  describe('#size', function(){
    it('should exist', function(){
      var stack = new Stack();
      // aka, a stack instance should have a `size` method
      should.exist(stack.size);
    });
    it('should give the size of the queue', function(){
      var stack = new Stack();
      stack.push('a');
      // we just added an element so the stack's size should be 1
      stack.size().should.be.equal(1);
      stack.push('b');
      // we just added _another_ element so the stack's size should now be 2
      stack.size().should.be.equal(2);
      stack.pop();
      // we just remove an element so the stack's size should be 1
      stack.size().should.be.equal(1);
      stack.pop();
      // we just remove _another_ element so the stack's size should now be 0
      stack.size().should.be.equal(0);
    });
  });
});

describe('Queue', function(){
  describe('constructor', function(){
    it('should exist', function(){
      // aka, the variable `Queue` doesn't exist when it should actually be something!
      should.exist(Queue);
    });
    it('should be a function', function(){
      // `typeof Queue !== 'function'` but it _should_ be a function!
      Queue.should.be.a.Function;
    });
    it('should be useable as a constructor', function(){
      var queue = new Queue();
      // the constructor should return an object
      should.exist(queue);
    });
    it('should return an instance of a queue', function(){
      var queue = new Queue();
      queue.should.be.an.instanceOf(Queue);
      // aka, `queue instanceof Queue` is returning false, but it should be true!
    });
    it('should return different instances each time its called using the `new` keyword', function(){
      var queue1 = new Queue();
      var queue2 = new Queue();
      queue1.should.not.be.equal(queue2);
      // aka, queue1 === queue2 but they should be two different queue instances!
    });
  });

  describe('#enqueue', function(){
    it('should exist', function(){
      var queue = new Queue();
      should.exist(queue.enqueue);
      // queue instances should have a `enqueue` method
    });
    it('should add an item to the queue', function(){
      var queue = new Queue();
      queue.enqueue('a');
      /**
        * queue.size() should be 1 since we only added one item, but your
        * queue.size() function is returning somethine different. this could
        * be a problem with your `size` function or your `enqueue` function.
        */
      queue.size().should.equal(1);
    });
    it('should add two items to the queue', function(){
      var queue = new Queue();
      queue.enqueue('a');
      queue.enqueue('b');
      /**
        * we just added two items so the queue size should be 2 but your
        * `size()` function is returning something different
        */
      queue.size().should.be.equal(2);
    });
  });

  describe('#dequeue', function(){
    it('should exist', function(){
      var queue = new Queue();
      should.exist(queue.dequeue);
      // queue instances should have a `dequeue` method
    });
    it('should remove an item from the queue', function(){
      var queue = new Queue();
      queue.enqueue('a');
      var item = queue.dequeue();
      // `dequeue()` should return the item that was just dequeued
      should.exist(item);
      item.should.be.equal('a');
      // queue.size() should be 0 since we just tried to add, then removed an,
      // an item from the queue.
      queue.size().should.equal(0);
    });
    it('should be able to remove two items from the queue', function(){
      var queue = new Queue();
      queue.enqueue('y');
      queue.enqueue('z');
      queue.dequeue();
      queue.dequeue();
      /**
        * queue.size() should be 0 since we just tried to add then remove two
        * items from the queue
        */
      queue.size().should.equal(0);
    });
    it('should be able to alternate with enqueuing', function(){
      var queue = new Queue();
      queue.enqueue('1');
      queue.enqueue('2');
      var item = queue.dequeue();
      item.should.equal('1');
      queue.enqueue('3');
      item = queue.dequeue();
      item.should.equal('2');
    });
    it('should dequeue items in the order they were enqueued', function(){
      var queue = new Queue();
      queue.enqueue('1');
      queue.enqueue('2');
      var item = queue.dequeue();

      // aka, `dequeue()` should return the item that was just dequeued
      should.exist(item);
      // aka, the item just dequeued should be the first item we added
      item.should.equal('1');
      item = queue.dequeue();
      // aka, the item dequeued after the first should be the second
      // item we added
      item.should.equal('2');
    });
  });
});
