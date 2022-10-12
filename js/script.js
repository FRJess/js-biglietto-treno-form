//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//costo km
const costKm = 0.21; 
//sconto da applicare se junior
const discountJunior = 0.22; 
//sconto da applicare se senior
const discountSenior = 0.40; 
//prompt per chiedere al/alla cliente quanti km deve fare
// const kmTrip = parseInt(prompt ("Quanti km devi percorrere?")); 
//prompt per chiedere al/alla cliente quanti anni ha
// const age = parseInt(prompt ("Quanti anni hai?")); 
//età junior
const junior = 18; 
//età senior
const senior = 65; 
//sconto finale da applicare
let finalDiscount;

const btnInputOn = document.getElementById('btn-input-on');
btnInputOn.addEventListener('click', function(){
  const name = document.getElementById('input-name').value;
  document.getElementById('output-name').innerHTML = name;
  const kmTrip = document.getElementById('input2').value;
  // document.getElementById('output-km').innerHTML = kmTrip;
  const age = document.getElementById('dropdown-menu').value;
  document.getElementById('output-offer').innerHTML = age;
  document.getElementById('input-name').value = '';
});

const btnInputOff = document.getElementById('btn-input-off');
btnInputOff.addEventListener('click', function(){
  const name = document.getElementById('input-name').value = " ";
  document.getElementById('output-name').innerHTML = " ";
  const kmTrip = document.getElementById('input2').value = " ";
})

//calcolo del costo del viaggio prima degli eventuali sconti
let costTrip = costKm * kmTrip;

//istruzioni condizionali per controllo dello sconto disponibile
if(age >= junior && age < senior){
  finalDiscount = 0
}else if(age < junior){
  finalDiscount = discountJunior
}else{
  finalDiscount = discountSenior
}

//calcolo del costo del viaggio dopo applicazione degli eventuali sconti
let finalCost = costTrip - (costTrip * finalDiscount);

//applicazione del formato valuta
let formatCurrency = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR"
}).format(finalCost);

//stampo in pagina del risultato
// document.getElementById("risultato").innerHTML=`
// Per fare ${kmTrip}km, <br>
// il prezzo del tuo biglietto sarà di ${formatCurrency}.
// `




