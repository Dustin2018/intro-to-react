
import { useState } from 'react';
import './App.css';
import Title from './Title'

function App() {
  const [count, setCount] = useState(0)
  const increaseCount = () => {
    setCount(count + 1)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        
        The current count is {count}
        <button onClick={increaseCount}>Increase Count</button>
      </header>
    </div>
  );
}

export default App;
