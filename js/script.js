const coeffKm = 0.21; // prezzo al chilometro
const senior = 65; // età minima per accedere a sconti senior
const junior = 18; // età massima per accedere a sconti junior
const scontoSenior = 0.4; // sconto senior
const scontoJunior = 0.2; //sconto junior

// function debug(f) {
//     return f;
// }

// Validazione dati utente
alert("Grazie per aver scelto Trenord:\ninserire la propria età e i chilometri totali da percorrere (in formato numerico) per calcolare il prezzo del biglietto")
var etaUtente = prompt('Quanti anni hai?');
console.log(etaUtente);
var kmPercorsi = prompt('Quanti chilometri devi percorrere?');

// Debuggato tutti i potenziali problemi che vedo ora come ora
var eBug = (etaUtente == null || etaUtente.includes("e")) || (kmPercorsi == null || kmPercorsi.includes("e"));
var nanBug = isNaN(etaUtente * 1) || isNaN(kmPercorsi * 1);
var valueBug = 0 >= etaUtente || etaUtente >= Infinity || 0 >= kmPercorsi || kmPercorsi >= Infinity;

if (eBug || nanBug || valueBug) {
    alert('inseriti dati non validi, riprovare')
    location.reload();
}


// Calcolo sconto
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

// .html output
document.getElementById('prezzo-base').innerHTML = prezzoBase.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
document.getElementById('km').innerHTML = kmPercorsi.toLocaleString("it-IT");
document.getElementById('sconto').innerHTML = (sconto * 100).toString() + "%"; // alla fine non l'ho giudicato così criptico scritto così: si capisce, no?
document.getElementById('totale').innerHTML = prezzoFinale.toLocaleString("it-IT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});