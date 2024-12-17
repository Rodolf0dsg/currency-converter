
/**
 * 
 * @param {Object} data - The object with the info of currencyes
 * @param {string} value - the value of the object that will be deleted 
 */
export const deleteSelected = ( data, value ) => {
    for (const currency in data) {
        if (data[currency] === value) {
            delete data[currency];
            break; 
        }
    }
    return data;
} 