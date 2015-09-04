describe("Calculator", function() {

  var calculator;
  beforeEach(function() {
    calculator = new Calculator();
  });

  it("adds two numbers", function() {
    expect(calculator.addNumbers(4,5)).toEqual(9);
  });

});


describe("Calculator UI", function() {

  var calculator;
  beforeEach(function() {
    // Mimic the HTML controls that we need
    html = '<input id="number1" value="4"/> ' +
           '<input id="number2" value="3"/> ' +
           '<span id="resultGoesHere"/>';
    setFixtures(html);
    // Execute the JavaScript
    calculator = new Calculator();
    calculator.calculateResult();
  });

  it("updates the UI with the result", function() {
    result = $("#resultGoesHere");
    expect(result.text()).toEqual("7");
  });

});
