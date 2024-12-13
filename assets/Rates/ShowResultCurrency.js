const containerResultado = document.querySelector('.containerResultado');

export const ShowResultCurrency = (nombre, cantidad, tipoDeCambio) => {

    const resultado = "233.5 usdt";
    const tituloH1 = document.createElement("h1");
    tituloH1.classList.add("titulo-resultado");
    tituloH1.innerText = resultado;
    containerResultado.appendChild(tituloH1);
    return resultado;
}


    

