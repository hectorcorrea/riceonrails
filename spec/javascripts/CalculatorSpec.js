describe("Calculator", function() {

  var calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });

  it("adds two numbers", function() {
    expect(calculator.addNumbers(4,5)).toEqual(9);
  });

});
