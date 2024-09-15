import './App.css';
import { useEffect } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";

function App() {


  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL+'/users');
    console.log(response.data)
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL+'/users/'+userId);
    console.log(response.data)
  }

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log(response.data)
  }

  const updateUser = async (userId, updatedUser) => {
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  }

  useEffect(()=>{
    // getAllUsers();
    // getUserById(1);
    // const newUser = {
    //   "username": "mirzort",
    //   "password": "123"
    // }
    // createUser(newUser);

    updateUser('2', {
      'username': 'mirzasu',
      'password': '321'
    })    
  },[])



  return (
    <div className="App">

    </div>
  );
}

export default App;
