const apiUrl = 'http://localhost:3000/api/times';
//const apiKey = '6b2be443-b8d5-4ad1-9259-3581246f31fc';
let timesFIFA = [];

async function obterTimesAPI() {
    return await obterTimesDoBanco();
    /*
    try {
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.map(time => ({ name: time.name, image: time.image, overall: time.overall}));

        
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

        if (!data.items || !Array.isArray(data.items)) {
            console.error('Formato de dados da API inválido:', data);
            return [];
        }

        return data.items.map(clube => ({
            name: clube.name,
            id: clube.id,
            image: `https://futdb.app/api/clubs/${clube.id}/image`,
        }));
        
    } catch (erro) {
        console.error('Erro ao obter times da API:', erro.message);
        return [];
    }
    */
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
    } while (indiceSorteado2 === indiceSorteado1 || Math.abs(timesFIFA[indiceSorteado1].overall - timesFIFA[indiceSorteado2].overall) > 3);

    const timeSorteado1 = timesFIFA[indiceSorteado1];
    const timeSorteado2 = timesFIFA[indiceSorteado2];

    const result = document.getElementById("timeSorteados");
    result.innerHTML = `Times Sorteados: ${timeSorteado1.name} vs ${timeSorteado2.name}`;
/*
    const imagensTimesDiv = document.getElementById("imagensTimes");
    imagensTimesDiv.innerHTML = '';

    const imagemTime1 = document.createElement("img");
    imagemTime1.src = timeSorteado1.image;
    imagemTime1.classList.add('img-time');
    imagemTime1.crossOrigin = "anonymous";

    const imagemTime2 = document.createElement("img");
    imagemTime2.src = timeSorteado2.image;
    imagemTime2.classList.add('img-time');
    imagemTime2.crossOrigin = "anonymous";   

    imagensTimesDiv.appendChild(imagemTime1);
    imagensTimesDiv.appendChild(imagemTime2);
*/    
}
