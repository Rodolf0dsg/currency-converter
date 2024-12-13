import { showResultCurrency } from './Rates/showResultCurrency.js';
import { validateForm } from './form/validateForm.js';
import { convertRates } from './Rates/convertRates.js';
import { getRates } from './Rates/getRates.js';
import { inputListener } from './form/inputListener.js';

const selects = document.getElementsByTagName('select');
const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
const inputError = document.getElementById('input-invalid');

//Input no acepte letras, solo numeros
inputListener(input);

button.addEventListener('click', (e) => {
    //validar input que sea numero
    validateForm(input, inputError);
});


// FUNCION QUE RECIBE PARAMETROS PARA MOSTRAR MOENDA
showResultCurrency("Bitcoin", "10", "Btc a usd");