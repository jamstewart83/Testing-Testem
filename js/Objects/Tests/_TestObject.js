describe("Testing Testem", function() {
  var testObject = new TestObject();
  it("can have an instance of TestObject", function() {
    expect(testObject).not.toBe(undefined);
  });

  it("also has a function to say hello", function(){
    var message = "Hello";
    expect(testObject.sayMessage(message)).toBe("Hello");
  });

  it("also has a function to say goodbye", function(){
    var message = "Goodbye";
    expect(testObject.sayMessage(message)).toBe(message);
  });
});