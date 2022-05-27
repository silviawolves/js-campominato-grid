'use strict'

//recupero elemento HTML in cui inserire le celle
const containerCampoMinato = document.querySelector('.campo-minato')

//creo una funzione generica per creare X celle in base al livello di difficolta
//ora settata a 1 = 100 celle
function campoMinato(cellaX, cellaY) {

    //cosa stabilisce la funzione in sé
    const celleRisultanti = cellaX * cellaY

    //assegno una dimensione che aggiusti la quantità di caselle per row
    containerCampoMinato.style.width = `calc(var(--size) * ${cellaX})`

    //creo un ciclo per formare ogni singola cella
    for (let i = 1; i <= celleRisultanti; i++) {
        const cella = document.createElement('div')
        cella.classList.add('cella')
        containerCampoMinato.append(cella)

        //dentro ogni cella le stampo il suo indice, per ottenere i numeri incrementali (che sono l'i)
        cella.innerHTML = `<span>${i}</span>`

        //aggiunto un eventListener per cambiare colore alla cella quando clicco
        cella.addEventListener ('click', function(){
            this.classList.add('on-click')
            console.log("hai cliccato sul numero", this.innerText)
        })
    }
}

//recupero le informazioni del bottone e del select
const bottonePlay = document.getElementById("bottone-play")

//creo evento sul bottone play per generare il container
bottonePlay.addEventListener ('click', function() {
    containerCampoMinato.innerHTML = ""

    //a seconda dell'opzione selezionata, le caselle generate cambiano
    if (document.getElementById('1').selected) {
        campoMinato(10, 10)
    } else if (document.getElementById('2').selected) {
        campoMinato(9, 9)
    } else if (document.getElementById('3').selected) {
        campoMinato(7, 7)
    }

})


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