function Calculator() {}

Calculator.prototype.sayHello = function() {
  $("#resultGoesHere").text("hello");
};

// A plain JavaScript function
Calculator.prototype.addNumbers = function(a, b) {
  return a + b;
}

// A JavaScript function that access the DOM (via jQuery)
Calculator.prototype.calculateResult = function() {
  var a = parseInt($("#number1").val(), 10);
  var b = parseInt($("#number2").val(), 10);
  var result = this.addNumbers(a, b);
  $("#resultGoesHere").text(result);
}


