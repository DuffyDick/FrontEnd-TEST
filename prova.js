"use strict" //indica al compilatore di dare errore se le variabili non vengono inzializzate
var a = "pippo"; //con var non si dichiara il tipo della variabile, che potra' cambiare di volta in volta
console.log("topolino e " + a); //concatena due stringhe

//Utilizzo dell'operatore ++
var x = 3;
var y = ++x; //Prima viene incrementato x, poi viene assegnato ad y, che risulta essere 4

var x = 3;
var y = x++; //Prima si assegna il valore di x ad y, poi si incrementa x. Avremo quindi y=3 e x=4


//Operatori relazionali
//Restituiscono sempre un valore booleano, true o false
4 > 2 //true
5 != 4+1 //false
//NB esistono "===" e "=="che significano rispettivamente strettamente uguale e strettamente diverso 


//Operatore ? per le condizioni 
//restituisce un valore in base ad una espressione booleana
condizione ? valore1 : valore2
//Se condizione e' vera viene restituito valore1, altrimenti valore2


//Operatori su stringhe
//Il simbolo + concatena 2 stringhe 

"piano" + "forte" //pianoforte

//Funziona anche nella forma
var strumento = "piano";
strumento += "forte"; //strumento = pianoforte