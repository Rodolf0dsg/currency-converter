const select = document.querySelector('.form-select');
let countSelect = 0;
let countMoneda = 0;
let limitMoneda = 6;

export const buildSelect = (dataCripto, secondOne) => {
    select.addEventListener("click", (e) => {
        if (countSelect < 1) {

            for (let moneda in dataCripto) {
                if (countMoneda >= limitMoneda) {
                    break;
                }
                const option = document.createElement("option");
                option.innerText = moneda;
                select.appendChild(option);
                countSelect++;
                countMoneda++;
            }
        }
    });
}







