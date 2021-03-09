
document.addEventListener("DOMContentLoaded", () => {

    var snakeField = document.getElementById("snakeContainer").children;
    var startButton = document.getElementById("start");
    var snakeArray = [];
    var isInitiated = false;

    startButton.addEventListener("mousedown", () => {

        if (!isInitiated) {initiateSnake(); isInitiated = true; console.log("Initiated");} 
        else if (isInitiated) {console.log("Already initiated!!!!!!"); startButton.disabled = "true";}
        
    })

    function initiateSnake(){
        snakeArray.push(snakeField[209]);
        snakeField[209].classList.add("snake");
    }


    var randomNumber = createRandomNumber(3);

    function createRandomNumber(x){
        return Math.round(Math.random()*x+1);
    }
});