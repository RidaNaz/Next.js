"use client"
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e:any) => {
    e.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json().catch(() => null);;

    if (response.ok || !data) {
      if (data) {
        localStorage.setItem('token', data.token); // Store the token
        window.location.href = '/protected'; // Redirect to protected page
      } else {
        console.error('Data is null or undefined.'); // Handle the case where data is null or undefined
      }
    } else {
      console.error(data.error);
    }
  }

  return (
    <form onSubmit={handleLogin} className='my-20 mx-20'>
      <div>
        <label className='mx-5 '>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='text-black mx-5 rounded-md px-3'
          />
        </label>
      </div>
      <br />
      <div>
        <label className='mx-5'>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='text-black mx-5 rounded-md px-3'
          />
        </label>
      </div>
      <button className='text-white bg-black font-bold my-5 mx-5 rounded-lg px-3' type="submit">Login</button>
    </form>
  );
}