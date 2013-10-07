function guessColor(actualResult, userGuess){
  if(actualResult === userGuess){
    return 'green';
  }
  else{
    return 'red';
  }
};

function addNumbers(firstNumber, secondNumber){
  return firstNumber + secondNumber;
};

function subtractNumbers(firstNumber, secondNumber){
  return firstNumber - secondNumber;
};

function  multiplyNumbers(firstNumber, secondNumber){
  return firstNumber * secondNumber;
};
function divideNumbers(firstNumber, secondNumber){
  return firstNumber / secondNumber;
};
function performOp(firstNumber, secondNumber, operation){
  var opMap = {
    "+": addNumbers,
    "-": subtractNumbers,
    "x": multiplyNumbers,
    "/": divideNumbers
  }
  return opMap[operation](firstNumber, secondNumber)
};

$('#calculator input[type="submit"]').on('click', function(e){
  e.preventDefault();

  var firstNumber = $('#first-number').val();
  var secondNumber = $('#second-number').val();
  var userGuess = $('#user-guess').val();


  var $errorDiv = $('div.errors');
  var $resultEl = $('#result');
  var $guessResult = $('#guess-result');

  $errorDiv.html("");
  $resultEl.html(" ");

  if(firstNumber !== "" && secondNumber !== ""){
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);
    userGuess = parseInt(userGuess);
    var result = performOp(firstNumber, secondNumber, $(e.currentTarget).val());


    $resultEl.html("the sum is: " + (result));
    if(userGuess === result){
      $guessResult.css({"background-color": 'green'});
      $guessResult.html(userGuess + ' is Right!').css(
        {'background-color': guessColor(result,userGuess)});
    }
    else{
      $guessResult.html(userGuess + ' is Wrong!').css(
        {'background-color': guessColor(result, userGuess)});
    }



  }
  else{
    $errorDiv.html("Please provide valid input");
  }

});
