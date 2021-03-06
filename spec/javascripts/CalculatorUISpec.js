describe("Calculator UI", function() {

  it("disables the button", function() {
    // Mimic the HTML controls that we need
    var html = '<input id="number1" value=""/> ' +
           '<input id="number2" value=""/> ' +
           '<input id="theButton"/> ' +
           '<span id="resultGoesHere"/>';
    setFixtures(html);
    // Execute our JavaScript code
    Calculator.toggleButton();
    // Make sure the result is what we expect
    expect($("#theButton")).toBeDisabled();
  });

  it("enables the button", function() {
    var html = '<input id="number1" value="2"/> ' +
           '<input id="number2" value="4"/> ' +
           '<input id="theButton" disabled="true"/> ' +
           '<span id="resultGoesHere"/>';
    setFixtures(html);

    Calculator.toggleButton();
    expect($("#theButton")).not.toBeDisabled();
  });

  it("updates the UI with the result", function() {
    var html = '<input id="number1" value="4"/> ' +
           '<input id="number2" value="3"/> ' +
           '<span id="resultGoesHere"/>';
    setFixtures(html);

    Calculator.updateUI();
    var result = $("#resultGoesHere");
    expect(result.text()).toEqual("7");
  });

});
