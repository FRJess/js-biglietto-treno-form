//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//VARIABLES DECLARATION AND INITIALIZATION

//button on
const btnInputOn = document.getElementById('btn-input-on');

//button reset
const btnInputOff = document.getElementById('btn-input-off');

//cost for 1 km
const costKm = 0.21; 

//discount if the passenger is a junior
const discountJunior = 0.22; 

//discount if the passenger is a senior
const discountSenior = 0.40; 

//passenger full name
let fullName; 

//distance in km for the trip
let kmTrip; 

//Age group
let age; 

//available discount
let finalDiscount;

//cost before discount
let costTrip;

//cost after discount
let finalCost;

//random range for place
const minCarrozza = 1;
const maxCarrozza = 9;

//random range for ticket
const minCB = 10000;
const maxCB = 99999;

//FUNCTION CLICK TO COLLECT DATAS AND CREATE TICKET

btnInputOn.addEventListener('click', function(){
  
  fullName = document.getElementById('input-name').value;
  kmTrip = document.getElementById('input-km').value;
  age = document.getElementById('input-age').value;

  document.getElementById('output-name').innerHTML = fullName;

  //Conditional statement for discount availability
  if(age === "junior"){
    finalDiscount = discountJunior
  }else if(age === "senior"){
    finalDiscount = discountSenior
  }else{
    finalDiscount = 0
  }

  //Calc trip cost
  costTrip = costKm * kmTrip;

  // Calc trip cost with discount
  finalCost = costTrip - (costTrip * finalDiscount);

  //€uro currency transformation
  let formatCurrency = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR"
  }).format(finalCost);

  //all output datas
  document.getElementById('output-costo-biglietto').innerHTML = formatCurrency;
  document.getElementById('output-offer').innerHTML = finalDiscount;

  //random number for coach
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * (maxCarrozza - minCarrozza + 1) + minCarrozza);

  //random number for ticket
  document.getElementById('codice-biglietto').innerHTML = Math.floor(Math.random() * (maxCB - minCB + 1) + minCP);
});

// FUNCTION CLICK TO RESET ALL DATAS

btnInputOff.addEventListener('click', function(){
  document.getElementById('output-name').innerHTML = " ";
  document.getElementById('input-name').value = " ";
  document.getElementById('input-km').value = " ";
  document.getElementById('input-age').value = "Fascia di età";
  document.getElementById('output-offer').innerHTML = " ";
  document.getElementById('carrozza').innerHTML = " ";
  document.getElementById('codice biglietto').innerHTML = " ";
  document.getElementById('output-costo-biglietto').value = " ";
})



