import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import "./components/Home.css";

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // Olingan ma'lumotlarni saqlash
        setUsers(data);
      })
      .catch(error => {
        // Xatolik holatida ishlovni boshlash
        console.error('Xatolik: ', error);
      });
  }, []);


  return (
    <BrowserRouter>

  
    
      <div className='container'>
        <h1>Users</h1>
        <ul className='cards'>
          {users.map(user => (
            <li className='card' key={user.id}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Telefon: {user.phone}</p>
              <a href="">web-site : {user.website}/</a> 

                <div className="btns">
                    <button>Todo</button>
                    <button>Post</button>
                    <button>Images</button>
                </div>  
            </li>
          ))}
        </ul>
      </div>
    



    </BrowserRouter>
  )
}

export default App