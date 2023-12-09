import React, { useState, useEffect } from 'react';

const apiUrl = 'http://localhost:3001/timesFIFA';

const SorteadorTimes = () => {
  const [timesFIFA, setTimesFIFA] = useState([]);
  const [sorteados, setSorteados] = useState('');

  useEffect(() => {
    obterTimesAPI();
  }, []);

  const obterTimesAPI = async () => {
    try {
      const times = await fetch(apiUrl).then(response => response.json());
      setTimesFIFA(times);
    } catch (erro) {
      console.error('Erro ao obter times da API:', erro.message);
    }
  };

  const sortearTimes = () => {
    console.log('Função sortearTimes foi chamada.');
    
    if (timesFIFA.length === 0) {
      console.error('A lista de clubes está vazia. Carregue os clubes antes de sortear.');
      return;
    }

    let indiceSorteado1 = Math.floor(Math.random() * timesFIFA.length);
    let indiceSorteado2;

    do {
      indiceSorteado2 = Math.floor(Math.random() * timesFIFA.length);
    } while (
      indiceSorteado2 === indiceSorteado1 ||
      Math.abs(timesFIFA[indiceSorteado1].overall - timesFIFA[indiceSorteado2].overall) > 3
    );

    const timeSorteado1 = timesFIFA[indiceSorteado1];
    const timeSorteado2 = timesFIFA[indiceSorteado2];

    console.log('Times Sorteados:', timeSorteado1, timeSorteado2);

    setSorteados(`Times Sorteados: ${timeSorteado1.name} vs ${timeSorteado2.name}`);
  };

  return (
    <div>
      <button onClick={sortearTimes} disabled={timesFIFA.length === 0}>
        Sortear Times
      </button>
      <div id="timeSorteados">{sorteados}</div>
    </div>
  );
};

export default SorteadorTimes;