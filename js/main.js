'use strict';

//variables elementos html
const button = document.querySelector('.js_btn');
const pista = document.querySelector('.js_pista');
const intentos = document.querySelector('.js_intentos');

//funciones
function tooHigh() {

}

function tooLow() {

}

function youWin() {

}

function numberBetween() {
    
}
//eventos
function handleClickButton(event) {
    event.preventDefault();
    console.log('funciona');

    tooHigh();
    tooLow();
    youWin();
    numberBetween();

}


button.addEventListener('click', handleClickButton);