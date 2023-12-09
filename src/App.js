import React from 'react';
import SorteadorTimes from './SorteadorTimes';

const App = () => {
  const appStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const h1Style = {
    color: '#333',
  };

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '4px',
    marginTop: '20px',
  };

  const timeSorteadosStyle = {
    marginTop: '20px',
    fontSize: '18px',
    color: '#333',
  };

  const imagensTimesStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const imgTimeStyle = {
    width: '100px',
    height: '100px',
    margin: '0 10px',
    borderRadius: '50%',
    objectFit: 'cover',
  };
  
  return (
    <div style={appStyle}>
      <h1 style={h1Style}>FIFA 22 - Sorteio de Times</h1>
      <SorteadorTimes />
    </div>
  );
};

export default App;
