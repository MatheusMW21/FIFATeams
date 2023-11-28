const apiUrl = 'https://futdb.app/api/clubs';
const apiKey = '6b2be443-b8d5-4ad1-9259-3581246f31fc';
const timesFIFA = [];

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

        if (!data || !data.clubs || !Array.isArray(data.clubs)) {
            console.error('Formato de dados da API inválido:', data);
            return [];
        }

        return data.clubs.map(clube => clube.name);
    } catch (erro) {
        console.error('Erro ao obter times da API:', erro.message);
        return [];
    }
}

async function sortearTime() {
    if (timesFIFA.length === 0) {
        timesFIFA.push(...await obterTimesAPI());
        console.log('Times FIFA carregados:', timesFIFA);
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
