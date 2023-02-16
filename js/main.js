'use strict';

//variables elementos html
const userNumber =document.querySelector('.js_userNumber');
const button = document.querySelector('.js_btn');
const pista = document.querySelector('.js_pista');
const intentos = document.querySelector('.js_intentos');
let counter = 0;

//funciones
function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);

console.log(randomNumber)

const incrementCounter = (userNumber)=>{
    if(userNumber !== randomNumber){
        counter++;
    }
    intentos.innerHTML = counter;

}

function compareNumber(){
    const valueUserNumber = parseInt(userNumber.value);
    incrementCounter(valueUserNumber);
    if(valueUserNumber < 1 || valueUserNumber >100){
       pista.innerHTML = 'el número debe estar entre 1 y 100';
    }
    else if (valueUserNumber < randomNumber){pista.innerHTML = 'Demasiado bajo';
    }
    else if (valueUserNumber>randomNumber){pista.innerHTML = 'Demasiado alto';
    }
    else if (valueUserNumber === randomNumber){pista.innerHTML = 'Has ganado';
    }

}







//eventos



function handleClickButton(event) {
    event.preventDefault();
    console.log('funciona');
    compareNumber();

}


button.addEventListener('click', handleClickButton);