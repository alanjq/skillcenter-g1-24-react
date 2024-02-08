import React from 'react';
import './App.css';
import Saludo from './components/Saludo';

function App() {
  // Método de renderizado
  return (
    <div>
      Contenido <br />
      <Saludo nombre={"Alan"} />
    </div>
  );
}

export default App;
