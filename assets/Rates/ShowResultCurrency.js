const containerResultado = document.querySelector('.containerResultado');
const buttonAceptar = document.querySelector('.buttonAceptar');
const nombre = document.querySelector('.moneda');

export const showResultCurrency = (nombre, cantidad, tipoDeCambio) => {
    buttonAceptar.addEventListener("click", () => {
        console.log(nombre);
        const resultado = "233.5 usdt";
        const tituloH1 = document.createElement("h1");
        tituloH1.classList.add("titulo-resultado");
        tituloH1.innerText = resultado;
        containerResultado.appendChild(tituloH1);
        return resultado;
    });
};



















