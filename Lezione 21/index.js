const elementBall = document.getElementById("ball");
elementBall.style.top = "0px";
elementBall.style.left = "0px";

let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let ballWidth = elementBall.offsetWidth;
let ballHeight = elementBall.offsetHeight;

let speed = 10;

function hadleKeyDown(event){
    let xPos = elementBall.offsetLeft;
    let yPos = elementBall.offsetTop;
    let xPosNew = 0;
    let yPosNew = 0;
    console.log(event.key);
    switch(event.key){
        case "ArrowUp":
            yPosNew = yPos - speed;
            if(yPosNew >= 0){
                elementBall.style.top = yPosNew + "px";
            }
            break;
        case "ArrowDown":
            yPosNew = yPos + speed;
            if(yPosNew <= screenHeight - ballHeight){
                elementBall.style.top = yPosNew + "px";
            }
            break;
        case "ArrowRight":
            xPosNew = xPos + speed;
            if(xPosNew <= screenWidth - ballWidth){
                elementBall.style.left = xPosNew + "px";
            }
            break;
        case "ArrowLeft":
            xPosNew = xPos - speed;
            if(xPosNew >= 0){
                elementBall.style.left = xPosNew + "px";
            }
            break;
    }
}

setInterval(()=>{
    window.addEventListener("keydown", hadleKeyDown);
}, 10)
