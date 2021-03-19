document.addEventListener("DOMContentLoaded", () => {
    

    let gameOver = false;
    let score = 0;
    let speed;
    if(score == 0) {(speed = 9000/60)} else if (score == 2){score = 6000/60}; // 500ms intervals of the snake updating
    let move = 3; // move shows the direction of the snake left, right, up or down. 3 stands for right
    const cF = [].slice.call(document.getElementById('snakeContainer').children); // create an HTML Collection of the 400 Divs to access them via index, like in an array
    let fruit = Math.round(Math.random()*399); // random number for ther fruit to appear
    console.log(fruit);
    let ar = [105, 106, 107, 108, 109, 110, 111, 112, 113, 114]; // build an array for the snake
    let gOar = [22,23,27,30,34,36,37,38,41,46,48,50,51,53,54,56,61,66,67,68,70,72,74,76,77,81,84,86,88,90,92,94,96,102,103,104,106,108,110,114,116,117,118,183,184,187,189,191,192,193,195,196,202,205,207,209,211,215,217,222,225,227,229,231,232,235,237,242,245,247,249,251,255,256,262,265,267,269,271,275,277,283,284,288,291,292,293,295,297];
    let gOs = [361,362,343,324,325,346,367,368,369,370,371,372,373,374,375,376,377,378];
    let gOsE = [357];
    /*
    if(cF[ar.classLost] == undefined){
        for(let i = 0; i<gOar.length; i++){
            cF[gOar[i]].classList.add("gameOver");
        }
    }
    */

    function mRight(){
        ar.push((ar[ar.length -1]) +1);
        var z = ar.shift();
        cF[z].classList.remove("snake")
    console.log(ar)
    move = 3;
    }

    function mDown(){
        ar.push((ar[ar.length -1])+20);
        var z = ar.shift();
        cF[z].classList.remove("snake")
        move = 4;
        console.log(ar);
    }

    function mUp(){
        ar.push((ar[ar.length -1])-20); // append a new element to the snake array one square above the current square
        var z = ar.shift(); // save the first element of the snake array in a variable, delete it from the array and get rid of the color
        cF[z].classList.remove("snake") // remove class snake to decolor the square
        move = 2; //tell the snake to move up
        console.log(ar);
    }

    function mLeft(){
        ar.push((ar[ar.length -1]) -1);
        var z = ar.shift();
        cF[z].classList.remove("snake")
        console.log(ar)
        move = 1;
    }
     
    function drawSnake(){
        if(ar[ar.length-1] === fruit){
            console.log("FRUIT");
            score += 100;
            ar.push(fruit);
            cF[ar[ar.length-1]].classList.remove("fruit")
            fruit = Math.round(Math.random()*399);
            console.log("SPEED IS " + speed)
            return ar, score;
        } else {cF[fruit].classList.add("fruit");}
        for(let i = 0; i<ar.length; i++){
            cF[ar[i]].classList.add("snake");
        }
    }
    
    window.addEventListener("keydown", whichKey);
    function whichKey(e){
        if(e.keyCode === 37){
            mLeft();
        } else if(e.keyCode === 38){
            mUp();
        } else if(e.keyCode === 39){
            mRight();
        } else if(e.keyCode === 40){
            mDown();
        }
        
    }

    window.setInterval(() => {

        
        console.log("SCORE IS NOW " + score)

        drawSnake();
        if(move===1){
            mLeft();
        } else if(move ===2){
            mUp();
        } else if(move===3){
            mRight();
        } else if(move===4){
            mDown();
        }
 
    }, speed);
        
})
