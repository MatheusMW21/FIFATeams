const apiUrl = 'https://futdb.app/api/teams';
const timesFIFA = [];

async function obterTimesAPI() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            console.error('Erro ao obter times da API:', response.statusText);
            return [];
        }

        const data = await response.json();

        if (!data || !data.teams || !Array.isArray(data.teams)) {
            console.error('Formato de dados da API inválido:', data);
            return [];
        }

        return data.teams.map(time => time.name);
    } catch (erro) {
        console.error('Erro ao obter times da API:', erro.message);
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