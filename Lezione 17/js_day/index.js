/* 

alert("Hello world"); // messaggio utilizzato per spammare dai scammer

alert(year);

let result = 0;

const year = 2024;  // valore che rimane sempre uguale e deve avere sempre un valore

// Numeri
let result= 0;
const a = 10.25;   
const b = 20;

result = a + b;
console.log(result);

// String
const messageOne = "Hello";
const messageTwo = "World";
const message = messageOne + " " + messageTwo;
console.log(message);

// Boolean
const valueFalse = false;
const valueTrue = true;
const valueNumberFalse = 0;
const valueNumberTrue = 1;

console.log(valueFalse);
console.log(valueTrue);

// Array
const classRoom = ["Samir", "Matteo", "Gianni", "Alessio", "Bryan", "David", "Daniele", "Salvatore", "Giulia"];
const classRoomAge = [23, 18, 18, 18];
console.log(classRoom);
console.log(classRoomAge);

// Oggetto
const person = {
    firstName: "Samir",
    lastName: "Vimercati",
};

const classRoomObj = {
    samir: {
        firstName: "Samir",
        lastName: "Vimercati",
    },
};

// Calcoli + condizioni 
const a = 10;
const b = 20;
const sum = a + b;
const subtract = a - b;
const division = a / b;
const multiplication =  a * b;
const powerOf = 10 ** 2;
const remainder = 10 % 2;

console.log(sum);
console.log(subtract);
console.log(division);
console.log(multiplication);
console.log(powerOf);
console.log(remainder);

// Condizioni basiliari 
if (sum > 50){
    console.log("La somma è maggiore di 50");
}

if (sum < 50){
    console.log("La somma è minore di 50");
}

if (10 == 10){
    console.log("Il valore è uguale");
}

if (false === 0){ // Il 3° = serve per controllare anche la tipoogia oltre al valore
    console.log("HELLO WORLD");
}

if (10 !== 20){
    console.log("10 è diverso da 20");
}

// Condizione concatenata
const weather = "sunny";

if (weather === "sunny"){
    console.log("Il tempo oggi è bello");
} else if (weather === "rain"){
    console.log("Il tempo oggi è brutto");
} else {
    console.log("Il tempo è normale");
}

// Condiizone AND(&&) e OR(||)
const x = 10;

if (x > 5 && x < 20) {
    console.log("Condizione AND");
}

if (x > 5 || x < 8) {
    console.log("Condizione OR");
}

// Condizione FOR
for (let index = 0; index < 10; index++){
    console.log(index);
}

// Condizione WHILE
let j = 0;
while (j < 10){
    console.log(j);
    j++;
}
 */

// Condizione a scadenza con gli array
const classRoom = ["Samir", "Matteo", "Gianni", "Alessio", "Bryan", "David", "Daniele", "Salvatore", "Giulia"];

classRoom.forEach((person) => {
    console.log(person);
});

for (let i = 0; i < classRoom.length - 1; i++) {
    console.log(classRoom[i]);
}