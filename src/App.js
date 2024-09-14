import { useState } from 'react';
import './App.css';

function App() {

  // const [lastName, setLastName] = useState('Ozc')
  // const [firstName, setFirstName] = useState('Mirz');
  // const [names, setNames] = useState(['A', 'B', 'C', 'D'])
  // const [userInfo, setUserInfo] = useState({username: "mirz", password: "1212"})
  // const [show, setShow] = useState(false);
  // console.log(names);
  // const handleChange = () => {
  //   setFirstName("Mirzorts");
  // }

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count+1)
  }

  console.log('component render edildi yani function App tekrardan calisti')

  return (
    // <div>
    //   {names.map((name, index) => {
    //     <div key={index}>{name}</div>
    //   })}
    //   <div>
    //     {userInfo.username} {userInfo.password}
    //   </div>
    // </div>

    <div>
        {count}
      <div>
        <button onClick={increase}>Increase</button>
      </div>
    </div>
  );
}

export default App;
