import { mostrarMoneda } from './mostrarMoneda.js';
import { validateForm } from './form/validateForm.js';
import { convertRates } from './Rates/convertRates.js';
import { getRates } from './Rates/getRates.js';

const selects = document.getElementsByTagName('select');
const input = document.getElementsByTagName('input');
const button = document.getElementsByTagName('button');

validateForm(selects);

// FUNCION QUE RECIBE PARAMETROS PARA MOSTRAR MOENDA
mostrarMoneda("Bitcoin", "10", "Btc a usd");