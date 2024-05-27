let buttons = document.querySelectorAll(".drum"); // drum just as to be in the name of the class
let drum1 = new Audio("sounds/tom-1.mp3");
let drum2 = new Audio("sounds/tom-2.mp3");
let drum3 = new Audio("sounds/tom-3.mp3");
let drum4 = new Audio("sounds/tom-4.mp3");
let crash = new Audio("sounds/crash.mp3");
let kick_bass = new Audio("sounds/kick-bass.mp3");
let snare = new Audio("sounds/snare.mp3");


// Play different sound depending on what was clicked
buttons.forEach(button => (
    button.addEventListener("click", function() {
        //console.log(button.innerHTML); // Alternative is to use 'this'
        makeSound(button.innerHTML);
        buttonAnimation(button.innerHTML);
    })
));

// Play different sound depending on what key was pressed
document.addEventListener("keypress", function(event) { // event is what happend (keypressed)
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(action) {
    switch (action) {
        case 'w':
            drum1.play();
            break;
        case 'a':
            drum2.play();
            break;
        case 's':
            drum3.play();
            break;
        case 'd':
            drum4.play();
            break;
        case 'j':
            crash.play();
            break;
        case 'k':
            snare.play();
            break;
        case 'l':
            kick_bass.play();
            break;
        default:
            break;
    }
}

// Animation for button press
function buttonAnimation(key) {
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed"); // Adding the class 'pressed' to this button

    // Do this after 100 milliseconds
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}