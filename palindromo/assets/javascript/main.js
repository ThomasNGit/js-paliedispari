//chiedi all'utente di inserire una parola e verifica se è palindroma



//chiediamo la parola all'utente e poi la splittiamo e la ricomponiamo al contrario
var parola = prompt("Dimmi una parola!");

console.log(parola);



//blocco funzioni
// function isPalindrome(){
//     if (parola === parola.split("").reverse("").join("")){

//         document.getElementById("risultato").innerHTML = "La parola " + parola + " è palindroma."

//         console.log("palindroma!");        

//     } else {

//         document.getElementById("risultato").innerHTML = "La parola " + parola + " non è palindroma."

//         console.log("non palindroma!");
        
//     }
// }

//svolgimento esercizio con ciclo for inverso
var parolaInversa = "";

for (i = parola.length -1; i >= 0; i--){
    
    parolaInversa += parola[i];

    console.log(parolaInversa);    
    
}

if (parolaInversa === parola){

    document.getElementById("risultato").innerHTML = "La parola " + parola + " è palindroma."

    console.log("sì");
    
} else {

    document.getElementById("risultato").innerHTML = "La parola " + parola + " non è palindroma."
    
    console.log("no");
    
}

