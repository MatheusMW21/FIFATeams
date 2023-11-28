const timesFIFA = ["Barcelona", "Real Madrid", "Manchester City"];

function sortearTime() {
    const indiceSorteado = Math.floor(Math.random() * timesFIFA.length);
    const timeSorteado = timesFIFA[indiceSorteado];
    document.getElementById("timeSorteado").innerText = `Time Sorteado: {timeSorteado}`;
}