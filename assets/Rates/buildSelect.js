let countSelect = 0;
let countMoneda = 0;
let limitMoneda = 6;

import { deleteSelected } from '../helpers/deleteSelected.js';

/**
 * @param {HTMLSelectElement} element the select element that will be filled with options tag
 * @param {JSON} dataCripto the data fot options tag
 * @param {Element} secondOne Flag to know the selection on first select that needs to be removed 
 * @returns {void}
 */

export const buildSelect = (element, dataCripto, secondOne) => {

    if (secondOne && dataCripto.hasOwnProperty(secondOne)) {
        delete dataCripto[secondOne];
        //eliminar los anteriores options
        element.options.length = 0; 
    }    

        if (countSelect < 1) {
            console.log(element);
            
            for (let moneda in dataCripto) {
                if (countMoneda >= limitMoneda) {
                    break;
                }
                const option = document.createElement("option");
                option.innerText = moneda;
                option.value = moneda;
                element.appendChild(option);
                countSelect++;
                countMoneda++;
            };
        };

        countSelect = 0;
        countMoneda = 0;
        limitMoneda = 6;
};