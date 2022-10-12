//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//button reset
const btnInputOff = document.getElementById('btn-input-off');

//button on
const btnInputOn = document.getElementById('btn-input-on');

//costo km
const costKm = 0.21; 

//sconto da applicare se junior
const discountJunior = 0.22; 

//sconto da applicare se senior
const discountSenior = 0.40; 

//Nome e cognome della persona
let fullName; 

//km da percorrere
let kmTrip; 

//Fascia di età della persona
let age; 

//sconto finale da applicare
let finalDiscount;

//prezzo finale da pagare prima di eventuale sconto
let costTrip;

//prezzo finale da pagare dopo eventuale sconto
let finalCost;

//dati per random carrozza
const minCarrozza = 1;
const maxCarrozza = 9;

//dati per random biglietto
const minCB = 10000;
const maxCB = 99999;

//Function click per dati del biglietto
btnInputOn.addEventListener('click', function(){
  
  fullName = document.getElementById('input-name').value;
  kmTrip = document.getElementById('input-km').value;
  age = document.getElementById('input-age').value;

  document.getElementById('output-name').innerHTML = fullName;


  //istruzioni condizionali per controllo dello sconto disponibile
  if(age === "junior"){
    finalDiscount = discountJunior
  }else if(age === "senior"){
    finalDiscount = discountSenior
  }else{
    finalDiscount = 0
  }

  //calcolo costo viaggio
  costTrip = costKm * kmTrip;

  // calcolo costo viaggio dopo sconto
  finalCost = costTrip - (costTrip * finalDiscount);

  //applicazione del formato valuta
  let formatCurrency = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR"
  }).format(finalCost);

  //dati output
  document.getElementById('output-costo-biglietto').innerHTML = formatCurrency;
  document.getElementById('output-offer').innerHTML = finalDiscount;
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * (maxCarrozza - minCarrozza + 1) + minCarrozza);
  document.getElementById('codice-biglietto').innerHTML = Math.floor(Math.random() * (maxCB - minCB + 1) + minCP);
});

// RESET

btnInputOff.addEventListener('click', function(){
  document.getElementById('output-name').innerHTML = " ";
  document.getElementById('input-name').value = " ";
  document.getElementById('input-km').value = " ";
  document.getElementById('input-age').value = "Fascia di età";
  document.getElementById('output-offer').innerHTML = " ";
  document.getElementById('carrozza').innerHTML = " ";
  document.getElementById('codice biglietto').innerHTML = " ";
  document.getElementById('output-costo-biglietto').innerHTML = " ";
})



