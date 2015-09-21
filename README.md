## Getting started with Jasmine and Ruby on Rails

This repository contains a bare-bones Ruby on Rails application to show how to use Jasmine to test JavaScript on a Rails application.

The application is an empty Rails application with one controller and one very simple view (`app/views/calculator/index.html.erb`) This view uses JavaScript to calculate the sum of two numbers and update the result on the page (`app/assets/javascript/calculator.js`.) All of this is very typical Rails code with a little bit of JavaScript.

The Jasmine part is in the tests. File `spec/javascripts/CalculatorSpec.js` contains one that shows how to test a plain vanilla JavaScript function that adds two numbers. File `spec/javascripts/CalculatorUISpec.js` contains a few tests that show how to test JavaScript functions that depend on elements on the DOM and jQuery.

These tests are very simple, but they should give you an idea on how tests are structured and some of the matchers available to validate that the value that you expect is the value that you get when Jasmine executes your JavaScript code. If you are familiar with RSpec this syntax should be familiar to you.


## To use this repo

    git clone git@github.com:hectorcorrea/riceonrails.git
    cd riceonrails
    bundle install
    bundle exec rails server

Go to http://localhost:3000 and you should see a web page with the lamest calculator in the entire world wide web. Enter two numbers, click the button, and see the result.


## The Code
These are the main pieces of code that you want to look at:

  * app/views/calculator/index.html.erb The sample view
  * app/assets/javascript/calculator.js The JavaScript used on the view
  * spec/javascripts/CalculatorSpec.js The Jasmine tests for a plain vanilla JavaScript function.
  * spec/javascripts/CalculatorUISpec.js The Jasmine tests that access the DOM via JavaScript.


## To run the Jasmine tests

    bundle exec rake jasmine:ci

On a successful run you should see an output similar to this (notice the 2 specs, 0 failures line.):

    [2015-09-04 15:41:20] INFO  WEBrick 1.3.1
    [2015-09-04 15:41:20] INFO  ruby 2.2.2 (2015-04-13) [x86_64-darwin14]
    [2015-09-04 15:41:20] INFO  WEBrick::HTTPServer#start: pid=37501 port=58265
    Waiting for jasmine server on 58265...
    jasmine server started
    .......
    2 specs, 0 failures
    [2015-09-04 15:41:22] INFO  going to shutdown ...
    [2015-09-04 15:41:22] INFO  WEBrick::HTTPServer#start done.

You can update the code to force one the tests to fail. For example, update the code in `app/assets/javascripts/calculator.js` to always return `99` on the `addNumbers()` function and re-run `bundle exec rake jasmine:ci`. This time you should see a couple of test fail with the proper error.


## Dependencies

Beside Rails, this repository depends on a few other gems. The `jasmine` gem is pretty obvious since it is listed on the Gemfile. However, there is also `jasmine-jquery` which is a JavaScript file under `spec/javascripts/helpers/jasmine-jquery.js`. All of these files are already configured and ready to be used once you've executed `bundle install` Below are links on where to find more about them.

  * https://github.com/jasmine/jasmine
  * https://github.com/jasmine/jasmine-gem
  * https://github.com/velesin/jasmine-jquery



