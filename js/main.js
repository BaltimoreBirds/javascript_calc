function guessColor(actualResult, userGuess){
  if(actualResult === userGuess){
    return 'green'
  }
  else{
    return 'red'
  }
};


$('#calculator').on('submit', function(e){
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
    var sum = (firstNumber+secondNumber);

    $resultEl.html("the sum is: " + (sum));
    if(userGuess === sum){
      $guessResult.css({"background-color": 'green'});
      $guessResult.html(userGuess + ' is Right!').css(
        {'background-color': guessColor(sum,userGuess)});
    }
    else{
      $guessResult.html(userGuess + ' is Wrong!').css(
        {'background-color': guessColor(sum, userGuess)});
    }



  }
  else{
    $errorDiv.html("Please provide valid input");
  }

});
