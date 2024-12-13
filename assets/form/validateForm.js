
/**
 * 
 * @param {HTMLInputElement} element
 * @param {HTMLDivElement} errorFeedbackElement
 * @returns {void}
 */

export const validateForm = ( element, errorFeedbackElement ) => {
    if(isNaN(Number(element.value))){
        console.log('No es numero');
    }

    errorFeedbackElement.style.opacity = 1;
}