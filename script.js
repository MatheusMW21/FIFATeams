const timesFIFA = ["Barcelona", "Real Madrid", "Manchester City", "Manchester United",
"Borussia Dortmund"];

function sortearTime() {
    let indiceSorteado1 = Math.floor(Math.random() * timesFIFA.length);
    let indiceSorteado2;

    do {
        indiceSorteado2 = Math.floor(Math.random() * timesFIFA.length);
    } while (indiceSorteado2 === indiceSorteado1);

    const timeSorteado1 = timesFIFA[indiceSorteado1];
    const timeSorteado2 = timesFIFA[indiceSorteado2];

    const result = document.getElementById("timeSorteado");
    result.innerHTML = `Times Sorteados: ${timeSorteado1} vs ${timeSorteado2}`;
}