/**
 * 
 * @param {HTMLInputElement} element 
 * @returns {void}
 */

export const inputListener = (element) => {

    element.addEventListener('keypress', (e) => {
        if (!/[0-9]/.test(String.fromCharCode(e.which))) {
            e.preventDefault();
        }

        if (e.target.value.length > 12) {
            e.preventDefault();
        }
    })

}