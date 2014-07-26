
$(document).ready(function(){

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

 /*click - submit guess*/
  $('form').on('click', '#guessButton', function(event) {
      event.preventDefault();
      var submitAnswer = $('#userGuess').val();
      var latestGuess = Number($('#guessList > li').last().text());
      input(submitAnswer);
        if (latestGuess == 0) {
        } else if ((Math.abs(submitAnswer - randomAnswer)) > (Math.abs(latestGuess - randomAnswer))) {
      }
  });
});

/*Game selects random number*/
var randomAnswer = Math.floor((Math.random() * 99) + 1);

/*add user's guesses to bottom of game*/
function addNumber(){
  $('#guessList').append('<li>'+$('#userGuess').last().val()+'</li>');
  $('#userGuess').val(" ");
};

/*Keeps track of guesses*/
function countEntries(){
  $('#count').text($('#guessList > li').length);
};

/*Response to user's guesses*/
function compare (userAnswer){
  if (userAnswer == randomAnswer) {
    $('#feedback').text("Congratulations! You got it in " + $('#guessList > li').length + " guesses!");
      $('h2').css('background-color', '#e10a0a');
        document.getElementById('userGuess').disabled = true;
        $('#guessButton').hide();
  } else if (Math.abs(randomAnswer - userAnswer) > 50) {
      $('#feedback').text("You're freezing, try again.");
  } else if (Math.abs(randomAnswer - userAnswer) > 30) {
      $('#feedback').text("You're cold, try again.");
  } else if (Math.abs(randomAnswer - userAnswer) > 20) {
      $('#feedback').text("You're warm, try again.");
  } else if (Math.abs(randomAnswer - userAnswer) > 10) {
      $('#feedback').text("You're getting hot, try again.");
  } else if (Math.abs(randomAnswer - userAnswer) > 5) {
      $('#feedback').text("You're red hot, try again.");
  } else {
      $('#feedback').text("You're burning up, you're so close, try again.");
  }
};

/*Response if user enters to high or low of number or letter*/
function input (wrongInput) {
    if (wrongInput > 100) {
        $('#feedback').text("You need to enter a number between 1 - 100.");
    } else if (wrongInput <= 0) {
        $('#feedback').text("You need to enter a number between 1 - 100.");
    } else if (isNaN(wrongInput)) {
        $('#feedback').text("You can only enter numbers.");
    } else {
        addNumber();
        countEntries();
        compare(wrongInput);
    }
  };

