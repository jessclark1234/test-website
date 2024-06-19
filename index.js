function myFunction() {
  alert("I am an alert box!");
}
function oneButton() {
  var button = document.querySelector("#button1");
  alert("Gotteeee");
  console.log('Gotteeeeee');
  return;
}
function getSpotify() {
  var spotifyBtn = document.getElementById('spotify')
}

function play() {
  var audio = new Audio(
    "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
  );
  alert("I am an alert box!");
  audio.play();
}

// function oneButton() {
//   var button = document.querySelector("#button1");
//   alert("Gotteeee");
//   console.log("goteeeee");
// }
// button.addEventListener("click", oneButton);

// oneButton();
// oneButton();
