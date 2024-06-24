import React from 'react';
import CountdownTimer from './CountdownTimer';

function App() {
  // Set your target date (e.g., New Year's Eve)
  const targetDate = '2025-01-01T00:00:00';

  return (
    <div className="App">
      <header className="App-header">
        <CountdownTimer targetDate={targetDate} />
      </header>
    </div>
  );
}

export default App;