import './App.css';

import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const processedText = inputText.replace(/\\/g, '');
    setOutputText(processedText);
  };
  
  const handleCopyClick = () => {
    const textarea = document.getElementById('outputTextarea');
    textarea.select();
    document.execCommand('copy');
  };

  return (
    <div className="container">
      <h1>Eliminar barras invertidas</h1>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Pega aquí el texto con barras invertidas"
        />
        <button type="submit">Procesar</button>
      </form>
      {outputText && (
        <div>
          <h2>Resultado:</h2>
          <textarea
            id="outputTextarea"
            value={outputText}
            readOnly
            placeholder="Texto sin barras invertidas"
          />
          <button onClick={handleCopyClick}>Copiar</button>
        </div>
      )}
    </div>
  );
}

export default App;
