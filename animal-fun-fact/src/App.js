
import './App.css';
import oceanImage from './images/ocean.jpg';



function App() {
  return (
    <div className="App">


      <header className="App-header">
        <h1>Click an animal for fun fact</h1>
      </header>
      <main className="container">
      <img src={oceanImage} alt="ocean" />
      </main>
    </div>
  );
}

export default App;
