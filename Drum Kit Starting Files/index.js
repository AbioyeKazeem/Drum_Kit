// Add eventlistener to a single button
// document.querySelector('button').addEventListener('click', handleClick);
// function handleClick(){
//     alert('i got clicked');
// }


// OR

// you can use anonymous function
// document.querySelector('button').addEventListener('click', function(){
//     alert('i got clicked');
// } );



// Add eventlistener to multiple buttons
// var numberofDrumButton = document.querySelectorAll(".drum").length;
// for(var i = 0; i<numberofDrumButton; i++){
//     document.querySelectorAll('.drum')[i].addEventListener('click',function() {
//         //alert('i got clicked');
//         var audio = new Audio('./sounds/tom-1.mp3');
//         audio.play();
//     })
// }

                 // OR 

// -- code part for detecting button press -- //
// Add Eventlistener to multiple buttons
var btns = document.querySelectorAll('button');
 for ( var i of btns){
    i.addEventListener('click', sound)
 }
 function sound(){
   // alert('I got clicked'); for initial testing 
   var buttonInnerHTML = this.innerHTML;
   makeSound(buttonInnerHTML);
   // passing animation when button is clicked
   buttonAnimation(buttonInnerHTML);
   this.style.color='white';   // setting the html tag color to white
   
   // var buttonInnerHTML = this.innerHTML;
  // console.log(this.innerHTML);
} 



// -- Code part for detecting keyboard press --//
// adding event listener to keyboard
document.addEventListener('keypress', function(event){
// alert('Key was pressed'); for testing without adding event
//console.log(event); for testing after adding event
  makeSound(event.key)



  // passing animation function when keyboard is pressed
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case 'w':
        var audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
      break;

      case 'a':
        var audio = new Audio('./sounds/tom-2.mp3');
        audio.play();
      break;

      case 's':
        var audio = new Audio('./sounds/tom-3.mp3');
        audio.play();
        break;

      case 'd':
        var audio = new Audio('./sounds/tom-4.mp3');
        audio.play();
        break;

      case 'j':
        var audio = new Audio('./sounds/snare.mp3');
        audio.play();
        break;

       case 'k':
        var audio = new Audio('./sounds/crash.mp3');
        audio.play();
        break;

        case 'l':
          var audio = new Audio('./sounds/kick-bass.mp3');
          audio.play();
          break;
    default: console.log(key);   
   }
}
 

// function for adding animation
function buttonAnimation(currentKey){
var activeButton = document.querySelector('.' + currentKey);

// this part add a classlist pressed to the activeButton variable
activeButton.classList.add('pressed');


// function part which set a timeout for the pressed classlist added 
setTimeout( function(){
  activeButton.classList.remove('pressed')
}, 100)
}






