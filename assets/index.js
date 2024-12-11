/**
 * 
 * @param {boolean} isEur 
 * @param {string} fromRate 
 * @param {string} toRate 
 * @returns {Number}
 */

const convertRates = (fromRate, toRate) => {
    return toRate/fromRate; 
}

const getRates = async() =>{
    const rates  = await fetch(`https://data.fixer.io/api/latest?access_key=996be5d56e8c4403c89e9e1a1c5fc237`,)
    return await rates.json();
}

getRates()
    .then(info => console.log(info.rates))
    .catch( e => console.log(e) );


