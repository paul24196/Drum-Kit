
for (i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var button= this.innerHTML;
  makeSound(button);
  ani(button);
  // console.log(button);

});
}

document.addEventListener("keydown",function(event){
  makeSound(event.key);
  ani(event.key);
  // console.log(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
          var audio1 = new Audio('sounds/tom-1.mp3');
          audio1.play();
      break;

      case "a":
          var audio1 = new Audio('sounds/tom-2.mp3');
          audio1.play();
      break
      case "s":
          var audio2 = new Audio('sounds/tom-3.mp3');
          audio2.play();
      break;

      case "d":
          var audio3 = new Audio('sounds/tom-4.mp3');
          audio3.play();
      break;

      case "j":
          var audio4 = new Audio('sounds/snare.mp3');
          audio4.play();
      break;

      case "k":
          var audio5 = new Audio('sounds/kick-bass.mp3');
          audio5.play();
      break;

      case "l":
            var audio6 = new Audio('sounds/crash.mp3');
            audio6.play();
      break;
    default: console.log(key);
  }
}

function ani(curkey){
  var abutton = document.querySelector("."+ curkey);
  abutton.classList.add("pressed");
  setTimeout(function(){
    abutton.classList.remove("pressed");
  }, 150);
}
