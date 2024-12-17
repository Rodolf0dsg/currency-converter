let countSelect = 0;
let countMoneda = 0;
let limitMoneda = 6;

/**
 * @param {HTMLSelectElement} element the select element that will be filled with options tag
 * @param {JSON} dataCripto the data fot options tag
 * @param {Element} secondOne Flag to know the selection on first select that needs to be removed 
 * @returns {void}
 */

export const buildSelect = (element, dataCripto, secondOne) => {
    element.addEventListener("click", (e) => {
        if (countSelect < 1) {

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
    });
};