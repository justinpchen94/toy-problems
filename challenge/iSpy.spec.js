var expect = chai.expect;

describe("The spy", function() {

  it("exists", function() {
    expect(spyOn).to.be.a('function');
  });

  it("returns a function", function() {
    expect(spyOn(function() {})).to.be.a('function');
  });

  it("has the appropriate additional methods", function() {
    expect(spyOn(function() {}).callCount).to.be.a('function');
    expect(spyOn(function() {}).wasCalledWith).to.be.a('function');
    expect(spyOn(function() {}).returned).to.be.a('function');
  });

  it("returns the appropriate callCount", function() {
    var spy = spyOn(function() {});
    
    expect(spy.callCount()).to.equal(0);
    
    spy();
    expect(spy.callCount()).to.equal(1);

    for (var i = 0; i < 99; i++) {
      spy();
    }
    expect(spy.callCount()).to.equal(100);

  });

  it("functions as expected", function() {
    var spy = spyOn(function(str) {
      return str + ' eggs';
    });

    expect(spy('scrambled')).to.equal('scrambled eggs');
  });

  it("stores single arguments accordingly", function() {
    var spy = spyOn(function(str) {
      return str + ' world';
    });

    spy('hello');

    expect(spy.wasCalledWith('hello')).to.be.true;
    expect(spy.wasCalledWith('nope')).to.be.false;
  });

  it("stores return values for single arguments accordingly", function() {
    var spy = spyOn(function (str) {
      return str + ' dog';
    });

    spy('good');

    expect(spy.returned('good dog')).to.be.true;
    expect(spy.returned('yo')).to.be.false;
  });

  it("works with an arbitrary number of arguments", function() {
    var spy = spyOn(function(a, b, c) {
      return a + ' ' + b + ' ' + c;
    });

    spy('hello', 'world', 'diggins');
    expect(spy.wasCalledWith('hello')).to.be.true;
    expect(spy.wasCalledWith('world')).to.be.true;
    expect(spy.wasCalledWith('diggins')).to.be.true;
    expect(spy.returned('hello')).to.be.false;
    expect(spy.returned('world')).to.be.false;
    expect(spy.returned('diggins')).to.be.false;
    expect(spy.returned('hello world diggins')).to.be.true;
  });
});
