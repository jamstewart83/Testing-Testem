describe("TestDOMObject", function() {
  var testObject = new TestDOMObject($("[data-plugin=domObject]"));

  it("can have an instance created", function() {
    expect(testObject).toBeDefined();
  });

  it("also has access to it's jQuery element", function(){
    expect(testObject.$ele).toBeDefined(); // ensure it's defined
    expect(testObject.$ele.length).toBeGreaterThan(0); // ensure you find one
  });

  it("also has the ability to fade out", function(){
    expect(testObject.fadeOut).toBeDefined();
    expect(testObject.fadeOut()).toEqual(testObject.$ele);
  });

  it("also has the ability to fade in", function(){
    expect(testObject.fadeIn).toBeDefined();
    expect(testObject.fadeIn()).toEqual(testObject.$ele);
  });

});