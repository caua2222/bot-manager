import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState('Desconhecido');

  const buscarStatus = async () => {
    const res = await axios.get('http://localhost:5000/status');
    setStatus(res.data.status);
  };

  const iniciarBot = async () => {
    await axios.post('http://localhost:5000/start');
    buscarStatus();
  };

  const pararBot = async () => {
    await axios.post('http://localhost:5000/stop');
    buscarStatus();
  };

  useEffect(() => {
    buscarStatus();
  }, []);

  return (
    <div>
      <h1>Status do Bot: {status}</h1>
      <button onClick={iniciarBot}>Iniciar</button>
      <button onClick={pararBot}>Parar</button>
    </div>
  );
}

export default App;
