$(document).ready(function(){


  $('form').on('click', '#guessButton', function(event) {
    event.preventDefault();
   	var submitNumber = $('#userGuess').val();
    var lastGuess = Number($('#guessList > li').last().text());
    testInput(submitNumber);
    if (lastGuess == 0) {}
    else if ((Math.abs(submitNumber - randomNumber)) > (Math.abs(lastGuess - randomNumber))) {
      $('#feedback').append("....Getting Colder");
    }
    else {
      $('#feedback').append("...Getting Warmer");
    }


  });

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $(".new").click(function(){
     window.location.reload(true);
    });

});

/*--- Creat Random Number ---*/
  var randomAnswer = Math.floor((Math.random() * 100) + 1);


/*--- Function to Add User's Guesses to Running List ---*/
function addNumber(){
  $('#guessList').append('<li>'+$('#userGuess').last().val()+'</li>');
  $('#userGuess').val(" ");
  console.log(randomAnswer);
};


/*--- Function to Count Number of User's guesses---*/
function counter(){
  $('#count').text($('#guessList > li').length);
};


/*--- Function to Compare User's Guess to Random Number---*/
function compare (num){
  if (num == randomAnswer) {
    $('#feedback').text("Congratulations...You Won in " + $('#guessList > li').length + " Guesses!");
  }
  else if (Math.abs(randomAnswer - num) > 50) {
    $('#feedback').text("Ice Cold...Try Again");
  }
   else if (Math.abs(randomAnswer - num) > 30) {
    $('#feedback').text("Cold...Try Again");
  }
  else if (Math.abs(randomAnswer - num) > 20) {
    $('#feedback').text("Warm...Try Again");
  }
  else if (Math.abs(randomAnswer - num) > 10) {
    $('#feedback').text("Hot...Try Again");
  }
  else {
    $('#feedback').text("Very Hot...Try Again");
  }
};


function testInput (numInput) {
    if (numInput > 100) {
      $('#feedback').text("Guesses Shall be between 1 - 100");
    }
    else if (numInput < 1) {
      $('#feedback').text("Guesses Shall be between 1 - 100");
    }
    else if (isNaN(numInput)) {
      $('#feedback').text("Guesses Shall be a Number");
    }
    else {
      addNumber();
      counter();
      compare(numInput);
    }
  };

