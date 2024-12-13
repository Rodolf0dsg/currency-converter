/**
 * 
 * @param {HTMLInputElement} element
 * @param {HTMLDivElement} errorFeedbackElement
 * @returns {void}
 */

export const validateForm = ( element, errorFeedbackElement ) => {
    element.classList.remove('is-invalid');
    errorFeedbackElement.style.opacity = 0;
    
    if(isNaN(Number(element.value))){
        element.classList.add('is-invalid');
        errorFeedbackElement.style.opacity = 1;
    };
}

