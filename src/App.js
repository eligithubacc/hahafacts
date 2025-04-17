import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    async function fetchFact() {
      try {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        setFact(data.text);
      } catch (error) {
        console.error('Error fetching the fact:', error);
        setFact('Could not load a fact. Please try again later.');
      }
    }

    fetchFact();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Funny Fact of the Day</h1>
        <p>{fact}</p>
      </header>
    </div>
  );
}

export default App;
