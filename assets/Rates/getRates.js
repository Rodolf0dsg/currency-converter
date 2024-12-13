import { buildSelect } from "./buildSelect.js";

/**
 * 
 * @param {boolean} isEur 
 * @param {string} fromRate 
 * @param {string} toRate 
 * @returns {Number}
import {dateDifference} from '../helpers/dateDifference.js';

/**
 * @returns {Void}
 */

export const getRates = async () => {
    const rates = await fetch(`/assets/currencys/data.json`);
    return await rates.json();

    const lastTime = localStorage.getItem('lastTime');

    //Only 1 query every 12 hours (API ISNT FREE)
    if(lastTime){

        const difference = dateDifference(lastTime, new Date());
        
        if (difference > 12 || !(localStorage.getItem('rates'))) {
            localStorage.setItem('lastTime', new Date());
            const ratesResponse = await fetch(`/assets/currencys/data.json`,);
            const rates = await ratesResponse.json();
            localStorage.setItem('rates', JSON.stringify(rates));                
        };
        
    }else {
        localStorage.setItem('lastTime', new Date());
        const ratesResponse = await fetch(`/assets/currencys/data.json`,);
        const rates = await ratesResponse.json();
        localStorage.setItem('rates', JSON.stringify(rates));
        // return await rates.json();
    }

}

getRates();
    // .then(info => console.log(info.rates))
    // .catch(e => console.log(e));