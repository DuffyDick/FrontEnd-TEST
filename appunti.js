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

//Array
var giorniDellaSettimana = ["lunedi", 
"martedi", 
"mercoledi",
"giovedi",
"venerdi",
"Sabato", 
"Domenica"];

//si accede normalmente agli elementi partendo da 0
var PrimoGiorno = giorniDellaSettimana[0];
var UltimoGiorno = giorniDellaSettimana[6];

//Un array puo' essere vuoto
var MyArray = []; //Array vuoto

//Si puo' lasciare una posizione indefinita con la virgola iniziale, mentre verra' ignorata la virgola finale

var MyArray = [, "elemento"]; //MyArray = [undefined,"elemento"]
var MyArray = ["elemento", "altroelemento",]; //l'ultima virgola verra' ignorata

//In JS possiamo avere array contenenti elementi di tipo differente
 var MyArray = [123, "Stringa", ["a", "b", 99]]; //ANCHE ALTRI ARRAY! PORCO DIO MA A CHE SERVE?

//In questo caso, per accedere ad esempio a 99 si scrive

var novantanove = MyArray[2][2];

//Esistono array multidimensionali

var matrice = [[24,13,1],[48,92,17],[8,56,11]];

//Per accedere al valore 48 si fara'

var quarantotto = matrice[1][0];

//Si ha la possibilita' di assegnare a piu' variabili i valori contenuti in un array (Destrutturazione)

var [PrimoGiorno,,TerzoGiorno,,,,UltimoGiorno]= giorniDellaSettimana;

//Ci sono le istruzioni condizionali if e switch
if(x >= 37) {
    messaggio = "Hai la febbre.\n";
    messaggio = messaggio + "Temperatura: " + x + " gradi";
}

//oppure if else
 if (x%2 == 0){
    messaggio = x + " e' pari";
 } else {
    messaggio = x + " e' dispari";
 }


 //Switch case
 switch(x%2) {
    case 0:
        messaggio = x + " e' pari";
        break;
    case 1:
        messaggio = x + " e' dispari";
        break;
    default:
        messaggio = x + " non e' un numero";
        break;
 }

 // Cicli While e Do - while

 var y = 1;
 var i = 1;
 while (i <= 4){
     y = y * i;
     i++;
 }


 do{
    //istruzioni
 }
 while(condizione)

 //Ciclo for

 for (inizializzazione; condizione; modifica){
     //istruzioni
 }

 var y = 1;
 var i;

 for (i = 1; i <= 4; i++){
     y = y * i;
 }

 //Esempio con gli array

 var quantita = [12,34,45,7,19];
 var totale = 0;
 var i;
 for (i = 0; i < 5; i++){
     totale += quantita[i];
 }

 //L'opzione for e' molto flessibile

var y;
var i;
for (i = 1, y = 1; i <=4; i++) { //doppia inizializzazione separata dalla virgola
	y = y * i;
}

var y = 1;
var i = 1;
for (; i <=4; i++) { //sezioni vuote
	y = y * i;
}

//For-in e For-of

var quantita = [12,34,45,7,19];
var totale = 0;
var indice;
for (indice in quantita){ //non abbiamo bisogno di specificare la dimensione e di aggiornare l'indice, assegna ed incrementa l'indice corrente alla variabile "indice" per ogni nuova iterazione
    totale += quantita[indice];
}

var quantita = [12,34,45,7,19];
var totale = 0;
var valore;
for (valore of quantita) { //ad ogni iterazione assegna alla variabile "valore" il contenuto di ciascun elemento dell'array
    totale += valore;
}

//cicli infiniti

while(true){
    //istruzioni
}


//Utilizzo del break

var x=0;
while (true) {
	console.log(x);
	// condizione di uscita
	if (x > 100) break;
    x++;
}


//Utilizzo del continue per skippare delle iterazioni

var x = 0;
while (x < 10) {
	x++;
	if (x > 3) continue;
	// se x è maggiore di 3, questa istruzione non viene più eseguita
    console.log(x);
    

//Funzioni in JS
function nome(argomenti){
    //istruzioni
}

//la sua invocazione verra' invocata con
nome(valori);

//l'istruzione return termina il codice di una funzione e ne restituisce il valore al codice chiamante 

//Esempio di funzione e chiamata di funzione
function somma(){
    var z = 11+5;
    return z;
}

var risultato = somma();
//oppure 
var risultato = 5 + somma() * 2;//viene trattata come un qualunque valore numerico

//Esempio di funzione con argomenti
function somma(x,y){
    var z = x + y;
    return z;
}

var risultato = somma(3,5); //risultato = 8

//Funzioni con parametri opzionali

var risultato1 = somma(11); //Aggiunge parametro mancante undefined
var risultato2 = somma(); //Entrambi aggiunti undefined
var risultato3 = somma(11, 5, 7, 9); //ignora 7 e 9 

//In tutti i casi, js non restituisce alcun errore


//Array arguments
//Possiamo prendere un numero indefinito di parametri tramite uno specifico array chiamato arguments

function somma() {
    var z = 0;
    var i;
    for (i in arguments) {
    z = z + arguments[i];
    }
    return z;
    }

//In questo modo potremo chiamare la funzione con un numero di parametri a piacere

var risultato = somma(2, 78);
var risultato = somma(17,32,4,19,52);

//Argomenti con valori di default
function somma(x = 0, y = 0) {
    var z = x + y;
    return z;
}

//In questo modo se al momento della chiamata non viene passato un argomento, ad esso viene assegnato il valore di default specificato, invece del valore undefined. Quindi, ad esempio, la chiamata somma() senza argomenti restituirà il valore 0 anzichè NaN.

//Rest Parameter, e' una notazione per specificare un numero indefinito di parametri aggiuntivi

function eseguiOperazione(x, ...y) { //prende una stringa con il nome dell'operazione ed una lista indefinita di parametri sulla quale eseguire l'operazione. In pratica y viene trattato come un vettore degli argomenti
    var z = 0;
    switch (x) {
    case "somma":
    for (i in y) {
    z = z + y[i];
    }
    break;
    case "moltiplica":
    for (i in y) {
    z = z * y[i];
    }
    break;
    case "dividi":
    z = y[0]/y[1];
    break;
    default:
    z = NaN;
    break;
    }
    return z;
    }

//invocazione
eseguiOperazione("somma", 12, 54, 2, 7, 12);
eseguiOperazione("moltiplica", 4, 11, 32); 
eseguiOperazione("dividi", 45, 9, 6, 17);

//E' applicabile anche con degli array di valori, infatti
var addendi = [8, 23, 19, 72, 3, 39];
somma(...addendi);

//e' uguale a
somma(8, 23, 19, 72, 3, 39);

//Istruzione let, serve a dichiarare variabili valide soltanto nell blocco di codice in utilizzo

var x = 10;
var y;
let (x= 20) {
	y = x + 1; //y = 21
}
y = x + y; //y = 31



//Funzioni predefinite
parseInt(); //String to int
parseFloat(); //String to float
isNaN(); //true se non e' un valore numerico valido, false altrimenti
isFinite(); //True solo se l'argomento e' diverso da infinity o NaN
escape(); // Prende in input una stringa e la codifica in hex lasciando inalterate cifre, lettere ed alcuni caratteri speciali
unescape(); //Procedimento inverso di escape
// Se invece le stringhe da codificare sono URI si usano le funzioni
encodeURI();
decodeURI();
//In JS i nomi di funzioni non sono riservati, quindi e' possibile definire una nuova funzione, ad esempio, parseInt senza generare errori