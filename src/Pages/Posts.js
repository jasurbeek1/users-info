import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Post ma'lumotlarini olish
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => {
        console.error('Xatolik: ', error);
      });

    // Todo ma'lumotlarini olish
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(data);
      })
      .catch(error => {
        console.error('Xatolik: ', error);
      });

    // Tasvirlarni olish
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => {
        setImages(data);
      })
      .catch(error => {
        console.error('Xatolik: ', error);
      });
  }, []);

  const handleButtonClick = (type) => {
    // Bu funksiya ma'lumotlarni chiqarish uchun
    // kerakli xizmatni bajargach chaqiriladi
    if (type === 'posts') {
      console.log(posts); // yoki chiqaring kerakli joyga
    } else if (type === 'todos') {
      console.log(todos); // yoki chiqaring kerakli joyga
    } else if (type === 'images') {
      console.log(images); // yoki chiqaring kerakli joyga
    }
  };

  return (
    <div>
      <h1>Ma'lumotlar</h1>
      <button onClick={() => handleButtonClick('posts')}>Postlar</button>
      <button onClick={() => handleButtonClick('todos')}>Todo</button>
      <button onClick={() => handleButtonClick('images')}>Tasvirlar</button>
    </div>
  );
}

export default App;
