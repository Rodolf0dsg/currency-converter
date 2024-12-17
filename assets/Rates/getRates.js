import { buildSelect } from "./buildSelect.js";
import {dateDifference} from '../helpers/dateDifference.js';

/**
 * This function get the prices and saves on localStorage the prices
 * Validates if the previous price query was made in the previous 12 hours to save room on API limit
 * @returns {Void}
 */

export const getRates = async () => {
    // const rates = await fetch(`/assets/currencys/data.json`);
    // return await rates.json();

    const lastTime = localStorage.getItem('lastTime');

    //Only 1 query every 12 hours (API ISNT FREE)
    if(lastTime){

        const difference = dateDifference(lastTime, new Date());
        
        if (difference > 12 || !(localStorage.getItem('rates'))) {
            localStorage.setItem('lastTime', new Date());
            const ratesResponse = await fetch(`/assets/currencys/data.json`,);
            const {rates} = await ratesResponse.json();
            localStorage.setItem('rates', JSON.stringify(rates));                
        };
        
    }else {
        localStorage.setItem('lastTime', new Date());
        const ratesResponse = await fetch(`/assets/currencys/data.json`,);
        const {rates} = await ratesResponse.json();
        localStorage.setItem('rates', JSON.stringify(rates));
    }
}