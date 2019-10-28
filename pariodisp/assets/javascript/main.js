//L’utente sceglie pari o dispari e un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer.
//Sommiamo i due numeri e dichiariamo chi ha vinto.


//utente sceglie numero da 1 a 5
var usernum = parseInt(prompt("Scegli un numero da 1 a 5"));

var parodisp = prompt("Ora scegli pari o dispari");

console.log(usernum);

//pc genera un numero da 1 a 5
var pcnum = Math.floor(Math.random() * 5 + 1);

console.log(pcnum);

var result =  document.getElementById("risultato");

//funzione che calcola il risultato
risultato();

function risultato() {

    somma = usernum + pcnum;
    
    console.log(somma);

    pari = false

     if (somma % 2 === 0){

        pari = true;

         console.log("il numero è " + somma + ", quindi è pari");

     } else {

        pari = false;

        console.log("il numero è " + somma + ", quindi è dispari");
        
    } 
    
}

//dichiaro in pagina se l'utente ha vinto
 if (pari == true && parodisp === "pari" ){

    result.innerHTML = "La somma dei numeri è: " + somma + " quindi è pari. Hai vinto!" 

    console.log("hai vinto!");
    
 }  else if (pari == false && parodisp === "pari"){

    result.innerHTML = "La somma dei numeri è: " + somma + " quindi è dispari. Hai perso!" 

    console.log("hai perso!");

 } else if (pari == false && parodisp === "dispari"){

    result.innerHTML = "La somma dei numeri è: " + somma + " quindi è dispari. Hai vinto!" 

    console.log("hai vinto!");
 
 } else if (pari == true && parodisp === "dispari"){

    result.innerHTML = "La somma dei numeri è: " + somma + " quindi è pari. Hai perso!" 

    console.log("hai perso!");

 }
