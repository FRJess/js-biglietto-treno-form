//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const costKm = 0.21;
const discountJunior = 0.22;
const discountSenior = 0.40;
const kmTrip = parseInt(prompt ("Quanti km devi percorrere?"));
const age = parseInt(prompt ("Quanti anni hai?"));
const junior = 18;
const senior = 65;
let finalDiscount;


let costTrip = costKm * kmTrip;

if(age >= junior && age < senior){
  finalDiscount = 0
}else if(age < junior){
  finalDiscount = discountJunior
}else{
  finalDiscount = discountSenior
}

let finalCost = costTrip - (costTrip * finalDiscount);

let formatCurrency = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR"
}).format(finalCost);

document.getElementById("risultato").innerHTML=`
Per fare ${kmTrip}km, <br>
il prezzo del tuo biglietto sarà di ${formatCurrency}.
`