const coeffKm = 0.21; // prezzo al chilometro
const senior = 65; // età minima per accedere a sconti senior
const junior = 18; // età massima per accedere a sconti junior
const scontoSenior = 0.4; // sconto senior
const scontoJunior = 0.2; //sconto junior

// PROMPT
alert("Grazie per aver scelto Trenord:\ninserire la propria età e i chilometri totali da percorrere (in formato numerico) per calcolare il prezzo del biglietto")
var etaUtente = prompt('Quanti anni hai?');
var kmPercorsi = prompt('Quanti chilometri devi percorrere?');

// VERIFICA VALIDITÀ DATI
var nanBug = (isNaN(parseInt(etaUtente * 1)) || etaUtente.includes("e")) ||
    (isNaN(parseInt(kmPercorsi * 1)) || kmPercorsi.includes("e"));

var valueBug = (etaUtente <= 0) || (kmPercorsi <= 0);
var err = nanBug + valueBug;
if (err) {
    alert('inseriti dati non validi, riprovare')
    location.reload();
}

// CALCOLO PREZZO
var fattorePrezzo = 1;
var sconto = 0;
if (etaUtente < junior) {
    fattorePrezzo = 1 - scontoJunior;
    sconto = scontoJunior;
} else if (etaUtente > senior) {
    fattorePrezzo = 1 - scontoSenior;
    sconto = scontoSenior;
}
var prezzoBase = kmPercorsi * coeffKm;
var prezzoFinale = prezzoBase * fattorePrezzo;

// OUTPUT ===> .html
document.getElementById('km').innerHTML = kmPercorsi.toLocaleString("it-IT");
document.getElementById('prezzo-base').innerHTML = prezzoBase.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
document.getElementById('sconto').innerHTML = (sconto * 100).toString() + "%";
document.getElementById('totale').innerHTML = prezzoFinale.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});