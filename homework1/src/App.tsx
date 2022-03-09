import './App.css';
import User from './Components/User';
import avatarLeo from './img/leo_dicaprio.jpg'
import avatarLopez from './img/lopez.jpg'
import avatarPitt from './img/brad_pitt.jpg'

function App() {
  return (
    <div className="App">
      <User 
        name = "Leonardo"
        surname='DiCaprio'
        age={47}
        country='LA, U.S.'
        hobby='basketball'
        image={avatarLeo}
      />
      <User 
        name = "Jennifer"
        surname='Lopez'
        age={52}
        country='New York City, U.S.'
        hobby='dancing'
        image={avatarLopez}
      />
      <User 
        name = "Brad"
        surname='Pitt'
        age={58}
        country='Oklahoma, U.S.'
        hobby='sculpture'
        image={avatarPitt}
      />
    </div>
    
  );
}

export default App;