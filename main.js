
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
        snakeArray.push(snakeField[207, 208, 209,210]);
        snakeField[202].classList.add("snake");snakeField[203].classList.add("snake");snakeField[204].classList.add("snake");snakeField[205].classList.add("snake");snakeField[206].classList.add("snake");snakeField[207].classList.add("snake");snakeField[208].classList.add("snake");snakeField[209].classList.add("snake");
        
    }


    var randomNumber = createRandomNumber(3);

    function createRandomNumber(x){
        return Math.round(Math.random()*x+1);
    }

class CoordinateField{
    constructor(){
        //// A row
        this.A1 = snakeField[0] || 0;
        this.A2 = snakeField[1] || 0;
        this.A3 = snakeField[2] || 0;
        this.A4 = snakeField[3] || 0;
        this.A5 = snakeField[4] || 0;
        this.A6 = snakeField[5] || 0;
        this.A7 = snakeField[6] || 0;
        this.A8 = snakeField[7] || 0;
        this.A9 = snakeField[8] || 0;
        this.A10 = snakeField[9] || 0;
        //// B row
        this.B1 = snakeField[10] || 0;
        this.B2 = snakeField[11] || 0;
        this.B3 = snakeField[12] || 0;
        this.B4 = snakeField[13] || 0;
        this.B5 = snakeField[14] || 0;
        this.B6 = snakeField[15] || 0;
        this.B7 = snakeField[16] || 0;
        this.B8 = snakeField[17] || 0;
        this.B9 = snakeField[18] || 0;
        this.B10 = snakeField[19] || 0;
        //// C row
        this.C1 = snakeField[20] || 0;
        this.C2 = snakeField[21] || 0;
        this.C3 = snakeField[22] || 0;
        this.C4 = snakeField[23] || 0;
        this.C5 = snakeField[24] || 0;
        this.C6 = snakeField[25] || 0;
        this.C7 = snakeField[26] || 0;
        this.C8 = snakeField[27] || 0;
        this.C9 = snakeField[28] || 0;
        this.C10 = snakeField[29] || 0;
    }

    turnBlack(x){
        this.x.classList.add("snake");
    }

    turnGrey(x){
        this.x.classList.remove("snake");
    }
}

var field = new CoordinateField(); 

class Snake{
    constructor(x){
        this.where = x;
    }

}

var snake1 = new Snake(field.A2);
console.log(snake1.where);
console.log("Coordinate Field, field = " + field.A2)
console.log("B5, C3" + field.B5 + ", " + field.C3)
field.B5.classList.add("snake")
console.log("Die this work?" + field.turnBlack(field.B5));

    
});