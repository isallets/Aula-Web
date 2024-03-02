"use strict";
//EXERCICIO 1
/*
function maiorNumero(n: number[], int: number){
    for (let i=0; i<n.length; i++){
    if (n[i]>int)
        int = n[i];
    }
    return int;
}

let int

console.log("O Maior numero eh:", maiorNumero([5, 7, 9, 12, 15, 23], 0));
*/
//EXERCICIO 2
/*
function ehPar(n:number) {
    if (n % 2 == 0)
        return console.log("Eh par");
    else
        return console.log("Nao eh par") ;
}

let numero=9;
console.log(`O numero eh $numero par`, ehPar(numero));

console.log("O numero",numero, "eh par", ehPar(numero));
*/
//EXERCICIO 3
function mediaArit(n, soma, media) {
    for (let i = 0; i < n.length; i++) {
        soma += n[i];
        media = soma / n[i];
        return media;
    }
}
console.log("A media aritmetica eh:", mediaArit([2, 6, 9, 11, 8], 0, 0));
