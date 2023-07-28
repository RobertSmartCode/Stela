import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const outputTextareaRef = useRef(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const convertString = () => {
    const windowIndex = inputText.indexOf('/Window');
    if (windowIndex !== -1) {
      let processedText = inputText.substring(windowIndex);
      processedText = processedText.replace(/\\/g, '');
      processedText = processedText.replace(/"([^"]*)$/, '$1'); // Eliminar la última comilla doble
      processedText = '/' + processedText; // Agregar '/' al principio
      setOutputText(processedText);
    } else {
      setOutputText('No se encontró la cadena "/Window"');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    convertString();
  };

  const handleCopyToClipboard = () => {
    outputTextareaRef.current.select();
    document.execCommand('copy');
  };

  return (
    <div className="container">
      <h1>Xpath para Stela</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputTextarea">Pega aquí el texto</label>
        <textarea
          id="inputTextarea"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Pega aquí el texto"
        />
        <button type="submit">Convertir</button>
      </form>
      {outputText && (
        <div>
          <h2>Cadena convertida:</h2>
          <label htmlFor="outputTextarea">Cadena convertida</label>
          <textarea
            id="outputTextarea"
            ref={outputTextareaRef}
            value={outputText}
            readOnly
            placeholder="Texto resultante"
          />
          <button onClick={handleCopyToClipboard}>Copiar</button>
        </div>
      )}
    </div>
  );
}

export default App;






