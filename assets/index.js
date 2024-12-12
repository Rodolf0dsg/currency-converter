import { mostrarMoneda } from './mostrarMoneda.js';
import { validateForm } from './form/validateForm.js';
import { convertRates, getRates } from './Rates';

const selects = document.getElementsByTagName('select');
const input = document.getElementsByTagName('input');
const button = document.getElementsByTagName('button');

// FUNCION QUE RECIBE PARAMETROS PARA MOSTRAR MOENDA
mostrarMoneda("Bitcoin", "10", "Btc a usd");