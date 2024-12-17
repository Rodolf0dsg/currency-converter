import { showResultCurrency } from './Rates/showResultCurrency.js';
import { validateForm } from './form/validateForm.js';
import { convertRates } from './Rates/convertRates.js';
import { getRates } from './Rates/getRates.js';
import { inputListener } from './form/inputListener.js';
import { buildSelect } from './Rates/buildSelect.js';

// const selects = document.getElementsByTagName('select');
const firstSelect = document.getElementById('fromCurrencySelect');
const secondSelect = document.getElementById('changeCurrencySelect');
const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
const inputError = document.getElementsByClassName('invalid-feedback');


//Obtener los precios
getRates();

//Construir el input
buildSelect(/* selects[0] */firstSelect, JSON.parse(localStorage.getItem('rates')));

//Input no acepte letras, solo numeros
inputListener(input);

button.addEventListener('click', (e) => {
    //validar input que sea numero
    validateForm(input, inputError[1]);
});

//construir el segundo select SI Y SOLO SI se selecciono algo en el primero
firstSelect.addEventListener('change', (e)=> {
    secondSelect.options[0].text = 'Seleccione';
    console.log(e.target.value);
    buildSelect(secondSelect, JSON.parse(localStorage.getItem('rates')), e.target.value);
});

// buildSelect()

// FUNCION QUE RECIBE PARAMETROS PARA MOSTRAR MOENDA
showResultCurrency("Bitcoin", "10", "Btc a usd");