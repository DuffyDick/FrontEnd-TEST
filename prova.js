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

//L'operatore polimorfo + opera sempre come concatenazione di tringhe se uno degli operandi e' una stringa
var x = "13"
var y = x + 12 //converte il 12 nella stringa "12" , quindi y sara' "1312"

//In presenza di operatori relazionali >,<,>= e <= viene applicata la regola del: Se nessuno dei due operandi e' un numero, viene fatto il confronto tra stringhe

"12" > 10 //JS converte il 12 in numero ed effettua il confronto

true > null // JS converte in "true" > "null" 

//Per quanto riguarda invece != e == viene presa in considerazione la regola: Se entrambi gli operandi sono stringhe si fa il confronto tra stringhe, altrimenti tra numeri


//Operatori di uguaglianza stretta === e !==
//Confrontano gli operandi senza effettuare alcuna conversione
//Quindi due espressioni sono ugugali sono se sono dello stesso tipo ed hanno lo stesso valore

//Conversioni implicite

/* E' opportuno convertire esplicitamente i tipi se non si puo' evitare un confornto tra tipi diversi

Ad esempio parseInt() convere una stringa in un valore intero. Il secondo valore della funzione e' opzionale ed indica la base di conversione del numero
*/
parseInt("12"); //12
parseInt("12abc") //12
parseInt("a12bc") //NaN
parseInt("12.5") //12
parseInt("12", 8) //12 in base 8, cioe' 10

parseFloat("12.5") //12.5

//si puo' verificare il tipo di una variabile in qualsiasi momento con la funzione typeof

typeof 69 //restituisce la stringa "number"


var prova = new Function();
var numero = 1;
var carattere = "Salve";
console.log(typeof prova);     // ritorna "function"
console.log(typeof numero);    // ritorna "number"
console.log(typeof carattere); // ritorna "string"