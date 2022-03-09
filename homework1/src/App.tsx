import './App.css';
import User from './Components/User';

function App() {
  return (
    <div className="App">
      <User 
        name = "Zhanar"
        surname='Nazarova'
        age={21}
        country='Kazakhstan'
        occupation='Developer'
      />
    </div>
  );
}

export default App;