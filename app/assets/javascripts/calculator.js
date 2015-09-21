function Calculator() {}

// A plain JavaScript function
Calculator.addNumbers = function(a, b) {
  return a + b;
}

// A JavaScript function that access the DOM (via jQuery)
Calculator.updateUI = function() {
  var a = parseInt($("#number1").val(), 10);
  var b = parseInt($("#number2").val(), 10);
  var result = Calculator.addNumbers(a, b);
  $("#resultGoesHere").text(result);
}

Calculator.toggleButton = function() {
  var disabled = $("#number1").val() == '' || $("#number2").val() == '';
  $("#theButton").prop("disabled", disabled);
};

Calculator.initializeUI = function() {
  $("#number1").val("");
  $("#number2").val("");
  Calculator.toggleButton();
  $("#number1, #number2").keyup(Calculator.toggleButton);
};

$(function() {
  Calculator.initializeUI();
});

