const cartas = [
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63],
    [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31, 34, 35, 38, 39, 42, 43, 46, 47, 50, 51, 54, 55, 58, 59, 62, 63],
    [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63],
    [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63],
    [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
    [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63]
];

let suma = 0;
let indiceCarta = 0;

function iniciarJuego() {
    suma = 0;
    indiceCarta = 0;
    mostrarCarta();
}

function mostrarCarta() {
    if (indiceCarta < cartas.length) {
        const cartaActual = cartas[indiceCarta];
        const mensajeDiv = document.getElementById("mensaje");
        mensajeDiv.innerHTML = `<p>¿Tu número está en esta carta?</p><p>${cartaActual.join(", ")}</p>`;
        mensajeDiv.innerHTML += `<button onclick="respuesta(true)">Sí</button> <button onclick="respuesta(false)">No</button>`;
    } else {
        mostrarResultado();
    }
}

function respuesta(estaEnCarta) {
    if (estaEnCarta) {
        suma += cartas[indiceCarta][0];
    }
    indiceCarta++;
    mostrarCarta();
}

function mostrarResultado() {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>El número que pensaste es: ${suma}</p>`;
}