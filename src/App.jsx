import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com/users"





function App() {
const [name,setName] = useState ('')
const [username,setUsername] = useState ('')


const  namess = async() => {
  try {
    const response = await  axios(BASE_URL)
    setName(response.data[0].name)
    setUsername(response.data[0].username)

  } catch (err) {
    console.error("code error!");
  }
}
useEffect (() => {
  namess()
},[])


  return (
   <>
   <h1>Name:{name}</h1>
   <h1>Username: {username}</h1>
   </>
  );
}

export default App;
