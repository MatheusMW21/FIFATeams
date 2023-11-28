const apiUrl = 'https://futdb.app/api/v1/teams';
const timesFIFA = [];

async function obterTimesAPI() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.teams.map(time => time.name);
    } catch (erro) {
        console.error('Erro ao obter times da API.', erro);
        return [];
    }
}

async function sortearTime() {

    if (timesFIFA.length === 0) {
        timesFIFA.push(...await obterTimesAPI());
        console.log('Times FIFA 22 carregados: ', timesFIFA)
    }

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

obterTimesAPI();