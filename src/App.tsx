
//import './App.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
              setQuote(response.data.content);
            } catch (error) {
              console.error('Error fetching quote:', error);
            }
          };
        
          const handleNewQuote = () => {
            fetchQuote();
          };
        
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <p>{quote}</p>
        <button onClick={handleNewQuote}>New Quote</button>
      </header>
    </div>
  );
}

export default App
