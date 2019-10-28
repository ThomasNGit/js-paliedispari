//chiedi all'utente di inserire una parola e verifica se è palindroma

//creo un array vuoto in cui inserire la parola da controllare
var word = [];


//chiedo una parola all'utente e la pusho nell'array
var userword = prompt("Dimmi una parola!")

word.push(userword);

console.log(word);

function palindromo(){
    if (word.reverse == word){

        palindromo = "palindroma"
        
    }else {

        palindromo = "non palindroma"
        
    }
    return palindromo;
}

console.log("la parola è: " + palindromo);