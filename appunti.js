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



//Oggetti: Contenitore di valori eterogenei in una struttura unica. Tipicamente possiede:
//Dati, detti proprieta' e rappresentati da coppie di nome e valore
//Funzionalita', sono dette metodi e rappresentate da funzioni


//Un modo di definire un oggetto e' a partire dal nome (object literal)
var oggettoVuoto = {};
var persona = { "nome": "Mario", "cognome": "Rossi"};

//Tramite le parentesti definiamo le proprieta' dell'oggetto ed i suoi metodi
//I doppi apici su nome e cognome sono obbligatori soltanto se questi nomi non seguono le regole dei nomi di variabili
var persona = { nome: "Mario", cognome: "Rossi"}; //VALIDO
var persona = { "primo-nome": "Mario", "secondo.nome": "Rossi"}; //Apici obbligatori

//Le proprieta' possono a loro volta essere oggetti, con delle loro proprieta'

var persona = {
	nome: "Mario",
	cognome: "Rossi",
	indirizzo: { //Nuovo oggetto
		via: "Via Garibaldi",
		numero: 15,
		CAP: "00100",
		citta: "Roma"
	}
};

//Per accedere alle proprieta' di un oggetto si utilizza la notazione "."
var nome = persona.nome;

//Mentre sono obbligatori gli apici se non rispetta la notazione delle variabili
var nome = persona["nome"];


//Provando ad assegnare un valore ad una proprieta; non definita, di fatto la crea
persona.eta = 32; //crea la proprieta' eta

//I metodi sono le attivita' che un oggetto puo' compiere
function visualizzaNomeCognome() { return "Mario Rossi"; }
persona.nomeCognome = visualizzaNomeCognome; //Assegnamo la funzione stessa alla proprieta'. Non il suo risultato

//Contenendo una funzione, quindi, la proprieta' nomeCognome e' di fatto un metodo, e la chiameremo aggiungendo le parentesi tonde
var nomeCognome = persona.nomeCognome();

//Esiste anche un metodo di definizione alternativo
persona.nomeCognome = function () { return "Mario Rossi"; }

//Con la parola chiave this, ci si riferisce ad una proprieta' dell'oggetto invocato dal metodo
persona.nomeCognome = function () { return this.nome + " " + this.cognome; } //Restituisce nome e cognome anche modificandoli, a differenza della precedente

//Se si cambia il valore  di una propieta' ad un variabile contenente un oggetto, questo cambia anche nell'oggetto
var persona = {nome: "Mario", cognome: "Rossi"};
var altraPersona = persona;
altraPersona.nome = "Giuseppe"; //Adesso la proprieta' persona.nome sara' Giuseppe, e non piu' Mario

//In pratica il passaggio delle variabili primitive avviene per valore. Quella degli oggetti per riferimento


//Oggetti predefiniti
//L'oggetto predefinito si chiama Object e tutti gli atri vengono creati sulla base di questo. Avranno quindi a disposizione alcuni metodi predefiniti 
var persona = new Object();
persona.nome = "Mario";
persona.cognome = "Rossi";
//L'operatore new crea una nuova istanza di un oggetto vuoto
//Con object e' possibile creare oggetti a partire da qualunque espressione javascript
var numero      = new Object(12);
var altroNumero = new Object(3*2);
var stringa     = new Object("test");
var persona     = new Object({nome: "Mario", cognome: "Rossi"});

//In questo modo, ad esempio nel primo caso, si creano oggetti specializzati nella manipolazione di valori numerici, con specifiche proprieta' e metodi

//Ci sono metodi condivisi da tutti gli oggetti: ToString e ValueOf

var x = new Object(32);
x.toString();            //restituisce "32"



var x = new Object(32);
x.valueOf();             //restituisce 32



//Un particolare oggetto si chiama Number, che fornisce metodi e proprieta' per la manipolazione numerica
//Si puo' creare a partire da qualunque espressione numerica
var x = new Number(123);
var y = new Number(3.14);

//Particolari metodi di Number
EPSILON -> la piu' piccola differenza tra la rappresentazione di due numeri 
MAX_VALUE -> Il piu' grande positivo rappresentabile
MIN_VALUE -> Il piu' piccolo positivo (!=0) rappresentabile
NaN -> Not a Number
NEGATIVE_INFINITY -> rappresenta infinito negativo
POSITIVE_INFINITY -> rappresenta infinito positivo
//Queste proprieta' sono specifiche di number, e non vengono trasferite alle sue istanze, quindi ci si dovra' rifare sempre all'oggetto Number per chiamarle
var x = new Number(239);
if (x < Number.MAX_VALUE) {


	...
}


//Tra i metodi di Number troviamo
isFinite(n) -> true se n e' finito
isInteger(n) -> true se n e' un intero 
isNaN(n) -> true se n non e' un valore numerico

//Ciascuna istanza di Number ha a disposizione tre metodi di rappresentazione
toExponential(n) //Restituisce la rappresentazione esponenziale di n sotto forma di stringa

var x = new Object(123);
var y = x.toExponential(); //y = "1.23e+2"

toFixed(n) //restituisce il valore sotto forma di stringa formattato in un numero di cifre decimali fissate 

var x = new Object(123.4);
var y = x.toFixed(); //y = "123"
var z = x.toFixed(2); //z = "123.40"


toPrecision(n) //Restituisce sotto forma di stringa un valore numerico con un numero di cifre significative specificato
var x = new Number(123.4);
x.toPrecision();	//"123.4"
x.toPrecision(1);	//"1e+2"
x.toPrecision(2);	//"1.2e+2"
x.toPrecision(3);	//"123"
x.toPrecision(4);	//"123.4"
x.toPrecision(5);	//"123.40"
x.toPrecision(6);	//"123.400"
