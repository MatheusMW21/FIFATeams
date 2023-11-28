const apiUrl = 'https://futdb.app/api/clubs';
const apiKey = '6b2be443-b8d5-4ad1-9259-3581246f31fc';
let timesFIFA = [];

async function obterTimesAPI() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'accept': 'application/json',
                'X-AUTH-TOKEN': apiKey
            }
        });

        if (!response.ok) {
            console.error('Erro ao obter times da API:', response.statusText);
            return [];
        }

        const data = await response.json();
        console.log('Dados da API:', data);

        if (!data || !data.items || !Array.isArray(data.items)) {
            console.error('Formato de dados da API inválido:', data);
            return [];
        }

        return data.items.map(clube => clube.name);
    } catch (erro) {
        console.error('Erro ao obter times da API:', erro.message);
        return [];
    }
}

async function sortearTimes() {
    timesFIFA = await obterTimesAPI();
    console.log('Times FIFA carregados:', timesFIFA);

    if (timesFIFA.length === 0) {
        console.error('A lista de clubes está vazia. Carregue os clubes antes de sortear.');
        return;
    }

    let indiceSorteado1 = Math.floor(Math.random() * timesFIFA.length);
    let indiceSorteado2;

    do {
        indiceSorteado2 = Math.floor(Math.random() * timesFIFA.length);
    } while (indiceSorteado2 === indiceSorteado1);

    const timeSorteado1 = timesFIFA[indiceSorteado1];
    const timeSorteado2 = timesFIFA[indiceSorteado2];

    const result = document.getElementById("timeSorteados");
    result.innerHTML = `Times Sorteados: ${timeSorteado1} vs ${timeSorteado2}`;
}
