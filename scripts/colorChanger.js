let countobject = document.getElementById("counter");
let counter = countobject.innerHTML;


// BUTTONS
document.getElementById("decrement").addEventListener("click", function(){
    document.getElementById("counter").innerHTML = --counter;
    reColor();
})

document.getElementById("increment").addEventListener("click", function(){
    document.getElementById("counter").innerHTML = ++counter;
    reColor();
})



/*
GROEN: 0-35
ORANJE: 35-49
ROOD: 50+
*/

let redcircle = document.getElementById("red");
let orangecircle = document.getElementById("orange");
let greencircle = document.getElementById("green");

// COLOR THE CIRCLES TO THE DEFAULT VALUE
reColor();




function reColor(){
    resetColors();
    if (counter <= 35){
        green.style.backgroundColor = "#5DD151";
    }else if(counter <= 49){
        orangecircle.style.backgroundColor = "#EF9938"
    }else{
        redcircle.style.backgroundColor = "#D15151";
    }
}


function resetColors(){
    green.style.backgroundColor = "#AAAAAA";
    redcircle.style.backgroundColor = "#AAAAAA";
    orangecircle.style.backgroundColor = "#AAAAAA";
}