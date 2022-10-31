//VARIABLES DECLARATION AND INITIALIZATION

//button on
const btnInputOn = document.getElementById('btn-input-on');

//button reset
const btnInputOff = document.getElementById('btn-input-off');

//cost for 1 km
const costKm = 0.21; 

//discount if the passenger is a junior
const discountJunior = 0.20; 

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
  document.getElementById('codice-biglietto').innerHTML = Math.floor(Math.random() * ((999999 - 100000) + 1) + 100000);
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



