import { buildSelect } from "./buildSelect.js";

/**
 * 
 * @param {boolean} isEur 
 * @param {string} fromRate 
 * @param {string} toRate 
 * @returns {Number}
 */

export const getRates = async () => {
    const rates = await fetch(`/assets/currencys/data.json`);
    return await rates.json();
}

getRates()
    .then(info => buildSelect(info.rates))
    .catch(e => console.log(e));

