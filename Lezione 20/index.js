const elementball = document.getElementById("ball");

// Assegnare posizione palla
elementball.style.left = "0px";

// Predere dimensione schermo 
const screenWidth = window.innerWidth;

// Posiozione attuale della pallina (asse X)
const ballPosition = elementball.offsetLeft;

// Assegnare nuova posizione alla pallina 
elementball.style.left = elementball.offsetLeft + 10 + "px";

// Larghezza della pallina 
const ballWidth = elementball.offsetWidth;

let velocity = 10;

// Loop chiamato a ogni frame (il secondo parametro dice a ogni quanti millisecondi chiamare la funzione)
setInterval(()=>{

    elementball.style.left = elementball.offsetLeft + velocity + "px";

    if (elementball.offsetLeft > screenWidth - ballWidth || elementball.offsetLeft == 0){
        velocity = -velocity
    }
    

}, 10);


