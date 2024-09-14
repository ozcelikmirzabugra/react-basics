import { useState } from 'react';
import './App.css';

function App() {

  const [firstName, setFirstName] = useState('Mirz');
  const [lastName, setLastName] = useState('Ozc')
  // const [names, setNames] = useState(['A', 'B', 'C', 'D'])


  // console.log(names);

  const handleChange = () => {
    setFirstName("Mirzorts");
  }

  return (
    <div>
      <div>
        {firstName} 
      </div>
      <div> 
        <button onClick={handleChange}>Change</button>
      </div>
    </div>
  );
}

export default App;
