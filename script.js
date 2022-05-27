'use strict'

//recupero elemento HTML in cui inserire le celle
const containerCampoMinato = document.querySelector('.campo-minato')

//creo una funzione generica per creare X celle in base al livello di difficolta
//ora settata a 1 = 100 celle
function campoMinato(cellaX, cellaY) {
    const celleRisultanti = cellaX * cellaY
    containerCampoMinato.style.width = `calc(50px * ${cellaX})`

    //creo un ciclo per formare ogni singola cella
    for (let i = 0; i < celleRisultanti; i++) {
        const cella = document.createElement('div')
        cella.classList.add('cella')
        containerCampoMinato.append(cella)
    }

}

console.log(campoMinato(10, 10))


/*
Generare una griglia di gioco quadrata , in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

BONUS
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/