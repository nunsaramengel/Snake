document.addEventListener("DOMContentLoaded", () => {
    
    let speed = 400;
    let move = 3;
    const cF = [].slice.call(document.getElementById('snakeContainer').children);

    let ar = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

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
            move = 4;
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