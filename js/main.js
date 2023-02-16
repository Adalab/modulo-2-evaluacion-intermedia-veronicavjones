'use strict';

//variables elementos html
const userNumber =document.querySelector('.js_userNumber');
const button = document.querySelector('.js_btn');
const pista = document.querySelector('.js_pista');
const intentos = document.querySelector('.js_intentos');

//funciones
function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);

console.log(randomNumber)

function compareNumber(){
    const valueUserNumber = userNumber.value;
    if(valueUserNumber < 1 || valueUserNumber >100){
       pista.innerHTML = 'el número debe estar entre 1 y 100';
    }

}





//eventos
function handleClickButton(event) {
    event.preventDefault();
    console.log('funciona');
    compareNumber();
}


button.addEventListener('click', handleClickButton);