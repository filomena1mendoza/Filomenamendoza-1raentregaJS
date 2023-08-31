document.getElementById('calcular').addEventListener('click', function() {
    const precio = parseFloat(document.getElementById('precio').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
    const interes = parseFloat(document.getElementById('interes').value) / 100;

    const cuotaMensual = (precio * (1 + interes)) / cuotas;

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        <p>Cuota mensual: ${cuotaMensual.toFixed(2)}</p>
        <p>Total a pagar: ${(cuotaMensual * cuotas).toFixed(2)}</p>
    `;
});
