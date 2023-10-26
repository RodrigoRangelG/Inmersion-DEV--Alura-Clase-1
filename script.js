var boredApeDolar = 43200;
var cotizacionDolarAEuro = 0.95;
var valorEnEuro = boredApeDolar*cotizacionDolarAEuro;
var cotizacionEuroABitcoin = 0.00003;
valorEnEuro = valorEnEuro.toFixed(2);
var valorEnBitcoin = valorEnEuro*cotizacionEuroABitcoin;

alert("EUR: "+valorEnEuro + "\nBitcoin: "+valorEnBitcoin);