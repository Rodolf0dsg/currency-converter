/**
 * 
 * @param {boolean} isEur 
 * @param {string} fromRate 
 * @param {string} toRate 
 * @returns {Number}
 */

export const getRates = async () => {
    const rates = await fetch(`/assets/currencys/data.json`,);
    return await rates.json();
}

getRates()
    .then(info => console.log(info.rates))
    .catch(e => console.log(e));