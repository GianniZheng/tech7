
/*
// alert(2+2);

let numberOne = 2;
let numberTwo = 10;

// alert(numberOne + numberTwo);

numberOne = 4.2;

// alert(numberOne + numberTwo);

const pi = 3.14;

const username = "cicciogamer";
const listOfItems = ["latte","cioccolata","pane"];

alert(listOfItems);
console.log(listOfItems);


let array = [];

console.log("Tabellina del 2:");

for(let i = 0; i <= 10; i++){
    array[i] = i * 2;
}

array.forEach(element => {
    console.log(element);
});

const person =  {
    name: "ciccio",
    username: "paguro",
    hobby: "fortnite",
};

const numberOne = 5;
const numberTwo = 10;

const boolean = false;

console.log(numberOne + numberTwo);
console.log(numberOne - numberTwo);
console.log(numberOne * numberTwo);
console.log(numberOne / numberTwo);

if (numberOne == numberTwo){
    console.log("è uguale");
}

if (numberOne === boolean){
    console.log("si è uguale sono falsi");
}

const weather = "sunning";

if (weather === "sunning"){
    console.log("lascio l'ombrello a casa");
} else {
    console.log("porto l'ombrello");
}

if (weather === "sunning"){
    console.log("porto crema solare");
} else if (weather === "raining"){
    console.log("porto ombrello");
} else {
    console.log("esco normalmente");
}

if (numberOne < numberTwo){
    console.log("numero 1 maggiore di numero 2");
} else {
    console.log("numero 2 maggiore di numero 2");
}

const numberOne = Number(prompt("Inserisci il 1° numero:"));
const numberTwo = Number(prompt("Inserisci il 2° numero:"));
const questionThree = prompt("Inserisci quale operazione vuoi fare:");

let result;

if (questionThree.toLowerCase() === "somma"){
    result = numberOneOne + numberTwo;
} else if(questionThree.toLowerCase() === "sottrazione"){
    result = numberOne - numberTwo;
} else if(questionThree.toLowerCase() === "moltiplicazione"){
    result = numberOne * numberTwo;
} else if(questionThree.toLowerCase() === "divisione"){
    result = numberOne / numberTwo;
} else {
    result = "Error"
}

alert("il risultato dell'operazione che hai richiesto è: " + result);
console.log(result);

for (let index = 0; index < 10; index++){
    console.log(index);
}

let index = 0;
while (index < 10){
    console.log(index);
    index++;
}

const shoppingList = ["pane","acqua","latte","cioccolata","verdure"];

console.log(shoppingList[0]);
 
for (let index = 0; index < shoppingList.length; index++){
    console.log(shoppingList[index]);
}

const newItemList = prompt("Inserisci un prodotto che vuoi comprare");
shoppingList.push(newItemList);
console.log(shoppingList);

*/

let itemsName = [];
let itemsPrice = [];

for (let index = 0; index < 10; index++){
    itemsName[index] = prompt("Inserisci il nome del prodotto che vuoi comprare: ");
    itemsPrice[index] = Number(prompt("Inserisci il prezzo del prodotto scelto: "));
}

console.log("Eccoti la tua lista della spesa:");

for (let out = 0; out < itemsName.length; out++){
    console.log(itemsName[out] + ": " + itemsPrice[out] + "€");
}