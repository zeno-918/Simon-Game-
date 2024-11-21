var buttonClors = ["red", "green", "blue", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("level - " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playanSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("level-" + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonClors[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  $;
}

function playanSound(names) {
  var audio = new Audio("sounds/" + names + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnwer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
