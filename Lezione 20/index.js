const elementball = document.getElementById("ball");

// Assegnare posizione palla
elementball.style.left = "0px";
elementball.style.top = "0px";

// Predere dimensione schermo 
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Posiozione attuale della pallina (asse X)
const ballPosition = elementball.offsetLeft;

// Assegnare nuova posizione alla pallina 
elementball.style.left = elementball.offsetLeft + 10 + "px";

// Larghezza e altezza della pallina 
const ballWidth = elementball.offsetWidth;
const ballHeight = elementball.offsetHeight;

let velocityWidth = 5;
let velocityHeight = 5;

// Loop chiamato a ogni frame (il secondo parametro dice a ogni quanti millisecondi chiamare la funzione)
setInterval(()=>{

    elementball.style.left = elementball.offsetLeft + velocityWidth + "px";
    elementball.style.top = elementball.offsetTop + velocityHeight + "px";

    if (elementball.offsetLeft > screenWidth - ballWidth || elementball.offsetLeft == 0){
        velocityWidth = -velocityWidth
    }
    
    if (elementball.offsetTop > screenHeight - ballHeight || elementball.offsetTop == 0){
        velocityHeight = -velocityHeight;
    }

}, 10);


