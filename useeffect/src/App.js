import { useEffect, useState } from 'react'
import './App.css';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(()=> {
    console.log('her zaman calisir')
  })

  useEffect(()=>{
    console.log('ilk render edildiginde calisir')
  },[]) // bos array verme sebebimiz yalnizca bir kez kullanilmasini istememiz

  useEffect(()=>{
    console.log('ilk render edildiginde ve firstName state degeri degistirilince calisir')
  }, [firstName])

  useEffect(()=>{
    console.log('ilk render edildiginde ve lastName state degeri degistirilince calisir')
  }, [lastName])

  return (
    <div>
      <div>
        <button onClick={()=>setFirstName("mirz")}>Change Name</button>
        <button onClick={()=>setLastName("ozc")}>Change Name</button>
      </div>
    </div>
  );
}

export default App;
