
import { animals } from './animal';
import './App.css';


function App() {
  function displayFact(e){
    const animal = e.target.alt;
    const index = Math.floor(Math.random() * animals[animal].facts.length);
    const funFact = animals[animal].facts[index];
    const p = document.getElementById('fact');
   p.innerHTML = funFact;
}
const images = [];
  for(const animal in animals){
    const image = (
      <img 
      onClick={displayFact}
      key={animal}
      className= 'animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      />
    );

    images.push(image)
  }
 
  return (
    <div className="App">
      <main className="container">
      <img src="./images/ocean.jpg" alt="ocean" className="background-image" />
      <p id='fact'></p>
      <div className="animals">{images}</div>
      </main>
    </div>
  );
}

export default App;
