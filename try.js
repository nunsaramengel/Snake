document.addEventListener("DOMContentLoaded", () => {
    
    let speed = 500;
    let move = 3;
    const cF = [].slice.call(document.getElementById('snakeContainer').children);
    let fruit = Math.round(Math.random()*399);
    console.log(fruit);
    let ar = [105, 106, 107, 108, 109, 110, 111, 112, 113, 114];
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
        ar.push((ar[ar.length -1])-20);
        var z = ar.shift();
        cF[z].classList.remove("snake")
        move = 2;
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
            ar.push(fruit);
            cF[ar[ar.length-1]].classList.remove("fruit")
            fruit = Math.round(Math.random()*399);
            speed -= 100;
            console.log("SPEED IS " + speed)
            return ar, speed;
        } else {cF[fruit].classList.add("fruit");}
        for(let i = 0; i<ar.length; i++){
            cF[ar[i]].classList.add("snake");
        }
    }
    
    window.addEventListener("keyup", whichKey);
    function whichKey(e){
        if(e.keyCode === 37){
            mLeft();
            console.log("left");
        } else if(e.keyCode === 38){
            mUp();
        } else if(e.keyCode === 39){
            mRight();
            console.log("right")
        } else if(e.keyCode === 40){
            mDown();
        }
        
    }

    window.setInterval(() => {

        


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